/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */
"use strict";

///////////////SaveGame.js/////////////
//                                  //
//  version 1.05 by LS              //
//                                  //
//////////////////////////////////////

/*

TODO:

*/

const SAVE_GAME = {
  VERSION: "1.05",
  STATABR: "_STA",
  LISTABR: "_LST",
  TIMEABR: "_TMR",
  OBJABR: "_OBJ",
  IAMABR: "_IAM",
  GAABR: "_GA",
  MAPABR: "_MAP",
  METAABR: "_META",
  MANAGERABR: "_MNG",
  CSS: "color: orange",
  that: window,
  ENCODE: true,
  SLOTS: 5,
  slot_save_list: ["_STA", "_LST", "_TMR", "_OBJ", "_IAM", "_GA", "_MAP", "_META"],
  SG_MANAGER_ID: "#sgm_content",

  debugMode() {
    this.ENCODE = false;
  },
  ready() {
    console.log(`%cSAVE_GAME module version ${SAVE_GAME.VERSION} loaded and ready.`, SAVE_GAME.CSS);
  },
  MAP: {
    value: [],
    pointer: []
  },
  LIST: {
    value: [],
    pointer: []
  },
  TIMER: {
    value: [],
    pointer: []
  },
  OBJECT: {
    value: [],
    pointer: [],
    class: []
  },
  MAP_PROPERTY: {
    level: [],
    parameter_value_pair: [],
  },
  pointers: [],
  lists: [],
  timers: [],
  objects: [],
  map_properties: [],
  clearMap() {
    SAVE_GAME.MAP.value.clear();
    SAVE_GAME.MAP.pointer.clear();
    SAVE_GAME.LIST.value.clear();
    SAVE_GAME.LIST.pointer.clear();
    SAVE_GAME.TIMER.value.clear();
    SAVE_GAME.TIMER.pointer.clear();
    SAVE_GAME.MAP_PROPERTY.level.clear();
    SAVE_GAME.MAP_PROPERTY.parameter_value_pair.clear();
  },
  setKey(key) {
    SAVE_GAME.key = key;
  },
  objectify(str) {
    return eval(str);
  },
  loadLists() {
    const load = JSON.parse(SAVE_GAME.decode(localStorage[SAVE_GAME.key + SAVE_GAME.LISTABR]));
    const LL = load.pointer.length;
    for (let i = 0; i < LL; i++) {
      const obj = SAVE_GAME.objectify(load.pointer[i]);
      obj.objectify(load.value[i]);
    }
  },
  loadTimers() {
    const load = JSON.parse(SAVE_GAME.decode(localStorage[SAVE_GAME.key + SAVE_GAME.TIMEABR]));
    if (ENGINE.verbose) console.info("load timers", load);
    const LL = load.pointer.length;
    for (let i = 0; i < LL; i++) {
      const idx = ENGINE.TIMERS.index(load.pointer[i]);
      if (idx >= 0) {
        ENGINE.TIMERS.STACK[idx].stop();
        ENGINE.TIMERS.STACK[idx].load(JSON.parse(load.value[i]));
        ENGINE.TIMERS.STACK[idx].continue();
      } else {
        if (ENGINE.verbose) {
          console.log("create timer!; NOT YET IMPLEMENTED!!!");
          console.log(load.pointer[i], JSON.parse(load.value[i]));
        }
      }
    }
  },
  loadObjects() {
    const load = JSON.parse(SAVE_GAME.decode(localStorage[SAVE_GAME.key + SAVE_GAME.OBJABR]));
    const LL = load.pointer.length;
    for (let i = 0; i < LL; i++) {
      const unpacked = JSON.parse(load.value[i]);
      for (const item in unpacked) {
        const className = eval(load.class[i]);
        SAVE_GAME.that[load.pointer[i]][item] = new className();
        SAVE_GAME.that[load.pointer[i]][item].adopt(unpacked[item]);
      }
    }
  },
  load_map_properties(MAP_REFERENCE = MAP) {
    if (ENGINE.verbose) console.log("*********************** loading map properties ***********************");
    const load = JSON.parse(SAVE_GAME.decode(localStorage[SAVE_GAME.key + SAVE_GAME.MAPABR]));
    if (ENGINE.verbose) console.info("load:", load);
    const LL = load.level.length;
    for (let i = 0; i < LL; i++) {
      const level = load.level[i];
      const properties = JSON.parse(load.parameter_value_pair[i]);
      if (ENGINE.verbose) console.log("..", level, properties);
      MAP_REFERENCE[level].adapted_map_properties = true;
      for (let i = 0; i < properties.length; i += 2) {
        MAP_REFERENCE[level][properties[i]] = properties[i + 1];
      }
    }
    if (ENGINE.verbose) console.log("----------------------------------------------------------------------");
  },
  saveObjects() {
    SAVE_GAME.objects.forEach(obj => {
      SAVE_GAME.OBJECT.pointer.push(obj.obj);
      SAVE_GAME.OBJECT.class.push(obj.class);
      obj = SAVE_GAME.that[obj.obj];
      let value = JSON.stringify(obj);
      SAVE_GAME.OBJECT.value.push(value);
    });
    const objSTR = JSON.stringify(SAVE_GAME.OBJECT);
    localStorage.setItem(SAVE_GAME.key + SAVE_GAME.OBJABR, SAVE_GAME.code(objSTR));
  },
  saveLists() {
    SAVE_GAME.lists.forEach(list => {
      const obj = SAVE_GAME.objectify(list);
      const stringified = obj.stringify();
      SAVE_GAME.LIST.pointer.push(list);
      SAVE_GAME.LIST.value.push(stringified);
    });
    const listSTR = JSON.stringify(SAVE_GAME.LIST);
    localStorage.setItem(SAVE_GAME.key + SAVE_GAME.LISTABR, SAVE_GAME.code(listSTR));
  },
  save() {
    console.log(`%cSaving game ....`, SAVE_GAME.CSS);
    SAVE_GAME.clearMap();
    SAVE_GAME.saveMap();
    SAVE_GAME.saveLists();
    SAVE_GAME.saveTimers();
    SAVE_GAME.saveObjects();
    SAVE_GAME.save_map_properties();
    SAVE_GAME.saveMeta();

  },
  saveMeta(MAP_REFERENCE = MAP) {
    const meta_data = [];
    const timestamp = Date.now();
    meta_data.push(JSON.stringify({ "timestamp": timestamp }));
    meta_data.push(JSON.stringify({ "name": MAP_REFERENCE[GAME.level].name }));
    if (ENGINE.verbose) console.info("saving meta data", meta_data);
    const metaSTR = JSON.stringify(meta_data);
    localStorage.setItem(SAVE_GAME.key + SAVE_GAME.METAABR, SAVE_GAME.code(metaSTR));

  },
  save_map_properties(MAP_REFERENCE = MAP) {
    if (ENGINE.verbose) console.info("SAVE_GAME.map_properties", SAVE_GAME.map_properties);
    for (const level in MAP_REFERENCE) {
      if (MAP_REFERENCE[level].unpacked) {
        SAVE_GAME.MAP_PROPERTY.level.push(level);
        const parameter_value_pairs = [];
        for (const property of SAVE_GAME.map_properties) {
          parameter_value_pairs.push(property, MAP_REFERENCE[level].map[property]);
        }
        SAVE_GAME.MAP_PROPERTY.parameter_value_pair.push(JSON.stringify(parameter_value_pairs));
      } else if (MAP_REFERENCE[level].adapted_map_properties) {
        SAVE_GAME.MAP_PROPERTY.level.push(level);
        const parameter_value_pairs = [];
        for (const property of SAVE_GAME.map_properties) {
          parameter_value_pairs.push(property, MAP_REFERENCE[level][property]);
        }
        SAVE_GAME.MAP_PROPERTY.parameter_value_pair.push(JSON.stringify(parameter_value_pairs));
      }
    }
    const map_propertySTR = JSON.stringify(SAVE_GAME.MAP_PROPERTY);
    if (ENGINE.verbose) console.log("map_propertySTR", JSON.parse(map_propertySTR));
    localStorage.setItem(SAVE_GAME.key + SAVE_GAME.MAPABR, SAVE_GAME.code(map_propertySTR));
  },
  saveTimers() {
    if (ENGINE.verbose) console.info("SAVE_GAME.timers", SAVE_GAME.timers);
    for (let i = 0, LN = SAVE_GAME.timers.length; i < LN; i++) {
      const idx = ENGINE.TIMERS.index(SAVE_GAME.timers[i]);
      if (idx < 0) continue;
      SAVE_GAME.TIMER.pointer.push(SAVE_GAME.timers[i]);
      ENGINE.TIMERS.STACK[idx].stop();
      SAVE_GAME.TIMER.value.push(JSON.stringify(ENGINE.TIMERS.STACK[idx]));
      ENGINE.TIMERS.STACK[idx].continue();
    }
    const timeSTR = JSON.stringify(SAVE_GAME.TIMER);
    localStorage.setItem(SAVE_GAME.key + SAVE_GAME.TIMEABR, SAVE_GAME.code(timeSTR));
  },
  saveMap() {
    SAVE_GAME.pointers.forEach(ptr => {
      SAVE_GAME.MAP.pointer.push(ptr);
      SAVE_GAME.MAP.value.push(SAVE_GAME.objectify(ptr));
    });
    const mapSTR = JSON.stringify(SAVE_GAME.MAP);
    localStorage.setItem(SAVE_GAME.key, "saved");
    localStorage.setItem(SAVE_GAME.key + SAVE_GAME.STATABR, SAVE_GAME.code(mapSTR));
  },
  loadMap() {
    if (ENGINE.verbose) console.info("loading maps");
    const load = JSON.parse(SAVE_GAME.decode(localStorage[SAVE_GAME.key + SAVE_GAME.STATABR]));
    const LL = load.value.length;
    for (let i = 0; i < LL; i++) {
      const [prop, pointer] = load.pointer[i].splitOnLastDot();
      eval(prop)[pointer] = load.value[i];
    }
  },
  load() {
    console.log(`%cLoading game ....`, SAVE_GAME.CSS);
    SAVE_GAME.loadMap();
    SAVE_GAME.loadLists();
    SAVE_GAME.loadTimers();
    SAVE_GAME.loadObjects();
    SAVE_GAME.load_map_properties();
  },
  code(string) {
    if (!SAVE_GAME.ENCODE) return string;
    let codes = [...string].map(char => char.charCodeAt(0) + 13);
    let hcodes = codes.map(x => x.toString(16));
    return hcodes.join('');
  },
  decode(code) {
    if (!SAVE_GAME.ENCODE) return code;
    let hcodes = code.splitByN(2);
    let icodes = hcodes.map(x => parseInt(x, 16) - 13);
    return String.fromCharCode(...icodes);
  },
  delete(sg) {
    localStorage.removeItem(sg);
    console.log(`%cDeleted ....: ${sg}`, SAVE_GAME.CSS);
  },
  manager_HTML() {
    const id = SAVE_GAME.SG_MANAGER_ID;
    $(id).html("");
    SAVE_GAME.setManager();
    const activeSG = localStorage[SAVE_GAME.key + SAVE_GAME.STATABR];
    let active, isSG;

    if (activeSG) {
      const meta = JSON.parse(SAVE_GAME.decode(localStorage[SAVE_GAME.key + SAVE_GAME.METAABR]));
      const room = JSON.parse(meta[1]).name;
      const timestamp = new Date(parseInt(JSON.parse(meta[0]).timestamp)).ISO();
      const timers = JSON.parse(SAVE_GAME.decode(localStorage[SAVE_GAME.key + SAVE_GAME.TIMEABR]));
      const game_time = Timer.timeStampToString(JSON.parse(timers.value).now);
      active = `<p>Active save game: <strong>${room}</strong>, game time: ${game_time}. Saved: ${timestamp} `;
      active += `<input type='button' id = 'Refresh_SG_manager' value= 'Refresh'>`;
      active += `</p><hr>`;
      isSG = true;
    } else {
      active = "<p>No active save game</p><hr>";
      isSG = false;
    }

    $(id).append(active);
    if (!isSG) return;

    const unpacked = new Array(SAVE_GAME.SLOTS);

    for (let i = 0; i < SAVE_GAME.SLOTS; i++) {
      let line = "<p>";
      line += `${i + 1}. `;
      line += `<input type='button' class= "copy_to_slot" id ='copy_to_slot_${i}' value= "Copy Active Save game to slot ${i + 1}"> `;
      line += `Currently stored: `;

      if (localStorage[SAVE_GAME.key + SAVE_GAME.MANAGERABR + "_" + i] !== "null") {
        const parsedArray = JSON.parse(localStorage[SAVE_GAME.key + SAVE_GAME.MANAGERABR + "_" + i]);
        unpacked[i] = SAVE_GAME.unpackSlot(parsedArray);

        const room = JSON.parse(unpacked[i]._META[1]).name;
        const timestamp = new Date(parseInt(JSON.parse(unpacked[i]._META[0]).timestamp)).ISO();
        const timers = JSON.parse(unpacked[i]._TMR.value);
        const game_time = Timer.timeStampToString(timers.now);

        line += `<strong>${room}</strong>, game time: ${game_time}. Saved: ${timestamp}  `;
        line += `<input type="button" class= "red_button export_to_active" id ="export_to_active_${i}" value="Export to active" style="color:white">`;
      } else {
        line += "Nothing";
      }

      line += "</p>"
      $(id).append(line);
    }

    $(document).on("click", ".copy_to_slot", handleCopyToSlotClick);
    $(document).on("click", ".export_to_active", handleExportClick);
    $("#Refresh_SG_manager").on("click", SAVE_GAME.manager_HTML);

    function handleCopyToSlotClick() {
      let clickedId = $(this).attr("id");
      SAVE_GAME.copyToSlot(clickedId);
    }

    function handleExportClick() {
      let clickedId = $(this).attr("id");
      SAVE_GAME.exportSlot(clickedId);
    }
  },
  exportSlot(id) {
    let slotNumber = id.split("_").pop();
    const slot = JSON.parse(localStorage[SAVE_GAME.key + SAVE_GAME.MANAGERABR + "_" + slotNumber]);
    for (const el of slot) {
      localStorage.setItem(SAVE_GAME.key + el.abr, el.aspect);
    }

    SAVE_GAME.manager_HTML();
  },
  unpackSlot(parsedArray) {
    const slot = {};
    for (const el of parsedArray) {
      let aspect = el.aspect;
      if (el.abr !== "_GA") aspect = SAVE_GAME.decode(el.aspect);
      slot[el.abr] = JSON.parse(aspect);
    }
    return slot;
  },
  copyToSlot(id) {
    let slotNumber = id.split("_").pop();
    const slot = [];

    for (const abr of SAVE_GAME.slot_save_list) {
      const aspect = localStorage[SAVE_GAME.key + abr];
      slot.push({ abr, aspect });
    }

    const slotSTR = JSON.stringify(slot);
    localStorage.setItem(SAVE_GAME.key + SAVE_GAME.MANAGERABR + "_" + slotNumber, slotSTR);
    SAVE_GAME.manager_HTML();
  },
  setManager() {
    if (localStorage[SAVE_GAME.key + SAVE_GAME.MANAGERABR] > 0) return;
    localStorage[SAVE_GAME.key + SAVE_GAME.MANAGERABR] = SAVE_GAME.SLOTS;
    for (let i = 0; i < SAVE_GAME.SLOTS; i++) {
      localStorage[SAVE_GAME.key + SAVE_GAME.MANAGERABR + "_" + i] = null;
    }
  },
};

const SAVE_MAP_IAM = {
  save_map(MAP_REFERENCE = MAP) {
    const map_iam = {};
    for (const level in MAP_REFERENCE) {
      const storage = MAP_REFERENCE[level]?.map?.storage;
      if (storage && !storage.empty()) {
        if (ENGINE.verbose) console.log("adding storage", level, storage);
        map_iam[level] = storage;
      } else if (MAP_REFERENCE[level].unused_storage) {
        if (ENGINE.verbose) console.log("adding unused storage", level, MAP_REFERENCE[level].unused_storage);
        map_iam[level] = MAP_REFERENCE[level].unused_storage;
      }
    }
    if (ENGINE.verbose) console.warn("save map_iam", map_iam);
    const map_iam_string = JSON.stringify(map_iam);
    localStorage.setItem(SAVE_GAME.key + SAVE_GAME.IAMABR, SAVE_GAME.code(map_iam_string));
  },
  load_map(MAP_REFERENCE = MAP) {
    const map_iam = JSON.parse(SAVE_GAME.decode(localStorage[SAVE_GAME.key + SAVE_GAME.IAMABR]));
    if (ENGINE.verbose) console.log("loaded map_iam", map_iam);
    for (const level in map_iam) {
      MAP_REFERENCE[level].unused_storage = new IAM_Storage(map_iam[level].action_list);
    }
  },
  save_GA(MAP_REFERENCE = MAP) {
    const map_GA = {};
    for (const level in MAP_REFERENCE) {
      const rebuilt = MAP_REFERENCE[level]?.map?.rebuilt;
      if (rebuilt) {
        const GA = MAP_REFERENCE[level].map.GA;
        map_GA[level] = GA.exportMap();
      } else if (MAP_REFERENCE[level].adapted_data) {
        map_GA[level] = MAP_REFERENCE[level].adapted_data;
      }
    }
    const map_GA_string = JSON.stringify(map_GA);
    if (ENGINE.verbose) console.warn("save_GA",map_GA_string);
    localStorage.setItem(SAVE_GAME.key + SAVE_GAME.GAABR, map_GA_string);
  },
  load_GA(MAP_REFERENCE = MAP) {
    const map_GA = JSON.parse(localStorage[SAVE_GAME.key + SAVE_GAME.GAABR]);
    if (ENGINE.verbose) console.log("loaded map_GA", map_GA);
    for (const level in map_GA) {
      MAP_REFERENCE[level].adapted_data = map_GA[level];
    }
  }
};

SAVE_GAME.ready();