import { jsx as _jsx } from "react/jsx-runtime";
import { useCircularCarouselContext } from "../../context/useContext";
import styles from "../../assets/css/Indicators.module.css";
import { useState } from "react";
import classNames from "classnames";
const Indicators = () => {
    const { media, activeIdx } = useCircularCarouselContext();
    const [poolLength,] = useState(() => Array.from(Array(media.mediaPool.length).keys()).map(key => key));
    return (_jsx("div", { "data-testid": "indicators", className: classNames(styles.wrapper, "indicators-wrapper"), children: poolLength.map(key => {
            return (_jsx("span", { className: (activeIdx) === key ? "active" : undefined }, key));
        }) }));
};
export default Indicators;
