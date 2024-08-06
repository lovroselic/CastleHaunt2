/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */
/*jshint -W083 */
"use strict";

/**
 *      dependencies:
 *          ENGINE
 */

const GenericTimers = {
    VERSION: "1.02",
    CSS: "color: #b785FF",
    INI: {
        INFO_TIMER_ID: "info",
        INFO_TIMER: 3,
        SUB_TIMER_ID: "subtitle",
        SUB_TIMER: 10,
    },

    clearInfo() {
        ENGINE.clearLayer("info");
    },
    clearSubtitle() {
        ENGINE.clearLayer("subtitle");
    },
    infoTimer() {
        let T;
        if (ENGINE.TIMERS.exists(GenericTimers.INI.INFO_TIMER_ID)) {
            T = ENGINE.TIMERS.access(GenericTimers.INI.INFO_TIMER_ID);
            T.set(GenericTimers.INI.INFO_TIMER);
        } else {
            T = new CountDown(GenericTimers.INI.INFO_TIMER_ID, GenericTimers.INI.INFO_TIMER, GenericTimers.clearInfo);
        }
    },
    subTimer() {
        let T;
        if (ENGINE.TIMERS.exists(GenericTimers.INI.SUB_TIMER_ID)) {
            T = ENGINE.TIMERS.access(GenericTimers.INI.SUB_TIMER_ID);
            T.extend(GenericTimers.INI.SUB_TIMER);
        } else {
            T = new CountDown(GenericTimers.INI.SUB_TIMER_ID, GenericTimers.INI.SUB_TIMER, GenericTimers.clearSubtitle);
        }
    },
};


//END
console.log(`%cGenericTimers ${GenericTimers.VERSION} loaded.`, GenericTimers.CSS);