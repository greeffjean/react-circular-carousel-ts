const Render = ({ children, isTruthy }) => {
    const isMany = Array.isArray(isTruthy);
    const render = isMany ? isTruthy.filter(Boolean).length : Boolean(isTruthy);
    return render ? children : null;
};
export { Render };
