"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSlideComponent = exports.CircularCarousel = void 0;
const react_1 = require("react");
const CircularCarousel_module_css_1 = __importDefault(require("./CircularCarousel.module.css"));
const classnames_1 = __importDefault(require("classnames"));
const framer_motion_1 = require("framer-motion");
const types_1 = require("types");
const Controls_1 = require("components/Controls");
const Render_1 = require("components/Render");
const useContext_1 = require("context/useContext");
const Slide_1 = require("components/Slide/Slide");
Object.defineProperty(exports, "CustomSlideComponent", { enumerable: true, get: function () { return Slide_1.CustomSlideComponent; } });
const Indicators_1 = require("components/Indicators/Indicators");
const react_uuid_1 = __importDefault(require("react-uuid"));
const throttled_1 = require("@react-hook/window-size/throttled");
const HeightSetter = ({ slideWidth, aspectRatio }) => <div style={{ width: slideWidth, aspectRatio: aspectRatio }}>
</div>;
const CAROUSEL_INNER_CLASS = `c-inner-wrapper-${(0, react_uuid_1.default)()}`;
const CircularCarousel = ({ slideComponent, className, styles, customControls, action, slideClassName, slideStyles, indicators = true }) => {
    var _a;
    const windowWidth = (0, throttled_1.useWindowWidth)({ fps: 1 });
    const { slideWidth, slideGap, animationType, aspectRatio, handleNext, handlePrev, media, isDynamic, innerCarouselWidth, setInnerCarouselWidth } = (0, useContext_1.useCircularCarouselContext)();
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (innerCarouselWidth) {
            const w = document.querySelector(`.${CAROUSEL_INNER_CLASS}`);
            if (w)
                return setInnerCarouselWidth(w.getBoundingClientRect().width);
        }
        if (isDynamic && ref.current) {
            setInnerCarouselWidth(ref.current.getBoundingClientRect().width);
        }
    }, [isDynamic, ref.current, windowWidth]);
    const _slideWidth = isDynamic && innerCarouselWidth ? ((innerCarouselWidth / 100 * (slideWidth > 100 ? 100 : slideWidth))) : slideWidth;
    if (!media)
        return null;
    const lastItemIndex = ((_a = media === null || media === void 0 ? void 0 : media.positions) === null || _a === void 0 ? void 0 : _a.length) - 1;
    const SlideComponent = slideComponent ? slideComponent : Slide_1.CustomSlideComponent;
    const next = () => handleNext ? handleNext() : null;
    const prev = () => handlePrev ? handlePrev() : null;
    return <section style={Object.assign(Object.assign({}, styles), { "--slideWidth": `${slideGap}px` })} className={(0, classnames_1.default)(CircularCarousel_module_css_1.default.wrapper, className)}>
        <framer_motion_1.motion.div ref={ref} className={(0, classnames_1.default)(CircularCarousel_module_css_1.default.carouselInner, CAROUSEL_INNER_CLASS)} animate={{ position: "relative", overflow: "hidden" }}>
            <Render_1.Render isTruthy={!isDynamic || isDynamic && innerCarouselWidth}>
                <>
                    <HeightSetter aspectRatio={aspectRatio} slideWidth={_slideWidth}/>
                    {media.mediaPool.map((v, i) => {
            const xPosition = (media.positions[i] * _slideWidth) + (media.positions[i] * slideGap);
            const isLastItem = i === lastItemIndex;
            const isFirstItem = i === 0;
            const calcZIndex = isLastItem ? -1 : isFirstItem ? 1 : 2;
            return (<framer_motion_1.motion.div className={(0, classnames_1.default)(CircularCarousel_module_css_1.default.slide, slideClassName)} key={`carousel-item-${v.slideUUID}-${innerCarouselWidth}`} style={Array.isArray(slideStyles) ? slideStyles[i] : {}} initial={{
                    width: _slideWidth,
                    aspectRatio: aspectRatio
                }} animate={{
                    zIndex: calcZIndex,
                    x: `${xPosition}px`,
                    opacity: isLastItem || isFirstItem ? 0 : 1
                }} transition={{
                    type: animationType
                }}>
                                <SlideComponent {...v}/>
                                <framer_motion_1.motion.div animate={{
                    width: slideGap,
                    height: "100%",
                    x: 0 - slideGap,
                    position: "absolute"
                }}></framer_motion_1.motion.div>
                            </framer_motion_1.motion.div>);
        })}
                </>
            </Render_1.Render>
        </framer_motion_1.motion.div>
        <Render_1.Render isTruthy={indicators}>
            <Indicators_1.Indicators />
        </Render_1.Render>
        <Render_1.Render isTruthy={!customControls}>
            <Controls_1.Controls active={action === types_1.Actions.idle} handleNext={next} handlePrev={prev}/>
        </Render_1.Render>

    </section>;
};
exports.CircularCarousel = CircularCarousel;
