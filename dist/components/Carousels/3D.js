import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, lazy, useState } from "react";
import style from "../../assets/css/CircularCarousel.module.css";
import classNames from "classnames";
import { motion } from "framer-motion";
import { Actions } from "../../types";
import { Render } from "../Render";
import { useCircularCarouselContext } from "../../context/useContext";
import { v4 as uuidv4 } from 'uuid';
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { handleTouchEnd, handleTouchMove } from "../lib";
import { ANIMATION_DURATION } from "../../context/context";
import { Z_INDEX_LIB } from "../../constants";
import { useCallbackAfterPaint } from "react-callback-after-paint-ts";
const Controls = lazy(() => import("../Controls"));
const Indicators = lazy(() => import("../Indicators/Indicators"));
const HeightSetter = ({ slideWidth, aspectRatio }) => _jsx("div", { style: { width: slideWidth, aspectRatio: aspectRatio, zIndex: "-1", position: "relative" } });
function CircularCarousel(props) {
    var _a;
    const { slideComponent: SlideComponent, className, styles, customControls, action, slideClassName, slideStyles, indicators = true, prevIcon, nextIcon, touch = false, disable } = props;
    const [CAROUSEL_INNER_CLASS,] = useState(() => `c-inner-wrapper-${uuidv4()}`);
    const [touchStart, setTouchStart] = useState();
    const [mode, setMode] = useState();
    useEffect(() => {
        if (action !== Actions.idle) {
            setMode(action);
        }
    }, [action]);
    useEffect(() => {
        var _a;
        if (!((_a = window.REACT_GLOBAL) === null || _a === void 0 ? void 0 : _a.touchStart)) {
            window.REACT_GLOBAL = { touchStart: touchStart };
            window.REACT_GLOBAL = { setTouchStart: setTouchStart };
        }
        window.REACT_GLOBAL.touchStart = touchStart;
    }, [touchStart]);
    const windowWidth = useWindowWidth({ fps: 1 });
    const { animationType, aspectRatio, handleNext, handlePrev, media, innerCarouselWidth, setInnerCarouselWidth, } = useCircularCarouselContext();
    useCallbackAfterPaint({
        enabled: true, cb: () => {
            const carouselWrapper = document.querySelector(`.${CAROUSEL_INNER_CLASS}`);
            if (carouselWrapper) {
                setInnerCarouselWidth(carouselWrapper.getClientRects()[0].width);
            }
        }, dependencies: [windowWidth]
    });
    if (!media)
        return null;
    const slideWidth = (innerCarouselWidth !== null && innerCarouselWidth !== void 0 ? innerCarouselWidth : 0) / 3;
    const lastItemIndex = ((_a = media === null || media === void 0 ? void 0 : media.positions) === null || _a === void 0 ? void 0 : _a.length) - 1;
    const multiplier = (innerCarouselWidth / 2) - (slideWidth / 2);
    return _jsxs("section", { onTouchEnd: (e) => disable ? undefined : handleTouchEnd(e, { touchStart, handleNext, handlePrev, setTouchStart }), onTouchMove: (e) => disable ? undefined : handleTouchMove(e, touchStart, setTouchStart), style: Object.assign({}, styles), className: classNames(style.wrapper, { touch }, className), children: [_jsxs(motion.div, { className: classNames(style.thirdDimensionalCarouselInner, CAROUSEL_INNER_CLASS), initial: { position: "relative", width: "100%" }, children: [_jsx(Render, { isTruthy: innerCarouselWidth, children: _jsxs(_Fragment, { children: [_jsx(HeightSetter, { aspectRatio: aspectRatio, slideWidth: slideWidth }), _jsx(Render, { isTruthy: innerCarouselWidth, children: _jsx(_Fragment, { children: media.mediaPool.map((v, i) => {
                                            const isLastItem = i === lastItemIndex;
                                            const isFirstItem = i === 0;
                                            const isBefore = i < 3;
                                            const isAfter = i > 3;
                                            const calcZIndex = isBefore ? i + 0 : media.mediaPool.length - i;
                                            const calcScale = Z_INDEX_LIB[i] ? Z_INDEX_LIB[i] : 0.8;
                                            let xPosition = isBefore ? 0 : isAfter ? multiplier * 2 : multiplier;
                                            const isCenter = xPosition === multiplier;
                                            const gap = slideWidth * 0.1;
                                            const duration = lastItemIndex || isFirstItem ? 0 : ANIMATION_DURATION;
                                            if (i <= 1)
                                                xPosition = xPosition - gap;
                                            if (i >= 5)
                                                xPosition = xPosition + gap;
                                            return (_jsx(motion.div, { "data-testid": "slide", className: classNames(style.slide, slideClassName, { isCenter: isCenter }), style: slideStyles, initial: {
                                                    width: slideWidth,
                                                    aspectRatio: aspectRatio,
                                                }, animate: {
                                                    scale: calcScale,
                                                    zIndex: calcZIndex,
                                                    x: `${xPosition}px`,
                                                    opacity: isLastItem || (isFirstItem && mode === Actions.previous) ? 0 : 1,
                                                }, transition: {
                                                    type: animationType,
                                                    opacity: { duration },
                                                }, children: _jsx(SlideComponent, Object.assign({}, v)) }, `carousel-item-${v.slideUUID}-${innerCarouselWidth}`));
                                        }) }) })] }) }), _jsx(Render, { isTruthy: !customControls && !touch, children: _jsx(Controls, { disable: disable, prevIcon: prevIcon, nextIcon: nextIcon, active: action === Actions.idle, handleNext: handleNext, handlePrev: handlePrev }) })] }), _jsx(Render, { isTruthy: indicators, children: _jsx(Indicators, {}) })] });
}
export { CircularCarousel };
