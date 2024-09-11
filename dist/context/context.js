var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useEffect, useState } from "react";
import { Actions, CarouselTypes, FramerTransitions } from "../types";
import { v4 as uuidv4 } from 'uuid';
import { useDebouncedCallback } from "use-debounce";
import { DEFAULT_DEBOUNCE_VALUE } from "../constants";
const Context = createContext({});
const SLIDE_OFFSET = [2, 3];
const ASPECT_RATIO = "1/1";
export const ANIMATION_DURATION = 0.4;
function CircularCarouselContextWrapper(props) {
    var _a, _b, _c;
    const _d = props, { children, mediaPool, onChange, slideWidth, dynamicWidth } = _d, rest = __rest(_d, ["children", "mediaPool", "onChange", "slideWidth", "dynamicWidth"]);
    const [slideUUIDIndex,] = useState(() => mediaPool.map(() => uuidv4()));
    const [slideOffset,] = useState(() => mediaPool.length < 6 ? 1 : (props.type === CarouselTypes.STANDARD_2D ? SLIDE_OFFSET[0] : SLIDE_OFFSET[1]));
    const [media, setMedia] = useState(() => {
        const offset = mediaPool.slice(mediaPool.length - slideOffset);
        const poolPartial = mediaPool.slice(0, mediaPool.length - slideOffset);
        const result = offset.concat(poolPartial).map((item, index) => (Object.assign(Object.assign({}, item), { slideUUID: slideUUIDIndex[index] })));
        return {
            positions: Array.from(Array(mediaPool.length).keys()).map(pos => pos - slideOffset),
            mediaPool: result,
            activeIdx: 0
        };
    });
    const [action, setAction] = useState(Actions.idle);
    const [innerCarouselWidth, setInnerCarouselWidth] = useState(0);
    useEffect(() => {
        if (onChange)
            onChange(mediaPool[media.activeIdx]);
    }, [media.activeIdx]);
    useEffect(() => {
        if (action === Actions.next) {
            const newPositions = media.positions.slice(1);
            const newMediaPool = media.mediaPool.slice(1);
            const newIndex = media.positions[lastItemIndex] + 1;
            const extractItem = media.mediaPool.shift();
            newPositions.push(newIndex);
            if (extractItem)
                newMediaPool.push(extractItem);
            setMedia({
                mediaPool: newMediaPool,
                positions: newPositions,
                activeIdx: handleSetIdx(media.activeIdx, Actions.next)
            });
            setTimeout(() => {
                setAction(Actions.idle);
            }, ANIMATION_DURATION);
        }
        if (action === Actions.previous) {
            const newPositions = media.positions.slice(0, -1);
            const newMediaPool = media.mediaPool.slice(0, -1);
            const newIndex = 0 - slideOffset;
            const extractItem = media.mediaPool.pop();
            newPositions.unshift(newIndex);
            if (extractItem)
                newMediaPool.unshift(extractItem);
            setMedia({
                mediaPool: newMediaPool,
                positions: newPositions,
                activeIdx: handleSetIdx(media.activeIdx, Actions.previous)
            });
            setTimeout(() => {
                setAction(Actions.idle);
            }, ANIMATION_DURATION);
        }
    }, [action]);
    const lastItemIndex = media.positions.length - 1;
    const handleSetIdx = (activeIdx, action) => {
        if (action === Actions.next) {
            if (activeIdx === mediaPool.length - 1)
                return 0;
            else
                return activeIdx + 1;
        }
        if (action === Actions.previous) {
            if (activeIdx === 0)
                return mediaPool.length - 1;
            else
                return activeIdx - 1;
        }
    };
    const handleNextFn = () => {
        if (action === Actions.idle) {
            setMedia(Object.assign(Object.assign({}, media), { positions: media.positions.map(p => p - 1) }));
            setAction(Actions.next);
        }
    };
    const handlePrevFn = () => {
        if (action === Actions.idle) {
            setMedia(Object.assign(Object.assign({}, media), { positions: media.positions.map(p => p + 1) }));
            setAction(Actions.previous);
        }
    };
    const handleNext = useDebouncedCallback(handleNextFn, DEFAULT_DEBOUNCE_VALUE);
    const handlePrev = useDebouncedCallback(handlePrevFn, DEFAULT_DEBOUNCE_VALUE);
    return (_jsx(Context.Provider, { value: {
            media,
            setMedia,
            action,
            setAction,
            activeIdx: media.activeIdx,
            animationType: (_a = rest.animationType) !== null && _a !== void 0 ? _a : FramerTransitions.spring,
            slideWidth,
            slideGap: (_b = rest.slideGap) !== null && _b !== void 0 ? _b : 20,
            aspectRatio: (_c = rest.aspectRatio) !== null && _c !== void 0 ? _c : ASPECT_RATIO,
            handleNext,
            handlePrev,
            innerCarouselWidth,
            setInnerCarouselWidth,
            isDynamic: dynamicWidth !== null && dynamicWidth !== void 0 ? dynamicWidth : false,
        }, children: children }));
}
export { Context, CircularCarouselContextWrapper };
