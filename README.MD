<h1>Strongly typed circular carousel for React </h1> <button style="background: coral; border: none; border-radius: 10px; padding: 5px 10px;">
<a style="color: white;" href="https://buymeacoffee.com/jean_greeff">
Buy me a coffee
</a></button>
</br>
</br>
<span>Introducing a production ready, content agnostic, strongly typed, cross device, highly optimized circular carousel for React 🧩.</span>

---
#### Table of contents

- :dart: Installation
- :dart: Features
- :dart: Overview
- :dart: Demo
- :dart: Props
- :dart: Exports
- :dart: Framework Usage - (SSR)
- :dart: Compatibility
- :dart: Recipes
- :dart: Layout
- :dart: Typescript SuperPowers
- :dart: Open an issue
- :dart: Contact/About author

---

### Installation

- `npm` - `npm i react-circular-carousel-ts`
- `yarn` - `yarn add react-circular-carousel-ts`

---

#### Features

- :star: Offering 2 and 3 dimensional designs
- :star: Configure your carousel look and feel with a range of built in props
- :star: Provide your own slide components
- :star: Customize your carousel by extending your own styles and classNames
- :star: Choose from a selection of Framer Motion Transitions
- :star: Utilize on-change event handlers
- :star: Enjoy optimized animations (Hardware acceleration) courtesy of Framer Motion
- :star: Enjoy cross device compatibility ( click or swipe! )
- :star: Enjoy window resize re-rendering support
- :star: Benefit from comprehensive type checking during development, get type safety on your content!
- :star: Compatible in standard JS and TS environments
- :star: Offering throttled movement for UX consistency

---

### Overview

:trophy: This package is simply a thin content agnostic wrapper that wraps around your slides, so that you can focus on creating content, while it handles the rest! 🏖️🥂

---

### See a Demo

- [Homepage](https://react-circular-carousel.web.app)

- [Storybook](https://react-circular-carousel-sb.web.app/?path=/story/circularcarousel-standard--default)

---

### Props

<table>
<thead>
<th>Property</th>
<th>Type</th>
<th>Optional</th>
<th>Default Value</th>
<th>Description</th>
</thead>

<tbody>
<tr>
<td>type</td>
<td>CarouselTypes | string
</td>
<td>false</td>
<td>N/A</td>
<td> 
<ul>
<li>Choose a carousel design</li>
<li><a href="#Exports">See exports section !</a></ul>
</td>
</tr>

<tr>
<td>mediaPool</td>
<td>T[]</td>
<td>false</td>
<td>N/A</td>
<td>
<ul>
<li>Collection of slide data
</li>
<li>
Generic argument type checked against <strong>slideComponent</strong> generic argument
</li>
</ul>
</td>
</tr>

<tr>
<td>slideComponent</td>
<td>React.FC<span><</span>T></td>
<td>false</td>
<td>N/A</td>
<td>
<ul>
<li>
 React function component to be rendered as a slide
</li>
<li>
<strong>mediaPool</strong> iterable objects will be passed as props to slideComponent</li>
<li>
Generic argument type checked against <strong>mediaPool</strong> generic argument
</li>
</ul>
</td>
</tr>

<tr>
<td>className</td>
<td>string</td>
<td>true</td>
<td>N/A</td>
<td>Classnames to be added to carousel container</td>
</tr>

<tr>
<td>styles</td>
<td>React.CSSProperties</td>
<td>true</td>
<td>N/A</td>
<td>Styles to be added to carousel container</td>
</tr>
<tr>

<td>customControls</td>
<td>boolean</td>
<td>true</td>
<td>N/A</td>
<td>
<ul>
<li>
When using your own controls, you need to make use of the provided context hooks, see <a href="#Recipes">recipes</a> below!
</li>
<li>
 Disable/enable default controls
</li>
<ul>
</td>
</tr>

<tr>
<td>slideWidth</td>
<td>number</td>
<td>
<ul>
<li><strong>CarouselTypes.STANDARD_2D</strong> required</li>
<li><strong>CarouselTypes.STANDARD_3D</strong> not required</li>
</ul>
</td>
<td>N/A</td>
<td>
<ul>
<li>
 Set width of slides
</li>
<li>
 When setting prop <strong>dynamicWidth</strong> = true, <strong>slideWidth</strong> becomes a % of the carousel's total width 
</li>
<li>
There are fail-safes in place to prevent slides from going over 100%
</li>
</ul>
</td>
</tr>
<tr>
<td>slideGap</td>
<td>number</td>
<td>
<ul>
<li><strong>CarouselTypes.STANDARD_2D</strong> required</li>
<li><strong>CarouselTypes.STANDARD_3D</strong> not required</li>
</ul>
</td>
<td>20px</td>
<td>
<ul>
<li>
Determines the gap between slides
</li>
<li>
<strong>CarouselTypes.STANDARD_3D</strong> uses a fixed gap value</li>
</ul>
</td>
</tr>

<tr>
<td>slideClassName</td>
<td>string</td>
<td>true</td>
<td>N/A</td>
<td>
Add a class name to slides
</td>
</tr>

<tr>
<td>slideStyles</td>
<td>React.CSSProperties</td>
<td>true</td>
<td>N/A</td>
<td>
Styles to be added to slides
</td>
</tr>

<tr>
<td>aspectRatio</td>
<td>string</td>
<td>true</td>
<td>1/1</td>
<td>
Set aspect ratio of your slides
</td>
</tr>

<tr>
<td>animationType</td>
<td>
FramerTransitions | string
</td>
<td>true</td>
<td>FramerTransitions.spring | "spring"</td>
<td>
<ul>
<li>Set Carousel motion transition type 
</li>
<li><a href="#Exports">See exports section !</a>
</li>
</ul>
</td>
</tr>

<tr>
<td>indicators</td>
<td>boolean</td>
<td>true</td>
<td>true</td>
<td>
Enable/disable indicators
</td>
</tr>

<tr>
<td>dynamicWidth</td>
<td>boolean</td>
<td>true</td>
<td>false</td>
<td>
<ul>
<li>
Not compatible with <strong>CarouselTypes.STANDARD_3D</strong>
</li>
<li>
Set width of slides as a percentage of the carousel's width
</li>
<li>
When setting prop <strong>dynamicWidth</strong> = true, <strong>slideWidth</strong> becomes a percentage of the carousel's total width.
</li>
</ul>
</td>
</tr>

<tr>
<td>touch</td>
<td>boolean</td>
<td>true</td>
<td>false</td>
<td>
<ul>
<li>
 <strong>Only</strong> hides built in controls when enabled
</li>
<li>
Slides are always navigable by touch event - as of this iteration only touch events on touch devices are supported.
</li>
</ul>
</td>
</tr>
</tbody>

</table>

---

<h2 id="Exports">Exports</h2>

### FramerTransitions

```
export enum FramerTransitions {
  tween = "tween",
  spring = "spring",
}

// For standard JS environments simply use the string values eg ( "tween" | "spring" )
```

```
import { FramerTransitions } from "react-circular-carousel-ts/types";
```

### CarouselTypes

```
export enum CarouselTypes {
  STANDARD_2D = "standard",
  STANDARD_3D = "standard3D",
}

// For standard JS environments simply use the string values eg ( "standard" | "standard3D" )
```

```
import { CarouselTypes } from "react-circular-carousel-ts/types";
```

### useCircularCarouselContext

```
type CircularCarouseContextProps = {
  media: MediaProps;
  action: Actions;
  setAction: Dispatch<SetStateAction<Actions>>;
  setMedia: Dispatch<SetStateAction<MediaProps>>;
  activeIdx: number;
  animationType: FramerTransitions;
  slideWidth: number;
  slideGap: number;
  aspectRatio: `${string}/${string}`;
  handleNext: () => void;
  handlePrev: () => void;
  innerCarouselWidth: number | undefined;
  setInnerCarouselWidth: Dispatch<SetStateAction<number>>;
  isDynamic: boolean;
};
```

```
import { useCircularCarouselContext } from "react-circular-carousel-ts";
```

### Carousel

```
function CircularCarouselComponent<T>(props: PropsWithChildren<CircularCarouselWrapperProps<T>>): ReactNode
```

```
import { Carousel } from "react-circular-carousel-ts";
```

---

# Context

With `useCircularCarouselContext` you can:

- Assign movement control functions to your custom controls
- Track the active slide id, great to use when you want to render your own indicators
- For examples please see the <a href="#Recipes">Recipes section</a>

```
import { useCircularCarouselContext } from "react-circular-carousel-ts";

```

---

# Framework Usage

### Next.js
`In future iterations there will be SSR compatibility`

```
// Your page
import dynamic from 'next/dynamic'

const Carousel = dynamic(() => import('<pathToCarousel>'), {
    ssr: false
})

export default function Home() {
    return (
        <main>
            <Carousel />
        </main>
    );
}

```

Create a carousel module - NB add <strong>"use client"</strong> at the top

```
"use client"
// omitted imports for brevity

// omitted code for brevity

export default function DefaultCarousel() {
    return (
        <main className={styles.main}>
            <div style={{ width: "100%" }}>
                <Carousel
                    type={CarouselTypes.STANDARD_3D}
                    slideComponent={CustomSlideComponent}
                    mediaPool={custom}
                    slideClassName="my-slide"
                    aspectRatio="2/1"
                    animationType={FramerTransitions.TWEEN}
                >
                </Carousel>
             </div>
        </main>
    );
}
```

### create-react-app projects

Not supported currently, unlikely to support this project environment as its deprecated.

---

# Known Compatibility

**Package lists the following peerDependencies:**

```
"peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0"
  }
```

**NB - Compatibility includes but is not limited to**

- `react: ^18.0.0`
- `webpack: ^5.91.0`
- `storybook: ^8.1.3`
- `@types/react: ^18.0.0`
- `@types/react-dom: ^18.0.0`
- `typescript: ^5.0.0`
- `@types/node: ^20.0.0`
- `next: 14.2.5`
- `react: ^18.0.0`
- `react-dom: ^18.0.0`
- `vite": ^5.1.4`

- Node versions
  -- `v14.21.3`
  -- `v16.20.2`
  -- `v18.19.0`

---

<h2 id="Recipes">Recipes</h2>

#### With Custom Controls

```javascript
import {CustomSlideComponent. customData} from "."
import { CarouselTypes } from "react-circular-carousel-ts/types"
import { useCircularCarouselContext } from "react-circular-carousel-ts"


const TILE_WIDTH = Math.floor(window.innerWidth * 0.3)

const CustomControls = () => {
    const { handleNext, handlePrev } = useCircularCarouselContext()
    return (
        <div>
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

const WithCustomControls = () => <Carousel
        type={CarouselTypes.STANDARD_2D}
        slideComponent={CustomSlideComponent}
        slideWidth={TILE_WIDTH}
        slideGap={50}
        mediaPool={customData}
        onChange={(args) => console.log(args)}
        customControls={true}
        aspectRatio={"1/1"}
    >
        <CustomControls />
    </Carousel>
```

#### Three Dimensional

```javascript
import {CustomSlideComponent. customData} from "."
import { CarouselTypes } from "react-circular-carousel-ts/types"

 const ThreeDimensional = () => <Carousel
        mediaPool={customData}
        type={CarouselTypes.STANDARD_3D}
        slideComponent={CustomSlideComponent}
        aspectRatio={"1/2"}
    />
```

#### With Dynamic Slide Width

```javascript
import {CustomSlideComponent. customData} from "."
import { CarouselTypes } from "react-circular-carousel-ts/types"

 const WithDynamicSlideWidth= () => <Carousel
        type={CarouselTypes.STANDARD_2D}
        mediaPool={customData}
        slideWidth={100}
        dynamicWidth={true}
        slideGap={50}
        slideComponent={CustomSlideComponent}
        aspectRatio='3/1'
    />
```

#### Custom Icons

```javascript
import {CustomSlideComponent. customData, NextIcon, PrevIcon, CustomSlideComponentProps} from "."
import { CarouselTypes } from "react-circular-carousel-ts/types"

const CustomSlideComponent: FC<CustomSlideComponentProps> = (props) => {
    return (
        <div>
            <img
                src={props.avatar} alt="avatar for slide" />
        </div>
    )
}

 const WithCustomIcons = () => <Carousel
        type={CarouselTypes.STANDARD_2D}
        mediaPool={customData}
        slideWidth={100}
        dynamicWidth={true}
        slideGap={50}
        slideComponent={CustomSlideComponent}
        aspectRatio='3/1'
        nextIcon={<NextIcon />}
        prevIcon={<PrevIcon />}
    />
```

---

### Layout

**In order to ensure your carousel layout looks optimal, ensure at any given time the amount of slides is sufficient**

:moneybag: `TIP  If your slide count is low, double or triple it with Javascript ( You may want to hide the indicators since your slide collection will contain duplicates.)`
It is not recommended to render the 3D carousel on mobile, as it implements a fixed slide sizing algorithm.

---

### Typescript SuperPowers

Props `mediaPool` and `slideComponent` are type coupled thanks to TS generics! If you are using this package in TS environment (recommended!)🎖️

---

### Open an [issue](https://github.com/greeffjean/react-circular-carousel-ts-public/issues)

---

 <div className="about">
      <h2>Hi my name is Jean! </h2>
      <p>If you would like to know more about me please check out these links.</p>  
      <p>If you would like to see me add more features and spend more time on this project please <button style="background: coral; border: none; border-radius: 10px; padding: 5px 10px;">
<a style="color: white;" href="https://buymeacoffee.com/jean_greeff">
Buy me a coffee
</a></button> </p>
      <div>
        <a style="display: block" href="https://github.com/greeffjean">Github</a>
        <a style="display: block" href="https://za.linkedin.com/in/jean-greeff-939732139?challengeId=AQFipxVlrt5QKgAAAZGotaAdoctY8by8OiaDx3YNJeRB3SyzK8wx9-2OoYIcLvbRm_3lGDollWedJX8u9VySz-SVoXW13A-a0A&submissionId=4bf4de49-8dd4-f017-9bf3-cc07879a2831&challengeSource=AgGmkUVpsV70EwAAAZGotahEw11DZHW12_ECYOSOMY48HbmBIL3cI_TWrphsb2c&challegeType=AgHuLQ-isW_3kQAAAZGotahIDpyMH19YSD6nFnHSf4PqQEx5pmuBYDQ&memberId=AgE_qht-Y7ia6gAAAZGotahMmNJlT-Q1WJg8kJoSHSCX1Mo&recognizeDevice=AgFtT_iQ0OShigAAAZGotahPAp6hglBqb-lCcLfI9xKWcoj7mSvo">Linked-in</a>
        <a style="display: block" href="https://www.npmjs.com/~jean_greeff">npm</a>
        <a style="display: block" href="mailto:greeffjean@gmail.com?subject=React carousel package inquiry">Contact Me</a>
      </div>
    </div>
