import { ControlProps } from "types";
import styles from "./CircularCarousel.module.css";
import { motion } from "framer-motion";
import { useDebouncedCallback } from "use-debounce";
import { Icon } from "@storybook/design-system";
import classNames from "classnames";

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
                <Icon icon="arrowleftalt" />
            </motion.button>
            <motion.button
                onClick={active ? () => debouncedHandleChange(handleNext) : undefined}>
                <Icon icon="arrowrightalt" />
            </motion.button>
        </div>
    )
};

export { Controls };