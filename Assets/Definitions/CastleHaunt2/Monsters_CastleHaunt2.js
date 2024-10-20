/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */

/**
 * definition of:
 *      monsters
 *      scrolls
 *      other item types
 */

"use strict";
console.log("%cMonsters for CastleHaunt2 loaded.", "color: #888");

const GATE_TYPES = ["Open", "Closed", "Gold", "Silver", "Red", "Green", "Blue", "Up", "Down", "Emerald", "Purple", "Pearl"];
const KEY_TYPES = ["Gold", "Silver", "Red", "Green", "Blue", "Emerald", "Purple", "Pearl"];
const KEY_TEXTURES = ["Gold", "Silver", "RedMetal", "GreenMetal", "BlueMetal", "EmeraldTexture", "PurpleMetal", "PearlTexture"];
const KEY_MATERIAL = ["gold", "silver", "redShine", "greenShine", "blueShine", "standard", "standard", "whiteShine"];
const KEY_TYPE = {};

for (let [index, key] of KEY_TYPES.entries()) {
    KEY_TYPE[key] = new KeyTypeDefinition(key, `${key}Key`, key, KEY_TEXTURES[index], MATERIAL[KEY_MATERIAL[index]]);
}

const SCROLL_TYPE = ["Light", "Invisibility", "DrainMana", "Cripple", "BoostWeapon", "BoostArmor", "DestroyArmor", "DestroyWeapon",
    "Petrify", "MagicBoost", "Luck", "HalfLife", "Explode", "Radar"];

const SHRINE_TYPE = {
    KickShrine: {
        name: "KickShrine",
        sprite: "KickShrine",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 1000,
        level: 1,
    },
    FireballShrine1: {
        name: "FireballShrine1",
        sprite: "FireballShrine1",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 1000,
        level: 1,
    },
    FireballShrine2: {
        name: "FireballShrine2",
        sprite: "FireballShrine2",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 1000,
        level: 1,
    },
    KungfuShrine: {
        name: "KungfuShrine",
        sprite: "KungfuShrine",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 1000,
        level: 1,
    },
    FireballShrine3: {
        name: "FireballShrine3",
        sprite: "FireballShrine3",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 1500,
        level: 1,
    },
    PrincessSword: {
        name: "PrincessSword",
        sprite: "PrincessSword",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 1500,
        level: 1,
    },
    Princess2Heart: {
        name: "Princess2Heart",
        sprite: "Princess2Heart",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 1500,
        level: 2,
    },
    PrinccessForestHealth: {
        name: "PrinccessForestHealth",
        sprite: "PrinccessForestHealth",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 2000,
        level: 1,
    },
    ScrollSell_Explode: {
        name: "ScrollSell_Explode",
        sprite: "ScrollSell_Explode",
        which: "Explode",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 2500,
        voice: "Female",
        text: "Explode scroll - 2500 gold"
    },
    PrincessHealthMountain: {
        name: "PrincessHealthMountain",
        sprite: "PrincessHealthMountain",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 3000,
        level: 1,
    },
    PrincessHammer: {
        name: "PrincessHammer",
        sprite: "PrincessHammer",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 3000,
        level: 2,
    },
    PrincessBomb: {
        name: "PrincessBomb",
        sprite: "PrincessBomb",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 3000,
        level: 2,
    },
    PrincessMace: {
        name: "PrincessMace",
        sprite: "PrincessMace",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 3000,
        level: 2,
    },
    PrincessPineHeart: {
        name: "PrincessPineHeart",
        sprite: "PrincessPineHeart",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 3000,
        level: 1,
    },
    PrincessFlame: {
        name: "PrincessFlame",
        sprite: "PrincessFlame",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 3000,
        level: 2,
    },
};

const ORACLE_TYPE = {
    RuberellaInventory: {
        name: "RuberellaInventory",
        sprite: "RuberellaInventory",
        category: 'crest',
        voice: "Female",
        text: "Be mindful of your inventory space. I hope your pockets are bigger then mine.",
        interactionCategory: "oracle",
    },
    HornySitting: {
        name: "HornySitting",
        sprite: "HornySitting",
        category: 'crest',
        voice: "Female2",
        text: "I hope by now, you realized that by changing view you can find hidden rooms?",
        interactionCategory: "oracle",
    },
    StepLibrarian: {
        name: "StepLibrarian",
        sprite: "StepLibrarian",
        category: 'crest',
        voice: "Female",
        text: "I'm just sitting here looking pretty.",
        interactionCategory: "oracle",
    },
    PrincessBed: {
        name: "PrincessBed",
        sprite: "PrincessBed",
        category: 'crest',
        voice: "Princess",
        text: "Yes, this is my bed, but I do not have time to sleep now.",
        interactionCategory: "oracle",
        price: 0,
    },
    ApparitiaResistance: {
        name: "ApparitiaResistance",
        sprite: "ApparitiaResistance",
        category: 'crest',
        voice: "Apparitia",
        text: "We have claimed your castle in the name of her haungtingness, Hauntessa Spookish, the great haunteress from the Hauntosphere.",
        interactionCategory: "oracle",
    },
    ApparitiaWelcome: {
        name: "ApparitiaWelcome",
        sprite: "ApparitiaWelcome",
        category: 'crest',
        voice: "Apparitia",
        text: "Welcome to your doom, Princess. We will haunt you down and revenge the death of GhostFace, the mother of Hauntessa Spookish.",
        interactionCategory: "oracle",
    },
    Pinka: {
        name: "Pinka",
        sprite: "Pinka",
        category: 'crest',
        voice: "Female",
        text: "Hey, Princess. You are our only hope. Don't get caught. Go quickly to the armory and equip yourself.",
        interactionCategory: "oracle",
    },
    Azura: {
        name: "Azura",
        sprite: "Azura",
        category: 'crest',
        voice: "Female2",
        text: "Princess, teriblle thing happened. Hauntessa Spookish invaded your castle and stole your crown. You better find some allies and take it back. Or else.",
        interactionCategory: "oracle",
    },
    DarkEva: {
        name: "DarkEva",
        sprite: "DarkEva",
        category: 'crest',
        voice: "Female2",
        text: "The more you upgrade your bag, more ghost repelling orbs you can carry. And don't lose the orbs! Your survival depends on it.",
        interactionCategory: "oracle",
    },
    WhiteRubberella: {
        name: "WhiteRubberella",
        sprite: "WhiteRubberella",
        category: 'crest',
        voice: "Female2",
        text: "Did you realized that it is a good practice to catch your own orbs? And not lose them? A secret of staying alive.",
        interactionCategory: "oracle",
    },
    BlueHairResting: {
        name: "BlueHairResting",
        sprite: "BlueHairResting",
        category: 'crest',
        voice: "Female",
        text: "Ready?",
        interactionCategory: "oracle",
    },
    ApparitiaDie: {
        name: "ApparitiaDie",
        sprite: "ApparitiaDie",
        category: 'crest',
        voice: "Apparitia",
        text: "Now you die, bitch!",
        interactionCategory: "oracle",
    },
    RedRubberella: {
        name: "RedRubberella",
        sprite: "RedRubberella",
        category: 'crest',
        voice: "Female2",
        text: "You can shoot down princess repelling green orbs with your ghost repelling fire orbs. Got it?",
        interactionCategory: "oracle",
    },
    CuteBlackRuberrella: {
        name: "CuteBlackRuberrella",
        sprite: "CuteBlackRuberrella",
        category: 'crest',
        voice: "Female2",
        text: "All orbs bounce. More power longer bouncing. Longer bouncing less damage.",
        interactionCategory: "oracle",
    },
    HealthAdvisor: {
        name: "HealthAdvisor",
        sprite: "HealthAdvisor",
        category: 'crest',
        voice: "Female2",
        text: "If you don't want to get trasparent, you should eat some cake. That will make you more full, fool.",
        interactionCategory: "oracle",
    },
    WhereDoYouWantToStart: {
        name: "WhereDoYouWantToStart",
        sprite: "WhereDoYouWantToStart",
        category: 'crest',
        voice: "Female2",
        text: "Don't stand in front of lair portal. Enemy monster can emerge any moment.",
        interactionCategory: "oracle",
    },
    WallSitter: {
        name: "WallSitter",
        sprite: "WallSitter",
        category: 'crest',
        voice: "Female2",
        text: "Sometime upgrading health later will save your life. Don't rush.",
        interactionCategory: "oracle",
    },
    Rodelle1: {
        name: "Rodelle1",
        sprite: "Rodelle1",
        category: 'crest',
        voice: "Female2",
        text: "Shrines will heal you and raise your skills. For a price. Once. You will not find enough gold for all the shrines.",
        interactionCategory: "oracle",
    },
    Rodelle2: {
        name: "Rodelle2",
        sprite: "Rodelle2",
        category: 'crest',
        voice: "Female2",
        text: "When you are cornered and orbless, only hard kicks with your heels will save you. Don't forget that.",
        interactionCategory: "oracle",
    },
    CorridorBlocker: {
        name: "CorridorBlocker",
        sprite: "CorridorBlocker",
        category: 'crest',
        voice: "Female",
        text: "It is time you start paying attention and collect items other castle dwellers need. It's the only way they will help you.",
        interactionCategory: "oracle",
    },
    BlackWidow: {
        name: "BlackWidow",
        sprite: "BlackWidow",
        category: 'crest',
        voice: "Female",
        text: "Remember me? I was in the Curse of the Castle Creep.",
        interactionCategory: "oracle",
    },
    SpideressOracle: {
        name: "SpideressOracle",
        sprite: "SpideressOracle",
        category: 'crest',
        voice: "Female2",
        text: "Check the floors for the little critters which are running around.",
        interactionCategory: "oracle",
    },
    PinkCoat: {
        name: "PinkCoat",
        sprite: "PinkCoat",
        category: 'crest',
        voice: "Female2",
        text: "Check the walls for hidden triggers or you can miss secret dungeons.",
        interactionCategory: "oracle",
    },
    AuburnDomme: {
        name: "AuburnDomme",
        sprite: "AuburnDomme",
        category: 'crest',
        voice: "Female2",
        text: "Exploration pays. It is a foundation for your survival.",
        interactionCategory: "oracle",
    },
    ApparitiaPale: {
        name: "ApparitiaPale",
        sprite: "ApparitiaPale",
        category: 'crest',
        voice: "Apparitia",
        text: "Not only we will take your castle, but we will also set new beauty standards. Pale, white and transparent is a new black.",
        interactionCategory: "oracle",
    },
    ApparitiaHaunt: {
        name: "ApparitiaHaunt",
        sprite: "ApparitiaHaunt",
        category: 'crest',
        voice: "Apparitia",
        text: "I will hunt you. I will hount you. I will spook you. Everywhere.",
        interactionCategory: "oracle",
    },
    ApparitiaHaunt2: {
        name: "ApparitiaHaunt2",
        sprite: "ApparitiaHaunt2",
        category: 'crest',
        voice: "Apparitia",
        text: "Feeling haunted yet? Are you spooked?",
        interactionCategory: "oracle",
    },
    PinkLadyOnWhiteRug: {
        name: "PinkLadyOnWhiteRug",
        sprite: "PinkLadyOnWhiteRug",
        category: 'crest',
        voice: "Female2",
        text: "Remember the lesson about checking things carefully?",
        interactionCategory: "oracle",
    },
    ApparitiaPrice: {
        name: "ApparitiaPrice",
        sprite: "ApparitiaPrice",
        category: 'crest',
        voice: "Apparitia",
        text: "I made them raise the price for you, just for you. Ahahahaha.",
        interactionCategory: "oracle",
    },
    ApparitiaHopsasa: {
        name: "ApparitiaHopsasa",
        sprite: "ApparitiaHopsasa",
        category: 'crest',
        voice: "Apparitia",
        text: "Tralala hopsasa.",
        interactionCategory: "oracle",
    },
    AmazingOne: {
        name: "AmazingOne",
        sprite: "AmazingOne",
        category: 'crest',
        voice: "Female2",
        text: "I am the Amazing One. I do nothing.",
        interactionCategory: "oracle",
    },
    Archie: {
        name: "Archie",
        sprite: "Archie",
        category: 'crest',
        voice: "Female",
        text: "Explorers are rewarded.",
        interactionCategory: "oracle",
    },
    ApparitiaSkull: {
        name: "ApparitiaSkull",
        sprite: "ApparitiaSkull",
        category: 'crest',
        voice: "Apparitia",
        text: "Searching for skulls? You will not have mine.",
        interactionCategory: "oracle",
    },
    BlueLiar: {
        name: "BlueLiar",
        sprite: "BlueLiar",
        category: 'crest',
        voice: "Female2",
        text: "I Think Wolfie wants to kill Red Riding Hood for revenge. But since I did not play The Curse of the Castle Creep I don't know why.",
        interactionCategory: "oracle",
    },
    CouchDomme: {
        name: "CouchDomme",
        sprite: "CouchDomme",
        category: 'crest',
        voice: "Female",
        text: "Did you know Red Riding Hood wanted to poison Wolfie in the Curse of the Castle Creep?",
        interactionCategory: "oracle",
    },
    Lacy: {
        name: "Lacy",
        sprite: "Lacy",
        category: 'crest',
        voice: "Female",
        text: "Killing a weak monster just improves the chance of spawning a more powerful one.",
        interactionCategory: "oracle",
    },
    ApparitiaDead: {
        name: "ApparitiaDead",
        sprite: "ApparitiaDead",
        category: 'crest',
        voice: "Apparitia",
        text: "Why are you not dead yet?",
        interactionCategory: "oracle",
    },
    ApparitiaCute: {
        name: "ApparitiaCute",
        sprite: "ApparitiaCute",
        category: 'crest',
        voice: "Apparitia",
        text: "We are coming for you, Princess. You can't hide.",
        interactionCategory: "oracle",
    },
    ApparitiaTease: {
        name: "ApparitiaTease",
        sprite: "ApparitiaTease",
        category: 'crest',
        voice: "Apparitia",
        text: "I hope you are broke already.",
        interactionCategory: "oracle",
    },
    RedDress: {
        name: "RedDress",
        sprite: "RedDress",
        category: 'crest',
        voice: "Female",
        text: "I hope you have saved some gold for situations like this?",
        interactionCategory: "oracle",
    },
    GreenScene: {
        name: "GreenScene",
        sprite: "GreenScene",
        category: 'crest',
        voice: "Female",
        text: "The key is probably carried by someone.",
        interactionCategory: "oracle",
    },
    ApparitiaKey: {
        name: "ApparitiaKey",
        sprite: "ApparitiaKey",
        category: 'crest',
        voice: "Apparitia",
        text: "You will never find it. It's hidden so well. You will be stuck here.",
        interactionCategory: "oracle",
    },
    SaveGameOracle: {
        name: "SaveGameOracle",
        sprite: "SaveGameOracle",
        category: 'crest',
        voice: "Female2",
        text: "There must be some kind of way forward. Think. Search. Explore.",
        interactionCategory: "oracle",
    },
    ApparitiaBlock: {
        name: "ApparitiaBlock",
        sprite: "ApparitiaBlock",
        category: 'crest',
        voice: "Apparitia",
        text: "I've sealed off the passage. Ahahahaha! What will you do now?",
        interactionCategory: "oracle",
    },
    JapananeseMistress: {
        name: "JapananeseMistress",
        sprite: "JapananeseMistress",
        category: 'crest',
        voice: "Female",
        text: "One is sufficient, if you position it properly, you know? ",
        interactionCategory: "oracle",
    },
    Bomber: {
        name: "Bomber",
        sprite: "Bomber",
        category: 'crest',
        voice: "Female",
        text: "If the wall is in my way, I just blow it up. How about you?",
        interactionCategory: "oracle",
    },
    Kneel: {
        name: "Kneel",
        sprite: "Kneel",
        category: 'crest',
        voice: "Female",
        text: "You can please only one, so choose wisely.",
        interactionCategory: "oracle",
    },
    Bathy: {
        name: "Bathy",
        sprite: "Bathy",
        category: 'crest',
        voice: "Female",
        text: "I am resting, saving my strength for the Curse of the Castle Creep 2. Do you think it will be made?",
        interactionCategory: "oracle",
    },
    Maid: {
        name: "Maid",
        sprite: "Maid",
        category: 'crest',
        voice: "Female",
        text: "Keep the castle clean at all times. By orders of the Princes... Oh, it's you.",
        interactionCategory: "oracle",
    },
    ApparitiaDoom: {
        name: "ApparitiaDoom",
        sprite: "ApparitiaDoom",
        category: 'crest',
        voice: "Apparitia",
        text: "You are doomed. You will never solved this.",
        interactionCategory: "oracle",
    },
    ApparitiaWet: {
        name: "ApparitiaWet",
        sprite: "ApparitiaWet",
        category: 'crest',
        voice: "Apparitia",
        text: "Drown bitch! Hauntessa Spookish demands it.",
        interactionCategory: "oracle",
    },
    SquirrelAfraid: {
        name: "SquirrelAfraid",
        sprite: "SquirrelAfraid",
        category: 'crest',
        voice: "Female",
        text: "The forrest is dark and full of terrors.",
        interactionCategory: "oracle",
    },
    Dirndl: {
        name: "Dirndl",
        sprite: "Dirndl",
        category: 'crest',
        voice: "Female2",
        text: "Gesundheit. Na zdravje. Cheers. Prost. Slantje.",
        interactionCategory: "oracle",
    },
    Brownie: {
        name: "Brownie",
        sprite: "Brownie",
        category: 'crest',
        voice: "Female",
        text: "Did you notice how with the more power, your fire orbs are harder to catch? And find? Be careful.",
        interactionCategory: "oracle",
    },
    Kim: {
        name: "Kim",
        sprite: "Kim",
        category: 'crest',
        voice: "Female",
        text: "You see? Without exploration you can go thirsty.",
        interactionCategory: "oracle",
    },
    RedheadSittingDomme: {
        name: "RedheadSittingDomme",
        sprite: "RedheadSittingDomme",
        category: 'crest',
        voice: "Female",
        text: "You should be very grateful for this upgrade. Don't lose the orbs!",
        interactionCategory: "oracle",
    },
    ApparitiaFun: {
        name: "ApparitiaFun",
        sprite: "ApparitiaFun",
        category: 'crest',
        voice: "Apparitia",
        text: "Are you having fun yet? We certainly do. Hehehehehe.",
        interactionCategory: "oracle",
    },
    ApparitiaGrin: {
        name: "ApparitiaGrin",
        sprite: "ApparitiaGrin",
        category: 'crest',
        voice: "Apparitia",
        text: "We are building such nice traps for you, hahahaha.",
        interactionCategory: "oracle",
    },
    ApparitiaEyes: {
        name: "ApparitiaEyes",
        sprite: "ApparitiaEyes",
        category: 'crest',
        voice: "Apparitia",
        text: "By orders of her majesty, Hauntessa Spookish - lie down and die.",
        interactionCategory: "oracle",
    },
    ApparitiaSheep: {
        name: "ApparitiaSheep",
        sprite: "ApparitiaSheep",
        category: 'crest',
        voice: "Apparitia",
        text: "I made all the sheep go wild and princessvore. Hohohoho.",
        interactionCategory: "oracle",
    },
    ApparitiaBored: {
        name: "ApparitiaBored",
        sprite: "ApparitiaBored",
        category: 'crest',
        voice: "Apparitia",
        text: "I am bored of your incompetence Princess. You are letting us win to easy.",
        interactionCategory: "oracle",
    },
    ApparitiaFashion: {
        name: "ApparitiaFashion",
        sprite: "ApparitiaFashion",
        category: 'crest',
        voice: "Apparitia",
        text: "What a boring fashion in your world, Princess. Colors, diversity and whatnot. Everything should be white!",
        interactionCategory: "oracle",
    },
    ApparitiaWhite: {
        name: "ApparitiaWhite",
        sprite: "ApparitiaWhite",
        category: 'crest',
        voice: "Apparitia",
        text: "White is the new white.",
        interactionCategory: "oracle",
    },
};

const GOLD_ITEM_TYPE = {
    GoldBar: {
        name: "GoldBar",
        category: "gold",
        element: "BAR",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "Gold",
        minVal: 50,
        maxVal: 100,
        value: 100,
        material: MATERIAL.gold,
    },
    SilverBar: {
        name: "SilverBar",
        category: "gold",
        element: "BAR",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "Silver",
        minVal: 25,
        maxVal: 50,
        value: 50,
        material: MATERIAL.silver,
    },
    GoldCube: {
        name: "GoldCube",
        category: "gold",
        element: "CUBE_CENTERED",
        scale: 1 / 2 ** 5,
        glueToFloor: true,
        texture: "Gold",
        minVal: 10,
        maxVal: 25,
        value: 25,
        material: MATERIAL.gold,
    },
    Coins: {
        name: "Coins",
        category: "gold",
        element: "COINS",
        scale: 1.5 / 2 ** 0,
        glueToFloor: true,
        texture: "Coins",
        minVal: 10,
        maxVal: 25,
        value: 10,
        material: MATERIAL.gold,
    },
    RedGem: {
        name: "RedGem",
        category: "gold",
        element: "GEM",
        scale: 1.1 / 2 ** 4,
        glueToFloor: true,
        texture: "Red",
        minVal: 100,
        maxVal: 250,
        value: 250,
        material: MATERIAL.standard,
    },
    GreenGem: {
        name: "GreenGem",
        category: "gold",
        element: "GEM",
        scale: 1.1 / 2 ** 4,
        glueToFloor: true,
        texture: "GreenMetal",
        minVal: 250,
        maxVal: 500,
        value: 500,
        material: MATERIAL.standard,
    },
};

const SKILL_ITEM_TYPE = {
    Magic: {
        name: "Magic",
        category: "skill",
        which: "magic",
        element: "PENTAGRAM",
        scale: 1 / 2 ** 1,
        glueToFloor: true,
        texture: "Red2",
        inventorySprite: "SkillFireball",
        material: MATERIAL.redShine,
    },
    Attack: {
        name: "Attack",
        category: "skill",
        which: "attack",
        element: "STING",
        scale: 1 / 2 ** 1,
        glueToFloor: true,
        texture: "Sting",
        inventorySprite: "SkillKick",
        material: MATERIAL.silver,
    },
    Heart: {
        name: "Heart",
        category: "status",
        which: "health",
        element: "HEART",
        scale: 1 / 2 ** 5,
        glueToFloor: true,
        texture: "Red",
        inventorySprite: "HeartSkill",
        material: MATERIAL.redShine,
    },
};

const CONTAINER_ITEM_TYPE = {
    Chest: {
        name: "Chest",
        category: "chest",
        element: "CHEST",
        scale: 1 / 2 ** 3,
        glueToFloor: true,
        texture: "WoodTexture",
        material: MATERIAL.standard,
        rotateToNorth: Math.PI / 2,
    },
    TreasureChest: {
        name: "TreasureChest",
        category: "chest",
        element: "TREASURE_CHEST",
        scale: 1.5 / 2 ** 3,
        glueToFloor: true,
        texture: "TreasureChest",
        material: MATERIAL.standard,
        rotateToNorth: 0,
    },
    Wardrobe: {
        name: "Wardrobe",
        category: "chest",
        element: "WARDROBE",
        scale: 1.23 / 2 ** 2,
        glueToFloor: true,
        texture: "Wardrobe",
        material: MATERIAL.standard,
        rotateToNorth: Math.PI,
    },
    Barrel: {
        name: "Barrel",
        category: "chest",
        element: "BARREL",
        scale: 1.15 / 2 ** 1,
        glueToFloor: true,
        texture: "Barrel",
        material: MATERIAL.standard,
        rotateToNorth: 0,
    },
    Crate: {
        name: "Crate",
        category: "chest",
        element: "CRATE",
        scale: 1.25 / 2 ** 3,
        glueToFloor: true,
        texture: "Crate",
        material: MATERIAL.standard,
        rotateToNorth: 0,
    },
    Closet: {
        name: "Closet",
        category: "chest",
        element: "CLOSET",
        scale: 1.75 / 2 ** 1,
        glueToFloor: true,
        texture: "Closet",
        material: MATERIAL.standard,
        rotateToNorth: Math.PI,
    },
    BookShelf: {
        name: "BookShelf",
        category: "chest",
        element: "BOOKSHELF",
        scale: 1.4 / 2 ** 5,
        glueToFloor: true,
        texture: "BookShelf",
        material: MATERIAL.standard,
        rotateToNorth: 0,
    },
    PirateChest: {
        name: "PirateChest",
        category: "chest",
        element: "PIRATE_CHEST",
        scale: 1.0 / 2 ** 3,
        glueToFloor: true,
        texture: "PirateChest",
        material: MATERIAL.standard,
        rotateToNorth: Math.PI,
    },
    PlainCloset: {
        name: "PlainCloset",
        category: "chest",
        element: "CLOSET4",
        scale: 1.2 / 2 ** 2,
        glueToFloor: true,
        texture: "Closet4",
        material: MATERIAL.standard,
        rotateToNorth: 0,
    },
    IronChest: {
        name: "IronChest",
        category: "chest",
        element: "IRON_CHEST",
        scale: 1.2 / 2 ** 2,
        glueToFloor: true,
        texture: "IronChest",
        material: MATERIAL.silver,
        rotateToNorth: Math.PI,
    }
};

const DOOR_TYPE = {
    Common: {
        name: "Common",
        color: null,
        locked: false,
        texture: "WoodenGate1",
        element: "CUBE_SM",
        material: MATERIAL.standardShine,
    },
};

const COMMON_ITEM_TYPE = {
    Bounceball: {
        name: "Bounceball",
        category: 'missile',
        element: "BALL",
        scale: 1.5 / 2 ** 4,
        texture: "GreenMetal",
        moveSpeed: 8.0,
        lightColor: "#006600",
        material: MATERIAL.greenFluence,
        construct: BouncingMissile,
        collectible: false,
    },
    Orb: {
        name: "Orb",
        category: 'missile',
        element: "BALL",
        scale: 1.9 / 2 ** 5,
        texture: "FireballTexture",
        moveSpeed: 8.0,
        lightColor: "#FF7700",
        material: MATERIAL.fire,
        construct: BouncingMissile,
        collectible: true,
    },
    Scroll: {
        name: "Scroll",
        category: "scroll",
        element: "SCROLL",
        scale: 1.5 / 2 ** 4,
        glueToFloor: true,
        texture: "ScrollTexture",
        material: MATERIAL.paper,
    },
};

const MONSTER_TYPE = {
    Bat: {
        name: "Bat",
        model: "Bat",
        scale: 1.2 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.0,
        fly: 0.5,
        deathType: "SmokeExplosion",
        inventory: null,
        mana: 0,
        health: 2,
        attack: 1,
        magic: 0,
        defense: 0,
        directMagicDamage: true,
        attackSound: "BatAttack",
        hurtSound: "BatAttack",
        behaviourArguments: [Infinity, ["wanderer"], -1],
        moveSpeed: 1.0,
        material: MATERIAL.standard,
    },
    RedGoldBat: {
        name: "RedGoldBat",
        texture: "RedGoldBat",
        model: "Bat",
        scale: 1.2 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.0,
        fly: 0.5,
        deathType: "SmokeExplosion",
        inventory: null,
        mana: 0,
        health: 4,
        attack: 2,
        magic: 0,
        defense: 0,
        directMagicDamage: true,
        attackSound: "BatAttack",
        hurtSound: "BatAttack",
        behaviourArguments: [Infinity, ["wanderer"], -1],
        moveSpeed: 1.0,
        material: MATERIAL.redShine,
    },
    Spider: {
        name: "Spider",
        model: "Spider",
        scale: 1.4 / 2 ** 6,
        rotateToNorth: Math.PI,
        midHeight: 0.35,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 10,
        attack: 4,
        magic: 0,
        defense: 0,
        directMagicDamage: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [5, ["wanderer"], 3, ["follower"]],
        moveSpeed: 1.0,
        material: MATERIAL.standard,
    },
    SpiderGreen: {
        name: "SpiderGreen",
        texture: "SpiderGreen",
        model: "Spider",
        scale: 1.4 / 2 ** 6,
        rotateToNorth: Math.PI,
        midHeight: 0.35,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 20,
        attack: 12,
        magic: 0,
        defense: 0,
        directMagicDamage: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [7, ["wanderer"], 3, ["follower"]],
        moveSpeed: 1.1,
        material: MATERIAL.standard,
    },
    Wolf: {
        name: "Wolf",
        model: "Wolf",
        scale: 1.7 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 20,
        attack: 8,
        magic: 0,
        defense: 0,
        directMagicDamage: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt3",
        behaviourArguments: [10, ["wanderer"], 5, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.standard,
    },
    MissGalaxy: {
        name: "MissGalaxy",
        model: "MissGalaxy",
        scale: 0.9 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        //
        mana: 5,
        health: 10,
        attack: 8,
        magic: 1,
        defense: 0,
        directMagicDamage: true,
        //
        caster: true,
        shootDistance: 5,
        stalkDistance: 7,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [7, ["wanderer"], 5, ["shoot"]],
        moveSpeed: 1.0,
        material: MATERIAL.standardShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    MissGalaxyGreen: {
        name: "MissGalaxyGreen",
        texture: "MissGalaxyGreen",
        model: "MissGalaxy",
        scale: 0.8 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        //
        mana: 6,
        health: 15,
        attack: 12,
        magic: 2,
        defense: 0,
        directMagicDamage: true,
        //
        caster: true,
        shootDistance: 6,
        stalkDistance: 8,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [8, ["wanderer"], 6, ["shoot"]],
        moveSpeed: 1.1,
        material: MATERIAL.standardShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    MissGalaxyGold: {
        name: "MissGalaxyGold",
        texture: "MissGalaxyGold",
        model: "MissGalaxy",
        scale: 1.1 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        gold: 25,
        //
        mana: 8,
        health: 25,
        attack: 20,
        magic: 3,
        defense: 0,
        directMagicDamage: true,
        //
        caster: true,
        shootDistance: 6,
        stalkDistance: 8,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [8, ["wanderer"], 6, ["shoot"]],
        moveSpeed: 1.0,
        material: MATERIAL.gold,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    MissGalaxyGold_Boss: {
        name: "MissGalaxyGold_Boss",
        texture: "MissGalaxyGold",
        model: "MissGalaxy",
        scale: 1.1 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: KEY_TYPE.Gold,
        //
        mana: 16,
        health: 50,
        attack: 50,
        magic: 5,
        defense: 0,
        directMagicDamage: true,
        //
        caster: true,
        shootDistance: 10,
        stalkDistance: 11,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [10, ["wanderer"], 11, ["shoot"]],
        moveSpeed: 1.0,
        material: MATERIAL.gold,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    Goblin: {
        name: "Goblin",
        model: "Goblin",
        scale: 1.01 / 2 ** 1,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        //
        mana: 7,
        health: 20,
        attack: 16,
        magic: 2,
        defense: 0,
        directMagicDamage: true,
        //
        caster: true,
        shootDistance: 7,
        stalkDistance: 8,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [10, ["wanderer"], 7, ["shoot"]],
        moveSpeed: 1.0,
        material: MATERIAL.standard,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    AngrySheep: {
        name: "AngrySheep",
        model: "Sheep",
        scale: 1.5 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 0,
        health: 5,
        attack: 50,
        magic: 0,
        defense: 0,
        directMagicDamage: true,
        attackSound: "Sheep",
        hurtSound: "PainSqueek",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.0,
        material: MATERIAL.standard,
    },
    GhostMinion: {
        name: "GhostMinion",
        model: "GhostFace",
        scale: 1.82 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 10,
        health: 30,
        attack: 25,
        magic: 4,
        defense: 0,
        shootDistance: 12,
        stalkDistance: 5,
        directMagicDamage: true,
        caster: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [15, ["wanderer"], 12, ["shoot"]],
        moveSpeed: 1.0,
        material: MATERIAL.standard,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },

    /** */






    /** backup */

    MissGreen: {
        name: "MissGreen",
        texture: "GhostFaceGreen",
        model: "MissWhite",
        scale: 1.5 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 9,
        defense: 3,
        magic: 8,
        health: 10,
        xp: 25,
        gold: 25,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [10, ["wanderer"], 7, ["shoot"]],
        moveSpeed: 1.0,
        mana: 3,
        caster: true,
        shootDistance: 7,
        stalkDistance: 5,
        material: MATERIAL.greenShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },


    MissWhite: {
        name: "MissWhite",
        model: "MissWhite",
        scale: 1.6 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 15,
        defense: 7,
        magic: 10,
        health: 15,
        xp: 40,
        gold: 50,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [12, ["wanderer"], 10, ["shoot"]],
        moveSpeed: 1.0,
        mana: 3,
        caster: true,
        shootDistance: 10,
        stalkDistance: 3,
        material: MATERIAL.standard,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.Fireball,
    },

    Viking: {
        name: "Viking",
        model: "Viking",
        scale: 0.9 / 2 ** 8,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 20,
        defense: 10,
        magic: 5,
        health: 25,
        xp: 30,
        gold: 30,
        attackSound: "HumanAttack1",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [7, ["wanderer"], 4, ["advancer"]],
        moveSpeed: 1.0,
        material: MATERIAL.standard,
    },


    Astro: {
        name: "Astro",
        model: "Astro",
        scale: 1.5 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 24,
        defense: 18,
        magic: 15,
        health: 35,
        xp: 40,
        gold: 40,
        attackSound: "HumanAttack1",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [7, ["wanderer"], 5, ["shoot"]],
        moveSpeed: 1.0,
        mana: 2,
        caster: true,
        shootDistance: 5,
        stalkDistance: 6,
        material: MATERIAL.standard,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.Fireball,
    },
    AstroRed: {
        name: "AstroRed",
        texture: "AstroRed",
        model: "Astro",
        scale: 1.7 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 25,
        defense: 18,
        magic: 16,
        health: 42,
        xp: 50,
        gold: 50,
        attackSound: "HumanAttack1",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [7, ["wanderer"], 5, ["shoot"]],
        moveSpeed: 1.0,
        mana: 3,
        caster: true,
        shootDistance: 5,
        stalkDistance: 6,
        material: MATERIAL.redShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    GhostMinionGreen: {
        name: "GhostMinionGreen",
        texture: "GhostFaceGreen",
        model: "GhostFace",
        scale: 1.82 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 25,
        defense: 15,
        magic: 20,
        health: 40,
        xp: 60,
        gold: 50,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [15, ["wanderer"], 12, ["shoot"]],
        moveSpeed: 1.05,
        mana: 3,
        caster: true,
        shootDistance: 12,
        stalkDistance: 5,
        material: MATERIAL.standard,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    GhostMinionGreen2: {
        name: "GhostMinionGreen2",
        texture: "GhostFaceGreen",
        model: "GhostFace",
        scale: 1.82 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 25,
        defense: 15,
        magic: 20,
        health: 40,
        xp: 60,
        gold: 50,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [15, ["wanderer"], 12, ["shoot"]],
        moveSpeed: 1.05,
        mana: 3,
        caster: true,
        shootDistance: 12,
        stalkDistance: 5,
        material: MATERIAL.standard,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.Fireball,
    },
    GreatChick: {
        name: "GreatChick",
        model: "Chicken",
        scale: 1 / 2 ** 5,
        rotateToNorth: -Math.PI / 2,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 50,
        defense: 0,
        magic: 0,
        health: 50,
        xp: 25,
        gold: 1,
        attackSound: "MonsterAttack1",
        hurtSound: "PainSqueek",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.2,
        material: MATERIAL.standard,
    },
    GreatCat: {
        name: "GreatCat",
        model: "Cat",
        scale: 1.7 / 2 ** 7,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 60,
        defense: 0,
        magic: 0,
        health: 60,
        xp: 30,
        gold: 1,
        attackSound: "AngryCat",
        hurtSound: "PainSqueek",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.2,
        material: MATERIAL.standard,
    },
    Skeleton: {
        name: "WhiteSkeleton",
        model: "Skeleton",
        scale: 1.8 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "SmokeExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 30,
        defense: 20,
        magic: 20,
        health: 45,
        xp: 75,
        gold: 75,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.standardShine,
    },
    RedSkeleton: {
        name: "RedSkeleton",
        texture: "Red2",
        model: "Skeleton",
        scale: 1.8 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "SmokeExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 35,
        defense: 25,
        magic: 20,
        health: 50,
        xp: 80,
        gold: 80,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.redShine,
    },
    SilverSkeleton: {
        name: "SilverSkeleton",
        texture: "Silver",
        model: "Skeleton",
        scale: 1.8 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "SmokeExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 38,
        defense: 28,
        magic: 20,
        health: 50,
        xp: 90,
        gold: 90,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.silver,
    },

    Dragon: {
        name: "Dragon",
        model: "Dragon",
        scale: 1.9 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.25,
        fly: 0.25,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 37,
        defense: 30,
        magic: 30,
        health: 50,
        xp: 100,
        gold: 100,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [10, ["wanderer"], 7, ["shoot"]],
        moveSpeed: 1.0,
        mana: 5,
        caster: true,
        shootDistance: 7,
        stalkDistance: 8,
        material: MATERIAL.gold,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.Fireball,
    },
    Basilisk: {
        name: "Basilisk",
        model: "Basilisk",
        scale: 1.8 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 40,
        defense: 30,
        magic: 25,
        health: 50,
        xp: 100,
        gold: 100,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 0.85,
        material: MATERIAL.greenFluence,
    },
    Rex: {
        name: "Rex",
        model: "Rex",
        scale: 1.25 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 45,
        defense: 35,
        magic: 30,
        health: 50,
        xp: 100,
        gold: 100,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [10, ["wanderer"], 5, ["shoot"]],
        moveSpeed: 1.0,
        mana: 3,
        caster: true,
        shootDistance: 5,
        stalkDistance: 6,
        material: MATERIAL.standard,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.Fireball,
    },
    Hulk: {
        name: "Hulk",
        model: "Hulk",
        scale: 1.5 / 2 ** 6,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 48,
        defense: 36,
        magic: 5,
        health: 50,
        xp: 100,
        gold: 100,
        attackSound: "HumanAttack1",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [10, ["wanderer"], 4, ["advancer"]],
        moveSpeed: 1.0,
        material: MATERIAL.greenShine,
    },
    RedDragon: {
        name: "RedDragon",
        texture: "RedDragon",
        model: "Dragon",
        scale: 1.92 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.25,
        fly: 0.25,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 48,
        defense: 35,
        magic: 40,
        health: 50,
        xp: 120,
        gold: 125,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [10, ["wanderer"], 7, ["shoot"]],
        moveSpeed: 1.05,
        mana: 5,
        caster: true,
        shootDistance: 7,
        stalkDistance: 8,
        material: MATERIAL.gold,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.Fireball,
    },
    GoldSkeleton: {
        name: "GoldSkeleton",
        texture: "Gold",
        model: "Skeleton",
        scale: 1.8 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "SmokeExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 50,
        defense: 40,
        magic: 30,
        health: 60,
        xp: 110,
        gold: 100,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.gold,
    },

    GreenRex: {
        name: "GreenRex",
        texture: "GreenRex",
        model: "Rex",
        scale: 1.25 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 55,
        defense: 45,
        magic: 42,
        health: 60,
        xp: 125,
        gold: 125,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [10, ["wanderer"], 6, ["shoot"]],
        moveSpeed: 1.05,
        mana: 3,
        caster: true,
        shootDistance: 6,
        stalkDistance: 7,
        material: MATERIAL.standard,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.Fireball,
    },
    Drax: {
        name: "Drax",
        model: "Drax",
        scale: 1.25 / 2 ** 1,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 60,
        defense: 50,
        magic: 40,
        health: 100,
        xp: 150,
        gold: 125,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [Infinity, ["wanderer"], 10, ["shoot"]],
        moveSpeed: 1.0,
        mana: 3,
        caster: true,
        shootDistance: 10,
        stalkDistance: 12,
        material: MATERIAL.standard,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.Fireball,
    },
    GreenWolf: {
        name: "Wolf",
        texture: "GreenWolf",
        model: "Wolf",
        scale: 1.6 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 60,
        defense: 40,
        magic: 12,
        health: 50,
        xp: 100,
        gold: 50,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt3",
        behaviourArguments: [10, ["wanderer"], 5, ["advancer"]],
        moveSpeed: 1.2,
        material: MATERIAL.greenFluence,
    },
    GreenBasilisk: {
        name: "GreenBasilisk",
        texture: "GreenBasilisk",
        model: "Basilisk",
        scale: 1.7 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 65,
        defense: 45,
        magic: 35,
        health: 60,
        xp: 150,
        gold: 150,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 0.99,
        material: MATERIAL.greenFluence,
    },
    BlueSkeleton: {
        name: "BlueSkeleton",
        texture: "BlueMetal",
        model: "Skeleton",
        scale: 1.8 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "SmokeExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 70,
        defense: 50,
        magic: 40,
        health: 60,
        xp: 200,
        gold: 200,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.standard,
    },
    GreenSkeleton: {
        name: "GreenSkeleton",
        texture: "GreenMetal",
        model: "Skeleton",
        scale: 1.8 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "SmokeExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 80,
        defense: 60,
        magic: 50,
        health: 75,
        xp: 250,
        gold: 250,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.standard,
    },
    MissGhostFace: {
        name: "MissGhostFace",
        model: "MissGhostFace",
        scale: 1 / 2 ** 1,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: KEY_TYPE.Pearl,
        attack: 1000,
        defense: 1000,
        magic: 100,
        health: 1000,
        xp: 10000,
        attackSound: "Banshee",
        hurtSound: "Ow",
        behaviourArguments: [Infinity, ["wanderer"], 15, ["shoot"]],
        moveSpeed: 1.2,
        material: MATERIAL.standard,
        final_boss: true,
        mana: 100,
        caster: true,
        shootDistance: 15,
        stalkDistance: 17,
        material: MATERIAL.standard,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.Fireball,
    },



};

const HERO_TYPE = {
    ThePrincess: {
        name: "ThePrincess",
        model: "Princess",
        scale: 1.82 / 2 ** 2,
        rotateToNorth: Math.PI,
        material: MATERIAL.standard,
        moveSpeed: 2.0
    }
};

/**
 * interaction entities, items and objects
 */

const INTERACTION_OBJECT = {
    Orb: {
        name: "Orb",
        category: "munition",
        element: "BALL",
        scale: 1.5 / 2 ** 5,
        glueToFloor: true,
        texture: "FireballTexture",
        material: MATERIAL.fire,
        inventorySprite: "FireBallIcon",
    },
    Bag: {
        name: "Bag",
        category: "action_item",
        which: "inventory",
        element: "BAG",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "Bag_BaseColor",
        material: MATERIAL.standard,
        inventorySprite: "Bag",
        text: "Cool. More storage. I can carry more repelling fireorbs now."
    },
    Cake: {
        name: "Cake",
        category: "action_item",
        which: "health",
        element: "CAKE",
        scale: 1 / 2 ** 2,
        glueToFloor: true,
        texture: "Cake_BaseColor",
        material: MATERIAL.standard,
        inventorySprite: "Cake",
        text: "Cake? Very healthy."
    },
    Steak: {
        name: "Steak",
        category: "action_item",
        which: "health",
        element: "STEAK",
        scale: 1.8 / 2 ** 3,
        glueToFloor: true,
        texture: "Steak_Texture",
        material: MATERIAL.standard,
        inventorySprite: "Steak",
        text: "Steak? A yummy vegetarian meat."
    },
    BeerHealth: {
        name: "BeerHealth",
        category: "action_item",
        which: "health",
        element: "CAN",
        scale: 1.0 / 2 ** 3,
        glueToFloor: true,
        texture: "CanTexture",
        material: MATERIAL.standard,
        inventorySprite: "BeerHealth",
        text: "Beer always helps me."
    },
    Dagger: {
        name: "Dagger",
        category: "interaction_item",
        element: "DAGGER",
        scale: 1.25 / 2 ** 5,
        glueToFloor: true,
        texture: "Dagger_Base_Color",
        material: MATERIAL.silver,
        inventorySprite: "Dagger",
        text: "It looks very sharp."
    },
    Apple: {
        name: "Apple",
        category: "interaction_item",
        element: "APPLE",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "Apple_BaseColor",
        material: MATERIAL.standard,
        inventorySprite: "Apple",
        text: "Oh, it's an apple."
    },
    Pear: {
        name: "Pear",
        category: "interaction_item",
        element: "PEAR",
        scale: 1 / 2 ** 7,
        glueToFloor: true,
        texture: "Pear_baseColor",
        material: MATERIAL.standard,
        inventorySprite: "Pear",
        text: "Juicy pear? How nice."
    },
    RedGem: {
        name: "RedGem",
        category: "interaction_item",
        element: "GEM",
        scale: 1.1 / 2 ** 4,
        glueToFloor: true,
        texture: "Red",
        material: MATERIAL.standard,
        inventorySprite: "RedGem",
        text: "Nice? Shiny? I'll keep that."
    },
    BlueGem: {
        name: "BlueGem",
        category: "interaction_item",
        element: "GEM",
        scale: 1.1 / 2 ** 4,
        glueToFloor: true,
        texture: "BlueMetal",
        material: MATERIAL.standard,
        inventorySprite: "BlueGem",
        text: "Nice? Shiny? I'll keep that."
    },
    GreenGem: {
        name: "GreenGem",
        category: "interaction_item",
        element: "GEM",
        scale: 1.1 / 2 ** 4,
        glueToFloor: true,
        texture: "GreenMetal",
        material: MATERIAL.standard,
        inventorySprite: "GreenGem",
        text: "Nice? Shiny? I'll keep that."
    },
    Sword: {
        name: "Sword",
        category: "interaction_item",
        element: "STING",
        scale: 1 / 2 ** 1,
        glueToFloor: true,
        texture: "Sting",
        material: MATERIAL.silver,
        inventorySprite: "Sword",
        text: "I'll put that sword in the bag."
    },
    CrystallBall: {
        name: "CrystallBall",
        category: "interaction_item",
        element: "BALL",
        scale: 0.65 / 2 ** 4,
        glueToFloor: true,
        texture: "Marble",
        material: MATERIAL.standardShine,
        inventorySprite: "CrystallBall",
        text: "Oh, crystall ball? I can see the future. Bad for Ghostface."
    },
    Shield: {
        name: "Shield",
        category: "interaction_item",
        element: "SHIELD",
        scale: 1 / 2 ** 5,
        glueToFloor: true,
        texture: "ScrapedMetal",
        inventorySprite: "Shield",
        material: MATERIAL.silver,
        text: "I'll put that shield in the bag."
    },
    Skull: {
        name: "Skull",
        category: "interaction_item",
        element: "SKULL",
        scale: 1 / 2 ** 1,
        glueToFloor: true,
        texture: "Skull_texture",
        inventorySprite: "Skull",
        material: MATERIAL.standard,
        text: "Creeepy?"
    },
    GoldBar: {
        name: "GoldBar",
        category: "interaction_item",
        element: "BAR",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "Gold",
        inventorySprite: "GoldBar",
        material: MATERIAL.gold,
        text: "I should store some gold in the bag. Who knows ..."
    },
    SilverBar: {
        name: "SilverBar",
        category: "interaction_item",
        element: "BAR",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "Silver",
        inventorySprite: "SilverBar",
        material: MATERIAL.silver,
        text: "Silver. Malleable."
    },
    IronBar: {
        name: "IronBar",
        category: "interaction_item",
        element: "BAR",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "IronTexture",
        inventorySprite: "IronBar",
        material: MATERIAL.standard,
        text: "Iron? I can make something from it."
    },
    IceCube: {
        name: "IceCube",
        category: "interaction_item",
        element: "CUBE_CENTERED",
        scale: 1.99 / 2 ** 5,
        glueToFloor: true,
        texture: "IceTexture",
        inventorySprite: "IceCube",
        material: MATERIAL.standardShine,
        text: "Ice cube. Cold?"
    },
    Rat: {
        name: "Rat",
        category: "interaction_item",
        element: "RAT",
        scale: 1 / 2 ** 3,
        glueToFloor: true,
        texture: "RatTexture",
        inventorySprite: "Rat",
        material: MATERIAL.standard,
        text: "Rat? Maybe I'll be hungry later."
    },
    Lizard: {
        name: "Lizard",
        category: "interaction_item",
        element: "LIZARD",
        scale: 1 / 2 ** 6,
        glueToFloor: true,
        texture: "LizardTexture",
        inventorySprite: "Lizard",
        material: MATERIAL.greenFluence,
        text: "Cute? Little dragon baby."
    },
    Scroll: {
        name: "Scroll",
        category: "interaction_item",
        element: "SCROLL",
        scale: 1.6 / 2 ** 4,
        glueToFloor: true,
        texture: "ScrollTexture",
        material: MATERIAL.paper,
        inventorySprite: "Scroll",
        text: "It's empty? I should write a poem."
    },
    Mushroom: {
        name: "Mushroom",
        category: "interaction_item",
        element: "MUSHROOM",
        scale: 1.4 / 2 ** 7,
        glueToFloor: true,
        texture: "MushroomTexture",
        inventorySprite: "Mushroom",
        material: MATERIAL.standard,
        text: "Poisonous. Don't eat."
    },
    Poison: {
        name: "Poison",
        category: "interaction_item",
        element: "FLASK",
        scale: 1.1 / 2 ** 5,
        glueToFloor: true,
        texture: "GreenMetal",
        inventorySprite: "Poison",
        material: MATERIAL.greenFluence,
        text: "Yikes. Don't drink this. It's deadly."
    },
    GoldCoin: {
        name: "GoldCoin",
        category: "interaction_item",
        element: "COIN",
        scale: 1.8 / 2 ** 8,
        glueToFloor: true,
        texture: "Gold",
        inventorySprite: "GoldCoin",
        material: MATERIAL.gold,
        text: "Face on the coin looks like my mother."
    },
    Blood: {
        name: "Blood",
        category: "interaction_item",
        element: "FLASK",
        scale: 1.1 / 2 ** 5,
        glueToFloor: true,
        texture: "BloodTexture",
        inventorySprite: "Blood",
        material: MATERIAL.redShine,
        text: "Disgusting. Give it to someone else."
    },
    Milk: {
        name: "Milk",
        category: "interaction_item",
        element: "FLASK",
        scale: 1.1 / 2 ** 5,
        glueToFloor: true,
        texture: "Marble",
        inventorySprite: "Milk",
        material: MATERIAL.standard,
        text: "Milk. Sour. Ugh."
    },
    Banana: {
        name: "Banana",
        category: "interaction_item",
        element: "BANANA",
        scale: 1.6 / 2 ** 4,
        glueToFloor: true,
        texture: "Banana_Texture",
        inventorySprite: "Banana",
        material: MATERIAL.standard,
        text: "Banana. "
    },
    GreenApple: {
        name: "GreenApple",
        category: "interaction_item",
        element: "GREEN_APPLE",
        scale: 1.6 / 2 ** 4,
        glueToFloor: true,
        texture: "Green_Apple_Basecolor",
        inventorySprite: "GreenApple",
        material: MATERIAL.standard,
        text: "Oh, it's an apple. A green one."
    },
};

const MOVABLE_INTERACTION_OBJECT = {
    Life: {
        name: "Life",
        model: "Princess",
        scale: 1 / 2 ** 3,
        rotateToNorth: Math.PI,
        material: MATERIAL.standard,
        static: true,
        category: "life",
        inventorySprite: "Lives",
        text: "A backup life. We all need this, right?",
    },
    BabySheep: {
        name: "BabySheep",
        category: "interaction_item",
        model: "Sheep",
        scale: 1.1 / 2 ** 10,
        rotateToNorth: Math.PI,
        moveSpeed: 1.25,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "BabySheep",
        text: "Poor lamb. Are you hurt?",
    },
    WolfPuppy: {
        name: "WolfPuppy",
        category: "interaction_item",
        model: "Wolf",
        scale: 1.2 / 2 ** 3,
        rotateToNorth: Math.PI,
        moveSpeed: 1.1,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "WolfPuppy",
        text: "Such a cute puppy.",
    },

    /** */

    LittleChicken: {
        name: "LittleChicken",
        category: "interaction_item",
        model: "Chicken",
        scale: 1 / 2 ** 6,
        rotateToNorth: -Math.PI / 2,
        moveSpeed: 1.5,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "LittleChicken",
        text: "Chicken dinner? Yummy."
    },
    Spider: {
        name: "Spider",
        category: "interaction_item",
        model: "Spider",
        scale: 1 / 2 ** 8,
        rotateToNorth: Math.PI,
        moveSpeed: 1.5,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "Spider",
        text: "Eight hairy legs? Creepy spider."
    },
    BabyGreenSpider: {
        name: "BabyGreenSpider",
        category: "interaction_item",
        model: "Spider",
        scale: 1 / 2 ** 8,
        rotateToNorth: Math.PI,
        texture: "SpiderGreen",
        moveSpeed: 1.5,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "BabyGreenSpider",
        text: "Eight hairy legs? Creepy spider."
    },
    Cat: {
        name: "Cat",
        category: "interaction_item",
        model: "Cat",
        scale: 1.8 / 2 ** 8,
        rotateToNorth: Math.PI,
        moveSpeed: 1.75,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "Cat",
        text: "Here, kitty kitty kitty!"
    },
    BabyDragon: {
        name: "BabyDragon",
        category: "interaction_item",
        model: "Dragon",
        scale: 1 / 2 ** 5,
        fly: 0.5,
        rotateToNorth: Math.PI,
        moveSpeed: 1.75,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "BabyDragon",
        text: "Come to mamma."
    },

};

const INTERACTION_ITEM = {
    Fly: {
        name: "Fly",
        category: "interaction_item",
        inventorySprite: "Fly",
        text: "Ugly fly? Who would want that?"
    },
    Hat: {
        name: "Hat",
        category: "interaction_item",
        inventorySprite: "Hat",
    },
    Mirror: {
        name: "Mirror",
        category: "interaction_item",
        inventorySprite: "Mirror",
    },
    Acorn: {
        name: "Acorn",
        category: "interaction_item",
        inventorySprite: "Acorn",
        text: "Squirrels like them."
    },
    Pearl: {
        name: "Pearl",
        category: "interaction_item",
        inventorySprite: "Pearl",
        text: "Pearl looks like moon's tear."
    },
    Fish: {
        name: "Fish",
        category: "interaction_item",
        inventorySprite: "Fish",
        text: "Smelly little swimmer."
    },
    Frog: {
        name: "Frog",
        category: "interaction_item",
        inventorySprite: "Frog",
        text: "Is that a prince?"
    },
    MagicWand: {
        name: "MagicWand",
        category: "interaction_item",
        inventorySprite: "MagicWand",
    },
    Book: {
        name: "Book",
        category: "interaction_item",
        inventorySprite: "Book",
        text: "Such a great story. About a princess."
    },
    PurpleRose: {
        name: "PurpleRose",
        category: "interaction_item",
        inventorySprite: "PurpleRose",
    },
    RedRose: {
        name: "RedRose",
        category: "interaction_item",
        inventorySprite: "RedRose",
        text: "Beautiful red rose. Very helpful."
    },
    BlueRose: {
        name: "BlueRose",
        category: "interaction_item",
        inventorySprite: "BlueRose",
    },
    Chip: {
        name: "Chip",
        category: "interaction_item",
        inventorySprite: "Chip",
        text: "An eight bit processor. Priceless."
    },
    Mushroom: {
        name: "Mushroom",
        category: "interaction_item",
        inventorySprite: "Mushroom",
        text: "Poisonous. Don't eat."
    },
    Floppy: {
        name: "Floppy",
        category: "interaction_item",
        inventorySprite: "Floppy",
        text: "Floppy disk? I can store my memoirs on it."
    },
    Crest: {
        name: "Crest",
        category: "interaction_item",
        inventorySprite: "Crest",
    },
    GoldKey: {
        name: "GoldKey",
        category: "key",
        inventorySprite: "GoldKey",
        color: "Gold"
    },
    SilverKey: {
        name: "SilverKey",
        category: "key",
        inventorySprite: "SilverKey",
        color: "Silver"
    },
    EmeraldKey: {
        name: "EmeraldKey",
        category: "key",
        inventorySprite: "EmeraldKey",
        color: "Emerald"
    },
    PurpleKey: {
        name: "PurpleKey",
        category: "key",
        inventorySprite: "PurpleKey",
        color: "Purple"
    },
    GreenKey: {
        name: "GreenKey",
        category: "key",
        inventorySprite: "GreenKey",
        color: "Green"
    },
    BlueKey: {
        name: "BlueKey",
        category: "key",
        inventorySprite: "BlueKey",
        color: "Blue"
    },
    RedKey: {
        name: "RedKey",
        category: "key",
        inventorySprite: "RedKey",
        color: "Red"
    },
    Quill: {
        name: "Quill",
        category: "interaction_item",
        inventorySprite: "Quill",
    },
    Blood: {
        name: "Blood",
        category: "interaction_item",
        inventorySprite: "Blood",
        text: "Blood? Yuck."
    },
    GoldenBook: {
        name: "GoldenBook",
        category: "interaction_item",
        inventorySprite: "GoldenBook",
        text: "Hmm. Princess meets GhostFace. Sad story."
    },
    Heels: {
        name: "Heels",
        category: "interaction_item",
        inventorySprite: "Heels",
        text: "Hot. I'll wear those when I stomp on Ghostface."
    },
    GreenHeels: {
        name: "GreenHeels",
        category: "interaction_item",
        inventorySprite: "GreenHeels",
    },
    Poison: {
        name: "Poison",
        category: "interaction_item",
        inventorySprite: "Poison",
        text: "Yikes. Don't drink this. It's deadly."
    },
    LittleChicken: {
        name: "LittleChicken",
        category: "interaction_item",
        inventorySprite: "LittleChicken",
    },
    ChickenBones: {
        name: "ChickenBones",
        category: "interaction_item",
        inventorySprite: "ChickenBones",
    },
    GoldCoin: {
        name: "GoldCoin",
        category: "interaction_item",
        inventorySprite: "GoldCoin",
        text: "Face on the coin looks like my mother."
    },
    Leotard: {
        name: "Leotard",
        category: "interaction_item",
        inventorySprite: "Leotard",
        text: "Leotard for leopard."
    },
    LeoHat: {
        name: "LeoHat",
        category: "interaction_item",
        inventorySprite: "LeoHat",
        text: "Cool hat. Leopard spots. I could hide in the jungle."
    },
    LeoPumps: {
        name: "LeoPumps",
        category: "interaction_item",
        inventorySprite: "LeoPumps",
        text: "Looks like something Purrscilla would wear."
    },
    Whip: {
        name: "Whip",
        category: "interaction_item",
        inventorySprite: "Whip",
        text: "I can punish GhostFace."
    },
    Handcuffs: {
        name: "Handcuffs",
        category: "interaction_item",
        inventorySprite: "Handcuffs",
        text: "Should I arrest or kill GhostFace?"
    },
    Revolver: {
        name: "Revolver",
        category: "interaction_item",
        inventorySprite: "Revolver",
    },
    Sponge: {
        name: "Sponge",
        category: "interaction_item",
        inventorySprite: "Sponge",
        text: "Maybe I should take a bath?"
    },
    RubberDuck: {
        name: "RubberDuck",
        category: "interaction_item",
        inventorySprite: "RubberDuck",
        text: "One should never bath alone."
    },
    Candle: {
        name: "Candle",
        category: "interaction_item",
        inventorySprite: "Candle",
        text: "Common baby light my fire."
    },
    Ammo: {
        name: "Ammo",
        category: "interaction_item",
        inventorySprite: "Ammo",
    },
    GoldBar: {
        name: "GoldBar",
        category: "interaction_item",
        inventorySprite: "GoldBar",
    },
    LP: {
        name: "LP",
        category: "interaction_item",
        inventorySprite: "LP",
        text: "Some nice death metal."
    },
    Ribbon: {
        name: "Ribbon",
        category: "interaction_item",
        inventorySprite: "Ribbon",
        text: "I will look pretty with this."
    },
    HairBrush: {
        name: "HairBrush",
        category: "interaction_item",
        inventorySprite: "HairBrush",
        text: "Time to comb my hair. I have been adventuring too long."
    },
    Shield: {
        name: "Shield",
        category: "interaction_item",
        inventorySprite: "Shield",
    },
    Sword: {
        name: "Sword",
        category: "interaction_item",
        inventorySprite: "Sword",
    },
    Helmet: {
        name: "Helmet",
        category: "interaction_item",
        inventorySprite: "Helmet",
    },
    IronBar: {
        name: "IronBar",
        category: "interaction_item",
        inventorySprite: "IronBar",
        text: "Iron? I can make something from it."
    },
    Emerald: {
        name: "Emerald",
        category: "interaction_item",
        inventorySprite: "Emerald",
        text: "Emerald? I can make something from it."
    },
    Diamond: {
        name: "Diamond",
        category: "interaction_item",
        inventorySprite: "Diamond",
        text: "Diamond? My best friend."
    },
    Wasp: {
        name: "Wasp",
        category: "interaction_item",
        inventorySprite: "Wasp",
        text: "Stingy?"
    },
    Beer: {
        name: "Beer",
        category: "interaction_item",
        inventorySprite: "Beer",
        text: "A cold one."
    },
    Shawl: {
        name: "Shawl",
        category: "interaction_item",
        inventorySprite: "Shawl",
    },
    WoolenCap: {
        name: "WoolenCap",
        category: "interaction_item",
        inventorySprite: "WoolenCap",
    },
    Gloves: {
        name: "Gloves",
        category: "interaction_item",
        inventorySprite: "Gloves",
        text: "I am not cold yet."
    },
    Dough: {
        name: "Dough",
        category: "interaction_item",
        inventorySprite: "Dough",
    },
    Pie: {
        name: "Pie",
        category: "interaction_item",
        inventorySprite: "Pie",
    },
    Amethyst: {
        name: "Amethyst",
        category: "interaction_item",
        inventorySprite: "Amethyst",
    },
    Moonstone: {
        name: "Moonstone",
        category: "interaction_item",
        inventorySprite: "Moonstone",
    },
    PocketRocket: {
        name: "PocketRocket",
        category: "interaction_item",
        inventorySprite: "PocketRocket",
    },
    Milk: {
        name: "Milk",
        category: "interaction_item",
        inventorySprite: "Milk",
    },
    Egg: {
        name: "Egg",
        category: "interaction_item",
        inventorySprite: "Egg",
    },
    WolfLeader: {
        name: "WolfLeader",
        category: "interaction_item",
        inventorySprite: "WolfLeader",
    },
    WolfPuppy: {
        name: "WolfPuppy",
        category: "interaction_item",
        inventorySprite: "WolfPuppy",
    },
    RocketTop: {
        name: "RocketTop",
        category: "interaction_item",
        inventorySprite: "RocketTop",
        text: "Part of the rocket? Where is another?"
    },
    RocketBottom: {
        name: "RocketBottom",
        category: "interaction_item",
        inventorySprite: "RocketBottom",
        text: "Fixing this might be a rocket science. Ha ha."
    },
    BackPack: {
        name: "BackPack",
        category: "interaction_item",
        inventorySprite: "BackPack",
        text: "Let's put this pack on my back."
    },
    HikingBoot: {
        name: "HikingBoot",
        category: "interaction_item",
        inventorySprite: "HikingBoot",
        text: "Not my size."
    },
    SunScreen: {
        name: "SunScreen",
        category: "interaction_item",
        inventorySprite: "SunScreen",
        text: "Sun screen factor 50."
    },
    Towel: {
        name: "Towel",
        category: "interaction_item",
        inventorySprite: "Towel",
        text: "A towel. Pity I am not wet."
    },
    SilverBar: {
        name: "SilverBar",
        category: "interaction_item",
        inventorySprite: "SilverBar",
        text: "Silver. Malleable."
    },
    UraniumBar: {
        name: "UraniumBar",
        category: "interaction_item",
        inventorySprite: "UraniumBar",
    },
    PurpleTear: {
        name: "PurpleTear",
        category: "interaction_item",
        inventorySprite: "PurpleTear",
    },
    GoldSteel: {
        name: "GoldSteel",
        category: "interaction_item",
        inventorySprite: "GoldSteel",
    },
    Shell: {
        name: "Shell",
        category: "interaction_item",
        inventorySprite: "Shell",
        text: "Pretty shell."
    },
    Crown: {
        name: "Crown",
        category: "interaction_item",
        inventorySprite: "Crown",
        text: "My."
    },
    FishBone: {
        name: "FishBone",
        category: "interaction_item",
        inventorySprite: "FishBone",
        text: "Smelly fish skeleton."
    },
    RedGem: {
        name: "RedGem",
        category: "interaction_item",
        inventorySprite: "RedGem",
    },
    //
    Attack: {
        name: "Attack",
        category: "skill",
        inventorySprite: "SkillKick",
        which: "attack",
        level: 1,
    },
    Magic: {
        name: "Magic",
        category: "skill",
        inventorySprite: "SkillFireball",
        which: "magic",
        level: 1,
    },
    HeartSkill: {
        name: "HeartSkill",
        category: "status",
        inventorySprite: "HeartSkill",
        which: "health",
        level: 1,
    },
    //
    Skull: {
        name: "Skull",
        category: "interaction_item",
        inventorySprite: "Skull",
        text: "Creeepy?"
    },
    Dagger: {
        name: "Dagger",
        category: "interaction_item",
        inventorySprite: "Dagger",
        text: "Sharp?"
    },
    Binoculars: {
        name: "Binoculars",
        category: "interaction_item",
        inventorySprite: "Binoculars",
        text: "This makes distant object looks close."
    },
    FlowerCrown: {
        name: "FlowerCrown",
        category: "interaction_item",
        inventorySprite: "FlowerCrown",
        text: "Someone is going to be so pretty. I am already."
    },
    RedHandbag: {
        name: "RedHandbag",
        category: "interaction_item",
        inventorySprite: "RedHandbag",
        text: "Latest fashion."
    },
    WhiteHeels: {
        name: "WhiteHeels",
        category: "interaction_item",
        inventorySprite: "WhiteHeels",
        text: "Black is the new black."
    },
    WhiteHandbag: {
        name: "WhiteHandbag",
        category: "interaction_item",
        inventorySprite: "WhiteHandbag",
        text: "Would suit someone pale."
    },
    ConcentratedPoison: {
        name: "ConcentratedPoison",
        category: "interaction_item",
        inventorySprite: "ConcentratedPoison",
        text: "Don't drink this. It's deadlier than poison."
    },
    Boots: {
        name: "Boots",
        category: "interaction_item",
        inventorySprite: "Boots",
        text: "This boots were made for walking. And that is what they'll do."
    },
    Scissors: {
        name: "Scissors",
        category: "interaction_item",
        inventorySprite: "Scissors",
        text: "Cut cut cut cut."
    },
    BlueColor: {
        name: "BlueColor",
        category: "interaction_item",
        inventorySprite: "BlueColor",
        text: "I can paint something blue."
    },
    RedColor: {
        name: "RedColor",
        category: "interaction_item",
        inventorySprite: "RedColor",
        text: "I can paint something red."
    },
    GreenColor: {
        name: "GreenColor",
        category: "interaction_item",
        inventorySprite: "GreenColor",
        text: "I can paint something green."
    },
    Hammer: {
        name: "Hammer",
        category: "interaction_item",
        inventorySprite: "Hammer",
        text: "Hammer. I could hammer someone."
    },
    Anvil: {
        name: "Anvil",
        category: "interaction_item",
        inventorySprite: "Anvil",
        text: "Anvil. Blacksmistress might want it."
    },
    Fins: {
        name: "Fins",
        category: "interaction_item",
        inventorySprite: "Fins",
        text: "Fins. For scuba diving."
    },
    ScubaMask: {
        name: "ScubaMask",
        category: "interaction_item",
        inventorySprite: "ScubaMask",
        text: "Mask. For scuba diving."
    },
    LeatherHide: {
        name: "LeatherHide",
        category: "interaction_item",
        inventorySprite: "LeatherHide",
        text: "Skin of some dangerous animal. Cow perhaps?"
    },
    HayBale: {
        name: "HayBale",
        category: "interaction_item",
        inventorySprite: "HayBale",
        text: "Hey, it's a hay."
    },
    GoldOre: {
        name: "GoldOre",
        category: "interaction_item",
        inventorySprite: "GoldOre",
        text: "I should smelt this gold ore into a bar."
    },
    Moon: {
        name: "Moon",
        category: "interaction_item",
        inventorySprite: "Moon",
        text: "Moon? Really? What's next."
    },
    EmptyBottle: {
        name: "EmptyBottle",
        category: "interaction_item",
        inventorySprite: "EmptyBottle",
        text: "Empty bottle? I should put something in."
    },
    Wine: {
        name: "Wine",
        category: "interaction_item",
        inventorySprite: "Wine",
        text: "Red wine. Fancy a sip?"
    },
    DumbBell: {
        name: "DumbBell",
        category: "interaction_item",
        inventorySprite: "DumbBell",
        text: "Heavy. I am building muscles as we speak."
    },
};

const INTERACTION_ENTITY = {
    Strongarmed: {
        name: "Strongarmed",
        sprite: "Strongarmed",
        category: 'crest',
        voice: "Female",
        wants: ["DumbBell", "DumbBell"],
        gives: "GoldCoin",
        text: {
            intro: "I need to keep training! Bring me two dumbbells, and I'll reward you.",
            progress: "One dumbbell isn't enough! I need both to really feel the burn.",
            conclusion: "Perfect! Now I can train harder. Here's your gold coin—earned through sweat and strength!"
        }
    },
    
    ApplePicker: {
        name: "ApplePicker",
        sprite: "ApplePicker",
        category: 'crest',
        voice: "Female",
        wants: ["Apple", "Apple"],
        gives: "GreenKey",
        text: {
            intro: "I was counting my apples, but I am two short. Help, or you will go nowhere.",
            progress: "I want one more.",
            conclusion: "My count is now complete. Good luck in your fights."
        }
    },
    Spideress: {
        name: "Spideress",
        sprite: "Spideress",
        category: 'crest',
        voice: "Female",
        wants: ["Fly", "Fly", "Fly"],
        gives: "SilverKey",
        text: {
            intro: "I am so very hungry.",
            progress: "Fly tasted marvelous, but I am still hungry.",
            conclusion: "My appetite is sated. You con continue your fight."
        }
    },
    Librarian: {
        name: "Librarian",
        sprite: "Librarian",
        category: 'crest',
        voice: "Female",
        wants: ["Book", "GoldenBook"],
        gives: "Heels",
        text: {
            intro: "In the quiet aisles, amidst whispered tales, I seek two tomes where knowledge prevails.",
            progress: "One book in hand, yet another still await, Hurry, lest curiosity abate.",
            conclusion: "Both volumes now mine, for knowledge I yearn, For your diligence, these red heels, a pairless return."
        }
    },
    Sorceress: {
        name: "Sorceress",
        sprite: "Sorceress",
        category: 'crest',
        voice: "Female2",
        wants: ["Mushroom", "Mushroom", "Mushroom", "Mushroom", "Mushroom"],
        gives: "Poison",
        text: {
            intro: "From darkened woods and shadowed grove, bring me mushrooms, for my deadly stove.",
            progress: "A mushroom found, but more to go, my cauldron waits for the final throw.",
            conclusion: "All mushrooms brewed, the poison is keen, take this vial, silent and green."
        }
    },
    Ninja: {
        name: "Ninja",
        sprite: "Ninja",
        category: 'crest',
        voice: "Female2",
        wants: ["Dagger", "Dagger", "Dagger"],
        gives: "Mushroom",
        text: {
            intro: "In the shadows, daggers gleam, A stealthy girl's best dream.",
            progress: "One blade secured, but more to find, Bring them to me, and we'll be aligned.",
            conclusion: "Daggers in hand, my stealth is complete, Take this mushroom, for a poison so sweet."
        }
    },
    Fairy: {
        name: "Fairy",
        sprite: "Fairy",
        category: 'crest',
        voice: "Female2",
        wants: ["FlowerCrown", "Mirror"],
        gives: "Mushroom",
        text: {
            intro: "In the glimmer of dawn's first light, I seek adornments to enhance my sight.",
            progress: "A crown of flowers, a mirror bright, continue your quest through the enchanted night.",
            conclusion: "Adorned and seen, in beauty true, for you, a mushroom, dark as dew."
        }
    },
    GreyWarrior: {
        name: "GreyWarrior",
        sprite: "GreyWarrior",
        category: 'crest',
        voice: "Female",
        wants: ["Helmet", "Sword", "Shield"],
        gives: "Dagger",
        text: {
            intro: "Clad in shadow, seeking might, I need arms for the fight. Bring true knight's gear, to stand bold without fear.",
            progress: "My arsenal grows, yet remains incomplete, More gear to gather before I'm elite.",
            conclusion: "Equipped and ready, a knight stands tall, Take this dagger, it's too small for my call."
        }
    },
    Licky: {
        name: "Licky",
        sprite: "Licky",
        category: 'crest',
        voice: "Female",
        wants: ["RedHandbag", "Mirror"],
        gives: "Helmet",
        text: {
            intro: "To mirror my beauty, a red handbag I seek, Add a looking glass, for the chic and unique.",
            progress: "One splendid item now shines in my clutch, Find the other, for I long for such.",
            conclusion: "Red handbag and mirror, my allure now reflects, Take this helmet, for metal's what I reject."
        }
    },
    StilettoTwin: {
        name: "StilettoTwin",
        sprite: "StilettoTwin",
        category: 'crest',
        voice: "Female2",
        wants: ["Heels", "Heels"],
        gives: "RedHandbag",
        text: {
            intro: "Enchanting in red, I seek to enhance, A pair of red heels, to improve my stance.",
            progress: "One heel closer to complete allure, Bring the other, make my charm pure.",
            conclusion: "With both heels in hand, my style is set, For your help, a red handbag, the best you can get."
        }
    },
    RedRidingHood: {
        name: "RedRidingHood",
        sprite: "RedRidingHood",
        category: 'crest',
        voice: "FemHighQuick",
        wants: ["WolfPuppy", "WolfPuppy", "WolfPuppy"],
        gives: "Heels",
        text: {
            intro: "Through woods dark and deep, I search for pups lost, Bring them back to me, whatever the cost.",
            progress: "One little wolf found, but more still roam, In the forest's shadows, far from home.",
            conclusion: "All my pups safe, my heart feels whole, For your trouble, one red stiletto, complete your sole."
        }
    },
    Purrscilla: {
        name: "Purrscilla",
        sprite: "Purrscilla",
        category: 'crest',
        voice: "Female",
        wants: ["LeoPumps", "LeoPumps", "LeoHat", "Leotard"],
        gives: "GoldCoin",
        text: {
            intro: "Purrscilla purrs for stylish grace, spotted fashion, my ideal embrace.",
            progress: "Fashion's call, one piece is here, more to strut, bring them near.",
            conclusion: "All in leopard, style complete, here's your gold, for a feat so neat."
        }
    },
    ApparitiaTraitor: {
        name: "ApparitiaTraitor",
        sprite: "ApparitiaTraitor",
        category: 'crest',
        voice: "Apparitia",
        wants: ["WhiteHandbag", "WhiteHeels"],
        gives: "GoldCoin",
        text: {
            intro: "I am in awe of your fashion. I will cross to your side if you help me with the outfit.",
            progress: "One chic piece found, yet my look remains incomplete, find the other, make my ensemble sweet.",
            conclusion: "Outfitted now in flawless style, for your aid, a gold coin, and henceforth, I'm your ally."
        }
    },
    FarSeer: {
        name: "FarSeer",
        sprite: "FarSeer",
        category: 'crest',
        voice: "Female",
        wants: ["Binoculars"],
        gives: "EmeraldKey",
        text: {
            intro: "I cannot really see far now, but I know this. Without my help, you will not go far.",
            progress: null,
            conclusion: "With my sight restored, I see your path clear. Take this Emerald Key; without it, your quest ends here."
        }
    },
    Weaver: {
        name: "Weaver",
        sprite: "Weaver",
        category: 'crest',
        voice: "Female2",
        wants: ["BlueRose", "PurpleRose", "RedRose"],
        gives: "FlowerCrown",
        text: {
            intro: "With petals bright and colors fair, I weave crowns beyond compare.",
            progress: "A rose in hand, but more still stray, Gather them all, for a crown to display.",
            conclusion: "With all three roses, the crown is spun, Wear this Flower Crown, your beauty's won."
        }
    },
    Wolfie: {
        name: "Wolfie",
        sprite: "Wolfie",
        category: 'crest',
        voice: "Female",
        wants: ["Pie", "ConcentratedPoison"],
        gives: "Binoculars",
        text: {
            intro: "I've got a target in mind, and I need your help. Bring me pie and concentrated poison, and you'll see far beyond your wildest dreams.",
            progress: "One part of the plan is in place, but there's still more to do. Bring the rest, and the view will be yours.",
            conclusion: "With pie and poison, my plan is set. Here's your binoculars, now you'll truly see far."
        }
    },
    PoisonWitch: {
        name: "PoisonWitch",
        sprite: "PoisonWitch",
        category: 'crest',
        voice: "Female2",
        wants: ["Poison", "Poison", "Poison"],
        gives: "ConcentratedPoison",
        text: {
            intro: "Bring me your poisons, weak and mild, I'll brew them stronger, deadly and wild.",
            progress: "A dose is here, but more is due, Gather them all, for power to imbue.",
            conclusion: "With poisons combined, distilled with flair, Take this Concentrated Poison, handle with care."
        }
    },
    Cookie: {
        name: "Cookie",
        sprite: "Cookie",
        category: 'crest',
        voice: "Female",
        wants: ["Apple", "Dough"],
        gives: "Pie",
        text: {
            intro: "In the kitchen, where magic's spun, Ingredients needed, one by one.",
            progress: "A mix in progress, but not yet complete, Seek and gather, for a treat so sweet.",
            conclusion: "Ingredients blended, under my chef's guise, For you, a pie, a delicious surprise."
        }
    },
    Bakeress: {
        name: "Bakeress",
        sprite: "Bakeress",
        category: 'crest',
        voice: "Female",
        wants: ["Egg", "Milk"],
        gives: "Dough",
        text: {
            intro: "Flour and passion, for bread to rise, Egg and milk, for dough's disguise.",
            progress: "Stirring, waiting, something lacks, Continue your quest, no time to relax.",
            conclusion: "Egg and milk, now mixed within, Your reward, dough ready to spin."
        }
    },
    SkullCollector: {
        name: "SkullCollector",
        sprite: "SkullCollector",
        category: 'crest',
        voice: "Female",
        wants: ["Skull", "Skull", "Skull", "Skull", "Skull"],
        gives: "GoldCoin",
        text: {
            intro: "In shadows lurk, a collector's plea, skulls she seeks, from you and me.",
            progress: "Her collection grows, yet still she waits, for more to come, through darkened gates.",
            conclusion: "With skulls in tow, her smile gleams, a gold coin yours, in moonlight beams.",
        }
    },
    AlloyaPinkass: {
        name: "AlloyaPinkass",
        sprite: "AlloyaPinkass",
        category: 'crest',
        voice: "Female",
        wants: ["GoldBar", "IronBar", "SilverBar", "UraniumBar"],
        gives: "GoldSteel",
        text: {
            intro: "In fire and forge, my art does bloom, For GoldSteel creation, metals I consume.",
            progress: "Bar by bar, the alloy takes shape, Continue your quest, let no metal escape.",
            conclusion: "Gold, iron, silver, uranium, now blend, GoldSteel is forged, your journey's end."
        }
    },
    Keysa: {
        name: "Keysa",
        sprite: "Keysa",
        category: 'crest',
        voice: "Female",
        wants: ["GoldSteel", "PurpleTear"],
        gives: "PurpleKey",
        text: {
            intro: "In my workshop, magic and metal blend, For a unique key, two treasures I'll mend.",
            progress: "One piece is here, bring another to be clear.",
            conclusion: "GoldSteel and PurpleTear, now finely entwined, Behold, the PurpleKey, uniquely designed."
        }
    },
    Gemma: {
        name: "Gemma",
        sprite: "Gemma",
        category: 'crest',
        voice: "Female",
        wants: ["Diamond", "Amethyst", "Moonstone", "Pearl"],
        gives: "PurpleTear",
        text: {
            intro: "Beneath the earth, where secrets gleam, I seek jewels to fulfill a dream.",
            progress: "A gem a stone, in hand you bring, Yet more are needed, for the tear to sing.",
            conclusion: "Diamond, amethyst, moonstone, pearl, all unite, Behold, the PurpleTear, in its mystical light."
        }
    },
    Climber: {
        name: "Climber",
        sprite: "Climber",
        category: 'crest',
        voice: "Female",
        wants: ["Shawl", "Gloves", "WoolenCap"],
        gives: "RedKey",
        text: {
            intro: "Where were you so long, Princess? Don't you know how cold I am?",
            progress: "Cloth and warmth, piece by piece, Continue on, till all's in fleece.",
            conclusion: "At last, warmth surrounds, chill's defeat, For your help, take this Red Key, a prize complete."
        }
    },
    MissHill: {
        name: "MissHill",
        sprite: "MissHill",
        category: 'crest',
        voice: "Female",
        wants: ["HikingBoot", "HikingBoot", "BackPack"],
        gives: "UraniumBar",
        text: {
            intro: "Stranded up here without boots or pack, but with a little help, I'll be back on track. Bring me some gear, and I'll share a rare treat.",
            progress: "One step closer, but I'm still stuck - find the rest, and I'll have some luck.",
            conclusion: "Boots laced and backpack ready, here's your uranium bar - now my journey's steady."
        }
    },
    Jeweliette: {
        name: "Jeweliette",
        sprite: "Jeweliette",
        category: 'crest',
        voice: "Female",
        wants: ["GreenGem", "BlueGem"],
        gives: "Diamond",
        text: {
            intro: "Amidst the sparkle, I yearn for hue, Green and Blue, a trade for you.",
            progress: "A gem of color, a start so bright, Yet more I seek, to my delight.",
            conclusion: "Green and blue, now mine to hold, For you, a diamond, clear and bold."
        }
    },
    Shepardess: {
        name: "Shepardess",
        sprite: "Shepardess",
        category: 'crest',
        voice: "Female",
        wants: ["BabySheep", "BabySheep", "BabySheep", "BabySheep", "BabySheep"],
        gives: "WoolenCap",
        text: {
            intro: "Lost in meadows, my sheep, my care, Find them please, this task I dare.",
            progress: "Some have returned, but others still stray, Under sun and rain, they wander away.",
            conclusion: "All my sheep, safe and sound at last, A woolen cap for you, as promised in the past."
        }
    },
    Seamstress: {
        name: "Seamstress",
        sprite: "Seamstress",
        category: 'crest',
        voice: "Female",
        wants: ["BabySheep", "Scissors", "RedColor"],
        gives: "Shawl",
        text: {
            intro: "A sheep to prune, scissors to snip, and red to dye-bring them all, and a fine shawl is nigh.",
            progress: "You've found one, but not the rest, Keep searching, so I can weave my best.",
            conclusion: "With sheep, scissors, and red all in hand, your new shawl is ready, just as planned."
        }
    },
    Blacksmistress: {
        name: "Blacksmistress",
        sprite: "Blacksmistress",
        category: 'crest',
        voice: "Female",
        wants: ["Anvil", "Hammer"],
        gives: "IronBar",
        text: {
            intro: "With an anvil and hammer, I can forge you an iron bar. Bring me the tools, and I'll get to work.",
            progress: "One tool is in place, but I still need the other to craft something great.",
            conclusion: "Anvil and hammer in hand, your iron bar is ready - crafted just as planned."
        }
    },
    RestingBabe1: {
        name: "RestingBabe1",
        sprite: "RestingBabe1",
        category: 'crest',
        voice: "Female2",
        wants: ["Boots"],
        gives: "BlueKey",
        text: {
            intro: "My feet are freezing, Princess. If you bring me a pair of boots, I'll reward you with this Blue Key.",
            progress: null,
            conclusion: "Ahh, warm feet at last! Here's the Blue Key, and good luck to whoever didn't get those boots!"
        }
    },
    RestingBabe2: {
        name: "RestingBabe2",
        sprite: "RestingBabe2",
        category: 'crest',
        voice: "Female2",
        wants: ["Boots"],
        gives: "GreenKey",
        text: {
            intro: "I can't go anywhere without boots, Princess. If you help me out, I'll give you the Green Key.",
            progress: null,
            conclusion: "Now I'm ready to go! Here's the Green Key, hope the other babe is still chilling barefoot!"
        }
    },
    Hedgehog: {
        name: "Hedgehog",
        sprite: "Hedgehog",
        category: 'crest',
        voice: "Female2",
        wants: ["Apple", "Pear", "Banana", "GreenApple"],
        gives: "BackPack",
        text: {
            intro: "I'm craving some fruit to nibble on, but my little paws can't carry them all. Help me gather the tasty treasures, and I'll give you a backpack in return.",
            progress: "You've found one piece of fruit, but there’s still more to gather for my feast!",
            conclusion: "All this delicious fruit, just for me! You've earned your reward - here's the backpack I promised."
        }
    },
    Goldie: {
        name: "Goldie",
        sprite: "Goldie",
        category: "crest",
        voice: "Female2",
        wants: ["GoldBar", "GoldBar", "GoldBar"],
        gives: "GoldCoin",
        text: {
            intro: "I love the shine of gold! Bring me three gold bars, and I'll give you a shiny coin in return. Fair trade, right?",
            progress: "That's one gold bar, but I need more for my collection!",
            conclusion: "Three gold bars! My collection is shining brighter than ever. Here's your gold coin - such a deal, right?"
        }
    },
    Scooby: {
        name: "Scooby",
        sprite: "Scooby",
        category: "crest",
        voice: "Female2",
        wants: ["ScubaMask", "Fins"],
        gives: "Pearl",
        text: {
            intro: "I can dive deep for that lost pearl, but I need the right gear. Bring me a scuba mask and fins, and I'll fetch it for you.",
            progress: "I've got some gear, but I still need the rest before I dive.",
            conclusion: "All set! I'll dive and retrieve your pearl. Here you go — straight from the depths!"
        }
    },
    Finette: {
        name: "Finette",
        sprite: "Finette",
        category: 'crest',
        voice: "Female",
        wants: ["FishBone", "FishBone"],
        gives: "Fins",
        text: {
            intro: "From ocean's depths, a plea for respect, Ancestors' remains, I wish to collect.",
            progress: "One relic returned to the sea's embrace, Seek another, to complete the grace.",
            conclusion: "Ancestors honored, their rest now serene, For you, a spare set of fins — a small, fitting tribute from the sea."
        }
    },
    BootMaker: {
        name: "BootMaker",
        sprite: "BootMaker",
        category: 'crest',
        voice: "Female2",
        wants: ["LeatherHide", "LeatherHide"],
        gives: "HikingBoot",
        text: {
            intro: "So, you want a hiking boot? Well, I could whip one up, but I'll need two pieces of hide — from a 'dangerous' beast. Yep, a cow.",
            progress: "One hide down, but I still need another from that 'fearsome' cow before I can finish your masterpiece.",
            conclusion: "Two hides? Wow, you survived the cows! Here's your one hiking boot. Maybe you'll find the other... someday."
        }
    },
    BootMaker2: {
        name: "BootMaker2",
        sprite: "BootMaker2",
        category: 'crest',
        voice: "Female2",
        wants: ["LeatherHide", "LeatherHide"],
        gives: "HikingBoot",
        text: {
            intro: "Oh, you're after a hiking boot, huh? No problem, just bring me two hides from the most 'ferocious' beast around... the cow. Scary stuff, I know.",
            progress: "Halfway there! Just one more piece of cowhide, and I'll craft you the finest single boot you've ever seen.",
            conclusion: "You did it! You conquered the cow menace. Here's your one boot. Good luck finding its twin out there!"
        }
    },
    CowGirl1: {
        name: "CowGirl1",
        sprite: "CowGirl1",
        category: 'crest',
        voice: "Princess",
        wants: ["HayBale", "HayBale"],
        gives: "LeatherHide",
        text: {
            intro: "Poor mute thing, are you hungry? Cow?",
            progress: "You like the hay?",
            conclusion: "Now that I fed you, you gave me your skin. As you should, since I am your Princess. You belong to me."
        }
    },
    GoldSmelter: {
        name: "GoldSmelter",
        sprite: "GoldSmelter",
        category: 'crest',
        voice: "Female2",
        wants: ["GoldOre", "GoldOre", "GoldOre"],
        gives: "GoldBar",
        text: {
            intro: "You want a shiny gold bar? Well, I need three chunks of gold ore. Don't worry, it only takes a 'little' heat to smelt them.",
            progress: "You're on the right track, but I still need more gold to get the furnace going.",
            conclusion: "Three ores! Time to fire up the furnace. Here's your freshly smelted gold bar. Don't spend it all in one place!"
        }
    },
    Swampy: {
        name: "Swampy",
        sprite: "Swampy",
        category: 'crest',
        voice: "Female",
        wants: ["Frog", "Frog", "Frog"],
        gives: "Hammer",
        text: {
            intro: "I just know one of these frogs is a prince in disguise! Help me catch three, and I'll give you a hammer I, hmm, 'borrowed' from Blacksmithstress.",
            progress: "Hmm, still not sure if this frog is royalty. Keep searching, I need more!",
            conclusion: "Three frogs! Still no prince, but here's that hammer I promised. Maybe you'll have better luck with your quest!"
        }
    },
    Fishelle: {
        name: "Fishelle",
        sprite: "Fishelle",
        category: 'crest',
        voice: "Female",
        wants: ["Fish", "Fish", "Fish"],
        gives: "Amethyst",
        text: {
            intro: "My little ones are out there somewhere in the deep. Help me find them, and I'll reward you with a precious amethyst from the ocean floor.",
            progress: "One fish closer, but I still need the rest of my dear offspring.",
            conclusion: "All my little ones are safe! As promised, here's the amethyst from the depths of the ocean. It's as shiny as they are precious to me!"
        }
    },
    MoonElf: {
        name: "MoonElf",
        sprite: "MoonElf",
        category: 'crest',
        voice: "Female",
        wants: ["Moon", "Moon"],
        gives: "Moonstone",
        text: {
            intro: "I collect moons — two are already mine, but I need two more to complete my collection. Bring them to me, and I'll gift you a MoonStone.",
            progress: "One moon shines in my hand, but the collection is still incomplete.",
            conclusion: "With two more moons, my collection is now whole. As promised, here's your MoonStone, glowing with celestial energy."
        }
    },
    DyeMaker: {
        name: "DyeMaker",
        sprite: "DyeMaker",
        category: 'crest',
        voice: "Female2",
        wants: ["EmptyBottle"],
        gives: "RedColor",
        text: {
            intro: "I’ve got the perfect red dye ready, but I need something to pour it into. Bring me an empty bottle, and I'll fill it with vibrant color.",
            progress: null,
            conclusion: "Ah, the perfect vessel! Here's your red dye, all bottled up and ready to use."
        }
    },
    SquirrelHungry: {
        name: "SquirrelHungry",
        sprite: "SquirrelHungry",
        category: "crest",
        voice: "Female2",
        wants: ["Acorn", "Acorn", "Acorn"],
        gives: "GoldCoin",
        text: {
            intro: "I'm starving! If you bring me three acorns, I'll reward you with a shiny gold coin. Fair trade for a full belly, right?",
            progress: "I'm getting closer to a feast, but I still need more acorns to fill me up!",
            conclusion: "Ahh, delicious! Now that I'm full, here's your gold coin, just like I promised."
        }
    },
    Surfer: {
        name: "Surfer",
        sprite: "Surfer",
        category: "crest",
        voice: "Female2",
        wants: ["SunScreen", "Towel"],
        gives: "Shell",
        text: {
            intro: "Just finished catching some waves, but now I need to dry off and protect my skin. Bring me a towel and some sunscreen, and I'll give you this beautiful shell I found.",
            progress: "I've got one thing, but I still need more before I can chill properly!",
            conclusion: "All set! Thanks for the help. Here's the shell I promised, straight from the ocean's shore."
        }
    },
    Venus: {
        name: "Venus",
        sprite: "Venus",
        category: "crest",
        voice: "Female",
        wants: ["SunScreen", "Towel"],
        gives: "Shell",
        text: {
            intro: "Emerging from the sea is lovely, but I could use some sunscreen and a towel to complete the look. Help me out, and I'll give you this stunning shell I found.",
            progress: "One thing's done, but I still need more before I'm ready to bask in the sun!",
            conclusion: "Perfect! Now I'm feeling fabulous. Here's the shell I promised, a gift from the ocean's depths."
        }
    },
    Tourist: {
        name: "Tourist",
        sprite: "Tourist",
        category: "crest",
        voice: "Female",
        wants: ["Shell", "Shell"],
        gives: "GoldKey",
        text: {
            intro: "I need two perfect shells to complete my - um, beach outfit. Help me out, and I'll give you this Gold Key. No space for it in this tight bikini, anyway!",
            progress: "One shell down, but I still need another to finish the look!",
            conclusion: "Thanks! Now my bra is  complete. Here's the Gold Key—trust me, I wasn't hiding it anywhere in this bikini."
        }
    },
    Rugrat: {
        name: "Rugrat",
        sprite: "Rugrat",
        category: 'crest',
        voice: "Female",
        wants: ["Wine", "Wine"],
        gives: "GoldCoin",
        text: {
            intro: "Bring me more wine, honey.",
            progress: "Yes. Like that. But more.",
            conclusion: "Here you go love. Buy youreself something. Now leave me."
        }
    },
};

const INTERACTION_SHRINE = {
    SpiderDefense: {
        name: "SpiderDefense",
        sprite: "SpiderDefense",
        category: 'crest',
        voice: "Female2",
        wants: ["Spider", "Spider", "Spider"],
        gives: "Attack",
        text: {
            intro: "Find my babies and I will teach you some defense skills.",
            progress: "Excellent, but I have more babies.",
            conclusion: "I have sharpened your heels. You are even more dangerous now.",
        }
    },
    Hearty: {
        name: "Hearty",
        sprite: "Hearty",
        category: 'crest',
        voice: "Princess",
        wants: ["GoldCoin"],
        gives: "HeartSkill",
        text: {
            intro: "For a special gold coin I can get my health improved here.",
            progress: null,
            conclusion: "Excellent. I am feeling so much better now.",
        }
    },
    Doctress: {
        name: "Doctress",
        sprite: "Doctress",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "HeartSkill",
        text: {
            intro: "In white coat's care, a cure I wield, your health to boost, if gold's unsealed.",
            progress: null,
            conclusion: "Gold received, now feel my art, increased health, a fresh new start."
        }
    },
    Gunny: {
        name: "Gunny",
        sprite: "Gunny",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "Got the guts but not the bite? Hand over a gold coin, and I'll show you how to attack with fury.",
            progress: null,
            conclusion: "With that coin, you've earned some power. Go forth and strike with ferocity!"
        }
    },
    Teacher: {
        name: "Teacher",
        sprite: "Teacher",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Magic",
        text: {
            intro: "Do you want to learn how to control fire? I can teach you.",
            progress: null,
            conclusion: "Burn them girl. Burn them."
        }
    },
    FireballTrainer: {
        name: "FireballTrainer",
        sprite: "FireballTrainer",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Magic",
        text: {
            intro: "Want to hurl fire with finesse? Give me a gold coin, and I'll turn you into a Fireball master.",
            progress: null,
            conclusion: "That coin just bought you some real heat. Your Fireballs are now hotter than ever!"
        }
    },
    YoungLeopardess: {
        name: "YoungLeopardess",
        sprite: "YoungLeopardess",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "Speed and strength are the key. Hand over a gold coin, and I'll sharpen your fighting instincts.",
            progress: null,
            conclusion: "With that coin, you've earned the ferocity of a leopard. Now go, and strike with precision and power!"
        }
    },
    Alpinist: {
        name: "Alpinist",
        sprite: "Alpinist",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "Climbing mountains isn't just about endurance. It iss about strength and precision. For a gold coin, I'll teach you to fight like you're scaling the highest peaks.",
            progress: null,
            conclusion: "With that coin, you've gained the strength and agility of a climber. Now scale your battles with ease!"
        }
    },
    Barbarian: {
        name: "Barbarian",
        sprite: "Barbarian",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "You want to hit harder? I can show you how. Hand over a gold coin, and I'll turn your fists into weapons.",
            progress: null,
            conclusion: "With that coin, you've earned some real power. Now go smash anything that stands in your way!"
        }
    },
    NymphWarrior: {
        name: "NymphWarrior",
        sprite: "NymphWarrior",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "Strength and grace flow through me. For a gold coin, I can teach you to fight with both.",
            progress: null,
            conclusion: "With that coin, you've earned the skills of a warrior. Now go and let your strength blossom in battle!"
        }
    },
    Horny: {
        name: "Horny",
        sprite: "Horny",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Magic",
        text: {
            intro: "I know fire, and I know magic. For a gold coin, I'll show you how to wield both with a little devilish flair.",
            progress: null,
            conclusion: "That coin just unlocked some serious power. Go ahead, play with fire if you dare."
        }
    },
    Horny2: {
        name: "Horny2",
        sprite: "Horny2",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Magic",
        text: {
            intro: "Looking for some fiery magic? For a gold coin, I'll teach you the secrets of flames and spells.",
            progress: null,
            conclusion: "With that coin, you've gained the power of fire. Now go burn bright - or burn them down!"
        }
    },
    Reaper: {
        name: "TheReaper",
        sprite: "TheReaper",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "For a mere gold coin, I'll teach you the ancient blood art of beheading. Trust me, it's worth every drop.",
            progress: null,
            conclusion: "With that coin, you now hold the power of the reaper. Your attacks will strike with deadly precision."
        }
    },
    BustyDemoness: {
        name: "BustyDemoness",
        sprite: "BustyDemoness",
        category: 'crest',
        voice: "Female2",
        wants: ["GoldCoin"],
        gives: "Magic",
        text: {
            intro: "Feeling magical today! For just a gold coin, I'll share some of my powerful secrets with you.",
            progress: null,
            conclusion: "That coin was well spent, darling. Now you're a little more magical, thanks to me!"
        }
    },
    RedHeadKnightessa: {
        name: "RedHeadKnightessa",
        sprite: "RedHeadKnightessa",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "I’m a master of the sword, and for a gold coin, I'll teach you how to wield it with violent precision.",
            progress: null,
            conclusion: "That coin's bought you some serious sword skills. Now go forth and let your enemies fear your blade!"
        }
    },
    


};

const INTERACTOR = {
    TheThrone: {
        name: "TheThrone",
        sprite: "TheThrone",
        category: 'crest',
        voice: "Princess",
        wants: ["Crown"],
        spriteChange: "PrincessOnThrone",
        action: "concludeGame",
        text: {
            intro: "At last, my journey's path leads here, To reclaim what's mine, the throne so dear.",
            progress: null,
            conclusion: "Through trials fierce, my spirit's quest, Now finds repose; my weary ass shall rest."
        }
    }
};

//container content
const CONTAINER_CONTENT_TYPES = { GOLD_ITEM_TYPE, SKILL_ITEM_TYPE, INTERACTION_ITEM };
const CONTAINER_CONTENT_LIST = stringifyObjectList(CONTAINER_CONTENT_TYPES);
const TRIGGER_ACTIONS = ["HOLE->toEmpty", "WALL->toEmpty", "EMPTY->toWall"];
const TRAP_ACTIONS = {
    Missile: [
        //"Fireball", 
        "Bounceball"
    ],
    Spawn: listObjectKeys(MONSTER_TYPE)
};
const TRAP_ACTION_LIST = listObjectKeys(TRAP_ACTIONS);
const POTION_TYPES = ["Red", "Blue"];
const POTION_TEXTURES = ["RedLiquid", "BlueLiquid"];
const POTION_MATERIAL = ["redShine", "blueShine"];
const POTION_TYPE = {};
for (let [index, potion] of POTION_TYPES.entries()) {
    POTION_TYPE[potion] = new PotionTypeDefinition(`${potion}Potion`, `${potion}Potion24`, potion.toLowerCase(), POTION_TEXTURES[index], MATERIAL[POTION_MATERIAL[index]]);
}

//lairs
const maxLair = 11;
const LairDecals = [];
for (let i = 1; i <= maxLair; i++) {
    LairDecals.push(`Lair${i.toString().padStart(2, "0")}`);
}
const LAIR_TYPE = {};
for (const L of LairDecals) {
    LAIR_TYPE[L] = {};
    LAIR_TYPE[L].sprite = L;
}
