import { CSSProperties, Dispatch, FC, ReactElement, ReactNode, SetStateAction } from "react";
type Maybe<T> = T | undefined;
export declare enum Actions {
    "previous" = "previous",
    "next" = "next",
    "idle" = "idle"
}
export declare enum FramerTransitions {
    tween = "tween",
    spring = "spring"
}
export declare enum CarouselTypes {
    STANDARD_2D = "standard",
    STANDARD_3D = "standard3D"
}
type Children = ReactNode;
type MediaProps = {
    mediaPool: {
        slideUUID: string;
        [key: string]: any;
    }[];
    positions: number[];
    activeIdx: number;
};
type CircularCarouseContextProps = {
    media: MediaProps;
    action: Actions;
    setAction: Dispatch<SetStateAction<Actions>>;
    setMedia: Dispatch<SetStateAction<MediaProps>>;
    activeIdx: number;
    animationType: FramerTransitions;
    slideWidth: number;
    slideGap: number;
    aspectRatio: `${string}/${string}`;
    handleNext: () => void;
    handlePrev: () => void;
    innerCarouselWidth: number | undefined;
    setInnerCarouselWidth: Dispatch<SetStateAction<number>>;
    isDynamic: boolean;
};
type ControlInitProps = {
    nextIcon?: ReactElement;
    prevIcon?: ReactElement;
    onChange?: (activeIdx: any) => void;
};
type CarouselBaseProps<T> = {
    disable?: boolean;
    mediaPool: T[];
    className?: string;
    styles?: CSSProperties;
    customControls?: boolean;
    slideComponent: FC<T>;
    slideClassName?: string;
    slideStyles?: CSSProperties;
    aspectRatio?: `${string}/${string}`;
    animationType?: FramerTransitions;
    indicators?: boolean;
    touch?: boolean;
};
type CarouselTypeDict<T> = {
    [CarouselTypes.STANDARD_2D]: {
        type: CarouselTypes.STANDARD_2D;
        slideWidth: number;
        dynamicWidth?: boolean;
        slideGap?: number;
    } & CarouselBaseProps<T>;
    [CarouselTypes.STANDARD_3D]: CarouselBaseProps<T> & {
        type: CarouselTypes.STANDARD_3D;
    };
};
type CircularCarouselWrapperProps<T> = ControlInitProps & CarouselTypeDict<T>[CarouselTypes];
type ThreeDimensionalCircularCarouselWrapperProps<T> = Omit<CircularCarouselWrapperProps<T>, "slideWidth" | "dynamicWidth" | "slideGap"> & ControlInitProps;
type CircularCarouselProps<T> = {
    media: MediaProps;
    action: Actions;
} & CircularCarouselWrapperProps<T>;
type ControlProps = {
    disable?: boolean;
    handleSelect?: () => void;
    handleNext: () => void;
    handlePrev: () => void;
    active: boolean;
    cb?: () => void;
    nextIcon?: ReactElement;
    prevIcon?: ReactElement;
};
type CircularCarouselContextWrapperProps<T> = CircularCarouselWrapperProps<T>;
type TouchStateProps = {
    touchXCurrent: Maybe<number>;
    touchXStart: Maybe<number>;
};
type HeightSetterProps = {
    slideWidth: CarouselTypeDict<any>[CarouselTypes.STANDARD_2D]["slideWidth"];
    aspectRatio: CircularCarouselProps<any>["aspectRatio"];
};
export type { ControlProps, CircularCarouselProps, CircularCarouselWrapperProps, ThreeDimensionalCircularCarouselWrapperProps, MediaProps, CircularCarouseContextProps, Children, CircularCarouselContextWrapperProps, HeightSetterProps, TouchStateProps, Maybe, CarouselTypeDict };
