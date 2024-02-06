import { CSSProperties, FC, useEffect, useRef, lazy, useState, memo } from "react";
import style from "assets/css/CircularCarousel.module.css";
import classNames from "classnames";
import { motion } from "framer-motion";
import { Actions, CircularCarouselProps, HeightSetterProps } from "types";
import { Render } from "components/Render";
import { useCircularCarouselContext } from "context/useContext";
import { CustomSlideComponent } from "components/Slide/Slide";
import { v4 as uuidv4 } from 'uuid';
import { useWindowWidth } from "@react-hook/window-size/throttled";

const Controls = lazy(() => import("components/Controls"));
const Indicators = lazy(() => import("components/Indicators/Indicators"));


const HeightSetter: FC<HeightSetterProps> = ({ slideWidth, aspectRatio }) => <div
    style={{ width: slideWidth, aspectRatio: aspectRatio }}>
</div>;

export const CAROUSEL_INNER_CLASS = `c-inner-wrapper-${uuidv4()}`;

const CircularCarousel: FC<CircularCarouselProps> = ({
    slideComponent,
    className,
    styles,
    customControls,
    action,
    slideClassName,
    slideStyles,
    indicators = true,
    prevIcon,
    nextIcon
}) => {
    const windowWidth = useWindowWidth({ fps: 1 });
    const { slideWidth, slideGap, animationType, aspectRatio, handleNext,
        handlePrev, media, isDynamic, innerCarouselWidth, setInnerCarouselWidth } = useCircularCarouselContext();
    const [SlideComponent] = useState(() => memo(slideComponent ? slideComponent : CustomSlideComponent));
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (innerCarouselWidth) {
            const w = document.querySelector(`.${CAROUSEL_INNER_CLASS}`);
            if (w) return setInnerCarouselWidth(w.getBoundingClientRect().width)
        }
        if (isDynamic && ref.current) {
            setInnerCarouselWidth(ref.current.getBoundingClientRect().width)
        }
    }, [isDynamic, ref.current, windowWidth]);

    const _slideWidth = isDynamic && innerCarouselWidth ? ((innerCarouselWidth / 100 * (slideWidth > 100 ? 100 : slideWidth))) : slideWidth;

    if (!media) return null;

    const lastItemIndex = media?.positions?.length - 1;

    return <section
        style={{
            ...styles,
            "--slideWidth": `${slideGap}px`,
        } as CSSProperties}
        className={classNames(style.wrapper, className)}>
        <motion.div
            ref={ref}
            className={classNames(style.carouselInner, CAROUSEL_INNER_CLASS)}
            animate={{ position: "relative", overflow: "hidden" }}>
            <Render isTruthy={!isDynamic || isDynamic && innerCarouselWidth}>
                <>
                    <HeightSetter
                        aspectRatio={aspectRatio}
                        slideWidth={_slideWidth} />
                    {media.mediaPool.map((v, i) => {
                        const xPosition = (media.positions[i] * _slideWidth) + (media.positions[i] * slideGap);
                        const isLastItem = i === lastItemIndex;
                        const isFirstItem = i === 0;

                        const calcZIndex = isLastItem ? -1 : isFirstItem ? 1 : 2;

                        return (
                            <motion.div
                                className={classNames(style.slide, slideClassName)}
                                key={`carousel-item-${v.slideUUID}-${innerCarouselWidth}`}
                                style={Array.isArray(slideStyles) ? slideStyles[i] : {}}
                                initial={{
                                    width: _slideWidth,
                                    aspectRatio: aspectRatio
                                }}
                                animate={{
                                    zIndex: calcZIndex,
                                    x: `${xPosition}px`,
                                    opacity: isLastItem || isFirstItem ? 0 : 1
                                }}
                                transition={{
                                    type: animationType
                                }}>
                                <SlideComponent {...v} />
                                <motion.div
                                    animate={{
                                        width: slideGap,
                                        height: "100%",
                                        x: 0 - slideGap,
                                        position: "absolute"
                                    }}></motion.div>
                            </motion.div>
                        )
                    })}
                </>
            </Render>
        </motion.div>
        <Render isTruthy={indicators}>
            <Indicators />
        </Render>
        <Render isTruthy={!customControls}>
            <Controls
                prevIcon={prevIcon}
                nextIcon={nextIcon}
                active={action === Actions.idle}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
        </Render>

    </section>
};

export { CircularCarousel, CustomSlideComponent };