"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithDynamicSlideWidth = exports.WithCustomSlide = exports.WithCustomControls = exports.Default = void 0;
const CircularCarousel_1 = require("./CircularCarousel");
const data_1 = require("../data/data");
const CircularCarouselWrapper_1 = require("./CircularCarouselWrapper");
const useContext_1 = require("context/useContext");
const meta = {
    title: "CircularCarousel",
    component: CircularCarousel_1.CircularCarousel,
};
exports.default = meta;
const TILE_WIDTH = Math.floor(window.innerWidth * 0.3);
const CustomSlideComponent = (props) => {
    return (<div>
            <img src={props.avatar} alt="avatar for slide"/>
        </div>);
};
const CustomControls = () => {
    const { handleNext, handlePrev } = (0, useContext_1.useCircularCarouselContext)();
    return (<div>
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>);
};
exports.Default = {
    render: () => <CircularCarouselWrapper_1.CircularCarouselWrapper slideWidth={TILE_WIDTH} mediaPool={data_1.data} slideGap={50} onChange={(args) => console.log(args)}/>
};
exports.WithCustomControls = {
    render: () => <CircularCarouselWrapper_1.CircularCarouselWrapper customControls={true} mediaPool={data_1.data} slideWidth={TILE_WIDTH} slideGap={50}>
        <CustomControls />
    </CircularCarouselWrapper_1.CircularCarouselWrapper>
};
exports.WithCustomSlide = {
    render: () => <CircularCarouselWrapper_1.CircularCarouselWrapper mediaPool={data_1.custom} slideWidth={TILE_WIDTH} slideGap={50} slideComponent={CustomSlideComponent}/>
};
exports.WithDynamicSlideWidth = {
    render: () => <CircularCarouselWrapper_1.CircularCarouselWrapper mediaPool={data_1.custom} slideWidth={100} dynamicWidth={true} slideGap={50} slideComponent={CustomSlideComponent} aspectRatio='3/1'/>
};
