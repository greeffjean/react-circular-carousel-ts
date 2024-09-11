import { PropsWithChildren, ReactNode } from "react";
import { CircularCarouseContextProps, CircularCarouselContextWrapperProps } from "../types";
declare const Context: import("react").Context<CircularCarouseContextProps>;
export declare const ANIMATION_DURATION = 0.4;
declare function CircularCarouselContextWrapper<T>(props: PropsWithChildren<CircularCarouselContextWrapperProps<T>>): ReactNode;
export { Context, CircularCarouselContextWrapper };
