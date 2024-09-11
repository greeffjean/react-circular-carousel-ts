/**
 * Console API abstraction
 * - Prevent console logs in Production
 * @returns object
*/
export declare const appConsole: {
    warn: (msg: any) => void | null;
    error: (msg: any) => void | null;
    info: (msg: any) => void | null;
    log: (msg: any) => void | null;
};
