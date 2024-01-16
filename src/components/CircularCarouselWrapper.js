"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularCarouselComponent = exports.CircularCarouselWrapper = void 0;
const CircularCarousel_1 = require("components/CircularCarousel");
const useContext_1 = require("context/useContext");
const context_1 = require("context/context");
const CircularCarouselComponent = (props) => {
    const { action, media } = (0, useContext_1.useCircularCarouselContext)();
    return <CircularCarousel_1.CircularCarousel {...props} media={media} action={action}/>;
};
exports.CircularCarouselComponent = CircularCarouselComponent;
const CircularCarouselWrapper = (props) => {
    return <context_1.CircularCarouselContextWrapper {...props}>
        <>
            <CircularCarouselComponent {...props}/>
            {props.children}
        </>
    </context_1.CircularCarouselContextWrapper>;
};
exports.CircularCarouselWrapper = CircularCarouselWrapper;
