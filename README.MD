# Circular/Infinite React Carousel 🏆

#### Introducing a  production ready, content agnostic, strongly typed, cross device, highly optimized circular carousel for React 🧩.

#### Features

- Enjoy two slick carousel designs
- Provide your own slide components 
- Provide your own slide controls (Or use the default provided)
- Customize your carousel by extending your own styles and classNames
- Enable/disable carousel indicators
- Choose from a selection of Framer Motion Transitions
- Utilize on-change event handlers
- Enjoy optimized animations (Hardware acceleration) courtesy of Framer Motion
- Enjoy cross device compatibility ( click or swipe! )
- Enjoy window resize re-rendering support
- Benefit from comprehensive type checking during development
- Compatible in standard JS or TS environments

### Overview

- This package is simply a thin content agnostic wrapper that wraps around your slides, so that you can focus on creating content, while it handles the rest! 🏖️🥂 

### Props:

`type?: CarouselTypes`
- (optional) Choose a carousel design
- Export for type enum provided (See exports section)

`mediaPool: T[]`
- Collection of slide data

`className?: string`
- (optional) Classnames to be added to Carousel container

`styles?: CSSProperties`
- (optional) Styles to be added to Carousel container

`customControls?: boolean`
- (optional) Disable/enable default controls
- When using your own controls, you need to make use of the provided context hooks, see recipes below!

`slideWidth: number`
- (Not required by 3D carousel)
- Set width of slides
- When setting prop `dynamicWidth` = `true`, `slideWidth` becomes a % of the carousel's total width, PS there are fail-safes in place to prevent slides from going over 100%.


`slideGap?: number`
- (Not required by 3D carousel)
- (optional) Determines the gap between slides

`slideComponent: FC<T>`
- React component to be rendered as the slides, which receives `mediaPool` iterables props
- PS: `mediaPool` list items props schema needs to satisfy `slideComponent` props schema, strict type checking applies, todo for developer!

`slideClassName?: string`
- (optional) Add a class name to slides

`slideStyles?: CSSProperties[]`
- (optional) Styles to be added to slides 

`aspectRatio?: string`
- (optional) Set aspect ratio of your slides

`animationType?: FramerTransitions`
- (optional) Set Carousel motion transition type ( "tween" | "spring" )

`indicators?: boolean`
- (optional) Enable/disable indicators

`dynamicWidth?: boolean`
- (Not required by 3D carousel)
- (optional) Set width of slides as a percentage of the Carousel's width
- When setting prop `dynamicWidth` = `true`, `slideWidth` becomes a percentage of the carousel's total width.

`touch?: boolean`
- (optional) Hides built in controls

# Exports
- FramerTransitions
- CarouselTypes

# Recipes

#### With Custom Controls
```javascript
const TILE_WIDTH = Math.floor(window.innerWidth * 0.3);

const CustomControls = () => {
    const { handleNext, handlePrev } = useCircularCarouselContext();
    return (
        <div>
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
};

export const WithCustomControls: Story = {
    render: () => <Carousel
        customControls={true}
        mediaPool={data}
        slideWidth={TILE_WIDTH}
        slideGap={50}
        customControls={true}
    >
        <CustomControls />
    </Carousel>
};
```

#### Three Dimensional
```javascript
 const ThreeDimensional: Story = {
    render: () => <Carousel
        mediaPool={customData}
        slideWidth={TILE_WIDTH}
        slideGap={50}
        type="standard3D"
        slideComponent={CustomSlideComponent}
    />
};
```

#### With Custom Slide and Indicators Disabled
```javascript
const TILE_WIDTH = Math.floor(window.innerWidth * 0.3);

const CustomSlideComponent: FC<CustomSlideComponentProps> = (props) => {
    return (
        <div>
            <img
                src={props.avatar} alt="avatar for slide" />
        </div>
    )
};

export const WithCustomSlide: Story = {
    render: () => <Carousel
        mediaPool={customData}
        slideWidth={TILE_WIDTH}
        slideGap={50}
        slideComponent={CustomSlideComponent}
        indicators={false}
    />
};
```

#### With Dynamic Slide Width
```javascript
const CustomSlideComponent: FC<CustomSlideComponentProps> = (props) => {
    return (
        <div>
            <img
                src={props.avatar} alt="avatar for slide" />
        </div>
    )
};

export const WithDynamicSlideWidth: Story = {
    render: () => <Carousel
        mediaPool={customData}
        slideWidth={100}
        dynamicWidth={true}
        slideGap={50}
        slideComponent={CustomSlideComponent}
        aspectRatio='3/1'
    />
};
```

#### Custom Slide Component and Mobile
```javascript
const CustomSlideComponent: FC<CustomSlideComponentProps> = (props) => {
    return (
        <div>
            <img
                src={props.avatar} alt="avatar for slide" />
        </div>
    )
};

export const Mobile: Story = {
    render: () => 
        <Carousel
            mediaPool={customData}
            slideWidth={100}
            dynamicWidth={true}
            slideGap={10}
            slideComponent={CustomSlideComponent}
            aspectRatio='3/1'
            animationType={FramerTransitions.tween}
            touch
        />
};
```
#### Custom Slide Component and Mobile with Custom Icons
```javascript
const CustomSlideComponent: FC<CustomSlideComponentProps> = (props) => {
    return (
        <div>
            <img
                src={props.avatar} alt="avatar for slide" />
        </div>
    )
};

export const WithCustomIcons: Story = {
    render: () => <Carousel
        mediaPool={customData}
        slideWidth={100}
        dynamicWidth={true}
        slideGap={50}
        slideComponent={CustomSlideComponent}
        aspectRatio='3/1'
        nextIcon={<svg viewBox="0 0 1024 1024" width="20px" height="20px" aria-hidden="true" className="css-1itkjgz e82dnwa0"><path d="M916.266 483.792l-282.834-283.272c-15.594-15.65-40.92-15.692-56.568-0.1-15.648 15.594-15.694 40.92-0.1 56.568l214.838 215.040h-655.412c-22.092 0-40 17.908-40 40s17.908 40 40 40h655l-214.748 214.61c-15.64 15.602-15.672 40.928-0.070 56.568 7.814 7.834 18.066 11.752 28.32 11.75 10.22 0 20.442-3.892 28.25-11.68l283.242-282.93c15.632-15.596 15.67-40.91 0.082-56.554z"></path></svg>}
        prevIcon={<svg viewBox="0 0 1024 1024" width="20px" height="20px" aria-hidden="true" className="css-1itkjgz e82dnwa0"><path d="M107.854 539.924l282.834 283.272c15.594 15.65 40.92 15.692 56.568 0.1 15.648-15.594 15.694-40.92 0.1-56.568l-214.838-215.040h655.412c22.092 0 40-17.908 40-40s-17.908-40-40-40h-655l214.75-214.61c15.64-15.602 15.672-40.928 0.070-56.568-7.814-7.834-18.066-11.752-28.32-11.75-10.22 0-20.442 3.892-28.25 11.68l-283.242 282.93c-15.634 15.594-15.672 40.91-0.084 56.554z"></path></svg>}
    />
};
```

### Layout
In order to ensure your carousel layout looks good, the developer needs to ensure at any given time the amount of slides is sufficient; 
- TIP :moneybag: If your slide count is low, double or triple it with Javascript, and hide the indicators since your slide count will contain duplicates
- Space gets really tight on mobile, I do not recommend using our 3D carousel on mobile, as it implements a fixed slide sizing algorithm.

### Typescript SuperPowers
The props `mediaPool` and `slideComponent` are type coupled thanks to TS generics! If you are using this package with TS (recommended!), then you will notice that `mediaPool` list options are matched against `slideComponent` prop types 🎖️

**Deployed Examples**

- [Homepage](https://react-circular-carousel.web.app)

- [Storybook](https://react-circular-carousel-dev.vercel.app)

**Feel free to open an issue**

- [Here](https://github.com/greeffjean/react-circular-carousel-ts/issues)
