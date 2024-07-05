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
    FPS: true,
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

const INI = {
    HERO_SHOOT_TIMEOUT: 2000,
    SCREEN_BORDER: 32,
};

const PRG = {
    VERSION: "0.02.02",
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
        ENGINE.gameWIDTH = 1024;
        ENGINE.titleWIDTH = 1280 + INI.SCREEN_BORDER;
        ENGINE.sideWIDTH = ENGINE.titleWIDTH - ENGINE.gameWIDTH - INI.SCREEN_BORDER;
        ENGINE.gameHEIGHT = 768;
        ENGINE.titleHEIGHT = 80;
        ENGINE.bottomHEIGHT = 80;
        ENGINE.bottomWIDTH = ENGINE.titleWIDTH;

        $("#bottom").css("margin-top", ENGINE.gameHEIGHT + ENGINE.titleHEIGHT + ENGINE.bottomHEIGHT);
        $(ENGINE.gameWindowId).width(ENGINE.gameWIDTH + 2 * ENGINE.sideWIDTH + 4);
        ENGINE.addBOX("TITLE", ENGINE.titleWIDTH, ENGINE.titleHEIGHT, ["title", "compassRose", "compassNeedle"], null);
        ENGINE.addBOX("LSIDE", INI.SCREEN_BORDER, ENGINE.gameHEIGHT, ["Lsideback"], "side");
        ENGINE.addBOX("ROOM", ENGINE.gameWIDTH, ENGINE.gameHEIGHT, ["background", "3d_webgl", "info", "text", "FPS", "button", "click"], "side");
        ENGINE.addBOX("SIDE", ENGINE.sideWIDTH, ENGINE.gameHEIGHT, ["sideback", "keys", "minimap", "scrolls"], "fside");
        ENGINE.addBOX("DOWN", ENGINE.bottomWIDTH, ENGINE.bottomHEIGHT, ["bottom", "bottomText", "subtitle",], null);

        if (DEBUG._2D_display) {
            ENGINE.addBOX("LEVEL", ENGINE.gameWIDTH, ENGINE.gameHEIGHT, ["pacgrid", "grid", "coord", "player"], null);
        }

        /** dev settings */
        if (DEBUG.VERBOSE) {
            WebGL.VERBOSE = true;
            AI.VERBOSE = true;
            ENGINE.verbose = true;
        }
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

const HERO = {
    construct() {
        this.player = null;
        this.dead = false;
        this.height = 0.6;
        this.canShoot = true;
    },
    speak(txt) {
        SPEECH.use("Princess");
        SPEECH.speakWithArticulation(txt);
        TURN.subtitle(txt);
    },
    concludeAction() {
        // actions are concluded in the animation
        if (!this.player.actionModes.includes(this.player.mode)) {
            this.player.setMode("idle");
        }
    },
    shoot() {
        if (!HERO.canShoot) return;
        HERO.canShoot = false;

        console.warn("hero shooting");
        HERO.player.matrixUpdate();


        setTimeout(() => (HERO.canShoot = true), INI.HERO_SHOOT_TIMEOUT);
        return;
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
        $("#p1").prop("disabled", false);

        let GameRD = new RenderData("Pentagram", 75, "#f6602d", "text", "#F22", 2, 2, 2);
        ENGINE.TEXT.setRD(GameRD);
        ENGINE.watchVisibility(GAME.lostFocus);
        ENGINE.GAME.start(16);

        AI.immobileWander = true;

        GAME.completed = false;
        GAME.level = 1;                 //start
        GAME.gold = 0;

        HERO.construct();
        ENGINE.VECTOR2D.configure("player");
        GAME.fps = new FPS_short_term_measurement(300);
        GAME.prepareForRestart();
        GAME.time = new Timer("Main");

        //SAVE GAME
        //end SAVE

        //load from checkpoint
        //end load


        ENGINE.GAME.ANIMATION.stop(); //debug
        GAME.levelStart();
    },
    levelStart() {
        console.log("starting level", GAME.level);
        GAME.initLevel(GAME.level);
        //GAME.setFirstPerson();                        //my preference
        //GAME.setThirdPerson();                        //
        GAME.setTopDownView();                          //
        GAME.continueLevel(GAME.level);
    },
    continueLevel(level) {
        GAME.levelExecute();
    },
    levelExecute() {
        GAME.drawFirstFrame(GAME.level);
        GAME.resume();
        HERO.speak("Tralala hopsasa!");
    },
    initLevel(level) {
        console.info("init level", level);
        this.newDungeon(level);

        WebGL.MOUSE.initialize("ROOM");
        WebGL.setContext('webgl');
        this.buildWorld(level);
        let start_dir, start_grid;

        if (GAME.fromCheckpoint) {
            /* start_dir = MAP[level].map[GAME.loadWayPoint].vector;
            start_grid = Grid.toClass(MAP[level].map[GAME.loadWayPoint].grid).add(start_dir); */
            GAME.fromCheckpoint = false;
        } else {
            start_dir = MAP[level].map.startPosition.vector;
            start_grid = MAP[level].map.startPosition.grid;
        }
        start_grid = Vector3.from_Grid(Grid.toCenter(start_grid), HERO.height);

        /** cameras and setting*/
        HERO.player = new $3D_player(start_grid, Vector3.from_2D_dir(start_dir), MAP[level].map, HERO_TYPE.ThePrincess);
        HERO.topCamera = new $3D_Camera(HERO.player, DIR_UP, 0.9, new Vector3(0, -0.5, 0), 1, 70);
        HERO.overheadCamera = new $3D_Camera(HERO.player, DIR_UP, 2.5, new Vector3(0, -1, 0), 1, 80);

        switch (WebGL.CONFIG.cameraType) {
            case "first_person":
                break;
            case "third_person":
                HERO.player.associateExternalCamera(HERO.topCamera);
                break;
            case "top_down":
                HERO.player.associateExternalCamera(HERO.overheadCamera);
                break;
            default:
                throw "WebGL.CONFIG.cameraType error";

        }

        AI.initialize(HERO.player, "3D");
        this.setWorld(level);
        ENTITY3D.resetTime();
    },
    setWorld(level, decalsAreSet = false) {
        console.time("setWorld");
        const textureData = {
            wall: TEXTURE[MAP[level].wall],
            floor: TEXTURE[MAP[level].floor],
            ceil: TEXTURE[MAP[level].ceil]
        };

        WebGL.updateShaders();

        if (WebGL.CONFIG.firstperson) {
            WebGL.init('webgl', MAP[level].world, textureData, HERO.player, decalsAreSet);              //firstperson
        } else {
            WebGL.init('webgl', MAP[level].world, textureData, HERO.topCamera, decalsAreSet);           //thirdperson
        }

        //MINIMAP.init(MAP[level].map, INI.MIMIMAP_WIDTH, INI.MIMIMAP_HEIGHT, HERO.player);
        console.timeEnd("setWorld");
    },
    buildWorld(level) {
        console.info("building world, room/dungeon/level:", level);
        WebGL.init_required_IAM(MAP[level].map, HERO);
        SPAWN_TOOLS.spawn(level);
        if (GAME.fromCheckpoint) {
            console.log(`%c ... loading part 3: affecting MAP and SPAWN from checkpoint ...`, GAME.CSS);
            /* SAVE_MAP_IAM.load_map(MAP);
            WebGL.CTX.pixelStorei(WebGL.CTX.UNPACK_FLIP_Y_WEBGL, true);
            MAP_TOOLS.applyStorageActions(level);
            WebGL.CTX.pixelStorei(WebGL.CTX.UNPACK_FLIP_Y_WEBGL, false); */
        }
        MAP[level].world = WORLD.build(MAP[level].map);
    },
    newDungeon(level) {
        MAP_TOOLS.unpack(level);
    },
    prepareForRestart() {
        let clear = ["background", "text", "FPS", "button", "bottomText", "title"];
        ENGINE.clearManylayers(clear);
        TITLE.blackBackgrounds();
        ENGINE.TIMERS.clear();
    },
    setup() {
        console.log("GAME SETUP started");
        $("#conv").remove();

        $("#p1").on("click", GAME.setFirstPerson);
        $("#p3").on("click", GAME.setThirdPerson);
        $("#pt5").on("click", GAME.setTopDownView);
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
    setFirstPerson() {
        if (WebGL.CONFIG.cameraType === "first_person") return;
        console.info("#### Setting FIRST person view ####");
        $("#p1").prop("disabled", true);
        $("#pt5").prop("disabled", false);
        $("#p3").prop("disabled", false);
        WebGL.CONFIG.set("first_person", true);
        HERO.player.clearCamera();
        HERO.player.moveSpeed = 4.0;
        WebGL.setCamera(HERO.player);
    },
    setThirdPerson() {
        if (WebGL.CONFIG.cameraType === "third_person") return;
        console.info("#### Setting THIRD person view ####");
        $("#p1").prop("disabled", false);
        $("#pt5").prop("disabled", false);
        $("#p3").prop("disabled", true);
        WebGL.CONFIG.set("third_person", true);
        HERO.player.associateExternalCamera(HERO.topCamera);
        HERO.player.moveSpeed = 2.0;
        WebGL.setCamera(HERO.topCamera);
        //position  update
        HERO.player.camera.update();
        HERO.player.matrixUpdate();
    },
    setTopDownView() {
        if (WebGL.CONFIG.cameraType === "top_down") return;
        console.info("*** Setting TOP DOWN view ***");
        $("#p1").prop("disabled", false);
        $("#pt5").prop("disabled", true);
        $("#p3").prop("disabled", false);
        WebGL.CONFIG.set("top_down", true);
        HERO.player.associateExternalCamera(HERO.overheadCamera);
        HERO.player.moveSpeed = 2.0;
        WebGL.setCamera(HERO.overheadCamera);
        //position  update
        HERO.player.camera.update();
        HERO.player.matrixUpdate();
    },
    drawFirstFrame(level) {
        console.log("drawing first frame");
        TITLE.firstFrame();
        if (DEBUG._2D_display) {
            ENGINE.resizeBOX("LEVEL", MAP[level].pw, MAP[level].ph);
            ENGINE.BLOCKGRID.configure("pacgrid", "#FFF", "#000");
            ENGINE.BLOCKGRID.draw(MAP[GAME.level].map);
            GRID.grid();
            GRID.paintCoord("coord", MAP[level].map);
        }
    },
    run(lapsedTime) {
        if (ENGINE.GAME.stopAnimation) return;
        const date = Date.now();
        HERO.player.animateAction();
        //VANISHING3D.manage(lapsedTime);
        //MISSILE3D.manage(lapsedTime);
        //EXPLOSION3D.manage(date);
        ENTITY3D.manage(lapsedTime, date, [HERO.invisible, HERO.dead]);
        //DYNAMIC_ITEM3D.manage(lapsedTime, date);
        GAME.respond(lapsedTime);
        //MINIMAP.unveil(Vector3.to_FP_Grid(HERO.player.pos), HERO.vision);
        ENGINE.TIMERS.update();

        //const interaction = WebGL.MOUSE.click(HERO);
        //if (interaction) GAME.processInteraction(interaction);

        GAME.frameDraw(lapsedTime);
        HERO.concludeAction();
        if (HERO.dead) GAME.checkIfProcessesComplete();
        if (GAME.completed) GAME.won();
    },
    frameDraw(lapsedTime) {
        if (DEBUG._2D_display) {
            GAME.drawPlayer();
        }
        WebGL.renderScene();
        //MINIMAP.draw(HERO.radar);
        //TITLE.compassNeedle();
        //TITLE.time();

        if (DEBUG.FPS) {
            GAME.FPS(lapsedTime);
        }
        if (DEBUG._2D_display) {
            ENGINE.BLOCKGRID.draw(MAP[GAME.level].map);
            //MISSILE3D.draw();
            //ENTITY3D.drawVector2D();
            //DYNAMIC_ITEM3D.drawVector2D();
        }
    },
    drawPlayer() {
        ENGINE.clearLayer(ENGINE.VECTOR2D.layerString);
        ENGINE.VECTOR2D.draw(HERO.player);
    },
    respond(lapsedTime) {
        if (HERO.dead) return;
        HERO.player.respond(lapsedTime);
        const map = ENGINE.GAME.keymap;
        if (map[ENGINE.KEY.map["1"]]) {
            GAME.setFirstPerson();
            return;
        }
        if (map[ENGINE.KEY.map["3"]]) {
            GAME.setThirdPerson();
            return;
        }
        if (map[ENGINE.KEY.map["5"]]) {
            GAME.setTopDownView();
            return;
        }
        /* if (map[ENGINE.KEY.map.shift]) {
            if (map[ENGINE.KEY.map.ctrl]) {
                ENGINE.GAME.keymap[ENGINE.KEY.map.ctrl] = false;
                HERO.shootBouncy();
                return;
            }
        } */

        if (map[ENGINE.KEY.map.F4]) {
            $("#pause").trigger("click");
            ENGINE.TIMERS.display();
            ENGINE.GAME.keymap[ENGINE.KEY.map.F4] = false;
        }
        if (map[ENGINE.KEY.map.F7]) {
            if (!DEBUG.keys) return;

        }
        if (map[ENGINE.KEY.map.F8]) {
            if (!DEBUG.keys) return;
            DEBUG.kill();
        }
        if (map[ENGINE.KEY.map.F9]) {
            if (!DEBUG.keys) return;
            console.log("\nDEBUG:");
            console.log("#######################################################");
            ENTITY3D.display();
            console.log("MAP", MAP[GAME.level].map);
            console.info("Inventory:");
            DEBUG.displayInv();
            console.log("#######################################################");
            ENGINE.GAME.keymap[ENGINE.KEY.map.F9] = false;
        }
        /*         if (map[ENGINE.KEY.map.left]) {
                    TITLE.stack.scrollIndex--;
                    TITLE.stack.scrollIndex = Math.max(0, TITLE.stack.scrollIndex);
                    TITLE.scrolls();
                    ENGINE.GAME.keymap[ENGINE.KEY.map.left] = false;
                    return;
                } */
        /*         if (map[ENGINE.KEY.map.right]) {
                    TITLE.stack.scrollIndex++;
                    TITLE.stack.scrollIndex = Math.min(
                        HERO.inventory.scroll.size() - 1,
                        TITLE.stack.scrollIndex
                    );
                    TITLE.scrolls();
                    ENGINE.GAME.keymap[ENGINE.KEY.map.right] = false;
                    return;
                } */
        /*         if (map[ENGINE.KEY.map.enter]) {
                    if (HERO.inventory.scroll.size() === 0) {
                        return;
                    }
                    let scroll = HERO.inventory.scroll.remove(TITLE.stack.scrollIndex);
                    scroll.action();
                    TITLE.scrolls();
                    ENGINE.GAME.keymap[ENGINE.KEY.map.enter] = false;
                } */
        /*         if (map[ENGINE.KEY.map.H]) {
                    if (GAME.completed) return;
                    HERO.usePotion("health");
                    ENGINE.GAME.keymap[ENGINE.KEY.map.H] = false; //NO repeat
                } */
        /*         if (map[ENGINE.KEY.map.M]) {
                    if (GAME.completed) return;
                    HERO.usePotion("mana");
                    ENGINE.GAME.keymap[ENGINE.KEY.map.M] = false; //NO repeat
                } */
        if (map[ENGINE.KEY.map.ctrl]) {
            HERO.shoot();
            ENGINE.GAME.keymap[ENGINE.KEY.map.ctrl] = false; //NO repeat
        }
        if (map[ENGINE.KEY.map.up]) { }
        if (map[ENGINE.KEY.map.down]) { }
        if (map[ENGINE.KEY.map.space]) {
            HERO.player.attack();
            ENGINE.GAME.keymap[ENGINE.KEY.map.space] = false; //NO repeat
        }
        return;
    },
    FPS(lapsedTime) {
        let CTX = LAYER.FPS;
        CTX.fillStyle = "white";
        ENGINE.clearLayer("FPS");
        let fps = 1000 / lapsedTime || 0;
        GAME.fps.update(fps);
        CTX.fillText(GAME.fps.getFps(), 5, 10);
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
        ENGINE.layersToClear = new Set(["text", "sideback", "button", "title", "FPS", "keys", "info", "subtitle"]);
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
        let y = 668;
        const w = 100;
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
        FORM.BUTTON.POOL.push(new Button("Title music", music, musicColors, TITLE.music));
        FORM.BUTTON.draw();
        $(ENGINE.topCanvas).on("mousemove", { layer: ENGINE.topCanvas }, ENGINE.mouseOver);
        $(ENGINE.topCanvas).on("click", { layer: ENGINE.topCanvas }, ENGINE.mouseClick);
    },
    firstFrame() {
        console.info("title first frame");
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