# -*- coding: utf-8 -*-
"""
Created on Wed Aug 28 14:35:06 2024

@author: lovro
"""

import os
from glob import glob
import pandas as pd
import re

directory = 'C:/Users/lovro/OneDrive/Documents/JS/CastleHaunt2/Assets/Graphics'
extensions = ['*.png', '*.jpg']


asset_file = "C:/Users/lovro/OneDrive/Documents/JS/CastleHaunt2/Assets/Definitions/CastleHaunt2/assets_CastleHaunt2.js"
map_file = "C:/Users/lovro/OneDrive/Documents/JS/CastleHaunt2/Assets/Definitions/CastleHaunt2/MAP_CastleHaunt2.js"
monster_file = "C:/Users/lovro/OneDrive/Documents/JS/CastleHaunt2/Assets/Definitions/CastleHaunt2/Monsters_CastleHaunt2.js"

with open(asset_file, encoding="utf8") as fh:
    asset_data = fh.read()

with open(map_file, encoding="utf8") as fh:
    map_data = fh.read()

with open(monster_file, encoding="utf8") as fh:
    monster_data = fh.read()


def search_dirs(directory):
    dir_list = []
    for root, dirs, files in os.walk(directory):
        dir_list.append(root)
    return dir_list


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
# # Raw is not loaded
# # SheetSequences is needed ba MazeEditor
# =============================================================================

dirs_to_drop = ['Raw', 'SheetSequences']
ASSETS = ASSETS[~ASSETS['dir'].isin(dirs_to_drop)]
ASSETS.reset_index(drop=True, inplace=True)

# =============================================================================
# # loaded
# =============================================================================

for index, row in ASSETS.iterrows():
    searchItem = f"srcName: \"{row['dir']}/{row['filename']}\""
    if searchItem in asset_data:
        ASSETS.at[index, 'Loaded'] = True

# =============================================================================
# # Used - MAP
# =============================================================================

map_regex = re.compile(r'const\sMAP\s=\s{([\w\W]*)};')
decal_regex = re.compile(r'decals:\s*\'(.*)\'')
MAP = re.search(map_regex, map_data).group(1).strip()
MAP = re.split(r'\n\s*\,', MAP)

for room in MAP:
    for t in ["wall", "floor", "ceil"]:
        texture = re.search(re.compile(r'{}:\s\"(.*)\"'.format(t)), room).group(1)
        print(texture)
