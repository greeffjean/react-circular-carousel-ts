"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularCarouselContextWrapper = exports.Context = void 0;
const react_1 = require("react");
const types_1 = require("types");
const react_uuid_1 = __importDefault(require("react-uuid"));
const Context = (0, react_1.createContext)({});
exports.Context = Context;
const SLIDE_OFFSET = 2;
const ASPECT_RATIO = "1/1";
const CircularCarouselContextWrapper = (_a) => {
    var _b, _c, _d, _e;
    var { children, mediaPool, slideOffset = SLIDE_OFFSET, onChange, slideWidth } = _a, rest = __rest(_a, ["children", "mediaPool", "slideOffset", "onChange", "slideWidth"]);
    const [media, setMedia] = (0, react_1.useState)(() => ({
        positions: Array.from(Array(mediaPool.length).keys()).map(pos => pos - slideOffset),
        mediaPool: mediaPool.map(item => (Object.assign(Object.assign({}, item), { slideUUID: (0, react_uuid_1.default)() }))),
        activeIdx: SLIDE_OFFSET
    }));
    const [action, setAction] = (0, react_1.useState)(types_1.Actions.idle);
    const [innerCarouselWidth, setInnerCarouselWidth] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        if (onChange)
            onChange(mediaPool[media.activeIdx]);
    }, [media.activeIdx]);
    (0, react_1.useEffect)(() => {
        if (action === types_1.Actions.next) {
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
                activeIdx: handleSetIdx(media.activeIdx, types_1.Actions.next)
            });
            setAction(types_1.Actions.idle);
        }
        if (action === types_1.Actions.previous) {
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
                activeIdx: handleSetIdx(media.activeIdx, types_1.Actions.previous)
            });
            setAction(types_1.Actions.idle);
        }
    }, [action]);
    const lastItemIndex = media.positions.length - 1;
    const handleSetIdx = (activeIdx, action) => {
        if (action === types_1.Actions.next) {
            if (activeIdx === mediaPool.length - 1)
                return 0;
            else
                return activeIdx + 1;
        }
        if (action === types_1.Actions.previous) {
            if (activeIdx === 0)
                return mediaPool.length - 1;
            else
                return activeIdx - 1;
        }
    };
    const handleNext = () => {
        setMedia(Object.assign(Object.assign({}, media), { positions: media.positions.map(p => p - 1) }));
        setAction(types_1.Actions.next);
    };
    const handlePrev = () => {
        setMedia(Object.assign(Object.assign({}, media), { positions: media.positions.map(p => p + 1) }));
        setAction(types_1.Actions.previous);
    };
    return (<Context.Provider value={{
            media,
            setMedia,
            action,
            setAction,
            activeIdx: media.activeIdx,
            animationType: (_b = rest.animationType) !== null && _b !== void 0 ? _b : types_1.FramerTransitions.spring,
            slideWidth,
            slideGap: (_c = rest.slideGap) !== null && _c !== void 0 ? _c : 20,
            aspectRatio: (_d = rest.aspectRatio) !== null && _d !== void 0 ? _d : ASPECT_RATIO,
            handleNext,
            handlePrev,
            innerCarouselWidth,
            setInnerCarouselWidth,
            isDynamic: (_e = rest.dynamicWidth) !== null && _e !== void 0 ? _e : false
        }}>
            {children}
        </Context.Provider>);
};
exports.CircularCarouselContextWrapper = CircularCarouselContextWrapper;
