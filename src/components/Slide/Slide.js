"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleCardExample = exports.CustomSlideComponent = void 0;
const IMG_URL = 'https://loremflickr.com/640/480?lock=5904163907043328';
const CustomSlideComponent = () => <div>
    <p>This is a fallback SlideComponent, please use your own!</p>
    <img src={IMG_URL} alt="mock image"/>
</div>;
exports.CustomSlideComponent = CustomSlideComponent;
const ArticleCardExample = (props) => <div>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <img src={props.image}/>
</div>;
exports.ArticleCardExample = ArticleCardExample;
