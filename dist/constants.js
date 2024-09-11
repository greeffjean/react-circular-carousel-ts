import { CarouselTypes as TCarouselTypes, FramerTransitions as TFramerTransitions, } from "./types";
const DEFAULT_DEBOUNCE_VALUE = 300;
const Z_INDEX_LIB = {
    0: 0,
    1: 0.8,
    2: 0.9,
    3: 1,
    4: 0.9,
    5: 0.8,
    6: 0,
};
// Configuration Keys
const FramerTransitions = {
    TWEEN: TFramerTransitions.tween,
    SPRING: TFramerTransitions.spring,
};
const CarouselTypes = {
    STANDARD_2D: TCarouselTypes.STANDARD_2D,
    STANDARD_3D: TCarouselTypes.STANDARD_3D,
};
export { DEFAULT_DEBOUNCE_VALUE, Z_INDEX_LIB, FramerTransitions, CarouselTypes, };
