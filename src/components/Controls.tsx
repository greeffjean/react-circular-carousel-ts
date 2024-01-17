import { ControlProps } from "types";
import styles from "./CircularCarousel.module.css";
import { motion } from "framer-motion";
import { useDebouncedCallback } from "use-debounce";
import classNames from "classnames";
import leftArrow from "assets/svg/LeftArrow.svg";
import rightArrow from "assets/svg/RightArrow.svg";

const Controls = ({
    handleNext,
    handlePrev,
    active
}: ControlProps) => {

    const handleChange = (fn: () => void) => {
        fn();
    };

    const debouncedHandleChange = useDebouncedCallback(handleChange, 400);

    return (
        <div className={classNames(styles.controls, "controls-wrapper")}>
            <motion.button
                onClick={active ? () => debouncedHandleChange(handlePrev) : undefined}>
                <img src={leftArrow} alt="prev-arrow-control"/>
            </motion.button>
            <motion.button
                onClick={active ? () => debouncedHandleChange(handleNext) : undefined}>
                <img src={rightArrow} alt="next-arrow-control" />
            </motion.button>
        </div>
    )
};

export { Controls };