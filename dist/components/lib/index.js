/**
 * Get swipe direction
 * @param touchState - GetDirectionReturn
 */
const getDirection = (touchState) => {
    const { touchStart, clientX } = touchState;
    if (touchStart && clientX)
        return {
            next: touchStart > clientX,
            previous: touchStart < clientX
        };
    return { next: undefined, previous: undefined };
};
/**
 * Touch handler for moving slides along the X-axis
 * 1. Determine if swipe is left or right
 *
 * @param e Touch Event - TouchEvent
 * @param touchStart variable - Maybe<number>
 * @param setTouchStart stateSetter - React.Dispatch<SetStateAction<Maybe<number>>>
 */
const handleTouchMove = (e, touchStart, setTouchStart) => {
    const clientX = e.changedTouches[0].clientX;
    if (!touchStart) {
        setTouchStart(clientX);
    }
};
/**
 * Touch handler for moving slides along the X-axis\
 * @param e Touch event = TouchEvent
 * @param object - HandleTouchEndProps
 */
const handleTouchEnd = (e, { touchStart, handleNext, handlePrev, setTouchStart }) => {
    const clientX = e.changedTouches[0].clientX;
    const { next, previous } = getDirection({ touchStart, clientX });
    if (next)
        handleNext();
    if (previous)
        handlePrev();
    setTouchStart(undefined);
};
export { handleTouchMove, handleTouchEnd };
