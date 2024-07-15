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
    2 : {
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
        name: "Up",
        sg: 0,
        data: '{"width":"11","height":"11","map":"BB8AA42BB30AA6BB9ABB16ABB8$"}',
        wall: "DarkBricks111",
        floor: "RedBrickFloor1",
        ceil: "VaultedCeiling1",
        start: '[104,1]',
        lights: '[[16,7,"Lamp53","standard"]]',
        gates: '[[115,1,"3.1","2.2","Down"]]',
    }
    ,
    4: {
        name: "down",
        sg: 0,
        data: '{"width":"11","height":"11","map":"BB8AA42BB34AA6BB13ABB4ABB10$BA"}',
        wall: "DarkBricks111",
        floor: "RedBrickFloor1",
        ceil: "VaultedCeiling1",
        start: '[104,1]',
        lights: '[[16,7,"Lamp53","standard"]]',
        gates: '[[115,1,"4.1","2.3","Up"]]',
    }
};