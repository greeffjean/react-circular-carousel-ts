# Circular/Infinite Carousel

### Features 

**Add your own Slide Component**
**Add your own Slide Controls**
**Add your own stylesheets**
**Enable/disable into indicators**
**Framer Motion Transitions**
**Hook exports**
**Conveniently configure your layout with props**
**On-change event handlers provided**
**Optimized animations with Framer Motion**
**Transition based control debounce**
**Set slide animation**

### Caveats 

This is unfortunately not a mobile friendly package.

### Overview

 - `CircularCarouselContextWrapper` is a `context` wrapper that wraps around the `Carousel`, in the event that you would like to use custom controls, you would simply set the value of the `customControls?` prop to `false`, and make use of the supplied `useCircularCarouselContext` hook that exposes `stateGetters and stateSetters` you will need to animate the `Carousel`.

 - `CircularCarouselWrapper` return our `Carousel` and initializes our `context` state with a `slideOffset` to be provided.

 - `CircularCarousel` is responsible for rendering and animating our slides, this components can also be used in isolation, just mimic what functionality is occurring in `CircularCarouselWrapper` as a tip.

  ### Accepted Props:
  **type CircularCarouselWrapperProps**

  `mediaPool`: Array of items to be displayed;
  `className?`: Provide a `className` you would like to give the carousel element;
  `styles?`: Provide custom css styles;
  `customControls?`: Display `Carousel` default controls?;
  `slideWidth?`: Provide the width of each slide;
  `transition?`: Set the transition time of the slide movement;
  `slideGap?`: Provide a slide gap in `px`;
  `carouselBg?`: Provide a carousel background, this prop sets only the `slideGap` ` background`;
  `slideComponent?`: Provide your own custom slide component;
  `slideOffset?`: Amount of slide's that will have a negative offset, minimum value of 2 is required for intended UX;


 **type CircularCarouselProps**🧮

  `...CircularCarouselWrapperProps`
  `handleNext`: Function that handles our click event;
  `handlePrev`: Function that handles our click event;
  `media`: Object that contains `mediaPool` & `positions` values;
  `action`: Current action state, controls the callback functions of our default control buttons, if === `Idle`, that means a UI transition is occurring and click events will be suspended for the this duration, duration === `transition` prop above;

___

### Layout 

    In order to ensure your carousel layout looks good, the developer needs to ensure at any given time the amount of images is sufficient, and in combination the size of each image is sufficient, the default slide offset is 2, in order of the carousel to display properly and appear infinite, we need to ensure our image size and image count is sufficient, the developer is responsible for ensuring his content and styles are adequate.

 **TS TIP**: 
    If you are using your own `CustomSlideComponent` and want to benefit from `TS type checking` use this snippet somewhere in the top level: 
       `const validateIncomingDataFn = (args: <T>) => args;`
       `const isDataTypeValid = validateIncomingDataFn(_data); // If there is a type mismatch our runtime-env will throw an error`

**Whats happening above** ? - 
1. `validateIncomingDataFn` accepts an `args` argument, **NB** that you set the correct type on `args` because...
2.  `TS` expects `typeof` `_data` to match type `<T>`( This is the type that the `Functional Component` => `slideComponent` will accept ).
3. If you are developing in `TS`, I recommend you follow this steps above, as once your  `mediaPool` gets passed to your  `slideComponent` as props, there is no type checking occurring, so you want to prevent any errors early!

4. Obviously the point is that you can pass in your own `types`, these two lines of code serves as a validation rule and if there is a type mismatch our runtime-env will throw an error

**Customize Tip**

`CircularCarouselWrapper` is optional, if you would like to customize this component, its key to remember that you need to wrap any of your own code, inside the `CircularCarouselContextWrapper` and make use of the hooks that is provided - `useCircularCarouselContext`, this feature is designed to be customizable therefore all you need is to be able to set and mutate the `context` properly.

**Code Examples**

**Deployed Examples**
