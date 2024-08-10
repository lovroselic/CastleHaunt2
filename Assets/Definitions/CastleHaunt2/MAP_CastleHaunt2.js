/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */

"use strict";
console.log("%cMAP for CCC loaded.", "color: #888");
/**
 * entry texts
 */

const MAP_TEXT = {
    1: "This is my bedroom.",
    2: "What happened in my throne room?",
    3: "I need to prepare myself before I continue.",
    4: "I should find some weapons. I don't want to ruin my heels."
};

/** Map definitions */
const MAP = {
    1: {
        name: "Bedroom",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        spawnDelay: -1,
        data: '{"width":"11","height":"11","map":"BB5AA15BAA4BB3AA6BB2AA3BAA4BAA8BABB2AA2BABB7ABAA2BB2AA2BB7AA3BB2AA2BB2ABB2ABAA5BB18$A"}',
        wall: "GoldishWall1",
        floor: "GoldMarbleFloor",
        ceil: "WebbedFloor9",
        start: '[49,1]',
        decals: '[[25,7,"SirFred4","picture"],[29,7,"DungeonMaster201","picture"],[91,1,"AticAtac110","picture"],[95,1,"Ishar71","picture"],[33,5,"BrianBloodaxe70","picture"],[77,5,"ManicMiner11","picture"],[54,3,"BC11","picture"],[87,3,"RobinToTheRescue1","picture"],[103,1,"CrownDecal","crest"],[105,1,"CrownDecal","crest"],[58,4,"Grate1_128","crest"],[26,4,"PersianRug05","crest"],[27,4,"PersianRug05","crest"],[28,4,"PersianRug05","crest"],[39,4,"PersianRug05","crest"],[38,4,"PersianRug05","crest"],[37,4,"PersianRug05","crest"],[48,4,"PersianRug05","crest"],[49,4,"PersianRug05","crest"],[50,4,"PersianRug05","crest"],[16,4,"PersianRug02","crest"],[118,1,"BookShelf04","crest"],[65,3,"BookShelf17","picture"],[1,7,"AI_Pic_103","picture"],[9,7,"AI_Pic_124","picture"],[71,5,"AI_Pic_148","picture"],[71,3,"AI_Pic_117","picture"],[112,1,"ForbiddenForest91","picture"]]',
        lights: '[[71,1,"Lamp53","standardDimmed"],[71,7,"WallLamp16","standard"],[55,5,"Fireplace01","fire"],[76,3,"Lights102","standardDimmed"]]',
        gates: '[[115,1,"1.1","2.1","Closed"]]',
        monsters: '[[82,"Bat"]]',
        containers: '[[12,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",7],[20,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",7]]',
        objects: '[[101,"Apple"]]',
        oracles: '[[5,7,"PrincessBed"]]',
    }
    ,
    2: {
        name: "The Throne Room",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        spawnDelay: -1,
        data: '{"width":"21","height":"21","map":"BB4AA2BAA37ÁÁ2AA3BAA5ÁABB2ABB2AA12BB3AA2BAA3BB2AA3ÁAA10BAA4ÁAA4ÁABAA2BB2AA3BAA2BAA7BAA9BB3AA2ÁAA38ÁAA6BAA8BAA5BAA14BB6ÁBB5ABABB15ABB2ABB4ABB4ABB3ABB2ABB5AA2BB4AA3BB2ÁAA2BB2ABB3AA4BABB5ABB3ABB3ABB20ABB16A$ÁÁ2BB5AÁÁ4BÁAÁÁ5BB2ÁAÁÁ8BÁBÁÁ4AA4ÁÁ5BÁÁ9BÁÁ4AÁÁ6AÁÁ11AÁÁ2B"}',
        wall: "SpiderWeb22",
        floor: "DarkMarble1",
        ceil: "Wood5",
        start: '[31,7]',
        decals: '[[30,7,"CrownDecal","crest"],[32,7,"CrownDecal","crest"],[127,5,"KnightStatue101","crest"],[169,5,"KnightStatue110","crest"],[25,7,"WhoDaresWins50","picture"],[37,7,"Galaxians10","picture"],[27,7,"BackToFuture200","picture"],[114,1,"CrystalCastles200","picture"],[116,1,"MontyMole111","picture"],[114,3,"IM13","picture"],[103,3,"OlympicSkier6","picture"],[62,3,"Valhalla88","picture"],[116,5,"TombRaider99","picture"],[42,5,"LastNinja10","picture"],[176,5,"Cavelon4","picture"],[176,1,"AticAtac113","picture"],[180,1,"GatewayToApshai140","picture"],[238,1,"Elvira1","picture"],[244,1,"Witcher130","picture"],[90,4,"PuddleDecal03","crest"],[89,4,"PuddleDecal10","crest"],[120,4,"PuddleDecal09","crest"],[76,4,"Grate1_128","crest"],[77,4,"Grate1_128","crest"],[75,4,"Grate1_128","crest"],[149,4,"PuddleDecal08","crest"],[129,4,"PuddleDecal10","crest"]]',
        lights: '[[114,7,"Lamp42","standardDimmed"],[116,7,"Lamp42","standardDimmed"],[176,3,"Lamp41","standardDimmed"],[180,5,"Lamp41","standardDimmed"],[238,7,"Lamp46","standardDimmed"],[244,7,"Lamp46","standardDimmed"],[2,7,"Lamp52","fire"],[18,7,"Lamp52","fire"],[422,1,"Lamp52","fire"],[438,1,"Lamp52","fire"]]',
        gates: '[[10,7,"2.1","1.1","Open"],[147,5,"2.2","3.1","Red"]]',
        keys: '[[60,2]]',
        monsters: '[[130,"Bat"],[142,"Bat"],[339,"RedGoldBat"],[353,"RedGoldBat"]]',
        containers: '[[22,"Barrel","GOLD_ITEM_TYPE.GoldCube",7],[40,"Barrel","GOLD_ITEM_TYPE.GoldCube",7],[192,"Crate","GOLD_ITEM_TYPE.SilverBar",1],[185,"Chest","GOLD_ITEM_TYPE.SilverBar",null]]',
        oracles: '[[146,3,"ApparitiaResistance"],[14,7,"ApparitiaWelcome"],[84,5,"Pinka"]]',
        interactors: '[[409,1,"TheThrone"]]',
    }
    ,
    3: {
        name: "Escape Corridor",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        spawnDelay: -1,
        data: '{"width":"13","height":"9","map":"BB5AA8BAA10BAA17BAA4BABB7ABB11ABB3ABABB3ABABB15AA2BB15ABB3$"}',
        wall: "DarkMossy124",
        floor: "MossFloor103",
        ceil: "WebbedFloor5",
        start: '[63,3]',
        decals: '[[55,4,"PuddleDecal03","crest"],[57,4,"PuddleDecal08","crest"],[18,7,"ShieldDecal01","crest"],[20,7,"ShieldDecal02","crest"],[59,5,"AI_Pic_145","picture"],[59,3,"TheHobbit70","picture"],[59,1,"AI_Pic_129","picture"],[59,7,"AticAtac201","picture"],[76,3,"KnightStatue109","crest"],[50,3,"KnightStatue103","crest"],[32,4,"Drain2_96","crest"],[16,7,"LeisureSuitLarry61","picture"],[95,1,"LadyTut102","picture"],[66,5,"WallSkelly101","crest"],[40,5,"Skeleton20","crest"]]',
        lights: '[[22,7,"Lamp41","standard"],[94,1,"Lights106","standardRedish"],[113,1,"Fireplace09","fire"]]',
        gates: '[[64,3,"3.1","2.2","Open"],[6,7,"3.2","4.1","Closed"],[52,5,"3.3","5.1","Green"]]',
        containers: '[[36,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",7]]',
        oracles: '[[110,1,"Azura"]]',
    }
    ,
    4: {
        name: "Armory",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        spawnDelay: -1,
        data: '{"width":"15","height":"15","map":"BB2AA2BAA10BABAA2BB11AA2BABABB4AA7BAA4BAEABAA2BB2AA23BAA21BAA4BAA8BB4ABB5ABAA3BB2ABAA3BB2AA2EABB6ABAA2EBAA2BB3AA2BB3ABB2AA2BB3ABABB3EBB2ABB19AB$ABB2ABB6AA2BB3"}',
        wall: "RedAndGreyBricks1",
        floor: "WebbedFloor1",
        ceil: "DarkMossy7",
        start: '[202,1]',
        decals: '[[64,7,"AI_pic258","picture"],[85,7,"AI_pic250","picture"],[137,7,"Tutankham104","picture"],[24,7,"LastNinja111","picture"],[4,7,"HalfLife11","picture"],[147,7,"AI_pic245","picture"],[13,7,"Galaga70","picture"],[22,4,"PersianRug04","crest"],[36,4,"PersianRug04","crest"],[37,4,"PersianRug04","crest"],[38,4,"PersianRug04","crest"],[31,4,"Grass16","texture"],[62,1,"AmberStar201","picture"],[223,1,"AI_pic246","picture"],[87,1,"KingsQuest52","picture"],[138,1,"AA100","picture"],[112,5,"ArticShipwreck7","picture"],[82,5,"Prince4","picture"],[106,5,"Tombraider141","picture"],[165,5,"JungleHunt89","picture"],[140,5,"AI_Pic_143","picture"],[174,5,"DragonSkulle110","picture"],[201,1,"ShieldDecal02","crest"],[203,1,"ShieldDecal06","crest"],[157,4,"PuddleDecal02","crest"],[159,3,"FalconPatrol72","picture"],[179,3,"ManicMiner63","picture"],[170,3,"Pitfall27","picture"],[35,3,"WizardOfWor89","picture"],[118,3,"DonkeyKong200","picture"],[55,3,"BookShelf18","picture"],[112,3,"AI_pic259","picture"],[82,3,"TheHobbit88","picture"]]',
        lights: '[[112,7,"Lights114","standard"],[212,1,"Lights113","standard"],[222,1,"Lamp50","dimRed"],[82,1,"Lamp42","standardDimmed"],[104,3,"Fireplace04","fire"],[90,5,"Fireplace12","fire"],[2,7,"Lights104","standardDimmed"],[11,7,"WallLamp14","standardDimmed"]]',
        gates: '[[217,1,"4.1","3.2","Open"]]',
        monsters: '[[95,"Bat"],[100,"Bat"],[33,"RedGoldBat"],[191,"RedGoldBat"],[208,"Spider"]]',
        gold: '[[49,"GoldCube"],[97,"GoldCube"],[109,"GoldCube"],[116,"GoldCube"],[57,"GoldCube"],[168,"GoldCube"],[143,"GoldCube"],[178,"GoldCube"]]',
        containers: '[[206,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",1],[71,"Wardrobe","GOLD_ITEM_TYPE.SilverBar",1],[132,"Wardrobe","GOLD_ITEM_TYPE.SilverBar",1],[122,"Barrel","GOLD_ITEM_TYPE.GoldCube",1],[199,"Barrel","GOLD_ITEM_TYPE.GoldCube",1],[17,"Crate","GOLD_ITEM_TYPE.GoldCube",7]]',
        doors: '[139,145,63,40]',
        entities: '[[30,5,"ApplePicker"]]',
        objects: '[[182,"Orb"],[42,"Bag"],[177,"Apple"]]',
        oracles: '[[7,7,"DarkEva"]]',
    }
    ,
    5: {
        name: "Babtism Of Fire",
        sg: 0,
        maxSpawned: 3,
        killCountdown: 5,
        spawnDelay: 4000,
        data: '{"width":"16","height":"16","map":"BB3ABABAA5BAA10BAA2BB4AA6BB2AA53BAA2BB2AA6BB3AA21BAA3BAA4BAA2BABABABB6ABB4AA2BAA2BB19ABB6ABB4AEBB2ABB4ABB4ABB2AA3BAA4BB3ABABB2ABABB25A$ABB2"}',
        wall: "DarkMossy232",
        floor: "DarkMarble51",
        ceil: "ComplexDarkCeiling1",
        start: '[46,3]',
        decals: '[[84,7,"WhoDaresWins88","picture"],[106,7,"TombRaider96","picture"],[170,7,"AmberStar200","picture"],[21,7,"ImpossibleMsission113","picture"],[42,7,"CastleOFTerror11","picture"],[60,7,"BeachHead100","picture"],[148,1,"AticAtac200","picture"],[213,1,"BookShelf20","picture"],[170,1,"BookShelf19","picture"],[84,1,"AI_pic235","picture"],[233,1,"LaraCroft1","picture"],[125,1,"AI_Pic_123","picture"],[33,5,"BookShelf27","picture"],[161,5,"CrawlMaster113","picture"],[97,5,"Commando100","picture"],[148,5,"BlueMax20","picture"],[106,5,"AI_Pic_132","picture"],[170,5,"AI_Pic_126","picture"],[157,3,"Barbarian130","picture"],[174,3,"JSW112","picture"],[28,5,"Skeleton21","crest"],[130,4,"PuddleDecal10","crest"],[115,4,"PuddleDecal10","crest"],[117,4,"PuddleDecal10","crest"],[103,4,"PuddleDecal08","crest"],[227,1,"DancingSkeletons2","crest"],[44,4,"LeopardRug02","crest"]]',
        lights: '[[13,7,"Lamp47","standard"],[84,5,"WallLamp10","standard"],[170,3,"Lamp40","standard"],[106,1,"Lights113","standardDimmed"],[148,7,"Lamp48","standardDimmed"]]',
        gates: '[[47,3,"5.1","3.3","Open"],[7,7,"5.2","6.1","Blue"],[128,5,"5.3","7.1","Silver"],[252,1,"5.4","8.1","Red"]]',
        keys: '[[206,4]]',
        gold: '[[51,"GoldCube"],[167,"GoldCube"],[92,"GoldCube"],[141,"GoldCube"],[179,"GoldCube"],[86,"Coins"],[120,"Coins"],[201,"Coins"]]',
        containers: '[[41,"Chest","GOLD_ITEM_TYPE.GoldCube",7],[186,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",7],[214,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",1],[194,"Wardrobe","GOLD_ITEM_TYPE.GoldBar",1],[203,"Barrel","GOLD_ITEM_TYPE.SilverBar",4],[181,"Barrel","GOLD_ITEM_TYPE.SilverBar",4],[53,"Barrel","GOLD_ITEM_TYPE.SilverBar",4],[123,"Barrel","GOLD_ITEM_TYPE.SilverBar",4],[93,"Crate","GOLD_ITEM_TYPE.SilverBar",3]]',
        doors: '[61]',
        objects: '[[135,"Orb"]]',
        oracles: '[[64,5,"WhiteRubberella"],[43,5,"BlueHairResting"],[192,5,"ApparitiaDie"],[247,1,"RedRubberella"],[207,3,"CuteBlackRuberrella"]]',
        lairs: '[[3,7,"Lair07"],[143,3,"Lair02"],[244,1,"Lair03"]]',
        monsterList: '["MissGalaxy"]',
    }
    ,
    6 : {
        name: "First Aid",
        sg: 0,
        maxSpawned: 3,
        killCountdown: 5,
        spawnDelay: 4000,
        data: '{"width":"11","height":"11","map":"BB7AA12BB2AA29BABB9ABB16ABB2ABB3AA2BAA2BB11ABABB16A$"}',
        wall: "Wood1",
        floor: "FloorPebbles1",
        ceil: "DarkGreyRock",
        start: '[104,1]',
        lights: '[[60,1,"Lamp46","standardDimmed"],[60,7,"Lamp44","standardDimmed"],[60,3,"WallLamp19","standardDimmed"],[60,5,"Lights111","standardDimmed"]]',
        gates: '[[115,1,"6.1","5.2","Open"],[65,3,"6.2","9.1","Closed"]]',
        objects: '[[58,"Cake"]]',
        oracles: '[[55,5,"HealthAdvisor"]]',
        }
};