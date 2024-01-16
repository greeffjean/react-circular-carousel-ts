"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCircularCarouselContext = void 0;
const react_1 = require("react");
const context_1 = require("./context");
const ERROR_MSG = "Unable to find an <Context.Provider> ancestor, please ensure component is wrapped in a <Context.Provider>";
const useCircularCarouselContext = () => {
    try {
        const ctx = (0, react_1.useContext)(context_1.Context);
        return ctx;
    }
    catch (_a) {
        throw new Error(ERROR_MSG);
    }
};
exports.useCircularCarouselContext = useCircularCarouselContext;
