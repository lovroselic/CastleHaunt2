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
    1: {
        name: "Begin",
        sg: 0,
        data: '{"width":"11","height":"11","map":"BB3ABB4AA4BAA28BAA14BABB21ABB2ABB2AA3BB4ABABB7ABB4ABB9$BB3A"}',
        wall: "DarkBricks111",
        floor: "RedBrickFloor1",
        ceil: "VaultedCeiling1",
        start: '[60,7]',
        decals: '[[18,7,"DotHunter","picture"],[1,7,"ForbiddenForest90","picture"],[115,1,"TombRaider99","picture"],[107,1,"CastleOfTerror4","picture"],[65,3,"Decathlon200","picture"],[55,5,"Forest","texture"],[47,4,"FlatPond4","crest"]]',
        lights: '[[102,1,"Lamp48","standard"],[86,3,"Lamp50","standard"],[45,5,"Lamp50","standard"],[5,7,"Lamp45","standard"]]',
        gates: '[[77,5,"1.1","2.1","Gold"]]',
        keys: '[[79,0]]',
        objects: '[[24,"Apple"],[27,"Apple"],[82,"Bag"],[83,"Bag"],[84,"Bag"],[80,"Orb"],[69,"Orb"],[58,"Orb"]]',
    }
    ,
    2: {
        name: "Second one with longer name",
        sg: 0,
        data: '{"width":"11","height":"11","map":"BB4ABB3AA2BAA35BAA7BB11ABB4ABB8ABB7ABAA3BB5ABABB18$BB2A"}',
        wall: "DarkBricks111",
        floor: "RedBrickFloor1",
        ceil: "VaultedCeiling1",
        start: '[75,3]',
        lights: '[[56,5,"Lamp50","standard"],[104,1,"WallLamp34","standard"]]',
        gates: '[[76,3,"2.1","1.1","Open"],[4,7,"2.2","3.1","Up"],[6,7,"2.3","4.1","Down"],[33,5,"2.4","5.1","Closed"],[77,5,"2.5","6.1","Blue"],[113,1,"2.6","7.1","Emerald"]]',
        keys: '[[78,4],[102,5]]',
    }
    ,
    3: {
        name: "Lair study",
        sg: 0,
        maxSpawned: 5,
        killCountdown: 4,
        spawnDelay: 3000,
        data: '{"width":"15","height":"15","map":"BB9AA16BB2AA57BABB13ABB37ABB3ABB17AA3BAA3BB23ABB2ABB14ABABB14A$"}',
        wall: "DarkBricks111",
        floor: "RedBrickFloor1",
        ceil: "VaultedCeiling1",
        start: '[202,1]',
        decals: '[[34,7,"DungeonDoor_Blocked2","crest"],[39,7,"Forest","texture"]]',
        lights: '[[112,1,"Lamp41","standard"],[112,7,"Lamp41","standard"],[112,3,"Lamp41","standard"],[112,5,"Lamp41","standard"]]',
        gates: '[[217,1,"3.1","2.2","Down"]]',
        lairs: '[[7,7,"Lair01"],[105,5,"Lair09"],[119,3,"Lair04"]]',
        monsterList: '["MissGalaxy","MissGalaxy"]',
    }
    ,
    4: {
        name: "Spawn test",
        sg: 0,
        maxSpawned: 1,
        killCountdown: 3,
        spawnDelay: 5000,
        data: '{"width":"11","height":"11","map":"BB5AA12BAA3BAA2BB3AA3BAA3BAA9BB8ABB2ABABB21ABB3AA2BAA4BB13ABB4ABB10$BA"}',
        wall: "DarkBricks111",
        floor: "RedBrickFloor1",
        ceil: "VaultedCeiling1",
        start: '[104,1]',
        lights: '[[16,7,"Lamp53","standard"]]',
        gates: '[[115,1,"4.1","2.3","Up"]]',
        lairs: '[[49,7,"Lair01"]]',
        monsterList: '["MissGalaxy"]',
    }
};