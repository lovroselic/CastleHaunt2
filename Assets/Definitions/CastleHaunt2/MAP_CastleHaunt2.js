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
    3: "I need to prepare myself before I continue."
};

/** Map definitions */
const MAP = {
    1 : {
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
        decals: '[[25,7,"SirFred4","picture"],[29,7,"DungeonMaster201","picture"],[91,1,"AticAtac110","picture"],[95,1,"Ishar71","picture"],[33,5,"BrianBloodaxe70","picture"],[77,5,"ManicMiner11","picture"],[54,3,"BC11","picture"],[87,3,"RobinToTheRescue1","picture"],[103,1,"CrownDecal","crest"],[105,1,"CrownDecal","crest"],[58,4,"Grate1_128","crest"],[26,4,"PersianRug05","crest"],[27,4,"PersianRug05","crest"],[28,4,"PersianRug05","crest"],[39,4,"PersianRug05","crest"],[38,4,"PersianRug05","crest"],[37,4,"PersianRug05","crest"],[48,4,"PersianRug05","crest"],[49,4,"PersianRug05","crest"],[50,4,"PersianRug05","crest"],[16,4,"PersianRug02","crest"]]',
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
        decals: '[[30,7,"CrownDecal","crest"],[32,7,"CrownDecal","crest"],[127,5,"KnightStatue101","crest"],[169,5,"KnightStatue110","crest"],[25,7,"WhoDaresWins50","picture"],[37,7,"Galaxians10","picture"],[27,7,"BackToFuture200","picture"],[114,1,"CrystalCastles200","picture"],[116,1,"MontyMole111","picture"],[114,3,"IM13","picture"],[103,3,"OlympicSkier6","picture"],[62,3,"Valhalla88","picture"],[116,5,"TombRaider99","picture"],[42,5,"LastNinja10","picture"],[176,5,"Cavelon4","picture"],[176,1,"AticAtac113","picture"],[180,1,"GatewayToApshai140","picture"],[238,1,"Elvira1","picture"],[244,1,"Witcher130","picture"]]',
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
        data: '{"width":"13","height":"9","map":"BB2ABABB3AA39BABB18ABB2ABB4ABABB15ABABB20A$"}',
        wall: "DarkMossy124",
        floor: "MossFloor103",
        ceil: "WebbedFloor5",
        start: '[63,3]',
        gates: '[[64,3,"3.1","2.2","Open"]]',
    }

};