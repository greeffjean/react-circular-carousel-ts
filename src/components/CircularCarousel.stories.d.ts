import type { Meta, StoryObj } from '@storybook/react';
import { CircularCarousel } from './CircularCarousel';
declare const meta: Meta<typeof CircularCarousel>;
export default meta;
type Story = StoryObj<typeof CircularCarousel>;
export type CustomSlideComponentProps = {
    title: string;
    phrase: string;
    avatar: string;
};
export declare const Default: Story;
export declare const WithCustomControls: Story;
export declare const WithCustomSlide: Story;
export declare const WithDynamicSlideWidth: Story;
