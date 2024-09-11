import { CarouselTypes as TCarouselTypes, FramerTransitions as TFramerTransitions } from "./types";
declare const DEFAULT_DEBOUNCE_VALUE = 300;
declare const Z_INDEX_LIB: Record<number, number>;
declare const FramerTransitions: {
    TWEEN: TFramerTransitions;
    SPRING: TFramerTransitions;
};
declare const CarouselTypes: {
    STANDARD_2D: TCarouselTypes.STANDARD_2D;
    STANDARD_3D: TCarouselTypes.STANDARD_3D;
};
export { DEFAULT_DEBOUNCE_VALUE, Z_INDEX_LIB, FramerTransitions, CarouselTypes, };
