/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */
"use strict";

/////////////////////////////////////////////////
/*
      
TODO:
    * skills
    * gold
    * lair cooldown
    * save game
        * droppped orbs
        * graves ??

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
    keys: true,
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
    SCREEN_BORDER: 256,
    INVENTORY_HARD_LIMIT: 20,
    ORB_MAX_CAPACITY: 5,
    MAX_HERO_HEALTH: 32,
    AVATAR_TRANSPARENCY: 10,
    BOUNCE_COUNT: 5,
    SPAWN_DELAY: 9999,
    MONSTER_ATTACK_TIMEOUT: 2000,
    MONSTER_SHOOT_TIMEOUT: 4000,
};

const PRG = {
    VERSION: "0.06.01",
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
        ENGINE.addBOX("TITLE", ENGINE.titleWIDTH, ENGINE.titleHEIGHT, ["title", "compassRose", "compassNeedle", "lives", "gold"], null);
        ENGINE.addBOX("LSIDE", INI.SCREEN_BORDER, ENGINE.gameHEIGHT, ["Lsideback", "health"], "side");
        ENGINE.addBOX("ROOM", ENGINE.gameWIDTH, ENGINE.gameHEIGHT, ["background", "3d_webgl", "info", "text", "FPS", "button", "click"], "side");
        ENGINE.addBOX("SIDE", ENGINE.sideWIDTH, ENGINE.gameHEIGHT, ["sideback", "keys", "time", "scrolls", "orbs", "skills"], "fside");
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

class Key {
    constructor(color, spriteClass) {
        this.category = "Key";
        this.type = "Key";
        this.color = color;
        this.spriteClass = spriteClass;
    }
}
class NamedInventoryItem {
    constructor(name, spriteClass) {
        this.name = name;
        this.spriteClass = spriteClass;
    }
}
class Status {
    constructor(type, spriteClass) {
        this.type = type;
        this.spriteClass = spriteClass;
    }
}

class ActionItem {
    constructor(type, spriteClass) {
        this.type = type;
        this.spriteClass = spriteClass;
        this.sprite = SPRITE[this.spriteClass];
        this.class = "ActionItem";
        //this.saveDefinition = ['class', 'type'];
    }
    action() {
        console.warn("action item action", this);
        switch (this.type) {
            case "inventory":
                HERO.bagStart();
                TITLE.sidebackground_static();
                TITLE.orbs();
                break;
            default:
                console.error("ERROR ActionItem action", this);
                break;
        }
    }
}

const HERO = {
    construct() {
        this.player = null;
        this.height = 0.6;
        this.canShoot = true;
        this.hasCapacity = false;
        this.inventory.clear();
        this.inventoryLimit = INI.INVENTORY_HARD_LIMIT;
        this.canComplain = true;
        this.maxHealth = INI.MAX_HERO_HEALTH;
        this.orbs = 0;
        this.bounceCount = INI.BOUNCE_COUNT;
        this.magic = 5;
        this.attack = 5;
        this.defense = 0;   //defense is 0 for all
        this.luck = 0;      //luck is 0 for all
        this.invisible = false;
        this.revive();
    },
    revive() {
        this.dead = false;
        this.health = this.maxHealth;
    },
    bagStart() {
        if (this.hasCapacity) {
            if (this.capacity >= this.maxCapacity) {

                const text = [
                    "I can extend the bag further. It will burst.",
                    "This bag is about to pop.",
                    "Expanding more? It's a risky move.",
                    "The bag can't take much more.",
                    "I need a sturdier bag.",
                    "Stretching it to the limit here.",
                    "One more orb and this bag explodes.",
                    "Bag expansion alert: critical levels.",
                    "I'm pushing the bag to its max.",
                    "Another extension and we're in trouble.",
                    "The bag's screaming for mercy.",
                    "This bag is about to give up.",
                ];

                this.speak(text.chooseRandom());
                return;
            }
            this.capacity++;
            this.capacity = Math.min(this.capacity, this.maxCapacity);
        } else {
            this.hasCapacity = true;
            this.capacity = 1;
            this.maxCapacity = INI.ORB_MAX_CAPACITY;
            this.orbs = 0;
        }
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
        if (HERO.dead) return;
        if (!HERO.canShoot) return;

        HERO.player.matrixUpdate();
        if (HERO.orbs <= 0) return AUDIO.MagicFail.play();

        HERO.orbs--;
        TITLE.orbs();
        HERO.canShoot = false;
        console.warn("hero shooting", HERO.orbs);
        const position = HERO.player.pos.translate(HERO.player.dir, HERO.player.r);
        const missile = new BouncingMissile(position, HERO.player.dir, COMMON_ITEM_TYPE.Orb, HERO.magic, ParticleExplosion, true, INTERACTION_OBJECT.Orb);
        console.log("missile", missile);
        MISSILE3D.add(missile);
        setTimeout(() => (HERO.canShoot = true), INI.HERO_SHOOT_TIMEOUT);
        return;
    },
    hitByMissile(missile) {
        if (DEBUG.VERBOSE) console.log("HERO hit by missile", missile, "friendly", missile.friendly);
        if (missile.friendly) {
            this.catchOrb();
            missile.remove(MISSILE3D);
        } else {
            const damage = Math.max(missile.calcDamage(HERO.magic, true), 1) - HERO.luck;
            //console.log("HERO damage", damage);
            HERO.applyDamage(damage);
            missile.explode(MISSILE3D);
        }
    },
    inventory: {
        clear() {
            this.key = [];
            this.item = [];
            this.status = [];
            //this.potion = {};
            //this.potion.red = 0;
            // this.potion.blue = 0;
            this.scroll = new Inventory();
        },
        totalSize() {
            return this.key.length + this.item.length;
        }
    },
    getOrb(text) {
        if (this.orbs === this.capacity) return this.refusePickingOrb();
        this.speak(text.chooseRandom());
        this.orbs++;
        TITLE.orbs();
        AUDIO.CatchFireball.play();
    },
    catchOrb() {
        const text = [
            "Good catch.",
            "Come to mamma.",
            "Back to my bag.",
            "Gotcha, orb.",
            "Mine again.",
            "Back in action.",
            "Reclaimed it.",
            "Catching skills on point.",
            "Welcome back, little orb.",
            "Caught it like a pro.",
            "Back where you belong.",
            "Snatched from the jaws of defeat.",
            "Orb retrieval successful.",
            "Caught and ready for round two.",
            "Return to sender.",
            "Boomerang orb.",
        ];
        return this.getOrb(text);
    },
    pickOrb() {
        const text = [
            "I am getting armed to the teeth.",
            "Another orb.",
            "I have a fiery weapon now. Beware of the Princess.",
            "Orb secured. Watch out, enemies!",
            "Feeling orbtastic!",
            "Princess powers up!",
            "Another orb for my collection!",
            "My orb bag is getting heavy!",
            "More ammo for the royal arsenal!",
            "Orbing my way to victory!",
            "This orb will do nicely.",
            "Locked and orbloaded!",
            "Time to bring the heat with this orb!",
        ];
        return this.getOrb(text);
    },
    refusePickingOrb() {
        SPEECH.silence();
        const text = [
            "You need more bags to carry more orbs, isn't this logical?",
            "Nah, I am full.",
            "Put where?",
            "Feeling greedy?",
            "I am armed as much as I can be at the moment.",
            "My bag is bursting at the seams.",
            "No more room in the orb inn.",
            "I've hit my orb limit.",
            "This bag is maxed out.",
            "No space for another orb.",
            "My orb bag is officially full.",
            "Can't carry any more, I'm at capacity.",
            "Orb overload. No more can fit.",
            "I need an upgrade for more orbs.",
            "Full up. Can't take another one.",
        ];

        this.speak(text.chooseRandom());
        this.dropOrb();
    },
    dropOrb() {
        const position = Vector3.to_FP_Grid(HERO.player.pos);
        const orb = new FloorItem3D(position, INTERACTION_OBJECT.Orb);
        orb.createTexture();
        ITEM3D.add(orb);
    },
    incExp() { },
    applyDamage(damage) {
        HERO.health = Math.max(HERO.health - damage, 0);
        TITLE.health();
        if (HERO.health <= 0) {
            if (!DEBUG.INVINCIBLE) HERO.die();
        }
    },
    die() {
        if (HERO.dead) return;
        console.warn("hero dies");
        HERO.dead = true;
        HERO.canShoot = false;
    },
    death() {
        console.error("HERO DEATH");
        AUDIO.PrincessScream.play();
        GAME.lives--;
        TITLE.lives();
        HERO.player.pos.set_y(0.1);
        GAME.setFirstPerson();
        if (GAME.lives <= 0) return HERO.finalDeath();

        ENGINE.TEXT.centeredText("Press ENTER to resurect The Princess", ENGINE.gameWIDTH, ENGINE.gameHEIGHT / 2);
        ENGINE.GAME.ANIMATION.resetTimer();
        ENGINE.GAME.ANIMATION.next(GAME.lifeLostRun);
    },
    finalDeath() {
        console.error("HERO FINAL death");
        for (const L of LIGHTS3D.POOL) {
            L.lightColor = Array(0, 0, 0);
        }
        ENGINE.TEXT.centeredText("Rest In Peace", ENGINE.gameWIDTH, ENGINE.gameHEIGHT / 2);
        ENGINE.TEXT.centeredText("(ENTER)", ENGINE.gameWIDTH, ENGINE.gameHEIGHT / 2 + ENGINE.TEXT.RD.fs * 1.2);
        ENGINE.GAME.ANIMATION.resetTimer();
        ENGINE.GAME.ANIMATION.next(GAME.gameOverRun);
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

        let GameRD = new RenderData("Pentagram", 60, "#f6602d", "text", "#F22", 2, 2, 2);
        ENGINE.TEXT.setRD(GameRD);
        ENGINE.watchVisibility(GAME.lostFocus);
        ENGINE.GAME.start(16);

        AI.immobileWander = true;

        GAME.completed = false;
        //GAME.lives = 3;
        GAME.lives = 1;
        //GAME.level = 1;                 //start
        //GAME.level = 2;                 //staircases, gold
        //GAME.level = 3;                 //lair
        //GAME.level = 4;                 //spawn test
        GAME.level = 5;                 //killcount test
        GAME.gold = 0;

        const storeList = ["DECAL3D", "LIGHTS3D", "GATE3D", "VANISHING3D", "ITEM3D", "MISSILE3D", "INTERACTIVE_DECAL3D", "INTERACTIVE_BUMP3D", "ENTITY3D", "EXPLOSION3D", "DYNAMIC_ITEM3D"];
        GAME.STORE = new Store(storeList);

        HERO.construct();
        ENGINE.VECTOR2D.configure("player");
        GAME.fps = new FPS_short_term_measurement(300);
        GAME.prepareForRestart();
        GAME.time = new Timer("Main");

        /** DEBUG */

        /* let invItem = "Apple";
        for (let i = 0; i < 19; i++) {
            const item = new NamedInventoryItem(invItem, invItem);
            HERO.inventory.item.push(item);
        }
        TITLE.keys(); */

        HERO.health = 1;

        /*      HERO.hasCapacity = true;
             HERO.capacity = 5;
             HERO.maxCapacity = INI.ORB_MAX_CAPACITY;
             HERO.orbs = 5; */

        /** END DEBUG */

        //SAVE GAME
        //end SAVE

        //load from checkpoint
        //end load


        //ENGINE.GAME.ANIMATION.stop(); //debug
        LAIR.configure(INI.SPAWN_DELAY, GAME.canSpawn, GAME.spawn, HERO);
        GAME.levelStart();
    },
    levelStart() {
        console.log("starting level", GAME.level);
        WebGL.playerList.clear();                       //requred for restart after resurrection
        GAME.initLevel(GAME.level);
        GAME.setFirstPerson();                        //my preference
        //GAME.setThirdPerson();                        //
        // GAME.setTopDownView();                          //
        GAME.continueLevel(GAME.level);
    },
    continueLevel(level) {
        GAME.levelExecute();
    },
    levelExecute() {
        GAME.drawFirstFrame(GAME.level);
        LAIR.start();
        GAME.resume();
        HERO.speak("Tralala hopsasa!");
    },
    setCamera() {
        HERO.topCamera = new $3D_Camera(HERO.player, DIR_UP, 0.9, new Vector3(0, -0.5, 0), 1, 70);
        HERO.overheadCamera = new $3D_Camera(HERO.player, DIR_UP, 2.5, new Vector3(0, -1, 0), 1, 80);

        switch (WebGL.CONFIG.cameraType) {
            case "first_person":
                break;
            case "third_person":
                HERO.player.associateExternalCamera(HERO.topCamera);
                WebGL.setCamera(HERO.topCamera);
                break;
            case "top_down":
                HERO.player.associateExternalCamera(HERO.overheadCamera);
                WebGL.setCamera(HERO.overheadCamera);
                break;
            default:
                throw "WebGL.CONFIG.cameraType error";
        }
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
        HERO.player = new $3D_player(start_grid, Vector3.from_2D_dir(start_dir), MAP[level].map, HERO_TYPE.ThePrincess);
        this.setCamera();
        AI.initialize(HERO.player, "3D");
        this.setWorld(level);
        ENTITY3D.resetTime();
        //LAIR.configure(INI.SPAWN_DELAY, GAME.canSpawn, GAME.spawn, HERO);
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
        LAIR.set_timeout(MAP[level].map.spawnDelay);
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
        let clear = ["background", "text", "FPS", "button", "bottomText"];
        ENGINE.clearManylayers(clear);
        TITLE.blackBackgrounds();
        ENGINE.TIMERS.clear();
    },
    async setup() {
        console.log("GAME SETUP started");
        $("#conv").remove();
        $("#p1").on("click", GAME.setFirstPerson);
        $("#p3").on("click", GAME.setThirdPerson);
        $("#pt5").on("click", GAME.setTopDownView);
        await GAME.initializeImageData();
        const totalPixels = SPRITE.Avatar.width * SPRITE.Avatar.height;
        IMAGE_DATA.INDICES.set(3, "Avatar", totalPixels, IMAGE_DATA.Avatar.data);
    },
    async initializeImageData() {
        await BITMAP.store(SPRITE.Avatar, "Avatar");
        IMAGE_DATA.store(BITMAP.Avatar, "Avatar");
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
        HERO.player.moveSpeed = 2.0;
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
        MISSILE3D.manage(lapsedTime);
        EXPLOSION3D.manage(date);
        ENTITY3D.manage(lapsedTime, date, [HERO.invisible, HERO.dead]);
        //DYNAMIC_ITEM3D.manage(lapsedTime, date);
        GAME.respond(lapsedTime);
        ENGINE.TIMERS.update();

        const interaction = WebGL.MOUSE.click(HERO);
        if (interaction) GAME.processInteraction(interaction);

        MAP.manage(GAME.level);

        GAME.frameDraw(lapsedTime);
        HERO.concludeAction();
        if (HERO.dead) IAM.checkIfProcessesComplete([EXPLOSION3D], HERO.death);
        //if (HERO.dead) GAME.checkIfProcessesComplete();
        //if (GAME.completed) GAME.won();
    },
    frameDraw(lapsedTime) {
        if (DEBUG._2D_display) {
            GAME.drawPlayer();
        }
        WebGL.renderScene();
        TITLE.compassNeedle();
        TITLE.time();

        if (DEBUG.FPS) {
            GAME.FPS(lapsedTime);
        }
        if (DEBUG._2D_display) {
            ENGINE.BLOCKGRID.draw(MAP[GAME.level].map);
            MISSILE3D.draw();
            ENTITY3D.drawVector2D();
            //DYNAMIC_ITEM3D.drawVector2D();
        }
    },
    processInteraction(interaction) {
        if (DEBUG.VERBOSE) console.info("interaction:", interaction);
        if (interaction.text) TURN.subtitle(interaction.text);
        switch (interaction.category) {
            case 'error':
                switch (interaction.which) {
                    case "inventory_full":
                        if (!HERO.canComplain) break;
                        const variants = [
                            "I can't carry any more.",
                            "My bag is full.",
                            "My bag is breaking at the seams.",
                            "Don't you see my bag is already full, fool?",
                            "Put where? There is no space left.",
                            "You are a greedy bastard, aren't you?",
                            "I'm carrying the castle on my back.",
                            "Bag capacity reached, mission abort.",
                            "No more room for knick-knacks.",
                            "I'm not a pack mule.",
                            "My bag says 'No more, please.'",
                            "I'd need a second bag for that.",
                            "Full to the brim, no more can fit.",
                            "My bag is stuffed like a turkey.",
                            "No vacancy in my bag.",
                            "Trying to turn me into a hoarder?",
                        ];
                        HERO.speak(variants.chooseRandom());
                        HERO.canComplain = false;
                        setTimeout(() => HERO.canComplain = true, INI.COMPLAIN_TIMEOUT);
                        break;
                    default:
                        console.error("Usupported interaction error:", interaction.which);
                }
                break;
            case 'title':
                TITLE[interaction.section]();
                break;
            case 'gold':
                GAME.gold += interaction.value;
                TITLE.gold();
                AUDIO.Pick.play();
                TURN.display(interaction.value, "#AB8D3F");
                break;
            case 'key':
                let key = new Key(interaction.color, interaction.inventorySprite);
                HERO.inventory.key.push(key);
                TITLE.keys();
                AUDIO.Keys.play();
                display(interaction.inventorySprite);
                delete MAP[GAME.level].map.keys[interaction.color];
                if (interaction.text) TURN.subtitle(interaction.text);
                break;
            case 'potion':
                HERO.inventory.potion[interaction.color]++;
                display(interaction.inventorySprite);
                TITLE.potion();
                AUDIO.Potion.play();
                break;
            case 'action_item':
                let aItem = new ActionItem(interaction.which, interaction.inventorySprite);
                HERO.inventory.scroll.add(aItem);
                TITLE.stack.scrollIndex = Math.max(TITLE.stack.scrollIndex, 0);
                TITLE.scrolls();
                display(interaction.inventorySprite);
                break;
            case 'scroll':
                let type = null;
                if (interaction.scrollType) {
                    type = interaction.scrollType;
                } else {
                    type = SCROLL_TYPE[interaction.instanceIdentification];
                }

                let scroll = new Scroll(type);
                scroll.display();
                HERO.inventory.scroll.add(scroll);
                TITLE.stack.scrollIndex = Math.max(TITLE.stack.scrollIndex, 0);
                TITLE.scrolls();
                AUDIO.Scroll.play();
                break;
            case 'shrine':
                HERO.raiseStat(interaction.which, interaction.level);
                display(interaction.inventorySprite);
                AUDIO.LevelUp.play();
                HERO.restore();
                TITLE.status();
                break;
            case 'scrollshop':
                return this.processInteraction({
                    category: "scroll",
                    scrollType: interaction.which,
                });
            case 'oracle':
                break;
            case 'skill':
                console.log("SKILL", interaction);
                HERO.raiseStat(interaction.which, interaction.level);
                display(interaction.inventorySprite);
                AUDIO.LevelUp.play();
                TITLE.keys();
                break;
            case 'status':
                console.log("STATUS", interaction);
                HERO.incStatus(interaction.which, interaction.level);
                display(interaction.inventorySprite);
                AUDIO.PowerUp.play();
                TITLE.keys();
                break;
            case 'chest':
                AUDIO.OpenChest.play();
                EXPLOSION3D.add(new WoodExplosion(Vector3.from_array(interaction.pos)));
                return this.processInteraction(evalObjectString(CONTAINER_CONTENT_TYPES, interaction.instanceIdentification));
            case "rebuild":
                MAP_TOOLS.rebuild_3D_world(GAME.level);
                AUDIO.Thud.play();
                break;
            case "interaction_item":
                const item = new NamedInventoryItem(interaction.name, interaction.inventorySprite);
                HERO.inventory.item.push(item);
                TITLE.keys();
                display(interaction.inventorySprite);
                break;
            case "entity_interaction":
                TITLE.keys()
                break;
            case "munition":
                HERO.pickOrb();
                display(interaction.inventorySprite);
                break;
            case "concludeGame":
                GAME.completed = true;
                HERO.player.setPos(Vector3.from_Grid(new FP_Grid(10.5, 18.0), HERO.height));
                HERO.player.setDir(Vector3.from_2D_dir(DOWN));
                TITLE.keys()
                break;
            default:
                console.error("interaction category error", interaction);
        }

        function display(inventorySprite) {
            ENGINE.clearLayer("info");
            ENGINE.draw("info", 7, 7, SPRITE[inventorySprite]);
            GenericTimers.infoTimer();
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
            console.log("map", MAP[GAME.level].map);
            console.log("MAP", MAP[GAME.level]);
            console.info("Inventory:");
            DEBUG.displayInv();
            console.log("#######################################################");
            ENGINE.GAME.keymap[ENGINE.KEY.map.F9] = false;
        }
        if (map[ENGINE.KEY.map.left]) {
            TITLE.stack.scrollIndex--;
            TITLE.stack.scrollIndex = Math.max(0, TITLE.stack.scrollIndex);
            TITLE.scrolls();
            ENGINE.GAME.keymap[ENGINE.KEY.map.left] = false;
            return;
        }
        if (map[ENGINE.KEY.map.right]) {
            TITLE.stack.scrollIndex++;
            TITLE.stack.scrollIndex = Math.min(HERO.inventory.scroll.size() - 1, TITLE.stack.scrollIndex);
            TITLE.scrolls();
            ENGINE.GAME.keymap[ENGINE.KEY.map.right] = false;
            return;
        }
        if (map[ENGINE.KEY.map.enter]) {
            if (HERO.inventory.scroll.size() === 0) return;
            let scroll = HERO.inventory.scroll.remove(TITLE.stack.scrollIndex);
            scroll.action();
            TITLE.scrolls();
            ENGINE.GAME.keymap[ENGINE.KEY.map.enter] = false;
        }
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
    forceOpenDoor(waypoint) {
        for (const gate of INTERACTIVE_BUMP3D.POOL) {
            if (gate.destination.origin === waypoint) {
                if (gate.locked || gate.color === "Closed") {
                    gate.openGate();
                    gate.storageLog();
                }
                return;
            }
        }
    },
    useStaircase(destination) {
        console.info("useStaircase", destination);
        console.time("usingStaircase");

        const IAMtoClean = [EXPLOSION3D];                //clean IAM
        for (const iam of IAMtoClean) {
            iam.clean();
        }

        for (const missile of MISSILE3D.POOL) {
            if (missile.friendly) missile.drop();
            MISSILE3D.remove(missile.id);
        }

        GAME.STORE.storeIAM(MAP[GAME.level].map);
        GAME.level = destination.level;

        const level = GAME.level;
        if (!MAP[GAME.level].map) {
            GAME.STORE.clearPools();
            GAME.newDungeon(level);
            GAME.buildWorld(level);
            GAME.STORE.linkMap(MAP[level].map);
            GAME.setWorld(level);
        } else {
            GAME.STORE.loadIAM(MAP[level].map);
            GAME.STORE.linkMap(MAP[level].map);
            GAME.setWorld(level, true);
        }

        //MAP_TOOLS.applyStorageActions(level);             //to be developed
        GAME.forceOpenDoor(destination.waypoint);
        HERO.player.setMap(MAP[level].map);

        INTERACTIVE_BUMP3D.setup();

        const start_dir = MAP[level].map[this.destination.waypoint].vector;
        let start_grid = Grid.toClass(MAP[level].map[this.destination.waypoint].grid).add(start_dir);
        start_grid = Vector3.from_Grid(Grid.toCenter(start_grid), HERO.height);
        HERO.player.setPos(start_grid);
        HERO.player.setDir(Vector3.from_2D_dir(start_dir));
        GAME.setCamera();


        /** SAVE GAME each time */
        //GAME.save(destination);                           //to be developed

        //observe
        if (MAP_TEXT[GAME.level]) {
            HERO.speak(MAP_TEXT[GAME.level]);
            MAP_TEXT[GAME.level] = null;
        }
        console.timeEnd("usingStaircase");

        if (DEBUG._2D_display) {
            ENGINE.resizeBOX("LEVEL", MAP[level].pw, MAP[level].ph);
            ENGINE.BLOCKGRID.configure("pacgrid", "#FFF", "#000");
            ENGINE.BLOCKGRID.draw(MAP[GAME.level].map);
            GRID.grid();
            GRID.paintCoord("coord", MAP[level].map);
        }
    },
    save(destination) {
        const flag = SG_DICT[MAP[GAME.level].sg];

        switch (flag) {
            case "Block":
                GAME.canBeSaved = false;
                break;
            case "Restore":
                GAME.canBeSaved = true;
                break;
        }

        MAP[GAME.level].sg = 0;
        if (!GAME.canBeSaved) return;

        console.time("save");
        GAME.loadWayPoint = destination.waypoint;
        SAVE_GAME.save();
        SAVE_MAP_IAM.save_map(MAP);
        SAVE_MAP_IAM.save_GA(MAP);
        TURN.display("GAME SAVED", "#FFF");
        console.timeEnd("save");
    },
    canSpawn() {
        if (!LAIR.getSize()) return false;
        if (ENTITY3D.getSize() >= MAP[GAME.level].map.maxSpawned) return false;
        //console.error("CAN SPAWN");
        return true;
    },
    spawn(lair) {
        const type = MONSTER_TYPE[MAP[GAME.level].map.monsterList.chooseRandom()];
        const grid = Grid.toCenter(lair.grid.add(lair.direction));
        const monster = new $3D_Entity(grid, type, lair.direction);
        ENTITY3D.add(monster);
        EXPLOSION3D.add(new SpawnCloud(Vector3.from_Grid(grid, 0.5)));
    },
    lifeLostRun(lapsedTime) {
        if (ENGINE.GAME.stopAnimation) return;
        if (ENGINE.GAME.keymap[ENGINE.KEY.map.enter]) {
            ENGINE.GAME.ANIMATION.waitThen(GAME.resurect);
        }
        const date = Date.now();
        EXPLOSION3D.manage(date);
        ENTITY3D.manage(lapsedTime, date, [HERO.invisible, HERO.dead]);
        GAME.lifeLostFrameDraw(lapsedTime);
    },
    lifeLostFrameDraw(lapsedTime) {
        if (DEBUG._2D_display) {
            GAME.drawPlayer();
        }
        WebGL.renderScene();

        if (DEBUG.FPS) {
            GAME.FPS(lapsedTime);
        }
        if (DEBUG._2D_display) {
            ENGINE.BLOCKGRID.draw(MAP[GAME.level].map);
            MISSILE3D.draw();
            ENTITY3D.drawVector2D();
        }
    },
    resurect() {
        console.info("RESURECT");
        ENGINE.clearLayer("text");
        HERO.revive();
        GAME.levelStart();
    },
    gameOverRun(lapsedTime) {
        if (ENGINE.GAME.stopAnimation) return;
        if (ENGINE.GAME.keymap[ENGINE.KEY.map.enter]) {
            ENGINE.GAME.ANIMATION.waitThen(TITLE.startTitle);
        }
        const date = Date.now();
        EXPLOSION3D.manage(date);
        ENTITY3D.manage(lapsedTime, date, [HERO.invisible, HERO.dead]);
        GAME.gameOverFrameDraw(lapsedTime);
    },
    gameOverFrameDraw(lapsedTime) {
        if (DEBUG._2D_display) {
            GAME.drawPlayer();
        }
        WebGL.renderScene();

        if (DEBUG.FPS) {
            GAME.FPS(lapsedTime);
        }
        if (DEBUG._2D_display) {
            ENGINE.BLOCKGRID.draw(MAP[GAME.level].map);
            MISSILE3D.draw();
            ENTITY3D.drawVector2D();
        }
    }
};

const TITLE = {
    stack: {
        Y2: 66,
        delta2: 256 + 36,
        delta3: 120,
        delta4: 120,
        DYR: 66,
        deltaItem: 48,
        keyDelta: 56,
        scrollIndex: 0,
        scrollInRow: 3,
        scrollDelta: 72,
        SY: 540, //540
        OY: 440,
        HEALTH_TEXT: 720,
        goldX: 950,
        goldY: 40,
    },
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
        ENGINE.layersToClear = new Set(["text", "sideback", "button", "title", "FPS", "keys", "info", "subtitle", "compassRose", "compassNeedle", "health", "lives", "skills", "gold", "time"]);
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
        TITLE.titlePlot();
        TITLE.compass();
        TITLE.sidebackground_static();
        TITLE.health();
        TITLE.lives();
        TITLE.keys();
        TITLE.scrolls();
        TITLE.orbs();
        TITLE.skills();
        TITLE.gold();
    },
    compass() {
        let x = ((ENGINE.titleWIDTH - ENGINE.sideWIDTH) + ENGINE.sideWIDTH / 2) | 0;
        let y = (ENGINE.titleHEIGHT / 2) | 0;
        ENGINE.spriteDraw("compassRose", x, y, SPRITE.CompassRose);
        TITLE.stack.compassX = x;
        TITLE.stack.compassY = y;
        this.compassNeedle();
    },
    compassNeedle() {
        ENGINE.clearLayer("compassNeedle");
        const CTX = LAYER.compassNeedle;
        CTX.strokeStyle = "#F00";
        let [x, y] = [TITLE.stack.compassX, TITLE.stack.compassY];
        CTX.beginPath();
        CTX.moveTo(x, y);
        let end = new Point(x, y).translate(Vector3.to_FP_Vector(HERO.player.dir), (SPRITE.CompassRose.width / 2 * 0.8) | 0);
        CTX.lineTo(end.x, end.y);
        CTX.stroke();
    },
    sidebackground_static() {
        //lines
        let x = ((ENGINE.sideWIDTH - SPRITE.LineTop.width) / 2) | 0;
        let y = 0;
        const dY = (SPRITE.wavyR.height / 2) | 0;
        let cX = ((ENGINE.sideWIDTH) / 2) | 0;
        ENGINE.draw("sideback", x, y, SPRITE.LineTop);
        ENGINE.draw("Lsideback", x, y, SPRITE.LineTop);

        //2
        y = TITLE.stack.Y2;
        y += (SPRITE.Bag.height / 4) | 0;
        const lX = ((ENGINE.sideWIDTH - SPRITE.LineTop.width) / 2) | 0;
        let rX = ENGINE.sideWIDTH - lX - SPRITE.wavyR.width;
        ENGINE.draw("sideback", lX, y, SPRITE.wavyL);
        ENGINE.draw("sideback", rX, y, SPRITE.wavyR);
        ENGINE.spriteDraw("sideback", cX, y + dY, SPRITE.Bag);

        //3
        y += TITLE.stack.delta2;
        ENGINE.draw("sideback", lX, y, SPRITE.wavyL);
        ENGINE.draw("sideback", rX, y, SPRITE.wavyR);

        // 
        if (HERO.hasCapacity) {
            ENGINE.spriteDraw("sideback", cX, y + dY, SPRITE.FireBallIcon);
        } else ENGINE.spriteDraw("sideback", cX, y + dY, SPRITE.FireRing);

        //4
        y += TITLE.stack.delta3;
        ENGINE.draw("sideback", lX, y, SPRITE.wavyL);
        ENGINE.draw("sideback", rX, y, SPRITE.wavyR);
        ENGINE.spriteDraw("sideback", cX, y + dY, SPRITE.OrnateMagicFlask);

        //5
        y += TITLE.stack.delta4;
        ENGINE.draw("sideback", x, y, SPRITE.LineTop);

        //
        y += SPRITE.LineTop.height + 8;
        ENGINE.draw("sideback", x, y, SPRITE.SkillFireball);
        rX = ENGINE.sideWIDTH - lX - SPRITE.SkillKick.width;
        ENGINE.draw("sideback", rX, y, SPRITE.SkillKick);

        TITLE.stack.skills = y + 120;

        //final line
        y = (ENGINE.gameHEIGHT - SPRITE.LineBottom.height) | 0;
        ENGINE.draw("sideback", x, y, SPRITE.LineBottom);
        ENGINE.draw("Lsideback", x, y, SPRITE.LineBottom);
    },
    skills() {
        ENGINE.clearLayer("skills");
        const CTX = LAYER.skills;
        const dx = ((ENGINE.sideWIDTH - SPRITE.LineTop.width) / 2) | 0;
        const x = (ENGINE.sideWIDTH / 4 | 0);

        const fs = 22;
        CTX.font = `200 ${fs}px CPU`
        CTX.fillStyle = "#DDD";
        CTX.textAlign = "center";
        CTX.shadowColor = "#666";
        CTX.shadowOffsetX = 0;
        CTX.shadowOffsetY = 0;
        CTX.shadowBlur = 0;

        CTX.fillText(`${HERO.magic.toString().padStart(2, "0")}`, x + dx, TITLE.stack.skills);
        CTX.fillText(`${HERO.attack.toString().padStart(2, "0")}`, 3 * x - dx, TITLE.stack.skills);
    },
    time() {
        const fs = 14;
        let y = (SPRITE.LineTop.height + fs * 1.2) | 0;
        //y--;
        let cX = ((ENGINE.sideWIDTH) / 2) | 0;

        const CTX = LAYER.time;
        ENGINE.clearLayer("time");
        CTX.font = fs + "px Consolas";
        CTX.fillStyle = "#0D0";
        CTX.textAlign = "center";
        CTX.shadowColor = "#666";
        CTX.shadowOffsetX = 1;
        CTX.shadowOffsetY = 1;
        CTX.shadowBlur = 1;
        CTX.fillText(`${MAP[GAME.level].name}`, cX, y);
        let time = `Time: ${GAME.time.timeString()}`;
        y += (fs * 1.7) | 0;
        CTX.fillText(time, cX, y);
        y += (fs * 1.0) | 0;
    },
    health() {
        ENGINE.clearLayer("health");
        const cX = ((INI.SCREEN_BORDER) / 2) | 0;
        const cY = (ENGINE.gameHEIGHT / 2) | 0;
        const CTX = LAYER.health;

        ENGINE.spriteDraw("health", cX, 56, SPRITE.Heart);

        if (HERO.health === HERO.maxHealth) {
            ENGINE.spriteDraw("health", cX, cY, SPRITE.Avatar);
        } else {
            HERO.health = Math.min(Math.max(0, HERO.health), HERO.maxHealth);
            const imageData = new ImageData(new Uint8ClampedArray(IMAGE_DATA.Avatar.data), IMAGE_DATA.Avatar.width, IMAGE_DATA.Avatar.height);
            const totalPixels = IMAGE_DATA.INDICES.Avatar.length;
            const transparentPixels = Math.floor(totalPixels * (HERO.maxHealth - HERO.health) / HERO.maxHealth);
            const indices = Array.from(IMAGE_DATA.INDICES.Avatar).shuffle();
            for (let i = 0; i < transparentPixels; i++) {
                imageData.data[indices[i]] = INI.AVATAR_TRANSPARENCY;
            }
            CTX.putImageData(imageData, cX - SPRITE.Avatar.width / 2, cY - SPRITE.Avatar.height / 2);
        }

        const fs = 48;
        CTX.font = `300 ${fs}px CPU`
        CTX.fillStyle = "#DDD";
        CTX.textAlign = "center";
        CTX.shadowColor = "#666";
        CTX.shadowOffsetX = 1;
        CTX.shadowOffsetY = 1;
        CTX.shadowBlur = 1;
        CTX.fillText(`${HERO.health} / ${HERO.maxHealth}`, cX, TITLE.stack.HEALTH_TEXT);
    },
    lives() {
        ENGINE.clearLayer("lives");
        //const CTX = LAYER.lives;
        const cX = INI.SCREEN_BORDER / 2;
        const y = ENGINE.titleHEIGHT / 2;
        const spread = ENGINE.spreadAroundCenter(GAME.lives, cX, 32);
        for (let x of spread) {
            ENGINE.spriteDraw("lives", x, y, SPRITE.Lives);
        }
    },
    keys() {
        ENGINE.clearLayer("keys");
        let refY = TITLE.stack.Y2 + TITLE.stack.DYR;
        let list = [...HERO.inventory.key, ...HERO.inventory.status, ...HERO.inventory.item];
        let NUM = list.length;
        NUM = Math.min(4, NUM);
        let spread = ENGINE.spreadAroundCenter(NUM, ENGINE.sideWIDTH / 2, TITLE.stack.keyDelta);
        for (const [i, item] of list.entries()) {
            if (i >= INI.INVENTORY_HARD_LIMIT) break;
            let x = spread[i % NUM];
            let dy = Math.floor(i / NUM);
            let y = refY + (dy * TITLE.stack.deltaItem);
            ENGINE.spriteDraw("keys", x, y, SPRITE[item.spriteClass]);
        }
    },
    scrolls() {
        const INV = HERO.inventory.scroll;
        ENGINE.clearLayer("scrolls");
        const CTX = LAYER.scrolls;

        TITLE.stack.scrollIndex = Math.min(TITLE.stack.scrollIndex, INV.size() - 1);
        let scrollSpread = ENGINE.spreadAroundCenter(TITLE.stack.scrollInRow, ((ENGINE.sideWIDTH / 2) | 0) - 16, TITLE.stack.scrollDelta);

        let LN = INV.size();
        let startIndex = Math.min((TITLE.stack.scrollIndex - TITLE.stack.scrollInRow / 2) | 0, LN - TITLE.stack.scrollInRow);
        startIndex = Math.max(0, startIndex);
        let max = startIndex + Math.min(TITLE.stack.scrollInRow, LN);
        let y = TITLE.stack.SY;
        for (let q = startIndex; q < max; q++) {
            let scroll = INV.list[q];
            let x = scrollSpread.shift();

            if (q === TITLE.stack.scrollIndex) {
                CTX.globalAlpha = 1;
            } else {
                CTX.globalAlpha = 0.75;
            }

            ENGINE.draw("scrolls", x, y, scroll.object.sprite);

            CTX.font = "10px Consolas";
            CTX.fillStyle = "#FFF";
            CTX.fillText(scroll.count.toString().padStart(2, "0"), x + 40, y + 48);

            if (q === TITLE.stack.scrollIndex) {
                CTX.strokeStyle = "#FFF";
                CTX.globalAlpha = 0.5;
                CTX.lineWidth = "1";
                CTX.beginPath();
                CTX.rect(x - 5, y - 10, 48 + 10, 48 + 20);
                CTX.closePath();
                CTX.stroke();
            }
        }
    },
    orbs() {
        if (!HERO.hasCapacity) return;
        ENGINE.clearLayer("orbs");
        const orbSpread = ENGINE.spreadAroundCenter(HERO.capacity, (ENGINE.sideWIDTH / 2) | 0, 48);
        let y = TITLE.stack.OY;
        let full = HERO.orbs;
        let sprite;
        for (let x of orbSpread) {
            if (full > 0) {
                sprite = SPRITE.FireBall32;
                full--;
            } else sprite = SPRITE.FireRing32;
            ENGINE.spriteDraw("orbs", x, y, sprite);
        }
    },
    music() {
        AUDIO.Title.play();
    },
    gold() {
        ENGINE.clearLayer("gold");
        const CTX = LAYER.gold;
        CTX.textAlign = "left"
        CTX.fillStyle = "#BF9B30";
        let fs = 26;
        let y = TITLE.stack.goldY + fs / 2;

        CTX.font = `${fs}px Pentagram`;
        const DX = Math.ceil(CTX.measureText(`GOLD: `).width);
        fs = 30;
        CTX.font = `${fs}px CPU`;
        const DX2 = Math.ceil(CTX.measureText(GAME.gold.toString().padStart(6, "0")).width);
        const x = (ENGINE.gameWIDTH + INI.SCREEN_BORDER) - DX - DX2;
        TITLE.stack.goldX = x;

        fs = 26;
        CTX.font = `${fs}px Pentagram`;
        CTX.fillText(`GOLD: `, TITLE.stack.goldX, y);

        fs = 30;
        CTX.font = `${fs}px CPU`;
        CTX.fillText(GAME.gold.toString().padStart(6, "0"), TITLE.stack.goldX + DX, y);
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