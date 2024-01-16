"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indicators = void 0;
const useContext_1 = require("context/useContext");
const Indicators_module_css_1 = __importDefault(require("./Indicators.module.css"));
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const Indicators = () => {
    const { media, activeIdx } = (0, useContext_1.useCircularCarouselContext)();
    const [poolLength,] = (0, react_1.useState)(() => Array.from(Array(media.mediaPool.length).keys()).map(key => key));
    return (<div data-testid="indicators" className={(0, classnames_1.default)(Indicators_module_css_1.default.wrapper, "indicators-wrapper")}>
        {poolLength.map(key => {
            return (<span className={(activeIdx) === key ? "active" : undefined} key={key}></span>);
        })}
    </div>);
};
exports.Indicators = Indicators;
