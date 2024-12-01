# -*- coding: utf-8 -*-
"""
Created on Mon Sep 20 14:51:00 2021

@author: lovro
@version 0.3.0
"""
from os.path import join
from glob import glob

# Directory = 'C:/Users/lovro/OneDrive/Pictures/Games Screens/Done'
# Directory = 'C:/Users/lovro/OneDrive/Pictures/Games Screens/Done_decals'
# Directory = 'C:/Users/lovro/OneDrive/Pictures/Games Screens/Gates'

# Prefix = ''

# Directory = 'C:/Users/lovro/OneDrive/Documents/JS/CastleHaunt2/Assets/Graphics/Sprites/Items'
# Directory = 'C:/Users/lovro/OneDrive/Documents/JS/CastleHaunt2/Assets/Graphics/Sprites/Lairs'
# Directory = 'C:/Users/lovro/OneDrive/Documents/JS/CastleHaunt2/Assets/Graphics/RotatedSheetSequences'
# Directory = 'C:/Users/lovro/OneDrive/Documents/JS/CastleHaunt2/Assets/Graphics/Textures/Wall'
# Directory = 'C:/Users/lovro/Downloads/#textures2'
# Directory = 'C:/Users/lovro/Downloads/Shield'
Directory = 'C:/Users/Uporabnik/Downloads/Converted_AI_pic'
# Directory = 'C:/Users/Uporabnik/Downloads/ObjDecals'
# Directory = 'C:/Users/Uporabnik/Downloads/Lair'
# Prefix = 'Items/'
Prefix = 'Wall/'
# Prefix = "Lights/"
# Prefix = "Lairs/"
# Prefix = "PicDecals/"
# Prefix = "ObjDecals/"

# Prefix = 'Lairs/'

# Prefix = ''
files = []
ext = ['*.png', '*.jpg']
# rotate = "count: 1, rotate: { first: 0, last: 350, step: 10 } "
# template = '{ srcName: {}, name: {} },\n'

for e in ext:
    files.extend(glob(join(Directory, e)))

files = sorted([f.split('\\')[1] for f in files])
assets = [f'{{ srcName: "{Prefix}{f}", name: "{f.split(".")[0]}"}},' for f in files]
# assets = [f'{{ srcName: "{Prefix}{f}", name: "{f.split(".")[0]}", {rotate} }},' for f in files]
assetText = "\n".join(assets)
nameText = ",".join([f'"{f.split(".")[0]}"' for f in files])
