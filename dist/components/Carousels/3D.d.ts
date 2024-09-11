import { PropsWithChildren, ReactNode } from "react";
import { Actions, CarouselTypeDict, ControlProps } from "../../types";
type Props<T> = CarouselTypeDict<T>["standard3D"] & ControlProps & {
    action: Actions;
};
declare function CircularCarousel<T>(props: PropsWithChildren<Props<T>>): ReactNode;
export { CircularCarousel };
