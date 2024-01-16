import { FC } from "react";

const IMG_URL = 'https://loremflickr.com/640/480?lock=5904163907043328';

const CustomSlideComponent: FC<any> = () => <div>
    <p>This is a fallback SlideComponent, please use your own!</p>
    <img src={IMG_URL} alt="mock image" />
</div>;

const ArticleCardExample: FC<any> = (props) => <div>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <img src={props.image} />
</div>;


export { CustomSlideComponent, ArticleCardExample };