const log = process.env.NODE_ENV === "development";
/**
 * Console API abstraction
 * - Prevent console logs in Production
 * @returns object
*/
export const appConsole = {
    warn: (msg) => (log ? console.warn(msg) : null),
    error: (msg) => (log ? console.error(msg) : null),
    info: (msg) => (log ? console.info(msg) : null),
    log: (msg) => (log ? console.log(msg) : null),
};
