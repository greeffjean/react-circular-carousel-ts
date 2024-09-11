import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { CarouselTypes } from "../types";
import { CircularCarousel as Standard3D } from "./Carousels/3D";
import { CircularCarousel as Standard } from "./Carousels/Standard";
import { useCircularCarouselContext } from "../context/useContext";
import { CircularCarouselContextWrapper } from "../context/context";
function CircularCarouselComponent(props) {
    const { action, media } = useCircularCarouselContext();
    const Type = props.type === CarouselTypes.STANDARD_3D ? Standard3D : Standard;
    return _jsx(Type, Object.assign({}, props, { media: media, action: action }));
}
function Carousel(props) {
    return _jsx(CircularCarouselContextWrapper, Object.assign({}, props, { children: _jsxs(_Fragment, { children: [_jsx(CircularCarouselComponent, Object.assign({}, props)), props.children] }) }));
}
export { Carousel, CircularCarouselComponent };
