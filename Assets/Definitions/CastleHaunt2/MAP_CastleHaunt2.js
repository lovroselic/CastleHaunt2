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
};

/** Map definitions */
const MAP = {
    1: {
        name: "Bedroom",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        spawnDelay: -1,
        data: '{"width":"11","height":"11","map":"BB5AA16BAA2BAA3BB2AA6BB2AA2BAA5BAA10BABB3ABB8AA3BB2AA2BB7AA7BB2ABB2ABAA3BB18$A"}',
        wall: "GoldishWall1",
        floor: "GoldMarbleFloor",
        ceil: "WebbedFloor9",
        start: '[49,1]',
        decals: '[[25,7,"SirFred4","picture"],[29,7,"DungeonMaster201","picture"],[91,1,"AticAtac110","picture"],[95,1,"Ishar71","picture"],[33,5,"BrianBloodaxe70","picture"],[77,5,"ManicMiner11","picture"],[54,3,"BC11","picture"],[87,3,"RobinToTheRescue1","picture"]]',
        lights: '[[71,1,"Lamp53","standardDimmed"],[71,7,"WallLamp16","standard"],[55,5,"Lamp41","standardDimmed"],[65,3,"WallLamp12","dim"]]',
        gates: '[[115,1,"1.1","2.1","Closed"]]',
        monsters: '[[82,"Bat"]]',
        containers: '[[12,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",7],[20,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",7]]',
        objects: '[[101,"Apple"]]',
        oracles: '[[5,7,"PrincessBed"]]',
    }
    ,
    2 : {
        name: "The Throne Room",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        spawnDelay: -1,
        data: '{"width":"21","height":"21","map":"BB4AA6BAA33ÁÁ2AA3BAA5ÁABB2ABB2AA12BB3AA2BAA3BB2AA3ÁAA10BAA4ÁAA4ÁAÁBAA2BB2AA3BAA2BAA7BAA10BB3AA8BAA53BABAA12BB6ÁBB5ABABB15AA2BB6ABB4ABB6ABB5AA2BB4AA3BB2ÁABABB6AA4BABB3ABB3ABB3ABB2ABB2ABB20ABB16A$ÁBB2AÁÁ4BÁAÁÁ5BÁÁ9BÁBÁÁ4AA4ÁÁ5BÁÁ9BÁÁ4AÁÁ6AÁÁ11AÁÁ2B"}',
        wall: "SpiderWeb22",
        floor: "DarkMarble1",
        ceil: "Wood5",
        start: '[31,7]',
        lights: '[[114,7,"Lamp42","standardDimmed"],[116,7,"Lamp42","standardDimmed"],[176,3,"Lamp41","standardDimmed"],[180,5,"Lamp41","standardDimmed"],[238,7,"Lamp46","standardDimmed"],[244,7,"Lamp46","standardDimmed"],[2,7,"Lamp52","fire"],[18,7,"Lamp52","fire"],[422,1,"Lamp52","fire"],[438,1,"Lamp52","fire"]]',
        gates: '[[10,7,"2.1","1.1","Open"]]',
        monsters: '[[130,"Bat"],[142,"Bat"],[339,"RedGoldBat"],[353,"RedGoldBat"]]',
        oracles: '[[146,3,"ApparitiaResistance"]]',
        }

};