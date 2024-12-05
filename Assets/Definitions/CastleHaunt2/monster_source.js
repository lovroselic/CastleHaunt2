/** backup */



const MONSTER_TYPE_BAK = {

    Astro: {
        name: "Astro",
        model: "Astro",
        scale: 1.5 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 24,
        defense: 18,
        magic: 15,
        health: 35,
        xp: 40,
        gold: 40,
        attackSound: "HumanAttack1",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [7, ["wanderer"], 5, ["shoot"]],
        moveSpeed: 1.0,
        mana: 2,
        caster: true,
        shootDistance: 5,
        stalkDistance: 6,
        material: MATERIAL.standard,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.Fireball,
    },
    AstroRed: {
        name: "AstroRed",
        texture: "AstroRed",
        model: "Astro",
        scale: 1.7 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 25,
        defense: 18,
        magic: 16,
        health: 42,
        xp: 50,
        gold: 50,
        attackSound: "HumanAttack1",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [7, ["wanderer"], 5, ["shoot"]],
        moveSpeed: 1.0,
        mana: 3,
        caster: true,
        shootDistance: 5,
        stalkDistance: 6,
        material: MATERIAL.redShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },





    SilverSkeleton: {
        name: "SilverSkeleton",
        texture: "Silver",
        model: "Skeleton",
        scale: 1.8 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "SmokeExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 38,
        defense: 28,
        magic: 20,
        health: 50,
        xp: 90,
        gold: 90,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.silver,
    },

    
    Basilisk: {
        name: "Basilisk",
        model: "Basilisk",
        scale: 1.8 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 40,
        defense: 30,
        magic: 25,
        health: 50,
        xp: 100,
        gold: 100,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 0.85,
        material: MATERIAL.greenFluence,
    },
    Rex: {
        name: "Rex",
        model: "Rex",
        scale: 1.25 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 45,
        defense: 35,
        magic: 30,
        health: 50,
        xp: 100,
        gold: 100,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [10, ["wanderer"], 5, ["shoot"]],
        moveSpeed: 1.0,
        mana: 3,
        caster: true,
        shootDistance: 5,
        stalkDistance: 6,
        material: MATERIAL.standard,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.Fireball,
    },
    Hulk: {
        name: "Hulk",
        model: "Hulk",
        scale: 1.5 / 2 ** 6,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 48,
        defense: 36,
        magic: 5,
        health: 50,
        xp: 100,
        gold: 100,
        attackSound: "HumanAttack1",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [10, ["wanderer"], 4, ["advancer"]],
        moveSpeed: 1.0,
        material: MATERIAL.greenShine,
    },
    RedDragon: {
        name: "RedDragon",
        texture: "RedDragon",
        model: "Dragon",
        scale: 1.92 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.25,
        fly: 0.25,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 48,
        defense: 35,
        magic: 40,
        health: 50,
        xp: 120,
        gold: 125,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [10, ["wanderer"], 7, ["shoot"]],
        moveSpeed: 1.05,
        mana: 5,
        caster: true,
        shootDistance: 7,
        stalkDistance: 8,
        material: MATERIAL.gold,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.Fireball,
    },
    GoldSkeleton: {
        name: "GoldSkeleton",
        texture: "Gold",
        model: "Skeleton",
        scale: 1.8 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "SmokeExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 50,
        defense: 40,
        magic: 30,
        health: 60,
        xp: 110,
        gold: 100,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.gold,
    },

    GreenRex: {
        name: "GreenRex",
        texture: "GreenRex",
        model: "Rex",
        scale: 1.25 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 55,
        defense: 45,
        magic: 42,
        health: 60,
        xp: 125,
        gold: 125,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [10, ["wanderer"], 6, ["shoot"]],
        moveSpeed: 1.05,
        mana: 3,
        caster: true,
        shootDistance: 6,
        stalkDistance: 7,
        material: MATERIAL.standard,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.Fireball,
    },
    Drax: {
        name: "Drax",
        model: "Drax",
        scale: 1.25 / 2 ** 1,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 60,
        defense: 50,
        magic: 40,
        health: 100,
        xp: 150,
        gold: 125,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [Infinity, ["wanderer"], 10, ["shoot"]],
        moveSpeed: 1.0,
        mana: 3,
        caster: true,
        shootDistance: 10,
        stalkDistance: 12,
        material: MATERIAL.standard,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.Fireball,
    },
    GreenWolf: {
        name: "Wolf",
        texture: "GreenWolf",
        model: "Wolf",
        scale: 1.6 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 60,
        defense: 40,
        magic: 12,
        health: 50,
        xp: 100,
        gold: 50,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt3",
        behaviourArguments: [10, ["wanderer"], 5, ["advancer"]],
        moveSpeed: 1.2,
        material: MATERIAL.greenFluence,
    },
    GreenBasilisk: {
        name: "GreenBasilisk",
        texture: "GreenBasilisk",
        model: "Basilisk",
        scale: 1.7 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 65,
        defense: 45,
        magic: 35,
        health: 60,
        xp: 150,
        gold: 150,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 0.99,
        material: MATERIAL.greenFluence,
    },
    BlueSkeleton: {
        name: "BlueSkeleton",
        texture: "BlueMetal",
        model: "Skeleton",
        scale: 1.8 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "SmokeExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 70,
        defense: 50,
        magic: 40,
        health: 60,
        xp: 200,
        gold: 200,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.standard,
    },
    GreenSkeleton: {
        name: "GreenSkeleton",
        texture: "GreenMetal",
        model: "Skeleton",
        scale: 1.8 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "SmokeExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        attack: 80,
        defense: 60,
        magic: 50,
        health: 75,
        xp: 250,
        gold: 250,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.standard,
    },
    MissGhostFace: {
        name: "MissGhostFace",
        model: "MissGhostFace",
        scale: 1 / 2 ** 1,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: KEY_TYPE.Pearl,
        attack: 1000,
        defense: 1000,
        magic: 100,
        health: 1000,
        xp: 10000,
        attackSound: "Banshee",
        hurtSound: "Ow",
        behaviourArguments: [Infinity, ["wanderer"], 15, ["shoot"]],
        moveSpeed: 1.2,
        material: MATERIAL.standard,
        final_boss: true,
        mana: 100,
        caster: true,
        shootDistance: 15,
        stalkDistance: 17,
        material: MATERIAL.standard,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.Fireball,
    },
};