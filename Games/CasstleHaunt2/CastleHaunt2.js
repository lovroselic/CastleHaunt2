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

const PRG = {
    VERSION: "0.01.03",
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
        ENGINE.bottomHEIGHT = 80;
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

const GAME = {
    start() {
        console.log("GAME started");
        if (AUDIO.Title) {
            AUDIO.Title.pause();
            AUDIO.Title.currentTime = 0;
        }
        $(ENGINE.topCanvas).off("mousemove", ENGINE.mouseOver);
        $(ENGINE.topCanvas).off("click", ENGINE.mouseClick);
        $(ENGINE.topCanvas).css("cursor", "");
        ENGINE.hideMouse();

        $("#pause").prop("disabled", false);
        $("#pause").off();
        GAME.paused = true;
        //$("#p1").prop("disabled", false);

        let GameRD = new RenderData("Pentagram", 50, "#f6602d", "text", "#F22", 2, 2, 2);
        ENGINE.TEXT.setRD(GameRD);
        ENGINE.watchVisibility(GAME.lostFocus);
        ENGINE.GAME.start(16);

        AI.immobileWander = true;
        //AI.VERBOSE = true;
        GAME.completed = false;
        GAME.level = 1;                 //start
        GAME.gold = 0;

        //set hero
        ENGINE.VECTOR2D.configure("player");
        GAME.fps = new FPS_short_term_measurement(300);
        GAME.prepareForRestart();
        GAME.time = new Timer("Main");


        //dewbug
        ENGINE.GAME.ANIMATION.stop();

    },
    prepareForRestart() {
        let clear = ["background", "text", "FPS", "button", "bottomText", "title"];
        ENGINE.clearManylayers(clear);
        TITLE.blackBackgrounds();
        ENGINE.TIMERS.clear();
    },
    setup() {
        console.log("GAME SETUP started");
        //$("#buttons").prepend("<input type='button' id='startGame' value='Start Game'>");
        //$("#startGame").prop("disabled", true);
        $("#conv").remove();

        //$("#p1").on("click", GAME.setFirstPerson);
        //$("#p3").on("click", GAME.setThirdPerson);
    },
    setTitle() {
        const text = GAME.generateTitleText();
        const RD = new RenderData("Pentagram", 20, "#0E0", "bottomText");
        const SQ = new RectArea(0, 0, LAYER.bottomText.canvas.width, LAYER.bottomText.canvas.height);
        GAME.movingText = new MovingText(text, 4, RD, SQ);
    },
    generateTitleText() {
        let text = `${PRG.NAME} ${PRG.VERSION
            }, a game by Lovro Selič, ${"\u00A9"} LaughingSkull ${PRG.YEAR
            }. 
             
            Music: 'And The Abyss Gazed Back' written and performed by LaughingSkull, ${"\u00A9"
            } 2011 Lovro Selič. `;
        text += "     ENGINE, SPEECH, GRID, MAZE, Burrows-Wheeler RLE Compression, WebGL and GAME code by Lovro Selič using JavaScript and GLSL. ";
        text += "     glMatrix library by Brandon Jones and Colin MacKenzie IV. Thanks. ";
        text = text.split("").join(String.fromCharCode(8202));
        return text;
    },
    runTitle() {
        if (ENGINE.GAME.stopAnimation) return;
        GAME.movingText.process();
        GAME.titleFrameDraw();
    },
    titleFrameDraw() {
        GAME.movingText.draw();
    },
    lostFocus() {
        if (GAME.paused || HERO.dead) return;
        GAME.clickPause();
    },
    clickPause() {
        $("#pause").trigger("click");
        ENGINE.GAME.keymap[ENGINE.KEY.map.F4] = false;
    },
    pause() {
        if (GAME.paused) return;
        console.log("%cGAME paused.", PRG.CSS);
        $("#pause").prop("value", "Resume Game [F4]");
        $("#pause").off("click", GAME.pause);
        $("#pause").on("click", GAME.resume);
        ENGINE.GAME.ANIMATION.next(ENGINE.KEY.waitFor.bind(null, GAME.clickPause, "F4"));
        ENGINE.TEXT.centeredText("Game Paused", ENGINE.gameWIDTH, ENGINE.gameHEIGHT / 2);
        GAME.paused = true;
        ENGINE.TIMERS.stop();
    },
    resume() {
        console.log("%cGAME resumed.", PRG.CSS);
        $("#pause").prop("value", "Pause Game [F4]");
        $("#pause").off("click", GAME.resume);
        $("#pause").on("click", GAME.pause);
        ENGINE.clearLayer("text");
        ENGINE.TIMERS.start();
        ENGINE.GAME.ANIMATION.resetTimer();
        ENGINE.GAME.ANIMATION.next(GAME.run);
        GAME.paused = false;
    },
};

const TITLE = {
    startTitle() {
        console.log("TITLE started");
        //if (AUDIO.Title) AUDIO.Title.play(); //dev
        $("#pause").prop("disabled", true);
        TITLE.clearAllLayers();
        TITLE.blackBackgrounds();
        TITLE.titlePlot();
        ENGINE.draw("background", (ENGINE.gameWIDTH - TEXTURE.Title.width) / 2, (ENGINE.gameHEIGHT - TEXTURE.Title.height) / 2, TEXTURE.Title);
        $("#DOWN")[0].scrollIntoView();
        ENGINE.topCanvas = ENGINE.getCanvasName("ROOM");
        TITLE.drawButtons();
        GAME.setTitle();
        ENGINE.GAME.start(16);
        ENGINE.GAME.ANIMATION.next(GAME.runTitle);
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
        grad.addColorStop("0", "#FF0000");
        grad.addColorStop("0.05", "#EE0000")
        grad.addColorStop("0.1", "#DD1111");
        grad.addColorStop("0.15", "#d92323")
        grad.addColorStop("0.2", "#DDD");
        grad.addColorStop("0.3", "#AAA");
        grad.addColorStop("0.4", "#999");
        grad.addColorStop("0.5", "#666");
        grad.addColorStop("0.6", "#555");
        grad.addColorStop("0.65", "#666");
        grad.addColorStop("0.7", "#777");
        grad.addColorStop("0.8", "#AAA");
        grad.addColorStop("0.85", "#d92323")
        grad.addColorStop("0.9", "#DD1111");
        grad.addColorStop("0.95", "#EE0000")
        grad.addColorStop("1", "#FF0000");
        return grad;
    },
    titlePlot() {
        const CTX = LAYER.title;
        var fs = 64;
        CTX.font = fs + "px Pentagram";
        CTX.textAlign = "center";
        let txt = CTX.measureText(PRG.NAME);
        let x = ENGINE.titleWIDTH / 2;
        let y = fs;
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
    drawButtons() {
        ENGINE.clearLayer("button");
        FORM.BUTTON.POOL.clear();
        let x = 0;
        let y = 500;
        const w = 132;
        const h = 24;
        const F = 1.5;
        let startBA = new Area(x, y, w, h);
        const buttonColors = new ColorInfo("#F00", "#A00", "#222", "#666", 13);
        const musicColors = new ColorInfo("#0E0", "#090", "#222", "#666", 13);
        const checkpointColors = new ColorInfo("#FFF", "#A0A", "#222", "#666", 10);
        FORM.BUTTON.POOL.push(new Button("Start game", startBA, buttonColors, GAME.start));

        const sg = localStorage.getItem(PRG.SG);
        //const sg = true;
        if (sg) {
            y += F * h;
            let resumeBA = new Area(x, y, w, h);
            FORM.BUTTON.POOL.push(new Button("Resume", resumeBA, checkpointColors, GAME.checkpoint));
        }

        y += F * h;
        let music = new Area(x, y, w, h);
        FORM.BUTTON.POOL.push(new Button("Play title music", music, musicColors, TITLE.music));
        FORM.BUTTON.draw();
        $(ENGINE.topCanvas).on("mousemove", { layer: ENGINE.topCanvas }, ENGINE.mouseOver);
        $(ENGINE.topCanvas).on("click", { layer: ENGINE.topCanvas }, ENGINE.mouseClick);
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