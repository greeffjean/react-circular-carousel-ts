import type { Meta, StoryObj } from '@storybook/react';
import { CircularCarousel } from './CircularCarousel';
import { data, custom as customData } from '../data/data';
import { CircularCarouselWrapper } from './CircularCarouselWrapper';
import { useCircularCarouselContext } from 'context/useContext';
import { FC } from 'react';


const meta: Meta<typeof CircularCarousel> = {
    title: "CircularCarousel",
    component: CircularCarousel,
};
export default meta;

type Story = StoryObj<typeof CircularCarousel>;


const TILE_WIDTH = Math.floor(window.innerWidth * 0.3);

export type CustomSlideComponentProps = {
    title: string;
    phrase: string;
    avatar: string;
};

const CustomSlideComponent: FC<CustomSlideComponentProps> = (props) => {
    return (
        <div>
            <img src={props.avatar} alt="avatar for slide" />
        </div>
    )
};

const CustomControls = () => {
    const { handleNext, handlePrev } = useCircularCarouselContext();
    return (
        <div>
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
};

export const Default: Story = {
    render: () =>
        <CircularCarouselWrapper
            slideWidth={TILE_WIDTH}
            mediaPool={data}
            slideGap={50}
            onChange={(args) => console.log(args)}
        />
};

export const WithCustomControls: Story = {
    render: () => <CircularCarouselWrapper
        customControls={true}
        mediaPool={data}
        slideWidth={TILE_WIDTH}
        slideGap={50}
    >
        <CustomControls />
    </CircularCarouselWrapper>
};

export const WithCustomSlide: Story = {
    render: () => <CircularCarouselWrapper
        mediaPool={customData}
        slideWidth={TILE_WIDTH}
        slideGap={50}
        slideComponent={CustomSlideComponent}
    />
};

export const WithDynamicSlideWidth: Story = {
    render: () => <CircularCarouselWrapper
        mediaPool={customData}
        slideWidth={100}
        dynamicWidth={true}
        slideGap={50}
        slideComponent={CustomSlideComponent}
        aspectRatio='3/1'
    />
};







