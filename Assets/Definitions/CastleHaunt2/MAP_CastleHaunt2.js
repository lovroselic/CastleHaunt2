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
    2: "This is dungeon 2",
};

/** Map definitions */
const MAP = {
    1 : {
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
        lights: '[[71,1,"Lamp53","standardDimmed"],[71,7,"WallLamp16","standard"]]',
        gates: '[[115,1,"1.1","2.1","Closed"]]',
        monsters: '[[82,"Bat"]]',
        containers: '[[12,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",7],[20,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",7]]',
        objects: '[[101,"Apple"]]',
        oracles: '[[5,7,"PrincessBed"]]',
        }
};