import { FC } from "react";
import { Children } from "../../types";
type RenderProps = {
    isTruthy: any;
    children: Children;
};
declare const Render: FC<RenderProps>;
export { Render };
