import { FC } from "react";
import { Children } from "types";


type RenderProps = {
    isTruthy: any;
    children: Children;
};

const Render: FC<RenderProps> = ({ children, isTruthy}) => {
    const isMany = Array.isArray(isTruthy);
    const render = isMany ? isTruthy.filter(Boolean).length : Boolean(isTruthy);
    return render ? <>{children}</> : null;
};


export { Render };