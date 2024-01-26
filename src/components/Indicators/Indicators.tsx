import { useCircularCarouselContext } from "context/useContext";
import styles from "assets/css/Indicators.module.css"
import { useState } from "react";
import classNames from "classnames";

const Indicators = () => {
    const { media, activeIdx } = useCircularCarouselContext();
    const [poolLength,] = useState(() => Array.from(Array(media.mediaPool.length).keys()).map(key => key));

    return (<div
        data-testid="indicators"
        className={classNames(styles.wrapper, "indicators-wrapper")}>
        {poolLength.map(key => {
            return (<span className={(activeIdx) === key ? "active" : undefined} key={key}></span> )
        })}
    </div>)
};

export { Indicators };