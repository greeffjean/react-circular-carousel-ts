import { ControlProps } from "types";
import styles from "assets/css/CircularCarousel.module.css";
import { motion } from "framer-motion";
import { useDebouncedCallback } from "use-debounce";
import classNames from "classnames";
import { DEFAULT_DEBOUNCE_VALUE } from "../constants";
import { Render } from "./Render";
import { FC, ReactElement } from "react";

const Controls: FC<ControlProps> = ({
    handleNext,
    handlePrev,
    active,
    nextIcon,
    prevIcon,
}) => {

    const handleChange = (fn: () => void) => {
        if (fn) fn();
    };

    const debouncedHandleChange = useDebouncedCallback(handleChange, DEFAULT_DEBOUNCE_VALUE);

    return (
        <div className={classNames(styles.controls, "controls-wrapper")}>
            <motion.button
                onClick={active ? () => debouncedHandleChange(handlePrev) : undefined}>
                <Render isTruthy={prevIcon}>
                    {prevIcon as ReactElement}
                </Render>
                <Render isTruthy={!prevIcon}>
                    <svg viewBox="0 0 1024 1024" width="20px" height="20px" aria-hidden="true" className="css-1itkjgz e82dnwa0"><path d="M257.93 511.976c0-10.236 3.902-20.47 11.71-28.282l344.098-344.158c15.622-15.624 40.946-15.624 56.57-0.006 15.622 15.622 15.624 40.948 0.004 56.568l-315.82 315.876 315.868 315.922c15.618 15.624 15.618 40.952-0.004 56.568-15.622 15.62-40.95 15.618-56.57-0.006l-344.146-344.202c-7.808-7.81-11.71-18.044-11.71-28.28z"></path></svg>
                </Render>
            </motion.button>
            <motion.button
                onClick={active ? () => debouncedHandleChange(handleNext) : undefined}>
                <Render isTruthy={nextIcon}>
                    {nextIcon as ReactElement}
                </Render>
                <Render isTruthy={!nextIcon}>
                    <svg viewBox="0 0 1024 1024" width="20px" height="20px" aria-hidden="true" className="css-1itkjgz e82dnwa0"><path d="M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z"></path></svg>
                </Render>
            </motion.button >
        </div>
    )
};

export default Controls;