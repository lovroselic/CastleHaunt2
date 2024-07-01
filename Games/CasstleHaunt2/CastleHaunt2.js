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
    VERSION: "0.01.01",
    NAME: "Castle Haunt II",
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
        TITLE.clearAllLayers();
        TITLE.blackBackgrounds();
        TITLE.titlePlot();
    },
    clearAllLayers() {
        ENGINE.layersToClear = new Set(["text", "sideback", "button", "title", "FPS",
            "Lsideback", "potion", "time", "statusBars", "stat", "gold",
            "sideback", "keys", "minimap", "scrolls",
            "compassRose", "compassNeedle", "info"]);
        ENGINE.clearLayerStack();
        WebGL.transparent();
    },
    blackBackgrounds() {
        this.topBackground();
        this.bottomBackground();
        this.sideBackground();
        ENGINE.fillLayer("background", "#000");
    },
    topBackground() {
        const CTX = LAYER.title;
        CTX.fillStyle = "#000";
        CTX.roundRect(0, 0, ENGINE.titleWIDTH, ENGINE.titleHEIGHT, { upperLeft: 20, upperRight: 20, lowerLeft: 0, lowerRight: 0 }, true, true);
    },
    bottomBackground() {
        const CTX = LAYER.bottom;
        CTX.fillStyle = "#000";
        CTX.roundRect(0, 0, ENGINE.bottomWIDTH, ENGINE.bottomHEIGHT, { upperLeft: 0, upperRight: 0, lowerLeft: 20, lowerRight: 20 }, true, true);
    },
    sideBackground() {
        ENGINE.fillLayer("sideback", "#000");
        ENGINE.fillLayer("Lsideback", "#000");
    },
    makeGrad(CTX, x, y, w, h) {
        let grad = CTX.createLinearGradient(x, y, w, h);
        grad.addColorStop("0", "#DDD");
        grad.addColorStop("0.1", "#EEE");
        grad.addColorStop("0.2", "#DDD");
        grad.addColorStop("0.3", "#AAA");
        grad.addColorStop("0.4", "#999");
        grad.addColorStop("0.5", "#666");
        grad.addColorStop("0.6", "#555");
        grad.addColorStop("0.7", "#777");
        grad.addColorStop("0.8", "#AAA");
        grad.addColorStop("0.9", "#CCC");
        grad.addColorStop("1", "#EEE");
        return grad;
    },
    titlePlot() {
        const CTX = LAYER.title;
        var fs = 76;
        CTX.font = fs + "px LS";
        CTX.textAlign = "center";
        let txt = CTX.measureText(PRG.NAME);
        let x = ENGINE.titleWIDTH / 2;
        let y = fs - 16;
        let gx = x - txt.width / 2;
        let gy = y - fs;
        let grad = this.makeGrad(CTX, gx, gy + 10, gx, gy + fs);
        CTX.fillStyle = grad;
        GAME.grad = grad;
        CTX.shadowColor = "#cec967";
        CTX.shadowOffsetX = 2;
        CTX.shadowOffsetY = 2;
        CTX.shadowBlur = 3;
        CTX.fillText(PRG.NAME, x, y);
    },
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