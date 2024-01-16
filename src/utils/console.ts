const log = process.env.NODE_ENV === "development";

export const appConsole = {
  warn: (msg: any) => (log ? console.warn(msg) : null),
  error: (msg: any) => (log ? console.error(msg) : null),
  info: (msg: any) => (log ? console.info(msg) : null),
  log: (msg: any) => (log ? console.log(msg) : null),
};
