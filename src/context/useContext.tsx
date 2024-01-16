import { useContext } from "react";
import { Context } from "./context";


const ERROR_MSG = "Unable to find an <Context.Provider> ancestor, please ensure component is wrapped in a <Context.Provider>";

const useCircularCarouselContext = () => {
    try {
        const ctx = useContext(Context);
        return ctx;
    } catch {
        throw new Error(ERROR_MSG)
    }
};

export { useCircularCarouselContext };