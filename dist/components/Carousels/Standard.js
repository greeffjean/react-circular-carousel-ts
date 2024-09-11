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
import { useCallbackAfterPaint } from "react-callback-after-paint-ts";
const Controls = lazy(() => import("../Controls"));
const Indicators = lazy(() => import("../Indicators/Indicators"));
const HeightSetter = ({ slideWidth, aspectRatio }) => _jsx("div", { style: {
        width: slideWidth,
        aspectRatio: aspectRatio,
        zIndex: "-1",
        position: "relative"
    } });
function CircularCarousel(props) {
    var _a;
    const { slideComponent: SlideComponent, className, styles, customControls, action, slideClassName, slideStyles, indicators = true, prevIcon, nextIcon, touch = false, disable } = props;
    const [CAROUSEL_INNER_CLASS,] = useState(() => `c-inner-wrapper-${uuidv4()}`);
    const [touchStart, setTouchStart] = useState();
    useEffect(() => {
        var _a;
        if (!((_a = window.REACT_GLOBAL) === null || _a === void 0 ? void 0 : _a.touchStart)) {
            window.REACT_GLOBAL = { touchStart: touchStart };
            window.REACT_GLOBAL = { setTouchStart: setTouchStart };
        }
        window.REACT_GLOBAL.touchStart = touchStart;
    }, [touchStart]);
    const windowWidth = useWindowWidth({ fps: 1 });
    const { slideWidth, slideGap, animationType, aspectRatio, handleNext, handlePrev, media, isDynamic, innerCarouselWidth, setInnerCarouselWidth } = useCircularCarouselContext();
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
    const _slideWidth = isDynamic && innerCarouselWidth ? ((innerCarouselWidth / 100 * (slideWidth > 100 ? 100 : slideWidth))) : slideWidth;
    const lastItemIndex = ((_a = media === null || media === void 0 ? void 0 : media.positions) === null || _a === void 0 ? void 0 : _a.length) - 1;
    return _jsxs("section", { onTouchEnd: (e) => disable ? undefined : handleTouchEnd(e, { touchStart, handleNext, handlePrev, setTouchStart }), onTouchMove: (e) => disable ? undefined : handleTouchMove(e, touchStart, setTouchStart), style: Object.assign(Object.assign({}, styles), { "--slideGap": `${slideGap}px` }), className: classNames(style.wrapper, { touch }, className), children: [_jsx("div", { style: { position: "relative" }, children: _jsxs("div", { children: [_jsxs(motion.div, { className: classNames(style.carouselInner, CAROUSEL_INNER_CLASS), initial: { position: "relative", overflow: "hidden", width: "100%" }, children: [_jsx(HeightSetter, { aspectRatio: aspectRatio, slideWidth: _slideWidth }), _jsx(Render, { isTruthy: !isDynamic || isDynamic && innerCarouselWidth, children: _jsx(_Fragment, { children: media.mediaPool.map((v, i) => {
                                            const xPosition = (media.positions[i] * _slideWidth) + (media.positions[i] * slideGap);
                                            const isLastItem = i === lastItemIndex;
                                            const isFirstItem = i === 0;
                                            const calcZIndex = isLastItem ? -1 : isFirstItem ? 1 : 2;
                                            const transition = {
                                                type: animationType
                                            };
                                            return (_jsx(motion.div, { "data-testid": "slide", className: classNames(style.slide, slideClassName), style: slideStyles, animate: {
                                                    aspectRatio: aspectRatio,
                                                    width: _slideWidth,
                                                    zIndex: calcZIndex,
                                                    x: `${xPosition}px`,
                                                    opacity: isLastItem || isFirstItem ? 0 : 1
                                                }, transition: transition, children: _jsx(SlideComponent, Object.assign({}, v)) }, `carousel-item-${v.slideUUID}-${innerCarouselWidth}`));
                                        }) }) })] }), _jsx(Render, { isTruthy: !customControls && !touch, children: _jsx(Controls, { disable: disable, prevIcon: prevIcon, nextIcon: nextIcon, active: action === Actions.idle, handleNext: handleNext, handlePrev: handlePrev }) })] }) }), _jsx(Render, { isTruthy: indicators, children: _jsx(Indicators, {}) })] });
}
export { CircularCarousel };
