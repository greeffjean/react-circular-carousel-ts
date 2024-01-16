import { FC, PropsWithChildren } from "react";
import { CircularCarouseContextProps, CircularCarouselWrapperProps } from "types";
import { CircularCarousel } from "components/CircularCarousel";
import { useCircularCarouselContext } from "context/useContext";
import { CircularCarouselContextWrapper } from "context/context";


const CircularCarouselComponent: FC<CircularCarouselWrapperProps> = (props) => {
    const { action, media } = useCircularCarouselContext() as CircularCarouseContextProps;

    return <CircularCarousel
        {...props}
        media={media}
        action={action}
    />
};

const CircularCarouselWrapper: FC<PropsWithChildren<CircularCarouselWrapperProps>> = (props) => {
    return <CircularCarouselContextWrapper {...props}>
        <>
            <CircularCarouselComponent {...props} />
            {props.children}
        </>
    </CircularCarouselContextWrapper>
};

export { CircularCarouselWrapper, CircularCarouselComponent };