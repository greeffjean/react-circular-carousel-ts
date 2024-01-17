import { FC, createContext, useEffect, useState } from "react";
import { Actions, CircularCarouseContextProps, CircularCarouselContextWrapperProps, FramerTransitions, MediaProps } from "types";
import { v4 as uuidv4 } from 'uuid';

const Context = createContext({} as CircularCarouseContextProps);

const SLIDE_OFFSET = 2;
const ASPECT_RATIO = "1/1";

const CircularCarouselContextWrapper: FC<CircularCarouselContextWrapperProps> = ({
    children,
    mediaPool,
    slideOffset = SLIDE_OFFSET,
    onChange,
    slideWidth,
    ...rest }) => {
    const [media, setMedia] = useState<MediaProps>(() => ({
        positions: Array.from(Array(mediaPool.length).keys()).map(pos => pos - slideOffset),
        mediaPool: mediaPool.map((item: any) => ({ ...item, slideUUID: uuidv4() })),
        activeIdx: SLIDE_OFFSET
    }));
    const [action, setAction] = useState<Actions>(Actions.idle);
    const [innerCarouselWidth, setInnerCarouselWidth] = useState<number>(0);

    useEffect(() => {
        if (onChange) onChange(mediaPool[media.activeIdx])
    }, [media.activeIdx]);

    useEffect(() => {
        if (action === Actions.next) {
            const newPositions = media.positions.slice(1);
            const newMediaPool = media.mediaPool.slice(1);

            const newIndex = media.positions[lastItemIndex] + 1;
            const extractItem = media.mediaPool.shift();

            newPositions.push(newIndex);
            if (extractItem) newMediaPool.push(extractItem);

            setMedia({
                mediaPool: newMediaPool,
                positions: newPositions,
                activeIdx: handleSetIdx(media.activeIdx, Actions.next) as number
            });
            setAction(Actions.idle);
        }

        if (action === Actions.previous) {
            const newPositions = media.positions.slice(0, -1);
            const newMediaPool = media.mediaPool.slice(0, -1);

            const newIndex = 0 - slideOffset;
            const extractItem = media.mediaPool.pop();

            newPositions.unshift(newIndex);
            if (extractItem) newMediaPool.unshift(extractItem);

            setMedia({
                mediaPool: newMediaPool,
                positions: newPositions,
                activeIdx: handleSetIdx(media.activeIdx, Actions.previous) as number
            });
            setAction(Actions.idle);
        }
    }, [action]);

    const lastItemIndex = media.positions.length - 1;

    const handleSetIdx = (activeIdx: number, action: Actions) => {
        if (action === Actions.next) {
            if (activeIdx === mediaPool.length - 1) return 0;
            else return activeIdx + 1;
        }
        if (action === Actions.previous) {
            if (activeIdx === 0) return mediaPool.length - 1;
            else return activeIdx - 1;
        }
    };

    const handleNext = () => {
        setMedia({
            ...media,
            positions: media.positions.map(p => p - 1)
        });
        setAction(Actions.next);
    };

    const handlePrev = () => {
        setMedia({
            ...media,
            positions: media.positions.map(p => p + 1)
        });
        setAction(Actions.previous);
    };


    return (
        <Context.Provider value={{
            media,
            setMedia,
            action,
            setAction,
            activeIdx: media.activeIdx,
            animationType: rest.animationType ?? FramerTransitions.spring,
            slideWidth,
            slideGap: rest.slideGap ?? 20,
            aspectRatio: rest.aspectRatio ?? ASPECT_RATIO,
            handleNext,
            handlePrev,
            innerCarouselWidth,
            setInnerCarouselWidth,
            isDynamic: rest.dynamicWidth ?? false
        }}>
            {children}
        </Context.Provider>
    )
};

export { Context, CircularCarouselContextWrapper };