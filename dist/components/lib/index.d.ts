import { SetStateAction } from "react";
import { Maybe } from "types";
type HandleTouchEndProps = {
    touchStart: Maybe<number>;
    handleNext: () => void;
    handlePrev: () => void;
    setTouchStart: React.Dispatch<SetStateAction<Maybe<number>>>;
};
/**
 * Touch handler for moving slides along the X-axis
 * 1. Determine if swipe is left or right
 *
 * @param e Touch Event - TouchEvent
 * @param touchStart variable - Maybe<number>
 * @param setTouchStart stateSetter - React.Dispatch<SetStateAction<Maybe<number>>>
 */
declare const handleTouchMove: (e: TouchEvent, touchStart: Maybe<number>, setTouchStart: React.Dispatch<SetStateAction<Maybe<number>>>) => void;
/**
 * Touch handler for moving slides along the X-axis\
 * @param e Touch event = TouchEvent
 * @param object - HandleTouchEndProps
 */
declare const handleTouchEnd: (e: TouchEvent, { touchStart, handleNext, handlePrev, setTouchStart }: HandleTouchEndProps) => void;
export { handleTouchMove, handleTouchEnd };
