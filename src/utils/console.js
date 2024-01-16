"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConsole = void 0;
const log = process.env.NODE_ENV === "development";
exports.appConsole = {
    warn: (msg) => (log ? console.warn(msg) : null),
    error: (msg) => (log ? console.error(msg) : null),
    info: (msg) => (log ? console.info(msg) : null),
    log: (msg) => (log ? console.log(msg) : null),
};
