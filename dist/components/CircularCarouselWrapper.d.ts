import { PropsWithChildren } from "react";
import { CircularCarouselWrapperProps } from "../types";
import { ReactNode } from "react";
declare function CircularCarouselComponent<T>(props: PropsWithChildren<CircularCarouselWrapperProps<T>>): ReactNode;
declare function Carousel<T>(props: PropsWithChildren<CircularCarouselWrapperProps<T>>): ReactNode;
export { Carousel, CircularCarouselComponent };
