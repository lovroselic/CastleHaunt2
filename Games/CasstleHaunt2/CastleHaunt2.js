/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */
"use strict";

/////////////////////////////////////////////////
/*
      
TODO:
    * everything dones
known bugs: 
    * i don't do bugs
retests:
    * 


 */
////////////////////////////////////////////////////

const DEBUG = {
    FPS: false,
    SETTING: true,
    VERBOSE: true,
    _2D_display: true,
    INVINCIBLE: false,
    FREE_MAGIC: false,
    LOAD: false,
    STUDY: false,
    keys: false,
    displayInv() {
        HERO.inventory.scroll.display();
        const list = [];
        for (const item of HERO.inventory.item) {
            list.push(item.name);
        }
        console.info("items", list);
    },
    kill() {
        console.log("KILL all");
        ENTITY3D.POOL.clear();
    },
    goto(grid) {
        HERO.player.pos = Vector3.from_Grid(Grid.toCenter(grid), 0.5);
    },
};
const INI = {};

const GAME = {
    setup() {
        console.log("GAME SETUP started");
        //$("#buttons").prepend("<input type='button' id='startGame' value='Start Game'>");
        //$("#startGame").prop("disabled", true);
        $("#conv").remove();

        //$("#p1").on("click", GAME.setFirstPerson);
        //$("#p3").on("click", GAME.setThirdPerson);
    },
};

const PRG = {
    VERSION: "0.01.00",
    NAME: "CastleHaunt II",
    YEAR: "2024",
    SG: "CH2",
    CSS: "color: #239AFF;",
    INIT() {
        console.log("%c**************************************************************************************************************************************", PRG.CSS);
        console.log(`${PRG.NAME} ${PRG.VERSION} by Lovro Selic, (c) LaughingSkull ${PRG.YEAR} on ${navigator.userAgent}`);
        console.log("%c**************************************************************************************************************************************", PRG.CSS);
        $("#title").html(PRG.NAME);
        $("#version").html(`${PRG.NAME} V${PRG.VERSION} <span style='font-size:14px'>&copy</span> LaughingSkull ${PRG.YEAR}`);
        $("input#toggleAbout").val("About " + PRG.NAME);
        $("#about fieldset legend").append(" " + PRG.NAME + " ");

        ENGINE.autostart = true;
        ENGINE.start = PRG.start;
        ENGINE.readyCall = GAME.setup;
        ENGINE.setGridSize(64);
        ENGINE.setSpriteSheetSize(64);
        ENGINE.init();
    },
    setup() {
        if (DEBUG.SETTING) {
            $("#engine_version").html(ENGINE.VERSION);
            $("#grid_version").html(GRID.VERSION);
            $("#maze_version").html(DUNGEON.VERSION);
            $("#iam_version").html(IndexArrayManagers.VERSION);
            $("#lib_version").html(LIB.VERSION);
            $("#webgl_version").html(WebGL.VERSION);
            $("#maptools_version").html(MAP_TOOLS.VERSION);

        } else {
            $('#debug').hide();
        }

        $("#toggleHelp").click(function () {
            $("#help").toggle(400);
        });

        $("#toggleAbout").click(function () {
            $("#about").toggle(400);
        });

        $("#toggleVersion").click(function () {
            $("#debug").toggle(400);
        });

        //boxes
        ENGINE.gameWIDTH = 800;
        ENGINE.titleWIDTH = 1280;
        ENGINE.sideWIDTH = (ENGINE.titleWIDTH - ENGINE.gameWIDTH) / 2;
        ENGINE.gameHEIGHT = 600;
        ENGINE.titleHEIGHT = 80;
        ENGINE.bottomHEIGHT = 40;
        ENGINE.bottomWIDTH = ENGINE.titleWIDTH;

        $("#bottom").css("margin-top", ENGINE.gameHEIGHT + ENGINE.titleHEIGHT + ENGINE.bottomHEIGHT);
        $(ENGINE.gameWindowId).width(ENGINE.gameWIDTH + 2 * ENGINE.sideWIDTH + 4);
        ENGINE.addBOX("TITLE", ENGINE.titleWIDTH, ENGINE.titleHEIGHT, ["title", "compassRose", "compassNeedle"], null);
        ENGINE.addBOX("LSIDE", ENGINE.sideWIDTH, ENGINE.gameHEIGHT, ["Lsideback", "potion", "time", "statusBars", "stat", "gold"], "side");
        ENGINE.addBOX("ROOM", ENGINE.gameWIDTH, ENGINE.gameHEIGHT, ["background", "3d_webgl", "info", "subtitle", "text", "FPS", "button", "click"], "side");
        ENGINE.addBOX("SIDE", ENGINE.sideWIDTH, ENGINE.gameHEIGHT, ["sideback", "keys", "minimap", "scrolls"], "fside");
        ENGINE.addBOX("DOWN", ENGINE.bottomWIDTH, ENGINE.bottomHEIGHT, ["bottom", "bottomText"], null);

        if (DEBUG._2D_display) {
            ENGINE.addBOX("LEVEL", ENGINE.gameWIDTH, ENGINE.gameHEIGHT, ["pacgrid", "grid", "coord", "player"], null);
        }

        /** dev settings */
        WebGL.verbose = true;
    },
    start() {
        console.log(PRG.NAME + " started.");
        $(ENGINE.topCanvas).off("mousemove", ENGINE.mouseOver);
        $(ENGINE.topCanvas).off("click", ENGINE.mouseClick);
        $(ENGINE.topCanvas).css("cursor", "");

        $("#startGame").addClass("hidden");
        $(document).keypress(function (event) {
            if (event.which === 32 || event.which === 13) {
                event.preventDefault();
            }
        });
        TITLE.startTitle();
    }
};

const TITLE = {
    startTitle() {
        console.log("TITLE started");
        $("#pause").prop("disabled", true);
    }
};

// -- main --
$(function () {
    SPEECH.init();
    PRG.INIT();
    PRG.setup();
    ENGINE.LOAD.preload();
    UNIFORM.setup();
    SAVE_GAME.setKey(PRG.SG);
});