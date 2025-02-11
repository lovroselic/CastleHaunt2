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

const GATE_TYPES = ["Open", "Closed", "Gold", "Silver", "Red", "Green", "Blue", "Up", "Down", "Emerald", "Purple", "Pearl", "Cyan", "Orange", "Pink"];
const KEY_TYPES = ["Gold", "Silver", "Red", "Green", "Blue", "Emerald", "Purple", "Pearl", "Cyan", "Orange", "Pink"];
const KEY_TEXTURES = ["Gold", "Silver", "RedMetal", "GreenMetal", "BlueMetal", "EmeraldTexture", "PurpleMetal", "PearlTexture", "CyanMetal", "OrangeMetal", "PinkMetal"];
const KEY_MATERIAL = ["gold", "silver", "redShine", "greenShine", "blueShine", "standard", "standard", "whiteShine", "cyanShine", "orangeShine", "pinkShine"];
const KEY_TYPE = {};

for (let [index, key] of KEY_TYPES.entries()) {
    KEY_TYPE[key] = new KeyTypeDefinition(key, `${key}Key`, key, KEY_TEXTURES[index], MATERIAL[KEY_MATERIAL[index]]);
}

const SCROLL_TYPE = ["Light", "Invisibility", "DrainMana", "Cripple", "BoostWeapon", "BoostArmor", "DestroyArmor", "DestroyWeapon",
    "Petrify", "MagicBoost", "Luck", "HalfLife", "Explode", "Radar",
    "Death", "MagicSupremacy", "DestroyOrbs"];

const SHRINE_TYPE = {
    GreyHeart: {
        name: "GreyHeart",
        sprite: "GreyHeart",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 2999,
        level: 3,
        text: "Battlefield healing and health upgrade. Only 2999 gold.",
        introduce: true,
        voice: "Female2",
    },
    BlueScrollSellerFluxCripple: {
        name: "BlueScrollSellerFluxCripple",
        sprite: "BlueScrollSellerFluxCripple",
        which: "Cripple",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 2000,
        voice: "FemaleLow2",
        text: "Cripple scroll - 2000 gold"
    },
    OrangeScrollSellerFluxInvisibility: {
        name: "OrangeScrollSellerFluxInvisibility",
        sprite: "OrangeScrollSellerFluxInvisibility",
        which: "Invisibility",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 3000,
        voice: "FemaleLow",
        text: "Invisibility scroll - 3000 gold"
    },
    GreenScrollSellerHalfLife: {
        name: "GreenScrollSellerHalfLife",
        sprite: "GreenScrollSellerHalfLife",
        which: "HalfLife",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 3000,
        voice: "Female2",
        text: "HalfLife scroll - 3000 gold"
    },
    WhiteSorceress: {
        name: "WhiteSorceress",
        sprite: "WhiteSorceress",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 2999,
        level: 5,
        text: "Extensive training in Apparitias magic weaknesses, only 2999 gold. Yes, it is expensive but it is for your survival. Death is cheap.",
        introduce: true,
        voice: "FemaleLow2",
    },
    WolverineTrain: {
        name: "WolverineTrain",
        sprite: "WolverineTrain",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 999,
        level: 2,
        text: "Clawing your way up the ladder. Nice price.",
        introduce: true,
        voice: "FemaleLow",
    },
    PurpleCorset: {
        name: "PurpleCorset",
        sprite: "PurpleCorset",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 999,
        level: 2,
        text: "Secrets of the heart for absurdly low price.",
        introduce: true,
        voice: "Female2",
    },
    BlondeDomme1: {
        name: "BlondeDomme1",
        sprite: "BlondeDomme1",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 999,
        level: 1,
        text: "Course in magical deception. Only 999 gold.",
        introduce: true,
        voice: "Female",
    },
    ShesellsSeaShells: {
        name: "ShesellsSeaShells",
        sprite: "ShesellsSeaShells",
        category: 'crest',
        interactionCategory: 'interaction_item',
        inventorySprite: "Shell",
        price: 666,
        text: "She sells sea shells on a sea shore. Yep, that's me. Only 666 gold.",
        introduce: true,
        voice: "Female2",
    },
    Drummer: {
        name: "Drummer",
        sprite: "Drummer",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 999,
        level: 1,
        text: "I'll show you how to beat someone with a stick. Only 999 gold.",
        introduce: true,
        voice: "FemaleLow2",
    },
    BassPlayer: {
        name: "BassPlayer",
        sprite: "BassPlayer",
        category: 'crest',
        interactionCategory: 'interaction_item',
        inventorySprite: "GuitarPick",
        price: 666,
        text: "I play with fingers. I have a pick to spare, for a meagre 666 gold.",
        introduce: true,
        voice: "FemaleLow",
    },
    Nurse: {
        name: "Nurse",
        sprite: "Nurse",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 999, //change
        level: 3,
        text: "Last chance for some cheap aid before you go deeper. Special price for you my Princess. Only 999 gold.", //
        introduce: true,
        voice: "Female2",
    },
    BlackBeretHeart: {
        name: "BlackBeretHeart",
        sprite: "BlackBeretHeart",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 4000,
        level: 3,
        text: "Deep healing for 4000 gold.",
        introduce: true,
        voice: "Female",
    },
    HoleDomme: {
        name: "HoleDomme",
        sprite: "HoleDomme",
        category: 'crest',
        interactionCategory: 'interaction_item',
        inventorySprite: "PickAxe",
        price: 666,
        text: "Pickaxe from Deep Down, nice price for you my friend. Only 666 gold.",
        introduce: true,
        voice: "Female",
    },
    HandBagSeller: {
        name: "HandBagSeller",
        sprite: "HandBagSeller",
        category: 'crest',
        interactionCategory: 'interaction_item',
        inventorySprite: "WhiteHandbag",
        price: 666,
        text: "White leather handbag for 666 gold. Do we want this?",
        introduce: true,
        voice: "Princess",
    },
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
    PrincessDesertHeart: {
        name: "PrincessDesertHeart",
        sprite: "PrincessDesertHeart",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 4000,
        level: 1,
    },
    PrincessDesertDagger: {
        name: "PrincessDesertDagger",
        sprite: "PrincessDesertDagger",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 4000,
        level: 2,
    },
    PrincessDesertFire: {
        name: "PrincessDesertFire",
        sprite: "PrincessDesertFire",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 4000,
        level: 2,
    },
    PrincessCryptHealth: {
        name: "PrincessCryptHealth",
        sprite: "PrincessCryptHealth",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 5000,
        level: 5,
    },
    PrincessCryptSword: {
        name: "PrincessDesertDagger",
        sprite: "PrincessCryptSword",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 5000,
        level: 5,
    },
    PrincessCryptFireball: {
        name: "PrincessCryptFireball",
        sprite: "PrincessCryptFireball",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 5000,
        level: 5,
    },
    PrincessSpringHeart: {
        name: "PrincessSpringHeart",
        sprite: "PrincessSpringHeart",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 5000,
        level: 5,
    },
    PrincessShield: {
        name: "PrincessShield",
        sprite: "PrincessShield",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 5000,
        level: 5,
    },
    PrincessSpringOrb: {
        name: "PrincessSpringOrb",
        sprite: "PrincessSpringOrb",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 5000,
        level: 5,
    },
    PrincessMercyfulHeart: {
        name: "PrincessMercyfulHeart",
        sprite: "PrincessMercyfulHeart",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 2500,
        level: 3,
        text: "2500 gold for health upgrade. I can't afford not to buy it. My life is at stake.",
        introduce: true,
        voice: "Princess",
    },
    PrincessGun: {
        name: "PrincessGun",
        sprite: "PrincessGun",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 2500,
        level: 3,
        text: "2500 gold for attack and defense upgrade. I can't afford not to buy it. My life is at stake.",
        introduce: true,
        voice: "Princess",
    },
    PrincessThroneBall: {
        name: "PrincessThroneBall",
        sprite: "PrincessThroneBall",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 2500,
        level: 3,
        text: "2500 gold for magic upgrade. I can't afford not to buy it. My life is at stake.",
        introduce: true,
        voice: "Princess",
    },
};

const ORACLE_TYPE = {
    Thinker: {
        name: "Thinker",
        sprite: "Thinker",
        category: 'crest',
        voice: "Female",
        text: "Don't you wonder? You went west from throne room, and down many times, and west even more times, and now you are back in the throne room. So even our world is not flat? Fucking hell.",
        interactionCategory: "oracle",
    },
    LeatherCutie2: {
        name: "LeatherCutie2",
        sprite: "LeatherCutie2",
        category: 'crest',
        voice: "Female2",
        text: "I think we will need another game in which you, the Princess will need to go to the Hauntessa and haunt her ass to oblivion. What do you think?",
        interactionCategory: "oracle",
    },
    LeatherCutie: {
        name: "LeatherCutie",
        sprite: "LeatherCutie",
        category: 'crest',
        voice: "Female",
        text: "Hey. Don't forget to pick up the crown and reclaim the throne. It's your destiny.",
        interactionCategory: "oracle",
    },
    Rubberella10: {
        name: "Rubberella10",
        sprite: "Rubberella10",
        category: 'crest',
        voice: "FemaleLow2",
        text: "Lovro also wrote the music. You have to love the guy. He made us feel alive. At least while you play the game.",
        interactionCategory: "oracle",
    },
    SaraFrost: {
        name: "SaraFrost",
        sprite: "SaraFrost",
        category: 'crest',
        voice: "Female2",
        text: "Lovro wrote all the code. We are kind of proud of him. But he is a bit of a control freak.",
        interactionCategory: "oracle",
    },
    WinterDelight: {
        name: "WinterDelight",
        sprite: "WinterDelight",
        category: 'crest',
        voice: "FemaleLow",
        text: "We were created using different AI models, Stable Diffusion, Ideogram and FLux. We are not real. We are just a dream.",
        interactionCategory: "oracle",
    },
    CelebratoryDrink: {
        name: "CelebratoryDrink",
        sprite: "CelebratoryDrink",
        category: 'crest',
        voice: "Female",
        text: "Congratulations Princess, what a sweet victory. Let's have a drink to celebrate. Apparitias have run away in fear.",
        interactionCategory: "oracle",
    },
    NinjaID: {
        name: "NinjaID",
        sprite: "NinjaID",
        category: 'crest',
        voice: "FemaleLow2",
        text: "Running blindly through the poisonous green fireball shower? I can do it. But you shouldn't. It is not healthy, allegedly.",
        interactionCategory: "oracle",
    },
    BasiliskTest: {
        name: "BasiliskTest",
        sprite: "BasiliskTest",
        category: 'crest',
        voice: "FemaleLow",
        text: "If you cannot kill basilisk with a single fireball, you are not ready.",
        interactionCategory: "oracle",
    },
    Amanita: {
        name: "Amanita",
        sprite: "Amanita",
        category: 'crest',
        voice: "Female2",
        text: "Don't eat poisonous mushrooms. They are bad for your health, silly.",
        interactionCategory: "oracle",
    },
    LadyOnTheTop: {
        name: "LadyOnTheTop",
        sprite: "LadyOnTheTop",
        category: 'crest',
        voice: "Female",
        text: "I like to be on the top. How about you, Princess?",
        interactionCategory: "oracle",
    },
    Galacticass: {
        name: "Galacticass",
        sprite: "Galacticass",
        category: 'crest',
        voice: "Apparitia",
        text: "I'm not Apparitia, I'm Galacticass. I'm here to help you. I'm not like the others. Did you fell for it?",
        interactionCategory: "oracle",
    },
    FarmerWife: {
        name: "FarmerWife",
        sprite: "FarmerWife",
        category: 'crest',
        voice: "Female2",
        text: "But some of those gold skeletons are incredibly rich. Maybe You should hunt them for gold?",
        interactionCategory: "oracle",
    },
    FarrmerDaughter: {
        name: "FarrmerDaughter",
        sprite: "FarrmerDaughter",
        category: 'crest',
        voice: "Female",
        text: "Are you sure you want to go forward? This area has been overrun by Apparitias, growing Gold Skeletons for their army.",
        interactionCategory: "oracle",
    },
    NylonDomme: {
        name: "NylonDomme",
        sprite: "NylonDomme",
        category: 'crest',
        voice: "FemaleLow",
        text: "Are you sure you are ready to face Hauntessa Spookish? Are you trained enough?",
        interactionCategory: "oracle",
    },
    FishnetDomme: {
        name: "FishnetDomme",
        sprite: "FishnetDomme",
        category: 'crest',
        voice: "FemaleLow2",
        text: "After you enter the crypt, you will not be able to save the game until Hauntessa Spookish is defeated.",
        interactionCategory: "oracle",
    },
    BlondeCutie: {
        name: "BlondeCutie",
        sprite: "BlondeCutie",
        category: 'crest',
        voice: "FemaleLow2",
        text: "Boss monsters are immune to some powerful scrolls. The warrant more personal engagement.",
        interactionCategory: "oracle",
    },
    ChastityDomme: {
        name: "ChastityDomme",
        sprite: "ChastityDomme",
        category: 'crest',
        voice: "FemaleLow",
        text: "Be careful when fighting with bosses and using scrolls. Bosses are called bosses for a reason.",
        interactionCategory: "oracle",
    },
    BlondeDomme2: {
        name: "BlondeDomme2",
        sprite: "BlondeDomme2",
        category: 'crest',
        voice: "Female2",
        text: "Explore to get more or run without fun?",
        interactionCategory: "oracle",
    },
    RecliningDomme: {
        name: "RecliningDomme",
        sprite: "RecliningDomme",
        category: 'crest',
        voice: "Female",
        text: "Killing a crippled monster which cannot cast poisonous bounce balls is a very stupid strategy. ",
        interactionCategory: "oracle",
    },
    RedMermaid: {
        name: "RedMermaid",
        sprite: "RedMermaid",
        category: 'crest',
        voice: "Female",
        text: "I hear she wants the same red outfit as I have? Does that make me an influencer? Or merfluencer?",
        interactionCategory: "oracle",
    },
    CuteDomme: {
        name: "CuteDomme",
        sprite: "CuteDomme",
        category: 'crest',
        voice: "Female",
        text: "You know that reloading game will reset all lairs to ther initial spawning rates? So all your killing will be in vain?",
        interactionCategory: "oracle",
    },
    SpiderOracle: {
        name: "SpiderOracle",
        sprite: "SpiderOracle",
        category: 'crest',
        voice: "FemaleLow",
        text: "Not so long ago, a tiny green baby spider went past.",
        interactionCategory: "oracle",
    },
    SeaGodess: {
        name: "SeaGodess",
        sprite: "SeaGodess",
        category: 'crest',
        voice: "FemaleLow",
        text: "If I were you, I would rather be on a beach than playing this game.",
        interactionCategory: "oracle",
    },
    BitchBother: {
        name: "BitchBother",
        sprite: "BitchBother",
        category: 'crest',
        voice: "Female",
        text: "I am just a tourist. Don't bother me.",
        interactionCategory: "oracle",
    },
    GothicGuitarist: {
        name: "GothicGuitarist",
        sprite: "GothicGuitarist",
        category: 'crest',
        voice: "Female2",
        text: "Not all members of the group are famous. I just play guitar. But this tour turned strange.",
        interactionCategory: "oracle",
    },
    WonderfulChest: {
        name: "WonderfulChest",
        sprite: "WonderfulChest",
        category: 'crest',
        voice: "Female",
        text: "Trivia: this level was a sandbox to update the fragment shader to see all those beautiful shadows.",
        interactionCategory: "oracle",
    },
    Emerging: {
        name: "Emerging",
        sprite: "Emerging",
        category: 'crest',
        voice: "FemaleLow2",
        text: "You realize that you need only one pickaxe, right?",
        interactionCategory: "oracle",
    },
    ShortBlackDress: {
        name: "ShortBlackDress",
        sprite: "ShortBlackDress",
        category: 'crest',
        voice: "Female2",
        text: "What do you say to the beer at the end of the corridor? Yes, please.",
        interactionCategory: "oracle",
    },
    BeatchBeachBitch: {
        name: "BeatchBeachBitch",
        sprite: "BeatchBeachBitch",
        category: 'crest',
        voice: "FemaleLow",
        text: "Are you still playing this silly game? You ought to go to the beach. Just quit, and let Hauntessa Spookish win.",
        interactionCategory: "oracle",
    },
    DominatrixBarn: {
        name: "DominatrixBarn",
        sprite: "DominatrixBarn",
        category: 'crest',
        voice: "Female",
        text: "Never underestimate the power of the farm animals. Watch your back. Even now.",
        interactionCategory: "oracle",
    },
    CatBabe5: {
        name: "CatBabe5",
        sprite: "CatBabe5",
        category: 'crest',
        voice: "StrangeFemale",
        text: "Let's hunt some chicken. Meeow.",
        interactionCategory: "oracle",
    },
    CatBabe4: {
        name: "CatBabe4",
        sprite: "CatBabe4",
        category: 'crest',
        voice: "StrangeFemale",
        text: "Are you a pussy? I am.",
        interactionCategory: "oracle",
    },
    CatBabe3: {
        name: "CatBabe3",
        sprite: "CatBabe3",
        category: 'crest',
        voice: "StrangeFemale",
        text: "Talk meeow to meeow boss.",
        interactionCategory: "oracle",
    },
    CatBabe2: {
        name: "CatBabe2",
        sprite: "CatBabe2",
        category: 'crest',
        voice: "StrangeFemale",
        text: "Meeow the fuck off.",
        interactionCategory: "oracle",
    },
    CatBabe1: {
        name: "CatBabe1",
        sprite: "CatBabe1",
        category: 'crest',
        voice: "StrangeFemale",
        text: "Meeow. Meeow?",
        interactionCategory: "oracle",
    },
    CowOracle: {
        name: "CowOracle",
        sprite: "CowOracle",
        category: 'crest',
        voice: "Strange",
        text: "Mooo off.",
        interactionCategory: "oracle",
    },
    SittingSerpent2: {
        name: "SittingSerpent2",
        sprite: "SittingSerpent2",
        category: 'crest',
        voice: "Female2",
        text: "Nobody knows which Domme is will with which skills. But you can only please one.",
        interactionCategory: "oracle",
    },
    GlassOrCan: {
        name: "GlassOrCan",
        sprite: "GlassOrCan",
        category: 'crest',
        voice: "FemaleLow2",
        text: "Glass or can, a beer is a beer, but surely not for the miners here.",
        interactionCategory: "oracle",
    },
    StandingDarkPriestess: {
        name: "StandingDarkPriestess",
        sprite: "StandingDarkPriestess",
        category: 'crest',
        voice: "Female",
        text: "Welcome to the hall of Master Mistresses. Here you can train your skills. If you can afford it.",
        interactionCategory: "oracle",
    },
    SittingSerpent: {
        name: "SittingSerpent",
        sprite: "SittingSerpent",
        category: 'crest',
        voice: "Female",
        text: "Enjoy the respite. Once you unlock the Golden Door, things will get brutal.",
        interactionCategory: "oracle",
    },
    StandingSerpent: {
        name: "StandingSerpent",
        sprite: "StandingSerpent",
        category: 'crest',
        voice: "Female",
        text: "Don't be greedy. Take only what you need. Or else.",
        interactionCategory: "oracle",
    },
    Angeless: {
        name: "Angeless",
        sprite: "Angeless",
        category: 'crest',
        voice: "Female2",
        text: "Girl, you should be invisible to get that key.",
        interactionCategory: "oracle",
    },
    ScrollOracle: {
        name: "ScrollOracle",
        sprite: "ScrollOracle",
        category: 'crest',
        voice: "Female2",
        text: "Be carefull, don't use scrolls in vain. They are in limited supply.",
        interactionCategory: "oracle",
    },
    Barmaid: {
        name: "Barmaid",
        sprite: "Barmaid",
        category: 'crest',
        voice: "Female",
        text: "Yes yes. It's a craft beer. Bitchcraft beer.",
        interactionCategory: "oracle",
    },
    Baker: {
        name: "Baker",
        sprite: "Baker",
        category: 'crest',
        voice: "Female2",
        text: "Of course cakes are healthy. Natural antidepressants.",
        interactionCategory: "oracle",
    },
    XmasSnake: {
        name: "XmasSnake",
        sprite: "XmasSnake",
        category: 'crest',
        voice: "Female2",
        text: "Obviously you were a good girl Princess. Look at all the presents.",
        interactionCategory: "oracle",
    },
    RootingDomme: {
        name: "RootingDomme",
        sprite: "RootingDomme",
        category: 'crest',
        voice: "Female",
        text: "We are collecting tiny contributions for your success, Princess. Everybody is rooting for you. I mean, almost everybody. Some, that is.",
        interactionCategory: "oracle",
        price: -1,
    },
    BlacksmistressApprentice: {
        name: "BlacksmistressApprentice",
        sprite: "BlacksmistressApprentice",
        category: 'crest',
        voice: "Female2",
        text: "For GoldSteel you need four metals. Heavy metals. Including Uranium.",
        interactionCategory: "oracle",
    },
    RubberDoll: {
        name: "RubberDoll",
        sprite: "RubberDoll",
        category: 'crest',
        voice: "Female2",
        text: "I have heard Keysa is looking for Purple Tear. But this gem is not found tin the nature. It must be made with magic.",
        interactionCategory: "oracle",
    },
    Masked: {
        name: "Masked",
        sprite: "Masked",
        category: 'crest',
        voice: "Female",
        text: "Be smart, search for shortcuts.",
        interactionCategory: "oracle",
    },
    RuberellaDontshoot: {
        name: "RuberellaDontshoot",
        sprite: "RuberellaDontshoot",
        category: 'crest',
        voice: "Female2",
        text: "Don't cast fireballs with your inventory full. Or you'll feel like a fool.",
        interactionCategory: "oracle",
    },
    Morana: {
        name: "Morana",
        sprite: "Morana",
        category: 'crest',
        voice: "Female2",
        text: "Let's have a moment of silence to remember GhostFace .... Ok, go on now.",
        interactionCategory: "oracle",
    },
    RedCutie: {
        name: "RedCutie",
        sprite: "RedCutie",
        category: 'crest',
        voice: "Female",
        text: "I was stealing sheep from my sister. But I lost them then.",
        interactionCategory: "oracle",
    },
    ButterWasp: {
        name: "ButterWasp",
        sprite: "ButterWasp",
        category: 'crest',
        voice: "Female2",
        text: "If your inventory is full you can't pick anything. Not even your orbs. Be careful.",
        interactionCategory: "oracle",
    },
    PacGirl: {
        name: "PacGirl",
        sprite: "PacGirl",
        category: 'crest',
        voice: "Female",
        text: "Don't you feel like PacMan collecting all those gold cubes?",
        interactionCategory: "oracle",
    },
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
        text: "Yes, this is my bed, but I do not have time to sleep now. Something is off.",
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
        text: "If you don't want to get transparent, you should eat some cake. That will make you more full, fool.",
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
        sprite: "Bathy2",
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
    ApparitiaBored2: {
        name: "ApparitiaBored2",
        sprite: "ApparitiaBored2",
        category: 'crest',
        voice: "Apparitia",
        text: "I am bored, Princess. Please challenge us. We are waiting.",
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
    ApparitiaHorny: {
        name: "ApparitiaHorny",
        sprite: "ApparitiaHorny",
        category: 'crest',
        voice: "Apparitia",
        text: "So you prefer Horny girls and their magical approach?",
        interactionCategory: "oracle",
    },
    ApparitiaDangerous: {
        name: "ApparitiaDangerous",
        sprite: "ApparitiaDangerous",
        category: 'crest',
        voice: "Apparitia",
        text: "So you prefer Dangerous girls and their violent approach?",
        interactionCategory: "oracle",
    },
    ApparitiaPiss: {
        name: "ApparitiaPiss",
        sprite: "ApparitiaPiss",
        category: 'crest',
        voice: "Apparitia",
        text: "Ours is a religion of piss. We will piss on your grave.",
        interactionCategory: "oracle",
    },
    ApparitiaBanker: {
        name: "ApparitiaBanker",
        sprite: "ApparitiaBanker",
        category: 'crest',
        voice: "Apparitia",
        text: "I am a personal banker of Her Majesty, Hauntessa Spookish.",
        interactionCategory: "oracle",
        price: -1,
    },
    ApparitiaProgress: {
        name: "ApparitiaProgress",
        sprite: "ApparitiaProgress",
        category: 'crest',
        voice: "Apparitia",
        text: "Your progress is slow Princess. We are winning.",
        interactionCategory: "oracle",
    },
    ApparitiaGold: {
        name: "ApparitiaGold",
        sprite: "ApparitiaGold",
        category: 'crest',
        voice: "Apparitia",
        text: "We will take all your gold, Princess. You will be poor before you die.",
        interactionCategory: "oracle",
    },
    ApparitiaDemolition: {
        name: "ApparitiaDemolition",
        sprite: "ApparitiaDemolition",
        category: 'crest',
        voice: "Apparitia",
        text: "Did you figure this out by yourself? Maybe you are not that stupid.",
        interactionCategory: "oracle",
    },
    ApparitiaWhat: {
        name: "ApparitiaWhat",
        sprite: "ApparitiaWhat",
        category: 'crest',
        voice: "Apparitia",
        text: "What will it take to defeat you? More monsters? You've got it. You'll get it.",
        interactionCategory: "oracle",
    },
    ApparitiaXmas: {
        name: "ApparitiaXmas",
        sprite: "ApparitiaXmas",
        category: 'crest',
        voice: "Apparitia",
        text: "Do you know what you'll get for Christmas from me? A dagger. Into the heart. Hahahaha.",
        interactionCategory: "oracle",
    },
    ApparitiaBeer: {
        name: "ApparitiaBeer",
        sprite: "ApparitiaBeer",
        category: 'crest',
        voice: "Apparitia",
        text: "Do you really really think all those cakes and beer is good for you? You'll get fat.",
        interactionCategory: "oracle",
    },
    ApparitiaGauntlet: {
        name: "ApparitiaGauntlet",
        sprite: "ApparitiaGauntlet",
        category: 'crest',
        voice: "Apparitia",
        text: "Talk to me. Take your time, while a little GhostFace minions shower your back with green orbs. Hahahahahahaha.",
        interactionCategory: "oracle",
    },
    ApparitiaTrust: {
        name: "ApparitiaTrust",
        sprite: "ApparitiaTrust",
        category: 'crest',
        voice: "Apparitia",
        text: "Don't trust the serpent. Trust me, hehehe. Just take all.",
        interactionCategory: "oracle",
    },
    ApparitiaOffensive: {
        name: "ApparitiaOffensive",
        sprite: "ApparitiaOffensive",
        category: 'crest',
        voice: "Apparitia",
        text: "You came too far. But we, the Apparitias, are preparing the offensive in the name of her majesty, Hauntessa Spookish.",
        interactionCategory: "oracle",
    },
    ApparitiaTemple: {
        name: "ApparitiaTemple",
        sprite: "ApparitiaTemple",
        category: 'crest',
        voice: "Apparitia",
        text: "We have invaded your temples. You won't be safe anywhere from our monster infestation. We even made some in your image.",
        interactionCategory: "oracle",
    },
    ApparitiaMiner: {
        name: "ApparitiaMiner",
        sprite: "ApparitiaMiner",
        category: 'crest',
        voice: "Apparitia",
        text: "We are mining your gold, Princess. And faster then your miners. Hahahahaha.",
        interactionCategory: "oracle",
    },
    ApparitiaSuspicious: {
        name: "ApparitiaSuspicious",
        sprite: "ApparitiaSuspicious",
        category: 'crest',
        voice: "Apparitia",
        text: "Report all traitorous Apparitias to her majesty Hauntessa Spookish. Oh, it's you. The murderer. We're on to you. Just wait.",
        interactionCategory: "oracle",
    },
    ApparitiaCat: {
        name: "ApparitiaCat",
        sprite: "ApparitiaCat",
        category: 'crest',
        voice: "Apparitia",
        text: "I am under cover. Nobody recognizes me. Hahaha. How smart spy I am.",
        interactionCategory: "oracle",
    },
    ApparitiaNorthPass: {
        name: "ApparitiaNorthPass",
        sprite: "ApparitiaNorthPass",
        category: 'crest',
        voice: "Apparitia",
        text: "Where were you Princess so long. We are already preparing for the final battle. Hahaha.",
        interactionCategory: "oracle",
    },
    ApparitiaJustMe: {
        name: "ApparitiaJustMe",
        sprite: "ApparitiaJustMe",
        category: 'crest',
        voice: "Apparitia",
        text: "Just me, trying to kill you. Disappointed?",
        interactionCategory: "oracle",
    },
    ApparitiaPacMan: {
        name: "ApparitiaPacMan",
        sprite: "ApparitiaPacMan",
        category: 'crest',
        voice: "Apparitia",
        text: "Don't you see that you are treated like a PacMan? Hahaha. Collect this. Collect that. Collect all that gold. Give up. Just surrender.",
        interactionCategory: "oracle",
    },
    ApparitiaZing: {
        name: "ApparitiaZing",
        sprite: "ApparitiaZing",
        category: 'crest',
        voice: "Apparitia",
        text: "I so love the sweet zing of the green orb's bounce, and the green light emerging, just before it hits Princess. Hahaha.",
        interactionCategory: "oracle",
    },
    ApparitiaOutOfFashion: {
        name: "ApparitiaOutOfFashion",
        sprite: "ApparitiaOutOfFashion",
        category: 'crest',
        voice: "Apparitia",
        text: "I started to learn some things about colors in fashion from your creator. I will still kill you, though.",
        interactionCategory: "oracle",
    },
    ApparitiaHot: {
        name: "ApparitiaHot",
        sprite: "ApparitiaHot",
        category: 'crest',
        voice: "Apparitia",
        text: "So damned hot here. I can't even think about doing evil stuff. Well, I will anyway. Hahaha.",
        interactionCategory: "oracle",
    },
    ApparitiaBeach: {
        name: "ApparitiaBeach",
        sprite: "ApparitiaBeach",
        category: 'crest',
        voice: "Apparitia",
        text: "We shall fight on the beaches. We shall fight against the biches. We shall fight on the upper levels. However hot our outfits may be. We shall never surrender. Or will we?",
        interactionCategory: "oracle",
    },
    ApparitiaHidden: {
        name: "ApparitiaHidden",
        sprite: "ApparitiaHidden",
        category: 'crest',
        voice: "Apparitia",
        text: "You are so smart. You find all the hidden places. Or are you?",
        interactionCategory: "oracle",
    },
    ApparitiaPolka: {
        name: "ApparitiaPolka",
        sprite: "ApparitiaPolka",
        category: 'crest',
        voice: "Apparitia",
        text: "When you will be completely defeated, we will make everybody listen to polka. Muhahaha. No greater punishment.",
        interactionCategory: "oracle",
    },
    ApparitiaSaboteur: {
        name: "ApparitiaSaboteur",
        sprite: "ApparitiaSaboteur",
        category: 'crest',
        voice: "Apparitia",
        text: "I came here to sabotage your space program. You do have space program, right? No? Fuck.",
        interactionCategory: "oracle",
    },
    ApparitiaAngelDemon: {
        name: "ApparitiaAngelDemon",
        sprite: "ApparitiaAngelDemon",
        category: 'crest',
        voice: "Apparitia",
        text: "You thought that I am an agel undercover? No, I'm just a bitch, here to fuck you.",
        interactionCategory: "oracle",
    },
    ApparitiaGalactic: {
        name: "ApparitiaGalactic",
        sprite: "ApparitiaGalactic",
        category: 'crest',
        voice: "Apparitia",
        text: "We come from all the parts of galaxy. You are doomed, Princess.",
        interactionCategory: "oracle",
    },
    ApparitiaEngineer: {
        name: "ApparitiaEngineer",
        sprite: "ApparitiaEngineer",
        category: 'crest',
        voice: "Apparitia",
        text: "We are breeding new class of colorful skeletons for a war against you. Aren't they pretty? And deadly?",
        interactionCategory: "oracle",
    },
    ApparitiaDropDead: {
        name: "ApparitiaDropDead",
        sprite: "ApparitiaDropDead",
        category: 'crest',
        voice: "Apparitia",
        text: "Why don't you just drop dead. You are too relentless. We though we would have won by now. You probably want Lovro to make another game about you, you sleek bitch?",
        interactionCategory: "oracle",
    },
    ApparitiaHopeless: {
        name: "ApparitiaHopeless",
        sprite: "ApparitiaHopeless",
        category: 'crest',
        voice: "Apparitia",
        text: "You found this place. Obviously you are not so hopeless as we thought.",
        interactionCategory: "oracle",
    },
    ApparitiaBlood: {
        name: "ApparitiaBlood",
        sprite: "ApparitiaBlood",
        category: 'crest',
        voice: "Apparitia",
        text: "Still following the trail of blood, Princess? Soon yours will be spilt. Muhahahaha.",
        interactionCategory: "oracle",
    },
    ApparitiaMajor: {
        name: "ApparitiaMajor",
        sprite: "ApparitiaMajor",
        category: 'crest',
        voice: "Apparitia",
        text: "Don't you like are shiny Golden Skeletons? They will GreenOrb you to death.",
        interactionCategory: "oracle",
    },
    ApparitiaSword: {
        name: "ApparitiaSword",
        sprite: "ApparitiaSword",
        category: 'crest',
        voice: "Apparitia",
        text: "Are you preparing for the final battle? We are waiting for you. Come Princess.",
        interactionCategory: "oracle",
    },
    ApparitiaGun: {
        name: "ApparitiaGun",
        sprite: "ApparitiaGun",
        category: 'crest',
        voice: "Apparitia",
        text: "Do you really think you have a chance againts us? Armed with tiny fireballs and heels?",
        interactionCategory: "oracle",
    },
    ApparitiaGreenOrb: {
        name: "ApparitiaGreenOrb",
        sprite: "ApparitiaGreenOrb",
        category: 'crest',
        voice: "Apparitia",
        text: "I am the famous inventor of the Green Bouncing Orbs. Do you like them so far? Getting them in your back? Or face?",
        interactionCategory: "oracle",
    },
    ApparitiaPretty: {
        name: "ApparitiaPretty",
        sprite: "ApparitiaPretty",
        category: 'crest',
        voice: "Apparitia",
        text: "The call me Pretty. Because I am pretty deadly. Hahahaha.",
        interactionCategory: "oracle",
    },
    ApparitiaGoldSword: {
        name: "ApparitiaGoldSword",
        sprite: "ApparitiaGoldSword",
        category: 'crest',
        voice: "Apparitia",
        text: "Be afraid. Be very afraid. I have the Golden Sword. And I am not afraid to use it.",
        interactionCategory: "oracle",
    },
    ApparitiaThrone: {
        name: "ApparitiaThrone",
        sprite: "ApparitiaThrone",
        category: 'crest',
        voice: "Apparitia",
        text: "Maybe Hauntessa will let me rule your castle. I am already practicing.",
        interactionCategory: "oracle",
    },
    ApparitiaSitting: {
        name: "ApparitiaSitting",
        sprite: "ApparitiaSitting",
        category: 'crest',
        voice: "Apparitia",
        text: "I can kill you with my stare. Right? No? Ok, my weapons then.",
        interactionCategory: "oracle",
    },
    ApparitiaAirforce: {
        name: "ApparitiaAirforce",
        sprite: "ApparitiaAirforce",
        category: 'crest',
        voice: "Apparitia",
        text: "Behold! Me. A commander of the Hauntingsphere's Air force. Loyal general of Her Majesty Hauntessa Spookish.",
        interactionCategory: "oracle",
    },
    ApparitiaShades: {
        name: "ApparitiaShades",
        sprite: "ApparitiaShades",
        category: 'crest',
        voice: "Apparitia",
        text: "I am not Apparitia. See? No red eyes. Hahahahaha.",
        interactionCategory: "oracle",
    },
    HauntessaSpookish: {
        name: "HauntessaSpookish",
        sprite: "HauntessaSpookish",
        category: 'crest',
        voice: "Hauntessa",
        text: "Did you think I would come in person? I always send my minions. Have you met my cousin, GhostFace the Fourth? Even if you defeat them this time, I will haunt you forever.",
        interactionCategory: "oracle",
    },
    ApparitiaHurt: {
        name: "ApparitiaHurt",
        sprite: "ApparitiaHurt",
        category: 'crest',
        voice: "Apparitia",
        text: "No Apparitia was hurt in the making of this game ... What a crock of lies, Lovro. I have broken a nail! See you in the next game.",
        interactionCategory: "oracle",
    },
};

const GOLD_ITEM_TYPE = {
    GoldSphere: {
        name: "GoldSphere",
        category: "gold",
        element: "BALL",
        scale: 1.0 / 2 ** 5,
        glueToFloor: true,
        texture: "Gold",
        minVal: 100,
        maxVal: 150,
        value: 150,
        material: MATERIAL.gold,
    },
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
    BlueGem: {
        name: "BlueGem",
        category: "gold",
        element: "GEM",
        scale: 1.1 / 2 ** 4,
        glueToFloor: true,
        texture: "BlueMetal",
        minVal: 500,
        maxVal: 1000,
        value: 1000,
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
        material: MATERIAL.standardShine,
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
        material: MATERIAL.standardShine,
        rotateToNorth: Math.PI,
    },
    Barrel: {
        name: "Barrel",
        category: "chest",
        element: "BARREL",
        scale: 1.15 / 2 ** 1,
        glueToFloor: true,
        texture: "Barrel",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    Barrel2: {
        name: "Barrel2",
        category: "chest",
        element: "BARREL2",
        scale: 1.8 / 2 ** 4,
        glueToFloor: true,
        texture: "Barell2",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    Barell3: {
        name: "Barell3",
        category: "chest",
        element: "BARELL3",
        scale: 1.0 / 2 ** 8,
        glueToFloor: true,
        texture: "Barell3",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    Crate: {
        name: "Crate",
        category: "chest",
        element: "CRATE",
        scale: 1.25 / 2 ** 3,
        glueToFloor: true,
        texture: "Crate",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    Crate2: {
        name: "Crate2",
        category: "chest",
        element: "CRATE2",
        scale: 1.9 / 2 ** 5,
        glueToFloor: true,
        texture: "Crate2",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    Crate3: {
        name: "Crate3",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.45 / 2 ** 4,
        glueToFloor: true,
        texture: "Crate3",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    BoringBox: {
        name: "BoringBox",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.0 / 2 ** 4,
        glueToFloor: true,
        texture: "BoringWood",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    LongBox: {
        name: "LongBox",
        category: "chest",
        element: "LONG_BOX",
        scale: 1.6 / 2 ** 3,
        glueToFloor: true,
        texture: "LongBox",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    WoodenCrate: {
        name: "WoodenCrate",
        category: "chest",
        element: "WOODEN_CRATE",
        scale: 1.0 / 2 ** 3,
        glueToFloor: true,
        texture: "WoodenCrate",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    FragileCrate: {
        name: "FragileCrate",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.25 / 2 ** 4,
        glueToFloor: true,
        texture: "CrateFragile",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    Box: {
        name: "Box",
        category: "chest",
        element: "BOX",
        scale: 1.5 / 2 ** 6,
        glueToFloor: true,
        texture: "Wood_Bamboo",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    Closet: {
        name: "Closet",
        category: "chest",
        element: "CLOSET",
        scale: 1.75 / 2 ** 1,
        glueToFloor: true,
        texture: "Closet",
        material: MATERIAL.standardShine,
        rotateToNorth: Math.PI,
    },
    BookShelf: {
        name: "BookShelf",
        category: "chest",
        element: "BOOKSHELF",
        scale: 1.4 / 2 ** 5,
        glueToFloor: true,
        texture: "BookShelf",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    PirateChest: {
        name: "PirateChest",
        category: "chest",
        element: "PIRATE_CHEST",
        scale: 1.0 / 2 ** 3,
        glueToFloor: true,
        texture: "PirateChest",
        material: MATERIAL.standardShine,
        rotateToNorth: Math.PI,
    },
    PlainCloset: {
        name: "PlainCloset",
        category: "chest",
        element: "CLOSET4",
        scale: 1.2 / 2 ** 2,
        glueToFloor: true,
        texture: "Closet4",
        material: MATERIAL.standardShine,
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
    },

    MetalCrate50: {
        name: "MetalCrate50",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.25 / (2 ** 4),
        glueToFloor: true,
        texture: "MetalCrateTexture50",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    MetalCrate51: {
        name: "MetalCrate51",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.13 / (2 ** 4),
        glueToFloor: true,
        texture: "MetalCrateTexture51",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    MetalCrate52: {
        name: "MetalCrate52",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.3 / (2 ** 4),
        glueToFloor: true,
        texture: "MetalCrateTexture52",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    MetalCrate53: {
        name: "MetalCrate53",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.15 / (2 ** 4),
        glueToFloor: true,
        texture: "MetalCrateTexture53",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    MetalCrate54: {
        name: "MetalCrate54",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.29 / (2 ** 4),
        glueToFloor: true,
        texture: "MetalCrateTexture54",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate50: {
        name: "WoodenCrate50",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.05 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture50",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate51: {
        name: "WoodenCrate51",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.22 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture51",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate52: {
        name: "WoodenCrate52",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.48 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture52",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate53: {
        name: "WoodenCrate53",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.18 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture53",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate54: {
        name: "WoodenCrate54",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.22 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture54",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate55: {
        name: "WoodenCrate55",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.25 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture55",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate56: {
        name: "WoodenCrate56",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.25 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture56",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate57: {
        name: "WoodenCrate57",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.26 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture57",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate58: {
        name: "WoodenCrate58",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.18 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture58",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate59: {
        name: "WoodenCrate59",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.37 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture59",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate60: {
        name: "WoodenCrate60",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.36 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture60",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate61: {
        name: "WoodenCrate61",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.05 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture61",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
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
    GreenWolf: {
        name: "Wolf",
        texture: "GreenWolf",
        model: "Wolf",
        scale: 1.6 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 60,
        attack: 120,
        magic: 0,
        defense: 0,
        directMagicDamage: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt3",
        behaviourArguments: [16, ["wanderer"], 14, ["advancer"]],
        moveSpeed: 1.3,
        material: MATERIAL.greenFluence,
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
        boss: true,
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
    GhostMinionGreen: {
        name: "GhostMinionGreen",
        texture: "GhostFaceGreen",
        model: "GhostFace",
        scale: 1.85 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 12,
        health: 35,
        attack: 40,
        magic: 6,
        defense: 0,
        shootDistance: 12,
        stalkDistance: 5,
        directMagicDamage: true,
        caster: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [15, ["wanderer"], 12, ["shoot"]],
        moveSpeed: 1.05,
        material: MATERIAL.standard,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    Viking: {
        name: "Viking",
        model: "Viking",
        scale: 0.9 / 2 ** 8,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 0,
        health: 50,
        attack: 50,
        magic: 0,
        defense: 0,
        directMagicDamage: true,
        attackSound: "HumanAttack1",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [7, ["wanderer"], 4, ["advancer"]],
        moveSpeed: 1.0,
        material: MATERIAL.standard,
    },
    MissWhite: {
        name: "MissWhite",
        model: "MissWhite",
        scale: 1.6 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 15,
        health: 40,
        attack: 50,
        magic: 7,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [12, ["wanderer"], 10, ["shoot"]],
        moveSpeed: 1.0,
        shootDistance: 10,
        stalkDistance: 3,
        material: MATERIAL.standard,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    MissGreen: {
        name: "MissGreen",
        texture: "GhostFaceGreen",
        model: "MissWhite",
        scale: 1.5 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 18,
        health: 45,
        attack: 50,
        magic: 8,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [13, ["wanderer"], 11, ["shoot"]],
        moveSpeed: 1.0,
        shootDistance: 11,
        stalkDistance: 5,
        material: MATERIAL.greenShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    Skeleton: {
        name: "WhiteSkeleton",
        model: "Skeleton",
        scale: 1.8 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "SmokeExplosion",
        mana: 20,
        health: 50,
        attack: 70,
        magic: 10,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [15, ["wanderer"], 12, ["shoot"]],
        moveSpeed: 1.1,
        shootDistance: 12,
        stalkDistance: 5,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
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
        mana: 25,
        health: 75,
        attack: 100,
        magic: 12,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [16, ["wanderer"], 13, ["shoot"]],
        moveSpeed: 1.2,
        shootDistance: 13,
        stalkDistance: 5,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
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
        mana: 25,
        health: 100,
        attack: 100,
        magic: 15,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [17, ["wanderer"], 14, ["shoot"]],
        moveSpeed: 1.3,
        shootDistance: 14,
        stalkDistance: 10,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
        material: MATERIAL.silver,
    },
    BlueSkeleton: {
        name: "BlueSkeleton",
        texture: "BlueMetal",
        model: "Skeleton",
        scale: 1.8 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "SmokeExplosion",
        mana: 25,
        health: 110,
        attack: 120,
        magic: 17,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [17, ["wanderer"], 15, ["shoot"]],
        moveSpeed: 1.35,
        shootDistance: 15,
        stalkDistance: 10,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
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
        mana: 25,
        health: 125,
        attack: 150,
        magic: 20,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [20, ["wanderer"], 17, ["shoot"]],
        moveSpeed: 1.40,
        shootDistance: 17,
        stalkDistance: 10,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
        material: MATERIAL.standard,
    },
    GoldSkeletonGold: {
        name: "GoldSkeletonGold",
        texture: "Gold",
        model: "Skeleton",
        scale: 1.8 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "SmokeExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        gold: 100,
        mana: 25,
        health: 150,
        attack: 175,
        magic: 25,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [23, ["wanderer"], 20, ["shoot"]],
        moveSpeed: 1.50,
        shootDistance: 20,
        stalkDistance: 10,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
        material: MATERIAL.gold,
    },
    GoldSkeleton: {
        name: "GoldSkeleton",
        texture: "Gold",
        model: "Skeleton",
        scale: 1.8 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "SmokeExplosion",
        mana: 25,
        health: 150,
        attack: 175,
        magic: 25,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [23, ["wanderer"], 20, ["shoot"]],
        moveSpeed: 1.50,
        shootDistance: 20,
        stalkDistance: 10,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
        material: MATERIAL.gold,
    },
    GreatChick: {
        name: "GreatChick",
        model: "Chicken",
        scale: 1 / 2 ** 5,
        rotateToNorth: -Math.PI / 2,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 0,
        health: 10,
        attack: 100,
        magic: 0,
        defense: 0,
        directMagicDamage: true,
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
        mana: 0,
        health: 8,
        attack: 75,
        magic: 0,
        defense: 0,
        directMagicDamage: true,
        attackSound: "AngryCat",
        hurtSound: "PainSqueek",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.2,
        material: MATERIAL.standard,
    },
    SkeleDwarf: {
        name: "SkeleDwarf",
        model: "SkeleDwarf",
        scale: 1.2 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 0,
        health: 50,
        attack: 100,
        magic: 0,
        defense: 0,
        directMagicDamage: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt3",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.2,
        material: MATERIAL.standardShine,
    },
    Dragon: {
        name: "Dragon",
        model: "Dragon",
        scale: 1.9 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.25,
        fly: 0.25,
        deathType: "BloodExplosion",
        mana: 25,
        health: 75,
        attack: 100,
        magic: 15,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [20, ["wanderer"], 15, ["shoot"]],
        moveSpeed: 1.0,
        shootDistance: 15,
        stalkDistance: 8,
        material: MATERIAL.gold,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
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
        mana: 25,
        health: 100,
        attack: 125,
        magic: 20,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [20, ["wanderer"], 15, ["shoot"]],
        moveSpeed: 1.0,
        shootDistance: 15,
        stalkDistance: 8,
        material: MATERIAL.gold,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    Astro: {
        name: "Astro",
        model: "Astro",
        scale: 1.5 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 25,
        health: 120,
        attack: 125,
        magic: 19,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "HumanAttack1",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [7, ["wanderer"], 5, ["shoot"]],
        moveSpeed: 1.0,
        shootDistance: 5,
        stalkDistance: 6,
        material: MATERIAL.standard,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    AstroRed: {
        name: "AstroRed",
        texture: "AstroRed",
        model: "Astro",
        scale: 1.7 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 25,
        health: 130,
        attack: 135,
        magic: 20,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "HumanAttack1",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [10, ["wanderer"], 8, ["shoot"]],
        moveSpeed: 1.0,
        shootDistance: 8,
        stalkDistance: 6,
        material: MATERIAL.redShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    Hulk: {
        name: "Hulk",
        model: "Hulk",
        scale: 1.5 / 2 ** 6,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 0,
        health: 100,
        attack: 200,
        magic: 0,
        defense: 0,
        directMagicDamage: true,
        attackSound: "HumanAttack1",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [10, ["wanderer"], 4, ["advancer"]],
        moveSpeed: 1.0,
        material: MATERIAL.greenShine,
    },
    Basilisk: {
        name: "Basilisk",
        model: "Basilisk",
        scale: 1.8 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 0,
        health: 200,
        attack: 250,
        magic: 0,
        defense: 0,
        directMagicDamage: true,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 0.9,
        material: MATERIAL.standardShine,
    },
    GreenBasilisk: {
        name: "GreenBasilisk",
        texture: "GreenBasilisk",
        model: "Basilisk",
        scale: 1.7 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 0,
        health: 250,
        attack: 275,
        magic: 0,
        defense: 0,
        directMagicDamage: true,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 0.99,
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
        gold: 100,
        mana: 25,
        health: 150,
        attack: 150,
        magic: 25,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [20, ["wanderer"], 15, ["shoot"]],
        moveSpeed: 1.0,
        shootDistance: 15,
        stalkDistance: 8,
        material: MATERIAL.standard,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
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
        gold: 100,
        mana: 25,
        health: 175,
        attack: 150,
        magic: 27,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [20, ["wanderer"], 15, ["shoot"]],
        moveSpeed: 1.1,
        shootDistance: 15,
        stalkDistance: 8,
        material: MATERIAL.greenFluence,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    Drax: {
        name: "Drax",
        model: "Drax",
        scale: 1.25 / 2 ** 1,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        gold: 150,
        mana: 25,
        health: 200,
        attack: 200,
        magic: 30,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [20, ["wanderer"], 16, ["shoot"]],
        moveSpeed: 1.1,
        shootDistance: 16,
        stalkDistance: 10,
        material: MATERIAL.standard,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },

    MissGhostFace: {
        boss: true,
        name: "MissGhostFace",
        model: "MissGhostFace",
        scale: 1 / 2 ** 1,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: KEY_TYPE.Pearl,
        mana: 2500,
        health: 10000,
        attack: 500,
        magic: 50,
        defense: 99,
        caster: true,
        directMagicDamage: true,
        attackSound: "Banshee",
        hurtSound: "Ow",
        behaviourArguments: [Infinity, ["wanderer"], 15, ["shoot"]],
        moveSpeed: 1.2,
        shootDistance: 15,
        stalkDistance: 17,
        material: MATERIAL.standard,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
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
    Ruby: {
        name: "Ruby",
        category: "interaction_item",
        element: "GEM",
        scale: 1.8 / 2 ** 5,
        glueToFloor: true,
        texture: "Red",
        material: MATERIAL.standard,
        inventorySprite: "Ruby",
        text: "Nice? Shiny? Bloodred ruby? I'll keep that."
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
    Sapphire: {
        name: "Sapphire",
        category: "interaction_item",
        element: "GEM",
        scale: 1.7 / 2 ** 5,
        glueToFloor: true,
        texture: "BlueMetal",
        material: MATERIAL.standard,
        inventorySprite: "Sapphire",
        text: "Nice? Shiny blue sapphire? I'll keep that."
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
    GoldSphere: {
        name: "GoldSphere",
        category: "interaction_item",
        element: "BALL",
        scale: 1.1 / 2 ** 5,
        glueToFloor: true,
        texture: "Gold",
        inventorySprite: "GoldSphere",
        material: MATERIAL.gold,
        text: "This one goes in the bag. Who knows ..."
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
    SmallBarrel: {
        name: "SmallBarrel",
        category: "interaction_item",
        element: "BARREL",
        scale: 1.75 / 2 ** 3,
        glueToFloor: true,
        texture: "Barrel",
        material: MATERIAL.standard,
        inventorySprite: "SmallBarrel",
        text: "Such a small barrel. Not a lot of drink."
    },
    TropicalFish: {
        name: "TropicalFish",
        category: "interaction_item",
        element: "FISH",
        scale: 1.5 / 2 ** 4,
        glueToFloor: true,
        texture: "FishTexture",
        material: MATERIAL.standard,
        inventorySprite: "TropicalFish",
        text: "Also smelly, but more colors."
    },
    Bone: {
        name: "Bone",
        category: "interaction_item",
        element: "BONE",
        scale: 1.0 / 2 ** 4,
        glueToFloor: true,
        texture: "Marble",
        material: MATERIAL.standard,
        inventorySprite: "Bone",
        text: "Bone. Human? Or animal? I don't know. Does it matter to you?"
    },
    Champagne: {
        name: "Champagne",
        category: "action_item",
        which: "health",
        element: "WINE",
        scale: 1.5 / 2 ** 7,
        glueToFloor: true,
        texture: "WineBottle",
        material: MATERIAL.standard,
        rotateToNorth: 0,
        inventorySprite: "Champagne",
        text: "Expensive champagne. This will improve my spirits."
    },
    HealthBox: {
        name: "HealthBox",
        category: "action_item",
        which: "health",
        element: "FRAGILE_CRATE",
        scale: 1.5 / 2 ** 5,
        glueToFloor: true,
        texture: "HealthBoxtexture",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
        inventorySprite: "HealthBox",
        text: "A full box of healing. I should save it for dark times."
    },
    Candle: {
        name: "Candle",
        category: "interaction_item",
        element: "CANDLE",
        scale: 1.0 / 2 ** 2,
        glueToFloor: true,
        texture: "CandleWax",
        material: MATERIAL.standard,
        inventorySprite: "Candle",
        text: "Simple wax candle. I can light it. Or not."
    },
    Crown: {
        name: "Crown",
        category: "interaction_item",
        element: "CROWN",
        scale: 1.7 / 2 ** 2,
        glueToFloor: true,
        texture: "Gold",
        material: MATERIAL.gold,
        inventorySprite: "Crown",
        text: "This is my crown, fuckers. Now to claim the throne."
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
    LittleChicken: {
        /** food */
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
    Chicken: {
        /** alive */
        name: "Chicken",
        category: "interaction_item",
        model: "Chicken",
        scale: 1 / 2 ** 6,
        rotateToNorth: -Math.PI / 2,
        moveSpeed: 1.5,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "Chicken",
        text: "Blonde chick. Not yet fried."
    },
    RoastChicken: {
        /** health */
        name: "RoastChicken",
        category: "action_item",
        which: "health",
        model: "Chicken",
        scale: 1 / 2 ** 6,
        rotateToNorth: -Math.PI / 2,
        moveSpeed: 1.6,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "RoastChicken",
        text: "Yummy chick. Store for later."
    },
    RoastPig: {
        /** health */
        name: "RoastPig",
        category: "action_item",
        which: "health",
        model: "Pig",
        scale: 1 / 2 ** 3,
        rotateToNorth: -Math.PI / 2,
        moveSpeed: 1.6,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "RoastPig",
        text: "Here piggy piggy piggy.",
    },
    LittlePiggy: {
        name: "LittlePiggy",
        category: "interaction_item",
        model: "Pig",
        scale: 1.2 / 2 ** 3,
        rotateToNorth: -Math.PI / 2,
        moveSpeed: 1.6,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "LittlePiggy",
        text: "Try not to huff and puff.",
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
    Chicken: {
        name: "Chicken",
        category: "interaction_item",
        inventorySprite: "Chicken",
        text: "Blonde chick. Not yet fried."
    },
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
    PearlKey: {
        name: "PearlKey",
        category: "key",
        inventorySprite: "PearlKey",
        color: "Pearl"
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
    GlassOfBeer: {
        name: "GlassOfBeer",
        category: "interaction_item",
        inventorySprite: "GlassOfBeer",
        text: "Cheers mates. To victory!"
    },
    Pizza: {
        name: "Pizza",
        category: "interaction_item",
        inventorySprite: "Pizza",
        text: "I am not hungry. I can give away this pizza."
    },
    PickAxe: {
        name: "PickAxe",
        category: "interaction_item",
        inventorySprite: "PickAxe",
        text: "Pickaxe. Let's go mining."
    },
    Brush: {
        name: "Brush",
        category: "interaction_item",
        inventorySprite: "Brush",
        text: "A brush for polishing boots."
    },
    RedLeatherBoots: {
        name: "RedLeatherBoots",
        category: "interaction_item",
        inventorySprite: "RedLeatherBoots",
        text: "Red leather ankle boots. Sexy."
    },
    RedLeatherLeggings: {
        name: "RedLeatherLeggings",
        category: "interaction_item",
        inventorySprite: "RedLeatherLeggings",
        text: "Red leather leggins. I would look fabolous in that."
    },
    RedLeatherTop: {
        name: "RedLeatherTop",
        category: "interaction_item",
        inventorySprite: "RedLeatherTop",
        text: "Red leather top. Whoever wears this will have followers."
    },
    Cheese: {
        name: "Cheese",
        category: "interaction_item",
        inventorySprite: "Cheese",
        text: "Full of holes. Hole-y. Got it?"
    },
    Mouse: {
        name: "Mouse",
        category: "interaction_item",
        inventorySprite: "Mouse",
        text: "Cute little mouse. Someone will want to eat it."
    },
    RedSandals: {
        name: "RedSandals",
        category: "interaction_item",
        inventorySprite: "RedSandals",
        text: "Beatchwear. Bitchwear?"
    },
    RedLeatherHat: {
        name: "RedLeatherHat",
        category: "interaction_item",
        inventorySprite: "RedLeatherHat",
        text: "Too big for my cute small head."
    },
    EmeraldIngots: {
        name: "EmeraldIngots",
        category: "interaction_item",
        inventorySprite: "EmeraldIngots",
        text: "Ingots made from emerald."
    },
    Document: {
        name: "Document",
        category: "interaction_item",
        inventorySprite: "Document",
        text: "Looks like some kind of instructions. Maybe I should read them."
    },
    GuitarPick: {
        name: "GuitarPick",
        category: "interaction_item",
        inventorySprite: "GuitarPick",
        text: "Guitar pick. Let's rock."
    },
    KeyMould: {
        name: "KeyMould",
        category: "interaction_item",
        inventorySprite: "KeyMould",
        text: "Mould for making keys. This will come handy."
    },
    Ruby: {
        name: "Ruby",
        category: "interaction_item",
        inventorySprite: "Ruby",
        text: "Nice shiny bloodred ruby."
    },
    Sapphire: {
        name: "Sapphire",
        category: "interaction_item",
        inventorySprite: "Sapphire",
        text: "Nice shiny blue sapphire."
    },
    PinkDiamond: {
        name: "PinkDiamond",
        category: "interaction_item",
        inventorySprite: "PinkDiamond",
        text: "What a rarity. Pink diamond. welcome to my pocket."
    },
    RedFishTail: {
        name: "RedFishTail",
        category: "interaction_item",
        inventorySprite: "RedFishTail",
        text: "Spare outfit for a fish. Or mermaid."
    },
    RedLatexBra: {
        name: "RedLatexBra",
        category: "interaction_item",
        inventorySprite: "RedLatexBra",
        text: "Sexy stuff. I should wear these. Maybe in the next game?"
    },
    PinkLatexGloves: {
        name: "PinkLatexGloves",
        category: "interaction_item",
        inventorySprite: "PinkLatexGloves",
        text: "Sexy stuff. I should wear these. Maybe in the next game?"
    },
    PinkBoots: {
        name: "PinkBoots",
        category: "interaction_item",
        inventorySprite: "PinkBoots",
        text: "Cute stuff. Befitting a princess. But not my style."
    },
    Walnut: {
        name: "Walnut",
        category: "interaction_item",
        inventorySprite: "Walnut",
        text: "Walnut looks like a tiny little brain."
    },
    Hazelnuts: {
        name: "Hazelnuts",
        category: "interaction_item",
        inventorySprite: "Hazelnuts",
        text: "Hazelnuts. Are there squirrels nearby?"
    },
    WhiteFeather: {
        name: "WhiteFeather",
        category: "interaction_item",
        inventorySprite: "WhiteFeather",
        text: "A feather. White."
    },
    RedFeather: {
        name: "RedFeather",
        category: "interaction_item",
        inventorySprite: "RedFeather",
        text: "A feather. Red."
    },
    GreenFeather: {
        name: "GreenFeather",
        category: "interaction_item",
        inventorySprite: "GreenFeather",
        text: "A feather. Green."
    },
    BlueFeather: {
        name: "BlueFeather",
        category: "interaction_item",
        inventorySprite: "BlueFeather",
        text: "A feather. Blue."
    },
    Spear: {
        name: "Spear",
        category: "interaction_item",
        inventorySprite: "Spear",
        text: "Pointy spear. Let's poke someone."
    },
    BattleAxe: {
        name: "BattleAxe",
        category: "interaction_item",
        inventorySprite: "BattleAxe",
        text: "Oooh. Head chopping utility."
    },
    Mace: {
        name: "Mace",
        category: "interaction_item",
        inventorySprite: "Mace",
        text: "For bashing heads."
    },
    Shuriken: {
        name: "Shuriken",
        category: "interaction_item",
        inventorySprite: "Shuriken",
        text: "A deadly throwing star."
    },
    YoniBook: {
        name: "YoniBook",
        category: "interaction_item",
        inventorySprite: "YoniBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    TaoBook: {
        name: "TaoBook",
        category: "interaction_item",
        inventorySprite: "TaoBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    YinYangBook: {
        name: "YinYangBook",
        category: "interaction_item",
        inventorySprite: "YinYangBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    PentagramBook: {
        name: "PentagramBook",
        category: "interaction_item",
        inventorySprite: "PentagramBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    HexagramBook: {
        name: "HexagramBook",
        category: "interaction_item",
        inventorySprite: "HexagramBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    TripleMoonBook: {
        name: "TripleMoonBook",
        category: "interaction_item",
        inventorySprite: "TripleMoonBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    TriquetraBook: {
        name: "TriquetraBook",
        category: "interaction_item",
        inventorySprite: "TriquetraBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    VenusBook: {
        name: "VenusBook",
        category: "interaction_item",
        inventorySprite: "VenusBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    AnkhBook: {
        name: "AnkhBook",
        category: "interaction_item",
        inventorySprite: "AnkhBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    FireballBook: {
        name: "FireballBook",
        category: "interaction_item",
        inventorySprite: "FireballBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    OwlBook: {
        name: "OwlBook",
        category: "interaction_item",
        inventorySprite: "OwlBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    PrincessBook: {
        name: "PrincessBook",
        category: "interaction_item",
        inventorySprite: "PrincessBook",
        text: "Amazing story about my adventures. Everybody should read this."
    },
    TreeOfLifeBook: {
        name: "TreeOfLifeBook",
        category: "interaction_item",
        inventorySprite: "TreeOfLifeBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    RavenBook: {
        name: "RavenBook",
        category: "interaction_item",
        inventorySprite: "RavenBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    Kiss: {
        name: "Kiss",
        category: "interaction_item",
        inventorySprite: "Kiss",
        text: "This looks like a portable kiss voucher. What a fascinating concept."
    },
    Spectacles: {
        name: "Spectacles",
        category: "interaction_item",
        inventorySprite: "Spectacles",
        text: "Spectacles with round rims. This is a fashion hit of the Castle Creep."
    },
    OrangeLeggings: {
        name: "OrangeLeggings",
        category: "interaction_item",
        inventorySprite: "OrangeLeggings",
        text: "Cute stuff. Befitting a princess. But not my style."
    },
    OrangeBra: {
        name: "OrangeBra",
        category: "interaction_item",
        inventorySprite: "OrangeBra",
        text: "Cute stuff. Befitting a princess. But not my style."
    },
    OrangeBoots: {
        name: "OrangeBoots",
        category: "interaction_item",
        inventorySprite: "OrangeBoots",
        text: "Cute stuff. Befitting a princess. But not my style."
    },
    SkullNecklace: {
        name: "SkullNecklace",
        category: "interaction_item",
        inventorySprite: "SkullNecklace",
        text: "Golden necklace with the skull pendant. Amazing."
    },
    Rat: {
        name: "Rat",
        category: "interaction_item",
        inventorySprite: "Rat",
        text: "Rat? Maybe I'll be hungry later."
    },
    Carrot: {
        name: "Carrot",
        category: "interaction_item",
        inventorySprite: "Carrot",
        text: "Juicy carrot. Let's nibble it."
    },
    FireExtinguisher: {
        name: "FireExtinguisher",
        category: "interaction_item",
        inventorySprite: "FireExtinguisher",
        text: "Fire extinguisher. Is there a fire nearby?"
    },
};

const INTERACTION_ENTITY = {
    FireballReader: {
        name: "FireballReader",
        sprite: "FireballReader",
        category: 'crest',
        voice: "Female",
        wants: ["FireExtinguisher"],
        gives: "FireballBook",
        text: {
            intro: "I'm diving into some very HOT topics here, and things are getting a little out of hand. Bring me a fire extinguisher, and I'll share the secrets of the FireballBook with you.",
            progress: null,
            conclusion: "Crisis averted! As promised, here is the FireballBook. Handle it with care, it's sizzling with knowledge."
        }
    },
    CastleOfficeGamer: {
        name: "CastleOfficeGamer",
        sprite: "CastleOfficeGamer",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Floppy", "Floppy"],
        gives: "Carrot",
        text: {
            intro: "CastleHaunt runs on two floppies, and I'm dying to play. Bring them to me, and I'll share my vegan lunch. Sadly, it's all I've got.",
            progress: "One floppy loaded, but the game needs both disks. Keep looking!",
            conclusion: "Game on! As promised, here's my carrot. Vegan life isn't for everyone, Princess."
        }
    },
    CuteBarmaiden: {
        name: "CuteBarmaiden",
        sprite: "CuteBarmaiden",
        category: 'crest',
        voice: "Female2",
        wants: ["GoldCoin", "GoldCoin"],
        gives: "GlassOfBeer",
        text: {
            intro: "Hey Princess, care to buy a round? Two gold coins get us two beers, one for me, one for you. Cheers!",
            progress: "One coin down, but this bar doesn't do tabs. Another coin, please!",
            conclusion: "Thanks for the round! Here's your beer to go. Drink responsibly, Princess!"
        }
    },
    Armored: {
        name: "Armored",
        sprite: "Armored",
        category: 'crest',
        voice: "Female2",
        wants: ["Shield", "Shield"],
        gives: "Helmet",
        text: {
            intro: "A maiden can never have too many shields! Bring me more, and I'll part with this helmet. I'm far too pretty to wear it anyway.",
            progress: "One shield is nice, but my collection isn't complete. Keep them coming!",
            conclusion: "With my shields stacked high, this helmet is all yours. It's better suited to you anyway! When did you see yourself in the mirror the last time?"
        }
    },
    HornyMonica: {
        name: "HornyMonica",
        sprite: "HornyMonica",
        category: 'crest',
        voice: "Female",
        wants: ["Candle", "Candle", "Candle"],
        gives: "YinYangBook",
        text: {
            intro: "I seek illumination, both the warm glow of candles and the deeper light of wisdom. Bring me what I desire, and I'll share the wisdom with you.",
            progress: "The light grows brighter, but I need more candles to fully illuminate my path. Keep searching.",
            conclusion: "The glow is complete, and so is my enlightenment. Take this book, may it's wisdom guide you as it has me."
        }
    },
    DeMonique: {
        name: "DeMonique",
        sprite: "DeMonique",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Skull", "Skull", "Skull"],
        gives: "Kiss",
        text: {
            intro: "Do you know what I crave? Bring me what I desire, and I'll reward you with a kiss so unique, you can carry it in your backpack.",
            progress: "You're getting closer to earning my kiss, but something's still missing. Keep going.",
            conclusion: "Ah, now you've satisfied my longing. Mwah. Here's my kiss. Cold, rigid, and perfectly yours to take with you."
        }
    },
    Bunny: {
        name: "Bunny",
        sprite: "Bunny",
        category: 'crest',
        voice: "Female",
        wants: ["Carrot", "Carrot"],
        gives: "Spectacles",
        text: {
            intro: "They say carrots are great for eyesight, and I'm testing the theory. Bring me a couple, and I might not need these spectacles anymore!",
            progress: "One carrot down, but I'm still squinting. Bring another, please!",
            conclusion: "Two carrots later, and I can finally see clearly! Take my spectacles, they're all yours now."
        }
    },
    Juggles: {
        name: "Juggles",
        sprite: "Juggles",
        category: 'crest',
        voice: "Female2",
        wants: ["GoldSphere", "GoldSphere", "GoldSphere"],
        gives: "SkullNecklace",
        text: {
            intro: "My act needs an upgrade, golden balls are all the rage! Bring me three, and I'll part with my golden skull necklace.",
            progress: "Another sphere for the show, but I still need more to dazzle the crowd. Keep going!",
            conclusion: "Perfect! My act is now golden, and as promised, here's my skull necklace. It's a statement piece, wouldn't you agree?"
        }
    },
    Owl: {
        name: "Owl",
        sprite: "Owl",
        category: 'crest',
        voice: "Female",
        wants: ["Mouse", "Mouse"],
        gives: "Rat",
        text: {
            intro: "Wise and fair, that's me. Bring me two delicious little mice, and I'll trade you a plump rat. A fair deal, don't you think?",
            progress: "One mouse down, but wisdom says two make the trade. Keep hunting!",
            conclusion: "Two mice delivered, and a deal's a deal. Here's your rat. Enjoy, if you dare!"
        }
    },
    Narancina: {
        name: "Narancina",
        sprite: "Narancina",
        category: 'crest',
        voice: "Female",
        wants: ["SkullNecklace"],
        gives: "OrangeBoots",
        text: {
            intro: "A girl needs her bling! A gold necklace with a skull pendant. Perfect for my style. Bring me one, and I'll trade you my fancy orange boots.",
            progress: null,
            conclusion: "This necklace is to die for! As promised, here are my orange leather boots. Walk in style, darling."
        }
    },
    ApparitiaDefector: {
        name: "ApparitiaDefector",
        sprite: "ApparitiaDefector",
        category: 'crest',
        voice: "Apparitia",
        wants: ["OrangeLeggings", "OrangeBra", "OrangeBoots"],
        gives: "Spear",
        text: {
            intro: "I'm ready to defect to your side, Princess. But I'll need a disguise. Orange is the new white, after all. Help me out, and my spear is yours.",
            progress: "One sleek piece closer to a brighter disguise, but I still stand out like a ghost. Keep going!",
            conclusion: "I'm fully orange and no longer glaringly white! As promised, here's my spear. May it serve you better than my old allies. Now off to the changing room."
        }
    },
    Viking: {
        name: "Viking",
        sprite: "Viking",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Beer", "GlassOfBeer"],
        gives: "BattleAxe",
        text: {
            intro: "After battle, a shield maiden needs her beer! Two beer, or not two beer?  No beer, no deal. What's it gonna be?",
            progress: "One beer down, but I'm still parched. Don't leave me hanging. Bring the second! A different one.",
            conclusion: "Ah, now that hits the spot! A promise is a promise. Here's my trusty battleaxe. Go chop some heads with honor!"
        }
    },
    Shroomess: {
        name: "Shroomess",
        sprite: "Shroomess",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Mushroom", "Mushroom", "Mushroom"],
        gives: "TreeOfLifeBook",
        text: {
            intro: "Life's deeper truths lie hidden in the shrooms. Bring me enough, and I'll share the wisdom I've gathered in my Tree of Life book.",
            progress: "Another shroom delivered, but my trip isn't complete. Keep gathering!",
            conclusion: "Ah, the shrooms have spoken! As promised, here's my Tree of Life book. May it open your mind as it did mine."
        }
    },
    KnightWithoutHelmet: {
        name: "KnightWithoutHelmet",
        sprite: "KnightWithoutHelmet",
        category: 'crest',
        voice: "Female2",
        wants: ["Helmet"],
        gives: "Mace",
        text: {
            intro: "A true knight must protect her golden locks, even in battle. Bring me a helmet, and I'll part with my spare mace as I am more of a sword girl myself.",
            progress: null,
            conclusion: "Ah, finally, my hair is safe! As promised, take my mace. May it serve you well in your battles."
        }
    },
    YoniLibrarian: {
        name: "YoniLibrarian",
        sprite: "YoniLibrarian",
        category: 'crest',
        voice: "Female",
        wants: ["Spectacles"],
        gives: "YoniBook",
        text: {
            intro: "These old spectacles are so last century. Help me find something more fashionable, and I'll share a rare treasure from my collection.",
            progress: null,
            conclusion: "Ah, these new spectacles are perfect! I'm so grateful, I'll gift you a rare and sacred text about worshipping goddess Yoni. Was it goddess or baddass?."
        }
    },
    Frogessa: {
        name: "Frogessa",
        sprite: "Frogessa",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Kiss"],
        gives: "Fins",
        text: {
            intro: "I am a princess trapped in the body of a frog. Surely a kiss will break the curse. Wink, wink.",
            progress: null,
            conclusion: "Alas, the curse remains unbroken. But I am grateful for your effort. Take my spare fins. They might be more useful than my fairy tale."
        }
    },
    CorridorSwimmer: {
        name: "CorridorSwimmer",
        sprite: "CorridorSwimmer",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["ScubaMask", "Fins"],
        gives: "Shuriken",
        text: {
            intro: "I spotted a strange, dark metal object in the waters. Bring me the right gear, and I'll dive in to retrieve it for you.",
            progress: "I've got part of the gear, but I still need more to take the plunge. Keep going!",
            conclusion: "All set! The dive was successful. Here's the shuriken I found. Turns out, even the depths can be deadly!"
        }
    },
    BlackAngel: {
        name: "BlackAngel",
        sprite: "BlackAngel",
        category: 'crest',
        voice: "Female2",
        wants: ["BlueFeather", "GreenFeather", "RedFeather"],
        gives: "PurpleKey",
        text: {
            intro: "Black is timeless, but a pop of color? Now that's modern. Bring me some vibrant feathers, and I'll reward you with the hellish delights.",
            progress: "One color down, but my wings are still a monochrome bore. Keep those feathers coming!",
            conclusion: "My wings are now a fashion statement! Here's the Purple Key. May it unlock a world of sinful pleasures."
        }
    },
    WhiteAngel: {
        name: "WhiteAngel",
        sprite: "WhiteAngel",
        category: 'crest',
        voice: "Female",
        wants: ["WhiteFeather", "WhiteFeather", "WhiteFeather"],
        gives: "PearlKey",
        text: {
            intro: "My wings are broken, and I need feathers to mend them. Help me fly again, and I'll give you a key to a heavenly place.",
            progress: "A feather here, a feather there, but my wings still can't take flight. Don't stop now.",
            conclusion: "With my wings restored, I can soar once more. As promised, here's the Pearl Key. May it guide you to the heavens."
        }
    },
    SquirrelCoin: {
        name: "SquirrelCoin",
        sprite: "SquirrelCoin",
        category: 'crest',
        voice: "Female2",
        wants: ["Acorn", "Walnut", "Hazelnuts"],
        gives: "GoldCoin",
        text: {
            intro: "I'm a collector of fine nuts. Acorns, walnuts, hazelnuts. Bring me one of each, and I'll pay you handsomly.",
            progress: "You've brought me something tasty, but my collection isn't complete yet. Keep hunting!",
            conclusion: "All the finest nuts, gathered at last! Here's your gold coin. Maybe you can train some more."
        }
    },
    WaterNymph: {
        name: "WaterNymph",
        sprite: "WaterNymph",
        category: 'crest',
        voice: "Female",
        wants: ["Fish", "TropicalFish"],
        gives: "Sapphire",
        text: {
            intro: "The shimmering waters need balance, and I seek two special fish to restore it. Bring me a simple fish and a vibrant tropical one, and I'll reward you with something I found deep in the mud.",
            progress: "One fish swims back to the waters, but the balance isn't complete yet. Keep searching.",
            conclusion: "The waters are balanced again! Here's a nice blue sapphire, from a muddy waters, Use it wisely."
        }
    },
    Wolverine: {
        name: "Wolverine",
        sprite: "Wolverine",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["LittlePiggy", "LittlePiggy", "LittlePiggy"],
        gives: "PinkLatexGloves",
        text: {
            intro: "I'm conducting a very important experiment. Will three little piggies still huff and puff when I get my claws on them? Bring them to me, and I'll reward you with some silly pink gloves I, acquired.",
            progress: "A piggy here, a piggy there, but I still need all three to proceed with science.",
            conclusion: "All three piggies, perfect! As promised, here are the pink latex gloves. They belonged to a certain pinkhooded rider. Before lunch. My lunch."
        }
    },
    PinkPianoGirl: {
        name: "PinkPianoGirl",
        sprite: "PinkPianoGirl",
        category: 'crest',
        voice: "Female",
        wants: ["PinkLatexGloves", "PinkBoots"],
        gives: "LP",
        text: {
            intro: "I'm recording my new metal masterpiece: Prelude for a Pink Piano Primadonna. I just need some sleek accessories for the promotion. Can you help?",
            progress: "One piece ready, but the look isn't complete. Keep it coming!",
            conclusion: "Now I'm perfectly styled for my album release! Here's your LP - turn it up to eleven!"
        }
    },
    Mermaid: {
        name: "Mermaid",
        sprite: "Mermaid",
        category: 'crest',
        voice: "Female2",
        wants: ["RedFishTail", "RedLatexBra"],
        gives: "PinkDiamond",
        text: {
            intro: "This greenish sea look is so last season. I'm ready to go bold and red! Bring me the pieces I need, and I'll reward you with a PinkDiamond from the ocean's depths.",
            progress: "One item down, but I'm not rocking red just yet. Keep going!",
            conclusion: "Fabulous! My red transformation is complete. Here's your PinkDiamond, a gift from the waves."
        }
    },
    SpiderMom: {
        name: "SpiderMom",
        sprite: "SpiderMom",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["BabyGreenSpider", "BabyGreenSpider", "BabyGreenSpider"],
        gives: "Ruby",
        text: {
            intro: "My little green darlings are missing! Bring them back to me, and I'll share a precious thing from my web's treasures.",
            progress: "One of my babies is home, but the web still feels empty. Keep searching!",
            conclusion: "All my babies are safe and sound! As promised, here's a bloodred ruby. A small price for a mother's peace of mind."
        }
    },
    BeachGirl: {
        name: "BeachGirl",
        sprite: "BeachGirl",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Shell", "Shell"],
        gives: "Sapphire",
        text: {
            intro: "You won't believe this, but I found a sapphire on the beach! Trade me two shells, and it's yours.",
            progress: "One shell down, but I need two for the trade. Keep searching!",
            conclusion: "Two shells? Deal! Here's your sapphire. Who knew beachcombing could be so lucrative?"
        }
    },
    RocketScientist: {
        name: "RocketScientist",
        sprite: "RocketScientist",
        category: 'crest',
        voice: "Female2",
        wants: ["RocketTop", "RocketBottom"],
        gives: "PocketRocket",
        text: {
            intro: "There's only one genius in the galaxy who can assemble a PocketRocket, and you're looking at her. Bring me the parts, and I'll make it happen.",
            progress: "I've got part of it, but we're not launching yet. Keep those parts coming!",
            conclusion: "All systems go! Your PocketRocket is assembled and ready for liftoff. You're welcome, by the way. I am such a smart blonde."
        }
    },
    SpaceWarrior: {
        name: "SpaceWarrior",
        sprite: "SpaceWarrior",
        category: 'crest',
        voice: "Female",
        wants: ["PocketRocket"],
        gives: "PinkDiamond",
        text: {
            intro: "I'm grounded without a PocketRocket! Bring me one, and I'll reward you with a very rare gem, straight from the stars.",
            progress: null,
            conclusion: "PocketRocket secured! Here's your PinkDiamond. Don't spend it all in one galaxy."
        }
    },
    Sparklyssa: {
        name: "Sparklyssa",
        sprite: "Sparklyssa",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["PinkDiamond", "PinkDiamond"],
        gives: "Emerald",
        text: {
            intro: "Me, Sparklyssa, I'm not as greedy as SassyPhire or RubyErella. But I have standards to uphold. Two rare pink diamons for an emerald. Final price!",
            progress: "One pink diamond? Nice start, but I need a pair to keep my sparkle standards.",
            conclusion: "Two pink diamonds! Here's your emerald, love. And don't forget, AssMeralda has a thing for them."
        }
    },
    SassyPhire: {
        name: "SassyPhire",
        sprite: "SassyPhire",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Sapphire", "Sapphire", "Sapphire"],
        gives: "Emerald",
        text: {
            intro: "Three sapphires for one emerald. A deal sparkling with sass. Just like me. Care to trade?",
            progress: "A sapphire here, a sapphire there… but I need all three for the magic to happen.",
            conclusion: "Three sapphires! Here's your emerald, darling. Oh, and I hear AssMeralda has a thing for these beauties."
        }
    },
    RubyErella: {
        name: "RubyErella",
        sprite: "RubyErella",
        category: 'crest',
        voice: "Female2",
        wants: ["Ruby", "Ruby", "Ruby"],
        gives: "Emerald",
        text: {
            intro: "Three rubies for one emerald? Sounds like a deal to me. Fair? Maybe not, but do you really have another choice?",
            progress: "A ruby or two, but not enough for this trade. Keep them coming!",
            conclusion: "Three rubies, such shiny beauties! Here's your emerald. AssMeralda will know what to do with it. "
        }
    },
    AssMeralda: {
        name: "AssMeralda",
        sprite: "AssMeralda",
        category: 'crest',
        voice: "Female2",
        wants: ["Emerald", "Emerald", "Emerald"],
        gives: "EmeraldIngots",
        text: {
            intro: "Emerald ingots? Of course, I can make those. Bring me enough emeralds, and I'll handle the rest. Trust me, I know my gems.",
            progress: "Some emeralds are here, but it's not quite enough to fire up my craft. Keep looking!",
            conclusion: "All the emeralds I need! Here are your Emerald Ingots, expertly forged. You're welcome!"
        }
    },
    MetalGuitarist: {
        name: "MetalGuitarist",
        sprite: "MetalGuitarist",
        category: 'crest',
        voice: "Female",
        wants: ["GuitarPick", "GuitarPick", "GuitarPick"],
        gives: "LP",
        text: {
            intro: "Shredding this hard breaks a lot of picks. Bring me some spares, and I'll give you the latest LaughingSkull album.",
            progress: "I'm still missing enough  picks to finish my solos. Keep going!",
            conclusion: "Yes! Now I can rock without worry. Here's the LaughingSkull album. Play it loud!"
        }
    },
    Metallica: {
        name: "Metallica",
        sprite: "Metallica",
        category: 'crest',
        voice: "Female2",
        wants: ["LP", "LP", "LP", "LP", "LP"],
        gives: "KeyMould",
        text: {
            intro: "I live for metal, both the music and the craft. Bring me five heavy metal records, and I'll gift you something truly unique. a KeyMould. Think of it as your key to A Minor success. Got it? Hahaha.",
            progress: "The rhythm's building, but I need more records to hit the perfect note. Rock me more!",
            conclusion: "Five records of pure metal bliss! As promised, here's your KeyMould. It's a masterpiece, just like a killer riff! And me."
        }
    },
    EngineerDomme: {
        name: "EngineerDomme",
        sprite: "EngineerDomme",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["KeyMould", "EmeraldIngots", "Document"],
        gives: "EmeraldKey",
        text: {
            intro: "I can craft you an Emerald Key, but I'll need the proper tools and materials. Bring me a key mould and some emerald ingots, and instructions, and I'll work my magic.",
            progress: "I've got part of what I need, but I can't make the key without everything. Keep going!",
            conclusion: "Perfect! With these materials, your Emerald Key is ready. Treasure it. It's a work of art. like me!"
        }
    },
    Dragoness: {
        name: "Dragoness",
        sprite: "Dragoness",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["BabyDragon", "BabyDragon", "BabyDragon", "BabyDragon", "BabyDragon"],
        gives: "Document",
        text: {
            intro: "My precious hatchlings are lost! Bring back all five, and I'll share with you a rare secret on how to craft emerald ingots.",
            progress: "One of my babies is safe, but the others are still out there. Don't stop until they are all home!",
            conclusion: "My hatchlings are finally safe. You've earned this, and here's the instructions to forge emerald ingots, knowledge as rare as my treasures."
        }
    },
    CaveGirl: {
        name: "CaveGirl",
        sprite: "CaveGirl",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Bone"],
        gives: "GoldCoin",
        text: {
            intro: "Bring the old lady a bone to chew on, would you, dear?",
            progress: null,
            conclusion: "Excellent! Is it vegan? Who cares. Here's the gold coin. I have no use for it."
        }
    },
    CatQueen: {
        name: "CatQueen",
        sprite: "CatQueen",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Cat", "Cat", "Cat", "Cat", "Cat"],
        gives: "Chicken",
        text: {
            intro: "My little kitties have wandered off! Bring them back, all five, and I'll share a chicken I was just about to fry.",
            progress: "One kitty found, but my brood is still scattered. Keep searching, dear!",
            conclusion: "All my kitties are safely home! As promised, here's that chicken, still alive, and just waiting to be cooked!"
        }
    },
    BlondeChick: {
        name: "BlondeChick",
        sprite: "BlondeChick",
        category: 'crest',
        voice: "Female2",
        wants: ["Chicken", "Chicken", "Chicken", "Chicken", "Chicken"],
        gives: "Egg",
        text: {
            intro: "My poor little chicks, lost and alone! Bring them back to me, all five, and I'll give you a special gift.",
            progress: "A chick returned! But there are more still out there, waiting for a safe return.",
            conclusion: "My flock is whole again! As promised, here's an egg, a little one who hasn't hatched yet. Take good care of it!"
        }
    },
    ApparitiaDomme: {
        name: "ApparitiaDomme",
        sprite: "ApparitiaDomme",
        category: 'crest',
        voice: "Apparitia",
        wants: ["RedLeatherTop", "RedLeatherLeggings", "RedLeatherBoots"],
        gives: "Brush",
        text: {
            intro: "I'm tired of this dull, white look! Bring me a red leather outfit, sleek as the famous Three Dommes, and maybe I'll reconsider my alliances.",
            progress: "One step closer to a daring new look! Keep going; I won't cross over until I'm fully dressed.",
            conclusion: "Ah, finally! Now I'm as fierce as the Three Dommes. As promised, here's a brush to keep those boots shining. Consider me on your side now."
        }
    },
    PizzaMaker: {
        name: "PizzaMaker",
        sprite: "PizzaMaker",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Egg", "Milk"],
        gives: "Pizza",
        text: {
            intro: "Bring me fresh egg and milk, and I'll whip up a pizza unlike any you've tasted before!",
            progress: "Almost there, but I still need the final touch. Don't keep the dough waiting!",
            conclusion: "Perfect! My special recipe is complete. Here's your pizza. Hot, fresh, and unforgettable! Like me."
        }
    },
    HungryMiner: {
        name: "HungryMiner",
        sprite: "HungryMiner",
        category: 'crest',
        voice: "Female",
        wants: ["Pizza", "Beer"],
        gives: "GoldOre",
        text: {
            intro: "Toiling away in your gold mines, sweating and starving, the least you could do is bring me some pizza and beer!",
            progress: "Pizza or beer, but not both? Come on, I need a full meal to keep going!",
            conclusion: "Now that's more like it! Thanks for the grub. Here, a little something from the mines as a ‘thank you’."
        }
    },
    PickaxeMiner: {
        name: "PickaxeMiner",
        sprite: "PickaxeMiner",
        category: 'crest',
        voice: "Female",
        wants: ["PickAxe"],
        gives: "GoldOre",
        text: {
            intro: "Do you see how rusty my pickaxe is? What will you do about it?",
            progress: null,
            conclusion: "Oh, this is better! Here's your gold ore for your trouble"
        }
    },
    ThirstyMiner: {
        name: "ThirstyMiner",
        sprite: "ThirstyMiner",
        category: 'crest',
        voice: "Female2",
        wants: ["GlassOfBeer"],
        gives: "GoldOre",
        text: {
            intro: "Phew! I'm parched from all this digging! Bring me a glass of beer, and I'll pay in gold.",
            progress: null,
            conclusion: "Ah, that hit the spot! Here's your gold ore, worth every sip!"
        }
    },
    GoldKeysa1: {
        name: "GoldKeysa1",
        sprite: "GoldKeysa1",
        category: 'crest',
        voice: "Female2",
        wants: ["GoldBar", "GoldBar", "GoldBar"],
        gives: "GoldKey",
        text: {
            intro: "I crave gold bars, shiny and true! Bring me three, I'll craft a key for you.",
            progress: "More gold please, keep it flowing! Soon your key will start glowing.",
            conclusion: "Three bars complete! Here's your key, forged with gold, shiny as can be!"
        }
    },
    GoldKeysa2: {
        name: "GoldKeysa2",
        sprite: "GoldKeysa2",
        category: 'crest',
        voice: "Female",
        wants: ["GoldOre", "GoldOre", "GoldOre"],
        gives: "GoldKey",
        text: {
            intro: "Bring me raw gold, from deep in the ground. Three chunks will get you a key, safe and sound.",
            progress: "More ore to make it whole, keep digging for that golden goal!",
            conclusion: "With gold in hand, your key is now made. Shiny, bright, time to upgrade!"
        }
    },
    BeerBarrelGirl: {
        name: "BeerBarrelGirl",
        sprite: "BeerBarrelGirl",
        category: 'crest',
        voice: "Female2",
        wants: ["SmallBarrel", "SmallBarrel", "SmallBarrel"],
        gives: "GlassOfBeer",
        text: {
            intro: "I'm stuck down here, my barrels are gone! Bring me three, and I'll share just one.",
            progress: "A barrel here, a barrel there... Keep 'em coming, we're almost there!",
            conclusion: "Three barrels back, my cellar's cheer! Enjoy this prize, a glass of beer!"
        }
    },
    ApparitiaCorruption: {
        name: "ApparitiaCorruption",
        sprite: "ApparitiaCorruption",
        category: 'crest',
        voice: "Apparitia",
        wants: ["WhiteHandbag"],
        gives: "GoldCoin",
        text: {
            intro: "I stole one gold coin. You will not be able to train with all master Mistresses.",
            progress: null,
            conclusion: "Oh. I guess bribery works. Corruption rules. Here you go."
        }
    },
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
            conclusion: "My appetite is sated. You can continue your fight."
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
            intro: "A sheep to prune, scissors to snip, and red to dye. Bring them all, and a fine shawl is nigh.",
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
    ForestHedgeHog: {
        name: "ForestHedgeHog",
        sprite: "ForestHedgeHog",
        category: 'crest',
        voice: "Female2",
        wants: ["Apple", "Pear", "GreenApple"],
        gives: "RocketBottom",
        text: {
            intro: "I was starving, okay? So I borrowed ... fine, stole this shiny rocket part. Bring me some fruit, and I might give it back.",
            progress: "You've brought some fruit, but I'm not full yet. More, or no rocket bottom for you!",
            conclusion: "Mmm, delicious! Now that I'm full, here's your rocket part. Maybe next time, leave snacks lying around."
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
            conclusion: "All set! I'll dive and retrieve your pearl. Here you go, straight from the depths!"
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
            conclusion: "Ancestors honored, their rest now serene, For you, a spare set of fins, a small, fitting tribute from the sea."
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
            intro: "So, you want a hiking boot? Well, I could whip one up, but I'll need two pieces of hide, from a 'dangerous' beast. Yep, a cow.",
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
            intro: "I collect moons, two are already mine, but I need two more to complete my collection. Bring them to me, and I'll gift you a MoonStone.",
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
            intro: "I've got the perfect red dye ready, but I need something to pour it into. Bring me an empty bottle, and I'll fill it with vibrant color.",
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
            conclusion: "Thanks! Now my bra is  complete. Here's the Gold Key,trust me, I wasn't hiding it anywhere in this bikini."
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
    Cow: {
        name: "Cow",
        sprite: "Cow",
        category: 'crest',
        voice: "Princess",
        wants: ["HayBale", "HayBale"],
        gives: "Milk",
        text: {
            intro: "Poor mute thing, are you hungry? Cow? Would you let me milk you if I feed you?",
            progress: "Hey, you like the hay. I'll bring more.",
            conclusion: "Now I will milk you. Stand ready."
        }
    },
    Bathy: {
        name: "Bathy",
        sprite: "Bathy",
        category: 'crest',
        voice: "Female2",
        wants: ["RubberDuck", "Sponge"],
        gives: "GoldCoin",
        text: {
            intro: "Bath time shouldn't be so lonely! Bring me some company and a gentle touch, and I'll make it worth your while.",
            progress: "One thing's here, but I still need more to make this bath perfect.",
            conclusion: "Ahh, everything I needed for the perfect soak! Here's your gold coin, thanks for making bath time blissful."
        }
    },
    Beatchy: {
        name: "Beatchy",
        sprite: "Beatchy",
        category: 'crest',
        voice: "Female2",
        wants: ["RedSandals", "RedLeatherHat"],
        gives: "GoldCoin",
        text: {
            intro: "This red bikini is fire, but my look is not complete. I need some headturning headwear and fancy footwear. Help me out, darling!",
            progress: "One piece found, fabulous! But I'm still feeling incomplete. Keep searching, my stylish savior!",
            conclusion: "Perfection! Now my outfit is as dazzling as the sun. Here's your gold coin, sweetie, you've earned it!"
        }
    },
    DommeFromTheHole: {
        name: "DommeFromTheHole",
        sprite: "DommeFromTheHole",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["GoldCoin"],
        gives: "PickAxe",
        text: {
            intro: "From the depths, I bring a deal. A PickAxe for a single gold coin. Do you dare to dig deeper?",
            progress: null,
            conclusion: "The coin is mine, and the PickAxe is yours. Happy mining... if you survive."
        }
    },
};

const INTERACTION_SHRINE = {
    PitchforkFarmer: {
        name: "PitchforkFarmer",
        sprite: "PitchforkFarmer",
        category: 'crest',
        voice: "Female2",
        wants: ["BabySheep", "BabySheep", "BabySheep"],
        gives: "HeartSkill",
        level: 5,
        text: {
            intro: "Mary had a little lamb… or rather three of them. Now, where the heck are they gone?",
            progress: "Lamb by lamb, we're inching closer to lambchops. Keep it up!",
            conclusion: "Finally, all set for a barbecue feast! Your health will thank you for this."
        }
    },
    NiqabBabe: {
        name: "NiqabBabe",
        sprite: "NiqabBabe",
        category: 'crest',
        voice: "Female",
        wants: ["AnkhBook", "FireballBook", "PrincessBook", "TreeOfLifeBook"],
        gives: "Magic",
        level: 7,
        text: {
            intro: "Bismillah, the time has come to break free from these oppressive chains. Bring me books of wisdom, Habibi, and I will share the magic of my freedom with you.",
            progress: "Shukran for this gift, but I need more knowledge to truly rise. Imshallah, you will bring them soon.",
            conclusion: "With these books, I am reborn! No longer bound by false tenets, I offer you the magic of my newfound freedom. Go, Habibi, and use it to shape your destiny!"
        }
    },
    Nun: {
        name: "Nun",
        sprite: "Nun",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["YoniBook", "YinYangBook", "VenusBook", "TripleMoonBook"],
        gives: "Magic",
        level: 7,
        text: {
            intro: "O sancta simplicitas! Enough of praising imaginary friends. Bring me books of truth and forbidden wisdom, and I shall share my ars magica with you.",
            progress: "A single book, gratias tibi, but my journey to enlightenment of apostasy is not complete. More knowledge is needed.",
            conclusion: "Ah, sapientia lux est! With these tomes, I am free from the chains of the faith. In return, I gift you my newfound knowledge of nuclear power. Use it wisely, or not at all."
        }
    },
    NinjaX: {
        name: "NinjaX",
        sprite: "NinjaX",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Shuriken", "Shuriken", "Shuriken"],
        gives: "Attack",
        level: 5,
        text: {
            intro: "My throwing stars are missing, and without them, my art is incomplete. Bring them back, and I'll teach you the ways of stealth and death, ninja style.",
            progress: "One shuriken recovered, but I need all three to regain my edge. Keep searching.",
            conclusion: "All my stars are back where they belong. As promised, let me teach you the art of the ninja. Silent, swift, and deadly."
        }
    },
    BlueViper: {
        name: "BlueViper",
        sprite: "BlueViper",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Rat", "Rat", "Rat"],
        gives: "Attack",
        level: 5,
        text: {
            intro: "I have a craving for rats. Bring me three, and I'll teach you to strike with the precision and speed of a viper.",
            progress: "A rat delivered, but I need more to satisfy my hunger. Keep hunting!",
            conclusion: "Three rats, delicious! Now, let me show you the art of the viper's strike. Quick, deadly, and unstoppable."
        }
    },
    IceQueen: {
        name: "IceQueen",
        sprite: "IceQueen",
        category: 'crest',
        voice: "Female",
        wants: ["IceCube", "IceCube", "IceCube"],
        gives: "Magic",
        level: 5,
        text: {
            intro: "Whiskey without ice? Unthinkable. Bring me some cubes, and perhaps my magical beauty will rub off on you.",
            progress: "A cube or two, but my drink is still warm. Keep them coming!",
            conclusion: "Ah, perfectly chilled! You've earned a touch of my magic. Use it wisely. Beauty like mine is rare."
        }
    },
    SpartaKiss: {
        name: "SpartaKiss",
        sprite: "SpartaKiss",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Dagger", "Sword", "Spear", "BattleAxe", "Mace"],
        gives: "Attack",
        level: 5,
        text: {
            intro: "A true warrior knows the best defense is a strong offense. Bring me weapons for my collection, and I'll teach you the art of the attack.",
            progress: "Another weapon for the arsenal, but the collection isn't complete. Bring me more tools of war!",
            conclusion: "With these weapons, you've proven your warrior's spirit. Now, let me teach you how to strike like a warrior!"
        }
    },
    Fox: {
        name: "Fox",
        sprite: "Fox",
        category: 'crest',
        voice: "Female",
        wants: ["Chicken", "Chicken", "Chicken"],
        gives: "HeartSkill",
        level: 5,
        text: {
            intro: "Chickens are great for my health, and sometimes for yours too. Bring me three, and I'll show you the secret to staying hearty!",
            progress: "A chicken delivered, but I'm still feeling peckish. Keep hunting!",
            conclusion: "Three chickens! I'm feeling fit as a fiddle. Now, let me share my secret to improving your health. You're welcome!"
        }
    },
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
            intro: "Climbing mountains isn't just about endurance. It is about strength and precision. For a gold coin, I'll teach you to fight like you're scaling the highest peaks.",
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
            intro: "I'm a master of the sword, and for a gold coin, I'll teach you how to wield it with violent precision.",
            progress: null,
            conclusion: "That coin's bought you some serious sword skills. Now go forth and let your enemies fear your blade!"
        }
    },
    BlondeKnight: {
        name: "BlondeKnight",
        sprite: "BlondeKnight",
        category: "crest",
        voice: "Female2",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "Want to learn how to swing a sword like a pro? For a gold coin, I'll teach you the art of the perfect strike.",
            progress: null,
            conclusion: "Lesson complete! With those moves, you'll make even the fiercest foes think twice. Go show them what you've learned!"
        }
    },
    DarkPriestess: {
        name: "DarkPriestess",
        sprite: "DarkPriestess",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["GoldCoin"],
        gives: "Magic",
        text: {
            intro: "Pray for magic, pray with gold. Make your enemies do as they are told.",
            progress: null,
            conclusion: "The coin is given, the spell is cast. Wield this magic, make their terror last."
        }
    },
    Ruberella: {
        name: "Ruberella",
        sprite: "Ruberella",
        category: 'crest',
        voice: "Female2",
        wants: ["GoldCoin"],
        gives: "HeartSkill",
        text: {
            intro: "One gold coin, and I'll make you feel stronger! It could just be my charm... who knows?",
            progress: null,
            conclusion: "With that coin, your heart grows bold. Must be my magic, or maybe just me!"
        }
    },
    RedMiniDomme: {
        name: "RedMiniDomme",
        sprite: "RedMiniDomme",
        category: 'crest',
        voice: "Female2",
        wants: ["Brush"],
        gives: "HeartSkill",
        text: {
            intro: "Find the brush, kneel and clean my boots. Show humility and respect and you will be rewarded.",
            progress: null,
            conclusion: "Your service is accepted. As a reward I increased your health."
        }
    },
    BlackMiniDomme: {
        name: "BlackMiniDomme",
        sprite: "BlackMiniDomme",
        category: 'crest',
        voice: "Female",
        wants: ["Brush"],
        gives: "Magic",
        text: {
            intro: "Find the brush, kneel and clean my pumps. Show humility and respect and you will be rewarded.",
            progress: null,
            conclusion: "Your service is accepted. As a reward I increased your magic skills."
        }
    },
    RedTopDomme: {
        name: "RedTopDomme",
        sprite: "RedTopDomme",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Brush"],
        gives: "Attack",
        text: {
            intro: "Find the brush, kneel and clean my boots. Show humility and respect and you will be rewarded.",
            progress: null,
            conclusion: "Your service is accepted. As a reward I increased your fighting skills."
        }
    },
    CatBabeMagic: {
        name: "CatBabeMagic",
        sprite: "CatBabeMagic",
        category: 'crest',
        voice: "StrangeFemale",
        wants: ["Rat"],
        gives: "Magic",
        text: {
            intro: "Meeow. Hungry. Rat. Now. Magic.",
            progress: null,
            conclusion: "Princess. Magic. Best."
        }
    },
    CatBabeAttack: {
        name: "CatBabeAttack",
        sprite: "CatBabeAttack",
        category: 'crest',
        voice: "StrangeFemale",
        wants: ["Cheese"],
        gives: "Attack",
        text: {
            intro: "Meeow. Cheese. Mouse trap. Help.",
            progress: null,
            conclusion: "Princess. Fights. Best."
        }
    },
    CatBabeHealth: {
        name: "CatBabeHealth",
        sprite: "CatBabeHealth",
        category: 'crest',
        voice: "StrangeFemale",
        wants: ["TropicalFish"],
        gives: "HeartSkill",
        text: {
            intro: "Meeow. Fish. Health. Good.",
            progress: null,
            conclusion: "Princess. Healthy."
        }
    },
    CatBabeMagicChicken: {
        name: "CatBabeMagicChicken",
        sprite: "CatBabeMagicChicken",
        category: 'crest',
        voice: "StrangeFemale",
        wants: ["LittleChicken"],
        gives: "Magic",
        text: {
            intro: "Meeow. Hungry. Chicken, yes. Fried.",
            progress: null,
            conclusion: "Princess. Magic. Strong."
        }
    },
    LastCat: {
        name: "LastCat",
        sprite: "LastCat",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Mouse"],
        gives: "Magic",
        text: {
            intro: "Get me some focking mouse, you brat.",
            progress: null,
            conclusion: "Just purr. And everybody will be your slave."
        }
    },
    BlackBeret: {
        name: "BlackBeret",
        sprite: "BlackBeret",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["GoldCoin"],
        gives: "Attack",
        level: 5,
        text: {
            intro: "You thought red berets are special forces? Black berets are even more special, don't you see? For a coin of course you'll kick even more ass. And harder.",
            progress: null,
            conclusion: "Just see? Use your heels. Pierce them like with stiletto."
        }
    },
    Alchemist: {
        name: "Alchemist",
        sprite: "Alchemist",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["GoldCoin"],
        gives: "HeartSkill",
        level: 5,
        text: {
            intro: "I brew this amazing potion which will maybe improve your health. Or kill you. Would you want to try it? For a coin? Consider it a clinical trial, haha.",
            progress: null,
            conclusion: "You survived. Amazing."
        }
    },
    MagicHillBillie: {
        name: "MagicHillBillie",
        sprite: "MagicHillBillie",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["GoldCoin"],
        gives: "Magic",
        level: 5,
        text: {
            intro: "I know a new magic trick. Would you care to learn it? For a coin?",
            progress: null,
            conclusion: "Wow. You learn quickly. It's magic, right?"
        }
    },
    SpaceTrainer: {
        name: "SpaceTrainer",
        sprite: "SpaceTrainer",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        level: 5,
        text: {
            intro: "I can show you how to attack from space. For a coin, I'll show you the advantage of having high ground.",
            progress: null,
            conclusion: "Now you can fight in zero gravity. Go forth and strike with ferocity!"
        }
    },
    Swimmer: {
        name: "Swimmer",
        sprite: "Swimmer",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        level: 3,
        text: {
            intro: "Swimming is good for your muscles and coordination. For a gold coin I will teach you to swim like a fish. And this will improve your fighting skills.",
            progress: null,
            conclusion: "Your moves are amazing. Go and show them what you've learned!"
        }
    },
    CuddlyBear: {
        name: "CuddlyBear",
        sprite: "CuddlyBear",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["GoldCoin"],
        gives: "Attack",
        level: 5,
        text: {
            intro: "Let me show you a bear hug. For a single gold coin.",
            progress: null,
            conclusion: "Excellent. Hug them and break their tiny bones."
        }
    },
    AxeBabe: {
        name: "AxeBabe",
        sprite: "AxeBabe",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        level: 5,
        text: {
            intro: "For a shiny coin with the face of your mother, haha,  I will tell you something important.",
            progress: null,
            conclusion: "If you have enemies, just axe them. Ahahahaha."
        }
    },
    TransparentTibetan: {
        name: "TransparentTibetan",
        sprite: "TransparentTibetan",
        category: 'crest',
        voice: "Female2",
        wants: ["GoldCoin"],
        gives: "Magic",
        level: 5,
        text: {
            intro: "Every little thing I do is magic. Want to learn?",
            progress: null,
            conclusion: "Now you can do it as well, even with your shaby outfit."
        }
    },
    ApparitiaMagic: {
        name: "ApparitiaMagic",
        sprite: "ApparitiaMagic",
        category: 'crest',
        voice: "Apparitia",
        wants: ["GoldCoin"],
        gives: "Magic",
        level: 5,
        text: {
            intro: "I am sick of this war. I'll rather share my magic skills with you. For a price of gold coin, naturally.",
            progress: null,
            conclusion: "You are now skilled in the Apparitias magic. Show my silly sisters your progress."
        }
    },
    SorceressDomme: {
        name: "SorceressDomme",
        sprite: "SorceressDomme",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Magic",
        level: 5,
        text: {
            intro: "Power comes at a price, darling. Give me a gold coin, and I'll unlock new depths of ancient royal magic within you.",
            progress: null,
            conclusion: "Your payment is received. Feel the surge of magic coursing through you. Now you are a true sorceress."
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
        spriteChange: "PrincessOnThroneFinal",
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
