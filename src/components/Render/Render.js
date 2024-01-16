"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Render = void 0;
const Render = ({ children, isTruthy }) => {
    const isMany = Array.isArray(isTruthy);
    const render = isMany ? isTruthy.filter(Boolean).length : Boolean(isTruthy);
    return render ? <>{children}</> : null;
};
exports.Render = Render;
