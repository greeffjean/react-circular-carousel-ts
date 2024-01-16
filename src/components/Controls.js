"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
const CircularCarousel_module_css_1 = __importDefault(require("./CircularCarousel.module.css"));
const framer_motion_1 = require("framer-motion");
const use_debounce_1 = require("use-debounce");
// import { Icon } from "@storybook/design-system";
const classnames_1 = __importDefault(require("classnames"));
const Controls = ({ handleNext, handlePrev, active }) => {
    const handleChange = (fn) => {
        fn();
    };
    const debouncedHandleChange = (0, use_debounce_1.useDebouncedCallback)(handleChange, 400);
    return (<div className={(0, classnames_1.default)(CircularCarousel_module_css_1.default.controls, "controls-wrapper")}>
            <framer_motion_1.motion.button onClick={active ? () => debouncedHandleChange(handlePrev) : undefined}>
                {/* <Icon icon="arrowleftalt" /> */}
            </framer_motion_1.motion.button>
            <framer_motion_1.motion.button onClick={active ? () => debouncedHandleChange(handleNext) : undefined}>
                {/* <Icon icon="arrowrightalt" /> */}
            </framer_motion_1.motion.button>
        </div>);
};
exports.Controls = Controls;
