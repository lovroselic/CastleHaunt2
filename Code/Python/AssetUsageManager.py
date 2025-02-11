# -*- coding: utf-8 -*-
"""
Created on Wed Aug 28 14:35:06 2024

@author: lovro
v 0.3.0
"""

import os
from glob import glob
import pandas as pd
import re
import time
from send2trash import send2trash

start_time = time.time()

directory = 'C:/Users/Uporabnik/Documents/JS/CastleHaunt2/Assets/Graphics'
extensions = ['*.png', '*.jpg']


asset_file = "C:/Users/Uporabnik/Documents/JS/CastleHaunt2/Assets/Definitions/CastleHaunt2/assets_CastleHaunt2.js"
map_file = "C:/Users/Uporabnik/Documents/JS/CastleHaunt2/Assets/Definitions/CastleHaunt2/MAP_CastleHaunt2.js"
monster_file = "C:/Users/Uporabnik/Documents/JS/CastleHaunt2/Assets/Definitions/CastleHaunt2/Monsters_CastleHaunt2.js"

with open(asset_file, encoding="utf8") as fh:
    asset_data = fh.read()

with open(map_file, encoding="utf8") as fh:
    map_data = fh.read()

with open(monster_file, encoding="utf8") as fh:
    monster_data = fh.read()

def search_files(directory, extensions):
    files_list = []

    for root, dirs, files in os.walk(directory):
        for ext in extensions:
            files_list.extend(glob(os.path.join(root, ext)))

    return files_list


def determine_type(path):
    if re.search(r'\\Textures\\', path):
        return 'TEXTURE'
    else:
        return 'SPRITE'


def getIndex(texture):
    matched_row = ASSETS[(ASSETS['name'] == texture) & ASSETS['Loaded']]

    if matched_row.empty:
        print(f"Warning: No match found for texture '{texture}' with Loaded = True")
        return None

    if len(matched_row) > 1:
        print(f"Warning: More than one match found for texture '{texture}' with Loaded = True")
        print(matched_row)

    index = matched_row.index[0]
    return index


def updateAssets(image):
    index = getIndex(image)
    if index is not None:
        ASSETS.at[index, 'Used'] += 1


# =============================================================================
# # main
# =============================================================================

result_files = search_files(directory, extensions)
data = []
for file in result_files:
    path, filename = os.path.split(file)
    last_directory = os.path.basename(os.path.dirname(file))
    name = os.path.splitext(filename)[0]
    file_type = determine_type(path)
    data.append([path, filename, last_directory, name, file_type, f"{file_type}.{name}"])

ASSETS = pd.DataFrame(data, columns=['path', 'filename', 'dir', 'name', 'type', "objectName"])
ASSETS["Loaded"] = False
ASSETS["Used"] = 0

# =============================================================================
# # Raw is not loaded - removed manually
# # Slides are used
# # Titles will be managed manually
# =============================================================================

dirs_to_drop = ['Raw', "Title", "Slides"]
ASSETS = ASSETS[~ASSETS['dir'].isin(dirs_to_drop)]
ASSETS.reset_index(drop=True, inplace=True)

# =============================================================================
# # loaded
# =============================================================================

for index, row in ASSETS.iterrows():
    searchItem = f"srcName: \"{row['dir']}/{row['filename']}\""
    if searchItem in asset_data:
        ASSETS.at[index, 'Loaded'] = True

        # update name
        escaped_dir = re.escape(row['dir'])
        escaped_filename = re.escape(row['filename'])
        searchName = re.compile(fr'srcName:\s*"{escaped_dir}/{escaped_filename}",\s*name:\s*"(.*)"')
        correctname = re.search(searchName, asset_data).group(1)
        ASSETS.at[index, 'name'] = correctname

# =============================================================================
# # regex
# =============================================================================

map_regex = re.compile(r'const\sMAP\s=\s{([\w\W]*)};')
container_regex = re.compile(r'containers:\s*\'(.*)\'')
movable_regex = re.compile(r'movables:\s*\'(.*)\'')
sprite_regex = re.compile(r'inventorySprite:\s*"(\w+)"')
texture_regex = re.compile(r'texture:\s*"(\w+)"')
act_regex = re.compile(r'const\s*MOVABLE_INTERACTION_OBJECT\s*=\s*{[\w\W]*?};')
item_regex = re.compile(r'const\sINTERACTION_ITEM\s=\s{([\w\W]*?)};')
itr_regex = re.compile(r'const\sINTERACTOR\s=\s{([\w\W]*?)};')
itr_sprite_regex = re.compile(r'spriteChange:\s*"(\w+)"')
itr_object_regex = re.compile(r'const\sINTERACTION_OBJECT\s=\s{([\w\W]*?)};')

# =============================================================================
# # Used - Monsters
# =============================================================================

ITEMS = re.search(item_regex, monster_data).group(1)
item_sprites = re.findall(sprite_regex, ITEMS)
for spr in item_sprites:
    updateAssets(spr)
    
# =============================================================================
# # interactors - new sprite
# =============================================================================

INTERACTORS = re.search(itr_regex, monster_data).group(1)

item_sprites = re.findall(itr_sprite_regex, INTERACTORS)
for spr in item_sprites:
    updateAssets(spr)

# =============================================================================
# # Used - MAP
# =============================================================================

MAP = re.search(map_regex, map_data).group(1).strip()
MAP = re.split(r'\n\s*\,', MAP)
ACT_MOV = re.search(act_regex, monster_data).group(0)
ITR_OBJ = re.search(itr_object_regex, monster_data).group(1)

for room in MAP:

    # textures
    for t in ["wall", "floor", "ceil"]:
        texture = re.search(re.compile(r'{}:\s\"(.*)\"'.format(t)), room).group(1)
        updateAssets(texture)

    # decal types
    for d in ["decals", "lights", "oracles", "trainers", "entities", "lairs", "interactors", "shrines"]:
        decals = re.search(re.compile(r'{}:\s*\'(.*)\''.format(d)), room)
        if decals:
            decals = decals.group(1)[1:-1]
            decals = re.split(r'\],\[', re.sub(r'^\[|\]$', '', decals))
            for image in decals:
                decal = image.split(",")[2][1:-1]
                updateAssets(decal)
    # objects
    obj = re.search(re.compile(r'objects:\s*\'(.*)\''), room)
    if obj:
        obj = obj.group(1)[1:-1]
        obj = re.split(r'\],\[', re.sub(r'^\[|\]$', '', obj))
        for N in obj:
            objName = N.split(",")[1][1:-1]
            interactionObject = re.search(re.compile(fr'{objName}:\s*\{{[\w\W]*?\}}'), ITR_OBJ).group(0)
            inventorySprite = re.search(sprite_regex, interactionObject).group(1)
            updateAssets(inventorySprite)
            objTexture = re.search(texture_regex, interactionObject).group(1)
            updateAssets(objTexture)

    # from containers
    containers = re.search(container_regex, room)
    if containers:
        containers = containers.group(1)[1:-1]
        containers = re.split(r'\],\[',  containers)
        for C in containers:
            OBJ = re.sub(r'^\[|\]$', '', C).split(",")[-2][1:-1].split(".")
            item_category = OBJ[0]
            TYPE_regex = re.compile(fr'const\s*{item_category}\s*=\s*\{{[\w\W]*?}};')
            TYPE = re.search(TYPE_regex, monster_data).group(0)
            ITEM_regex = re.compile(fr'{OBJ[1]}:\s*{{[\w\W]*?}}')
            ITEM = re.search(ITEM_regex, TYPE).group(0)
            if (item_category == "GOLD_ITEM_TYPE"):
                sprite = re.search(texture_regex, ITEM).group(1)
            elif (item_category == "INTERACTION_ITEM"):
                sprite = re.search(sprite_regex, ITEM).group(1)
            elif (item_category == "SKILL_ITEM_TYPE"):
                sprite = re.search(sprite_regex, ITEM).group(1)
            else:
                print(f"Warning: Not found: '{item_category}'")

            updateAssets(sprite)

    # movables
    movables = re.search(movable_regex, room)
    if movables:
        movables = movables.group(1)[1:-1]
        movables = re.split(r'\],\[',  movables)
        for C in movables:
            movable = re.sub(r'^\[|\]$', '', C).split(",")[-1][1:-1]
            mov_instance = re.search(re.compile(fr'{movable}:\s*{{[\w\W]*?}}'), ACT_MOV).group(0)
            sprite = re.search(sprite_regex, mov_instance).group(1)
            updateAssets(sprite)

            # has texture?
            hasTexture = re.search(texture_regex, mov_instance)
            if hasTexture:
                updateAssets(hasTexture.group(1))
                
# =============================================================================
# # deleting files which are not loaded
# =============================================================================

ASSETS['path'] = ASSETS['path'].apply(os.path.normpath)

notLoaded = ASSETS[ASSETS['Loaded'] == False]
for index, row in notLoaded.iterrows():
    file_path = os.path.join(row['path'],row['filename'])
    
    if os.path.exists(file_path): 
        #send2trash(file_path) 
        print(f"Deleting: {file_path}")
    else:
        print(f"...Not found: {file_path}")
        
# =============================================================================
# # pruning asset definitions
# =============================================================================

dirs_to_ignore = ['Doors', "Gates", "Triggers", "Scrolls", "Status", "UI", "Skills", "Keys", "Reserved", "ObjectTextures"]
ASSETS = ASSETS[~ASSETS['dir'].isin(dirs_to_ignore)]
ASSETS.sort_values(by='Used', ascending=True, inplace=True)
ASSETS.reset_index(drop=True, inplace=True)
UNUSED = ASSETS[ASSETS['Used'] == 0]

assetList = asset_data.split("\n")

unused_src_names = {f'srcName: "{row["dir"]}/{row["filename"]}",' for _, row in UNUSED.iterrows()}
filtered_asset_list = [line for line in assetList if not any(src in line for src in unused_src_names)]
cleaned_asset_data = "\n".join(filtered_asset_list)

# =============================================================================
# # export
# =============================================================================

asset_export = "C:/Users/Uporabnik/Documents/JS/CastleHaunt2/Assets/Definitions/CastleHaunt2/EXPORT_assets_CastleHaunt2.js"
with open(asset_export, "w", encoding="utf8") as fh:
    fh.write(cleaned_asset_data)

# =============================================================================
# # END
# =============================================================================

execution_time = time.time() - start_time
print(f"Total execution time: {execution_time:.2f} seconds")
