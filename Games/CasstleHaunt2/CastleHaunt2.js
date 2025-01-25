/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */
"use strict";

/////////////////////////////////////////////////
/*
      
TODO:

    * 

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
    INVINCIBLE: true,
    FREE_MAGIC: false,
    keys: true,
    displayInv() {
        HERO.inventory.scroll.display();
        const list = [];
        for (const item of HERO.inventory.item) {
            list.push(item.name);
        }
        console.info("items", list);
        console.log(`"${list.join('", "')}"`);
    },
    kill() {
        console.log("KILL all");
        LAIR.stop();
        ENTITY3D.POOL.clear();
        MISSILE3D.POOL.clear();
    },
    goto(grid) {
        HERO.player.pos = Vector3.from_Grid(Grid.toCenter(grid), 0.5);
    },
    checkPoint() {
        /** main area LAST prepare:
            
        COUNT:
            attack 3 (15)
            magic 3 (19)
            health 2 (10)

            DONE FOX wants "Chicken","Chicken","Chicken" gives Health
            DONE BLueViper "Rat","Rat","Rat" gives attack
            DONE SpartaKiss wants "Dagger", "Sword", "Spear","BattleAxe", "Mace" givest Attack
            DONE IceQuee wants "IceCube","IceCube","IceCube" gives magic
            DONE SleekNinja wants "Shuriken","Shuriken","Shuriken" gives attack
            DONE Nun "YoniBook", "YinYangBook", "VenusBook", "TripleMoonBook" gives magic
            DONE NiqabBabe "AnkhBook", "FireballBook", "PrincessBook", "TreeOfLifeBook" gives magic
            DONE PitchforkFarmer wants "BabySheep","BabySheep","BabySheep" give health
            DONE "CorridorSwimmer" wants "ScubaMask", "Fins" gives Shuriken
            DONE "Frogessa" wants "Kiss" gives "Fins"
            DONE "CorridorSwimmer" wants "ScubaMask", "Fins" gives "shuriken"
            DONE YoniLibrARIAn wants "Spectacles" give YoniBook
            DONE KnightWithoutHelmet wants helmet gives MAce
            DONE Shroomess wants "Mushroom", "Mushroom", "Mushroom" gives "TreeOfLifeBook"
            DONE Viking wants "Beer", "GlassOfBeer" give "battleaXe"
            DONE ApparitiaDefector wants "OrangeLeggings", "OrangeBra", "OrangeBoots" gives spear
            DONE Narancina wants "SkullNecklace" give "OrangeBoots"
            DONE Owl wants "Mouse", "Mouse" give "Rat"
            DONE Juggles wasn "GoldSphere", "GoldSphere", "GoldSphere" gives "SkullNecklace"
            DONE Bunny wants "Carrot", "Carrot" gives "Spectacles"
            DONE DeMonique wants "Skull","Skull","Skull" gives "Kiss"
            DONE HornyMonica wants "Candle","Candle","Candle" gives YinYangBook 
            DONE Armored wants "Shield", "Shield" gives Helmet
            DONE CuteBarmaiden wants "GoldCoin","GoldCoin" gives GlassOfBeer
            DONE CastleOfficeGamer wants "Floppy", "Floppy" gives "Carrot"
            DONE FireballReader wants "FireExtinguisher" gives "FireballBook"

        apparitias:


        * 
        * 
            DONE * "Chicken", <-- 110
            DONE * "Chicken",  <-- 109
            DONE * "Chicken" <-- 106
            DONE * "Dagger", <-- 116
            DONE * "Sword", <-- 114
            DONE * "Spear", <--ApparitiaDefector (115)
            DONE * "BattleAxe", <-- Viking (114)
            DONE * "Mace" <-- KnightWithoutHelmet (110)
            DONE * "IceCube",117
            DONE * "IceCube",117
            DONE * "IceCube" 117
            DONE * "Rat" <-- Owl (108)
            DONE * "Rat" <-- 108
            DONE * "Rat" <-- 109
            DONE * "Shuriken", <-- "CorridorSwimmer" (108)
            DONE * "Shuriken", <-- 110
            DONE * "Shuriken" <-- 113
            DONE * "YoniBook",  <-- YoniLibrARIAn (109)
            DONE * "YinYangBook",  <-- HornyMonica (113)
            DONE * "VenusBook", <-- 114
            DONE * "TripleMoonBook" <-- 108
            DONE * "AnkhBook", <-- 115
            DONE * "FireballBook", <-- FireballReader (114)
            DONE * "PrincessBook",  <-- 110
            DONE * "TreeOfLifeBook" <-- Shroomess (113)
            DONE* "BabySheep", 114
            DONE * "BabySheep", <-- 112
            DONE * "BabySheep" <-- 113
            DONE * "ScubaMask",  <--- 112
            DONE * "Fins" <--"Frogessa" wants kiss (112)
            DONE * "Kiss" <-- DeMonique 112
            DONE "Spectacles" <-- Bunny (110)
            DONE "Helmet" <-- Armored (115)
            DONE "Mushroom", <-- 109
            DONE "Mushroom", <-- 114
            DONE "Mushroom" <-- 115
            DONE "Beer",  <-- 109
            DONE "GlassOfBeer" <-- CuteBarmaiden
            DONE "OrangeLeggings", <-- 116
            DONE "OrangeBra", <-- 112
            DONE "OrangeBoots" <-- Narancina (116)
            DONE "SkullNecklace" Juggles (109)
            DONE "Mouse", <-- 112
            DONE "Mouse" <-- 116
            DONE "GoldSphere", <-- 110
            DONE "GoldSphere", <-- 115
            DONE "GoldSphere" <-- 116
            DONE "Carrot", <-- 114
            DONE "Carrot" <-- CastleOfficeGamer (111)
            DONE "Skull", <-- 113
            DONE "Skull", <-- 116
            DONE "Skull" <-- 104
            DONE"Candle", <-- 112
            DONE "Candle" <--- 111
            DONE "Candle" <--- 118
            DONE "Shield", <-- 104
            DONE "Shield", <-- 111
            DONE "GoldCoin", <-- 107
            DONE"GoldCoin" <-- 104
            DONE "Floppy", <-- 118
            DONE "Floppy" <-- 104
            DONE "FireExtinguisher" <-- 104


        * coins sources (x, missing x = ):

        *
        * COINS used (x):

           

        
        * key not yet used:
            
         * missing placed keys: 
            * cyan
  

         * missing sources for: 
            * 
        * temple usage
            * health
            * attack
            * magic

         */

        console.info("DEBUG::Loading from checkpoint, this may clash with LOAD");
        //104-->106-->104-->107-->111---->106-->104-->108-->112-->113-->114-->106-->118-->114-->115-->116-->106-->116-->109
        //109-->104--->113--->112--->111-->109-->110
        //110-->114-->110-->113-->108-->104-->109-->110-->109-->110-->104-->109-->116--112-->115-->104-->113
        //113-->117-->104-->110
        GAME.level = 110; //110

        GAME.gold = 6626;
        GAME.lives = 3; //5

        HERO.hasCapacity = true;
        HERO.capacity = 5;
        HERO.maxCapacity = 5;

        HERO.orbs = 5;
        HERO.orbsLost = 0;
        HERO.magic = 84;
        HERO.attack = 79;

        HERO.health = 256;
        HERO.maxHealth = 552;


        let actItems = [
            //INTERACTION_OBJECT.Cake,
            //INTERACTION_OBJECT.Cake,
            //INTERACTION_OBJECT.Cake,
            //INTERACTION_OBJECT.Cake,
            //INTERACTION_OBJECT.Cake,
            //INTERACTION_OBJECT.Cake,
            //INTERACTION_OBJECT.Cake,
            //INTERACTION_OBJECT.Cake,
            //INTERACTION_OBJECT.Steak,
            //INTERACTION_OBJECT.Steak,
            //INTERACTION_OBJECT.Steak,
            //INTERACTION_OBJECT.Steak,
            //INTERACTION_OBJECT.BeerHealth,
            //INTERACTION_OBJECT.BeerHealth,
            //INTERACTION_OBJECT.BeerHealth,
            //INTERACTION_OBJECT.BeerHealth,
            INTERACTION_OBJECT.Steak,
            //INTERACTION_OBJECT.BeerHealth,
            //INTERACTION_OBJECT.BeerHealth,
            //INTERACTION_OBJECT.BeerHealth,
            //INTERACTION_OBJECT.BeerHealth,

            //INTERACTION_OBJECT.Champagne,
            //INTERACTION_OBJECT.Champagne,
            //INTERACTION_OBJECT.Champagne,
            //INTERACTION_OBJECT.Champagne,
            //MOVABLE_INTERACTION_OBJECT.RoastPig,
            MOVABLE_INTERACTION_OBJECT.RoastPig,
            MOVABLE_INTERACTION_OBJECT.RoastChicken,
            //MOVABLE_INTERACTION_OBJECT.RoastChicken,
            //MOVABLE_INTERACTION_OBJECT.RoastChicken,
            //MOVABLE_INTERACTION_OBJECT.RoastChicken,
            //MOVABLE_INTERACTION_OBJECT.RoastChicken,
        ];
        for (let obj of actItems) {
            let item = new ActionItem(obj.which, obj.inventorySprite);
            HERO.inventory.scroll.add(item);
        }

        let scrollTypes = [
            "MagicSupremacy"
            //"DestroyOrbs",
            //"DestroyOrbs", "MagicSupremacy",
            //"Death", "DestroyOrbs",
            //"Death", "Death",
            //"DestroyOrbs",
            //"MagicSupremacy", "Cripple"
        ];
        for (let scrType of scrollTypes) {
            let scroll = new Scroll(scrType);
            HERO.inventory.scroll.add(scroll);
        }

        TITLE.stack.scrollIndex = Math.max(TITLE.stack.scrollIndex, 0);
        TITLE.scrolls();

        let invItems = [
            //debug

        ];

        for (let itm of invItems) {
            const item = new NamedInventoryItem(itm, itm);
            HERO.inventory.item.push(item);
        }

        let keys = [
            "Pink", "Cyan"
        ];
        for (let key of keys) {
            const K = new Key(key, `${key}Key`);
            HERO.inventory.key.push(K);
        }
        TITLE.keys();
    }
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
    MONSTER_SHOOT_TIMEOUT: 9999,
    HEALTH: {
        Cake: 40,
        Steak: 80,
        BeerHealth: 120,
        Champagne: 175,
        RoastChicken: 250,
        RoastPig: 500,
        HealthBox: 999,
    },
    HEALTH_INC: 8,
    SCROLL_RANGE: 15,
    CRIPPLE_SPEED: 0.1,
    INVISIBILITY_TIME: 60,
    DEFENSE_OFFSET: 10,
    DEFENSE_FACTOR: 2,
};

const PRG = {
    VERSION: "0.19.05",
    NAME: "Castle Haunt II",
    YEAR: "2024, 2025",
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
        MAP_TOOLS.INI.FOG = false;

        $("#bottom").css("margin-top", ENGINE.gameHEIGHT + ENGINE.titleHEIGHT + ENGINE.bottomHEIGHT);
        $(ENGINE.gameWindowId).width(ENGINE.gameWIDTH + 2 * ENGINE.sideWIDTH + 4);
        ENGINE.addBOX("TITLE", ENGINE.titleWIDTH, ENGINE.titleHEIGHT, ["title", "compassRose", "compassNeedle", "lives", "gold", "save"], null);
        ENGINE.addBOX("LSIDE", INI.SCREEN_BORDER, ENGINE.gameHEIGHT, ["Lsideback", "health"], "side");
        ENGINE.addBOX("ROOM", ENGINE.gameWIDTH, ENGINE.gameHEIGHT, ["background", "3d_webgl", "info", "text", "FPS", "button", "click"], "side");
        ENGINE.addBOX("SIDE", ENGINE.sideWIDTH, ENGINE.gameHEIGHT, ["sideback", "keys", "time", "scrolls", "orbs", "skills"], "fside");
        ENGINE.addBOX("DOWN", ENGINE.bottomWIDTH, ENGINE.bottomHEIGHT, ["bottom", "bottomText", "subtitle",], null);

        if (DEBUG._2D_display) {
            ENGINE.addBOX("LEVEL", ENGINE.gameWIDTH, ENGINE.gameHEIGHT, ["pacgrid", "grid", "coord", "player"], null);
            //ENGINE.addBOX("DEBUG", 320, 200, ["debug"], null);
        }

        /** dev settings */
        if (DEBUG.VERBOSE) {
            //WebGL.VERBOSE = true;
            //AI.VERBOSE = true;
            ENGINE.verbose = true;
            MAP_TOOLS.INI.VERBOSE = true;
            SAVE_GAME.debugMode();
        }
    },
    start() {
        console.log("%c**************************************************************************************************************************************", PRG.CSS);
        console.log(`${PRG.NAME} ${PRG.VERSION} STARTED!`);
        console.log("%c**************************************************************************************************************************************", PRG.CSS);
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
        this.id = `${type}-${spriteClass}`;
        this.spriteClass = spriteClass;
        this.sprite = SPRITE[this.spriteClass];
        this.class = "ActionItem";
        this.saveDefinition = ['class', 'type', "spriteClass"];
    }
    action() {
        console.warn("action item action", this);
        switch (this.type) {
            case "inventory":
                HERO.bagStart();
                TITLE.sidebackground_static();
                TITLE.orbs();
                break;
            case "health":
                HERO.incHealth(this.spriteClass);
                break;
            default:
                console.error("ERROR ActionItem action", this);
                break;
        }
    }
}

class Scroll {
    constructor(type) {
        this.type = type;
        this.id = this.type;
        this.inventorySprite = `SCR_${type}`;
        this.sprite = SPRITE[this.inventorySprite];
        this.class = "Scroll";
        this.saveDefinition = ['class', 'type'];
    }
    action() {
        console.warn("scroll action", this);
        let T;
        let count = 0;
        switch (this.type) {
            case "Cripple":
                for (let enemy of ENTITY3D.POOL) {
                    if (enemy === null) continue;
                    if (enemy.final_boss || enemy.boss) continue;
                    if (enemy.distance === null) continue;
                    if (enemy.distance <= INI.SCROLL_RANGE) {
                        enemy.moveSpeed = INI.CRIPPLE_SPEED;
                        console.warn("crippled", enemy);
                    }
                }
                break;
            case "HalfLife":
                for (let enemy of ENTITY3D.POOL) {
                    if (enemy === null) continue;
                    if (enemy.distance === null) continue;
                    if (enemy.distance <= INI.SCROLL_RANGE) {
                        enemy.health = Math.max(1, Math.floor(enemy.health / 2));
                    }
                }
                break;
            case "Explode":
                EXPLOSION3D.add(new StaticParticleBomb(HERO.player.pos));
                AUDIO.Fuse.volume = RAY.volume(0);
                AUDIO.Fuse.loop = true;
                AUDIO.Fuse.play();
                const escapeTexts = [
                    "I better run away.",
                    "This thing is going to explode.",
                    "I should move.",
                    "Run, you fool.",
                    "This is about to get loud.",
                    "Boom incoming!",
                    "Goodbye, cruel bomb!",
                    "Hope my shoes can keep up!",
                    "Cue the dramatic exit.",
                    "Running seems like a good idea right now.",
                    "Standing close to bomb seems a bad idea."
                ];

                HERO.speak(escapeTexts.chooseRandom());
                break;
            case "Death":
                for (let enemy of ENTITY3D.POOL) {
                    if (enemy === null) continue;
                    if (enemy.final_boss || enemy.boss) continue;
                    if (enemy.distance === null) continue;
                    if (enemy.distance <= INI.SCROLL_RANGE) {
                        enemy.die();
                        count++;
                    }
                }
                if (count === 0) return;
                const masacreTexts = [
                    "I feel naughty.",
                    "I just burned them all. Almost.",
                    "Burn bastards.",
                    "Oops, did I do that?",
                    "I guess I won't need a mop.",
                    "That was… efficient.",
                    "Well, that escalated quickly.",
                    "Cleanup in the dungeon!",
                    "Don't mess with royalty!",
                    "So much for diplomacy.",
                    "Consider yourself... canceled.",
                    "Guess that's one way to solve a problem.",
                    "Who's next? Oh wait, no one!",
                    "I came, I saw, I obliterated."
                ];

                HERO.speak(masacreTexts.chooseRandom());
                break;
            case "MagicSupremacy":
                for (let enemy of ENTITY3D.POOL) {
                    if (enemy === null) continue;
                    if (enemy.final_boss || enemy.boss) continue;
                    if (enemy.distance === null) continue;
                    if (enemy.distance <= INI.SCROLL_RANGE) {
                        count++;
                        enemy.drainMana();
                    }
                }
                if (count === 0) return;
                const drainTexts = [
                    "I squeezed the magic out of them.",
                    "Made them magic virgins.",
                    "No green meanies from them anymore.",
                    "I made them ballless. Ha ha.",
                    "Oops, guess you're powerless now!",
                    "Look who's out of tricks.",
                    "I drained them dry. Magic, I mean.",
                    "And poof! No more spells for you.",
                    "I took their magic, and their dignity.",
                    "Looks like someone's got mana issues now.",
                    "No more green balls? What a shame.",
                    "Their magic went bye bye!",
                    "I guess I'll hold onto that mana, thanks.",
                    "No spells? Guess it's fistfight time!",
                    "Who needs magic anyway, right?"
                ];
                HERO.speak(drainTexts.chooseRandom());
                break;
            case "DestroyOrbs":
                for (let missile of MISSILE3D.POOL) {
                    if (!missile.friendly) missile.explode(MISSILE3D);
                }
                break;
            case "Invisibility":
                console.warn("invisibility");
                HERO.startInvisibility();
                const invisibilityTimerId = "invisibilityTimer";
                if (ENGINE.TIMERS.exists(invisibilityTimerId)) {
                    T = ENGINE.TIMERS.access(invisibilityTimerId);
                    T.extend(INI.INVISIBILITY_TIME);
                } else {
                    T = new CountDown(invisibilityTimerId, INI.INVISIBILITY_TIME, HERO.cancelInvisibility);
                    let status = new Status("Invisibility", "Invisible");
                    HERO.inventory.status.push(status);
                    TITLE.keys();
                }
                break;
            default:
                console.error("ERROR scroll action", this);
                break;
        }
        AUDIO.UseScroll.play();
    }
}

const HERO = {
    construct() {
        this.player = null;
        this.height = 0.6;
        this.hasCapacity = false;
        this.capacity = 0;
        this.maxCapacity = 0;
        this.inventory.clear();
        this.inventoryLimit = INI.INVENTORY_HARD_LIMIT;
        this.canComplain = true;
        this.maxHealth = INI.MAX_HERO_HEALTH;
        this.orbs = 0;
        this.orbsLost = 0;
        this.magic = 5;
        this.attack = 5;
        this.defense = 0;   //defense is 0 for all
        this.luck = 0;      //luck is 0 for all
        this.mana = 0;      //unused, compatibility
        this.ressurection = false;
        this.revive();
        this.visible();

        const propsToSave = ["health", "maxHealth", "attack", "magic", "orbs", "maxCapacity", "capacity", "hasCapacity"];
        this.attributesForSaveGame = [];
        for (const P of propsToSave) {
            this.attributesForSaveGame.push(`HERO.${P}`);
        }
    },
    revive() {
        this.dead = false;
        this.health = this.maxHealth;
        this.canShoot = true;
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
        const position = HERO.player.pos.translate(HERO.player.dir, HERO.player.r);
        const missile = new BouncingMissile(position, HERO.player.dir, COMMON_ITEM_TYPE.Orb, HERO.magic, ParticleExplosion, true, INTERACTION_OBJECT.Orb);
        MISSILE3D.add(missile);
        this.orbsLost++;
        console.debug("inc orbsLost", this.orbsLost);
        this.orbsLost = Math.min(this.orbsLost, this.capacity);
        console.debug("shooting, orbsLost", this.orbsLost);
        setTimeout(() => (HERO.canShoot = true), INI.HERO_SHOOT_TIMEOUT);
        return;
    },
    hitByMissile(missile) {
        if (DEBUG.VERBOSE) console.log("HERO hit by missile", missile, "friendly", missile.friendly);
        if (missile.friendly) {
            this.catchOrb(missile);
            missile.remove(MISSILE3D);
        } else {
            const damage = Math.max(missile.calcDamage(HERO.magic, true), 1) - HERO.luck;
            HERO.applyDamage(damage);
            missile.explode(MISSILE3D);
        }
    },
    inventory: {
        clear() {
            this.key = [];
            this.item = [];
            this.status = [];
            this.scroll = new Inventory();
        },
        totalSize() {
            return this.key.length + this.item.length;
        }
    },
    getOrb(text, missile = null) {
        if (this.orbs === this.capacity) return this.refusePickingOrb(missile);
        this.speak(text.chooseRandom());
        this.orbs++;
        console.debug("getting orb:", missile);
        TITLE.orbs();
        AUDIO.CatchFireball.play();
        if (this.orbsLost > 0) {
            this.orbsLost--;
        }
    },
    catchOrb(missile) {
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
        console.debug("catching orb", missile);
        return this.getOrb(text, missile);
    },
    pickOrb() {
        const text = [
            "I am getting armed to the teeth.",
            "Another orb.",
            "I have a fiery weapon now. Beware of the Princess.",
            "Orb secured. Watch out enemies!",
            "Feeling orbtastic.",
            "Princess powers up!",
            "Another orb for my collection.",
            "My orb bag is getting heavy!",
            "More ammo for the royal arsenal.",
            "Orbing my way to victory.",
            "This orb will do nicely.",
            "Locked and orbloaded.",
            "Time to bring the heat with this orb.",
        ];
        //console.debug("picking orb", dropped);
        return this.getOrb(text, null);
    },
    refusePickingOrb(missile) {
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
        console.warn("refusing orb:", missile)
        if (missile) {
            missile.drop();
        } else this.dropOrb();
    },
    dropOrb() {
        const position = Vector3.to_FP_Grid(HERO.player.pos);
        const orb = new FloorItem3D(position, INTERACTION_OBJECT.Orb);
        orb.dropped = true;
        orb.createTexture();
        ITEM3D.add(orb);
    },
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
        MISSILE3D.POOL.clear();
        AUDIO.PrincessScream.play();
        GAME.lives--;
        TITLE.lives();
        HERO.player.pos.set_y(0.1);
        GAME.setFirstPerson();
        if (GAME.lives <= 0) return HERO.finalDeath();

        const grid = Vector3.toGrid(HERO.player.pos);
        const face = DirectionToFace(NOWAY);
        const decal = SPRITE.DeathPlace;
        const deathPlace = new StaticDecal(grid, face, decal, "crest", "DeathPlace", true);
        GAME.deathPlaceDecals.push(deathPlace);

        HERO.ressurection = true;
        GAME.STORE.storeIAM(MAP[GAME.level].map);
        //console.info("save IAM", MAP[GAME.level].map.store);
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
    },
    raiseStat(which, level = 1) {
        console.info("raising stat", which, level);
        this[which] += level;
        this.setDefense();
        TITLE.skills();
    },
    incExp() { },  //keep, TURN dependency
    incHealth(sprite) {
        let incValue = INI.HEALTH[sprite];
        HERO.health += incValue;
        HERO.health = Math.min(HERO.health, HERO.maxHealth);
        AUDIO.Eating.play();
        TITLE.health();
    },
    restore() {
        this.health = this.maxHealth;
        TITLE.health();
    },
    setDefense() {

        this.defense = Math.floor(Math.max(0, this.attack - INI.DEFENSE_OFFSET) / INI.DEFENSE_FACTOR);
        console.log("DEFENSE", this.defense);
    },
    incStatus(type, level = 1) {
        let Type = type.capitalize();
        let max = `max${Type}`;
        this[max] += INI[`${type.toUpperCase()}_INC`] * level;
        this[type] = this[max];
        TITLE.health();
    },
    visible() {
        HERO.invisible = false;
    },
    cancelInvisibility() {
        console.warn("invisinbility END");
        HERO.removeStatus("Invisibility");
        HERO.visible();
        TITLE.keys();
        HERO.player.useTexture("normal");

        const text = [
            "Oops, guess I'm back in the spotlight!",
            "Ta-da! The Princess has reappeared.",
            "Miss me? Didn't think so.",
            "Invisible no more... fabulous as ever.",
            "Back to being everyone's favorite target.",
            "Hide-and-seek's over, I guess.",
            "So much for stealth mode.",
            "Can everyone see me now? Great.",
            "Back to dodging monsters the hard way!",
            "I'm visible... again. Lovely.",
            "The magic wore off... typical.",
            "Stealth was fun while it lasted.",
            "Guess I'll have to fight fair now!",
            "Aaaand I'm back in the spotlight.",
            "Surprise! Did you miss me?",
            "Oops, cover's blown.",
            "Guess the magic ran out...",
            "Oh great, now I'm a target again.",
            "Visibility: 100%. Not ideal.",
            "So much for my ghostly exit.",
            "Oh, now you can see me? Fun.",
            "I guess stealth isn't forever.",
            "Busted! Time to fight like a Princess!",
            "Can't stay hidden forever, I suppose.",

        ];
        HERO.speak(text.chooseRandom());
    },
    startInvisibility() {
        console.warn("invisinbility START");
        HERO.invisible = true;
        HERO.player.useTexture("invisible");
        const text = [
            "Nobody can see me now.",
            "I am invisible",
            "Peek-a-boo, I'm gone!",
            "Now you see me… well, no you don't.",
            "Guess I'm too fabulous to be seen.",
            "Catch me if you... oh wait, you can't!",
            "Invisible and invincible—perfect combo.",
            "I'm like a ghost, but, you know, alive.",
            "Just your friendly neighborhood invisible princess!",
            "Sorry, monsters, can't kill what you can't see!",
            "Playing hide and seek, anyone?",
            "I'm like a royal ghost now.",
            "Try finding what isn't there!",
            "Poof! Princess gone, just like magic.",
            "If you can't see me, you can't hurt me!",
            "I could get used to this stealthy life."

        ];
        this.speak(text.chooseRandom());
    },
    removeStatus(status) {
        for (let i = HERO.inventory.status.length - 1; i >= 0; i--) {
            if (HERO.inventory.status[i].type === status) {
                HERO.inventory.status.splice(i, 1);
                break;
            }
        }
    },
};

const GAME = {
    gold: 0,                                // WebGl relies on this as default gold source, keep! 
    loadWayPoint: null,                     // save game pointer, keep!
    canBeSaved: true,
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

        let GameRD = new RenderData("Pentagram", 60, "#f6602d", "text", "#F22", 2, 2, 2);
        ENGINE.TEXT.setRD(GameRD);
        ENGINE.watchVisibility(GAME.lostFocus);
        ENGINE.GAME.start(16);

        AI.immobileWander = true;

        GAME.completed = false;
        //GAME.lives = 3;
        GAME.lives = 1;
        GAME.level = 1;                 //start           
        GAME.gold = 1;

        const storeList = ["DECAL3D", "LIGHTS3D", "GATE3D", "VANISHING3D", "ITEM3D", "MISSILE3D", "INTERACTIVE_DECAL3D", "INTERACTIVE_BUMP3D", "ENTITY3D", "EXPLOSION3D", "DYNAMIC_ITEM3D", "LAIR"];
        GAME.STORE = new Store(storeList);

        HERO.construct();
        ENGINE.VECTOR2D.configure("player");
        GAME.fps = new FPS_short_term_measurement(300);
        GAME.prepareForRestart();
        GAME.time = new Timer("Main");

        /** DEBUG */
        DEBUG.checkPoint();
        /** END DEBUG */

        //SAVE GAME
        SAVE_GAME.pointers = [...HERO.attributesForSaveGame,
            'GAME.level', 'GAME.gold',
            "HERO.inventory.item", "HERO.inventory.key",
            "GAME.loadWayPoint",
        ];
        SAVE_GAME.lists = ["HERO.inventory.scroll"];
        SAVE_GAME.timers = ["Main"];
        SAVE_GAME.map_properties = ["killCount", "maxSpawned", "killCountdown", "spawnDelay", "totalKills", "stopSpawning"];
        //end SAVE

        //load from checkpoint
        if (GAME.fromCheckpoint) {
            console.log(`%c ... Loading part 1...`, GAME.CSS);
            GAME.load();
        }
        //end load


        LAIR.configure(INI.SPAWN_DELAY, GAME.canSpawn, GAME.spawn, HERO);
        GAME.levelStart();
    },
    deathPlaceDecals: [],
    levelStart() {
        console.log("starting level", GAME.level);
        WebGL.playerList.clear();                       //requred for restart after resurrection
        GAME.initLevel(GAME.level);
        GAME.setFirstPerson();                        //my preference
        GAME.continueLevel(GAME.level);
    },
    continueLevel(level) {
        GAME.levelExecute();
    },
    levelExecute() {
        GAME.drawFirstFrame(GAME.level);
        LAIR.start();
        GAME.resume();
        HERO.speak("I feel something is wrong in my castle. Shall we investigate? My heels are on. Let's go.");
    },
    setCamera() {
        HERO.topCamera = new $3D_Camera(HERO.player, DIR_UP, 0.9, new Vector3(0, -0.5, 0), 1, 70);
        HERO.overheadCamera = new $3D_Camera(HERO.player, DIR_UP, 2.5, new Vector3(0, -1, 0), 1, 80);
        HERO.orto_overheadCamera = new $3D_Camera(HERO.player, DIR_UP, 4, new Vector3(0, -1, 0), 0.4, 80);

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
            case "orto_top_down":
                HERO.player.associateExternalCamera(HERO.orto_overheadCamera);
                WebGL.setCamera(HERO.orto_overheadCamera);
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
            start_dir = MAP[level].map[GAME.loadWayPoint].vector;
            start_grid = Grid.toClass(MAP[level].map[GAME.loadWayPoint].grid).add(start_dir);
            GAME.fromCheckpoint = false;
        } else {
            start_dir = MAP[level].map.startPosition.vector;
            start_grid = MAP[level].map.startPosition.grid;
        }
        start_grid = Vector3.from_Grid(Grid.toCenter(start_grid), HERO.height);
        HERO.player = new $3D_player(start_grid, Vector3.from_2D_dir(start_dir), MAP[level].map, HERO_TYPE.ThePrincess);
        HERO.player.addToTextureMap("invisible", TEXTURE.TheInvisiblePrincess);
        this.setCamera();
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
        LAIR.set_timeout(MAP[level].map.spawnDelay);
        console.timeEnd("setWorld");
    },
    buildWorld(level) {
        console.info("building world, room/dungeon/level:", level, "ressurection", HERO.ressurection);
        WebGL.init_required_IAM(MAP[level].map, HERO);

        if (HERO.ressurection) {
            GAME.reloadIAM(level);
        } else {
            SPAWN_TOOLS.spawn(level);
        }
        HERO.ressurection = false;

        /* adding death places*/
        for (const dp of GAME.deathPlaceDecals) {
            DECAL3D.add(dp);
        }
        GAME.deathPlaceDecals.clear();

        if (GAME.fromCheckpoint) {
            console.log(`%c ... loading part 3: affecting MAP and SPAWN from checkpoint ...`, GAME.CSS);
            SAVE_MAP_IAM.load_map(MAP);
            WebGL.CTX.pixelStorei(WebGL.CTX.UNPACK_FLIP_Y_WEBGL, true);
            MAP_TOOLS.applyStorageActions(level);
            WebGL.CTX.pixelStorei(WebGL.CTX.UNPACK_FLIP_Y_WEBGL, false);
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
        $("#pt7").on("click", GAME.setOrtoTopDownView);
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
    disableViewButton(which) {
        const button_ids = ["#p1", "#p3", "#pt5", "#pt7"];
        for (const btn of button_ids) {
            if (btn !== which) {
                $(btn).prop("disabled", false);
            }
        }
        $(which).prop("disabled", true);
    },
    setFirstPerson() {
        GAME.disableViewButton("#p1");
        if (WebGL.CONFIG.cameraType === "first_person") return;
        //console.info("#### Setting FIRST person view ####");
        WebGL.CONFIG.set("first_person", true);
        HERO.player.clearCamera();
        HERO.player.moveSpeed = 2.0;
        WebGL.setCamera(HERO.player);
    },
    setThirdPerson() {
        GAME.disableViewButton("#p3");
        if (WebGL.CONFIG.cameraType === "third_person") return;
        //console.info("#### Setting THIRD person view ####");
        WebGL.CONFIG.set("third_person", true);
        HERO.player.associateExternalCamera(HERO.topCamera);
        HERO.player.moveSpeed = 2.0;
        WebGL.setCamera(HERO.topCamera);
        //position  update
        HERO.player.camera.update();
        HERO.player.matrixUpdate();
    },
    setTopDownView() {
        GAME.disableViewButton("#pt5");
        if (WebGL.CONFIG.cameraType === "top_down") return;
        //console.info("*** Setting TOP DOWN view ***");
        WebGL.CONFIG.set("top_down", true);
        HERO.player.associateExternalCamera(HERO.overheadCamera);
        HERO.player.moveSpeed = 2.0;
        WebGL.setCamera(HERO.overheadCamera);
        //position  update
        HERO.player.camera.update();
        HERO.player.matrixUpdate();
    },
    setOrtoTopDownView() {
        GAME.disableViewButton("#pt7");
        if (WebGL.CONFIG.cameraType === "orto_top_down") return;
        //console.info("*** Setting ORTO TOP DOWN view ***");
        WebGL.CONFIG.set("orto_top_down", true);
        HERO.player.associateExternalCamera(HERO.orto_overheadCamera);
        HERO.player.moveSpeed = 2.0;
        WebGL.setCamera(HERO.orto_overheadCamera);
        //position  update
        HERO.player.camera.update();
        HERO.player.matrixUpdate();
    },
    drawFirstFrame(level) {
        if (DEBUG.VERBOSE) console.log("drawing first frame");
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
        VANISHING3D.manage(lapsedTime);
        MISSILE3D.manage(lapsedTime);
        EXPLOSION3D.manage(date);
        ENTITY3D.manage(lapsedTime, date, [HERO.invisible, HERO.dead]);
        DYNAMIC_ITEM3D.manage(lapsedTime, date);
        GAME.respond(lapsedTime);
        ENGINE.TIMERS.update();

        const interaction = WebGL.MOUSE.click(HERO);
        if (interaction) GAME.processInteraction(interaction);

        MAP.manage(GAME.level);
        GAME.frameDraw(lapsedTime);
        HERO.concludeAction();
        if (HERO.dead) IAM.checkIfProcessesComplete([EXPLOSION3D], HERO.death);
        //if (GAME.completed) GAME.won();
    },
    frameDraw(lapsedTime) {
        if (DEBUG._2D_display) {
            GAME.drawPlayer();
        }
        WebGL.renderScene(MAP[GAME.level].map);
        TITLE.compassNeedle();
        TITLE.time();

        if (DEBUG.FPS) {
            GAME.FPS(lapsedTime);
        }
        if (DEBUG._2D_display) {
            const map = MAP[GAME.level].map;
            ENGINE.BLOCKGRID.draw(map);
            MISSILE3D.draw();
            ENTITY3D.drawVector2D();
            DYNAMIC_ITEM3D.drawVector2D();
            //WebGL.visualizeTexture(map.occlusionMap, map.width, map.height, LAYER.debug);
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
                MAP_TOOLS.setOcclusionMap(GAME.level);
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
                if (DEBUG.VERBOSE) console.warn("action_item", interaction.which, interaction.inventorySprite);
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
                display(scroll.inventorySprite);
                HERO.inventory.scroll.add(scroll);
                TITLE.stack.scrollIndex = Math.max(TITLE.stack.scrollIndex, 0);
                TITLE.scrolls();
                AUDIO.Scroll.play();
                break;
            case 'shrine':
                console.log("SHRINE", interaction);
                if (interaction.which === 'health') {
                    interaction.category = 'status';
                    return GAME.processInteraction(interaction);
                }
                HERO.raiseStat(interaction.which, interaction.level);
                display(interaction.inventorySprite);
                AUDIO.LevelUp.play();
                HERO.restore();
                TITLE.skills();
                break;
            case 'scrollshop':
                return this.processInteraction({
                    category: "scroll",
                    scrollType: interaction.which,
                });
            case 'oracle':
                break;
            case 'skill':
                if (DEBUG.VERBOSE) console.log("SKILL", interaction);
                HERO.raiseStat(interaction.which, interaction.level);
                display(interaction.inventorySprite);
                AUDIO.LevelUp.play();
                TITLE.keys();
                break;
            case "life":
                if (DEBUG.VERBOSE) console.info("LIFE", interaction);
                display(interaction.inventorySprite);
                GAME.lives++;
                TITLE.lives();
                break;
            case 'status':
                if (DEBUG.VERBOSE) console.log("STATUS", interaction);
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
                if (DEBUG.VERBOSE) console.warn("interaction_item", interaction);
                const item = new NamedInventoryItem(interaction.name, interaction.inventorySprite);
                HERO.inventory.item.push(item);
                TITLE.keys();
                display(interaction.inventorySprite);
                break;
            case "entity_interaction":
                if (DEBUG.VERBOSE) console.log("entity_interaction", interaction);
                TITLE.keys()
                break;
            case "munition":
                HERO.pickOrb(interaction.dropped);
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
        if (map[ENGINE.KEY.map["7"]]) {
            GAME.setOrtoTopDownView();
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
            console.log("HERO", HERO);
            console.log("HERO.orbsLost", HERO.orbsLost);
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
    reloadIAM(level) {
        GAME.STORE.loadIAM(MAP[level].map);
        GAME.STORE.linkMap(MAP[level].map);
        GAME.setWorld(level, true);
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
        } else GAME.reloadIAM(level);

        MAP_TOOLS.applyStorageActions(level);             //to be developed
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
        GAME.save(destination);                           //to be developed

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
    saveRestriction() {
        if (HERO.orbsLost > 0 || !GAME.canBeSaved) return true;
        return false;
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
        if (GAME.saveRestriction()) {
            TITLE.saved(false);
            return;
        }

        console.time("save");
        GAME.loadWayPoint = destination.waypoint;
        SAVE_GAME.save();
        SAVE_MAP_IAM.save_map(MAP);
        SAVE_MAP_IAM.save_GA(MAP);
        TURN.display("GAME SAVED", "#FFF");
        TITLE.saved(true);
        console.timeEnd("save");
    },
    load() {
        console.time("load");
        HERO.inventory.scroll.clear();
        HERO.inventory.item.clear();
        SAVE_GAME.load();
        SAVE_MAP_IAM.load_GA();
        console.timeEnd("load");
    },
    checkpoint() {
        GAME.fromCheckpoint = true;
        GAME.start();
    },
    canSpawn() {
        if (MAP[GAME.level].map.stopSpawning) return false;
        if (!LAIR.getSize()) return false;
        if (ENTITY3D.getSize() >= MAP[GAME.level].map.maxSpawned) return false;
        //console.error("CAN SPAWN");
        return true;
    },
    spawn(lair) {
        const type = MONSTER_TYPE[MAP[GAME.level].map.monsterList.chooseRandom()];
        const grid = Grid.toCenter(lair.grid.add(lair.direction));
        const monster = new $3D_Entity(grid, type, lair.direction);
        monster.dropped = true;
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
        WebGL.renderScene(MAP[GAME.level].map);

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
        //ENTITY3D.POOL.clear(); //will also remove bosses!
        ENTITY3D.POOL = ENTITY3D.POOL.filter(enemy => enemy.boss === true); //removes all but bosses, explicit check!
        MISSILE3D.POOL.clear();
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
        WebGL.renderScene(MAP[GAME.level].map);

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
        ENGINE.layersToClear = new Set(["text", "sideback", "button", "title", "FPS", "keys", "info", "subtitle", "compassRose", "compassNeedle", "health", "lives", "skills", "gold", "time", "orbs", "scrolls"]);
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
        let x = 8;
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

        const fs = 40;
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
    saved(ok) {
        ENGINE.clearLayer("save");
        const y = (ENGINE.titleHEIGHT - 64) / 2;
        const x = INI.SCREEN_BORDER;
        let sprite = null;
        if (ok) {
            sprite = "SavedOK";
        } else {
            sprite = "SavedFail";
        }

        ENGINE.draw("save", x, y, SPRITE[sprite]);
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