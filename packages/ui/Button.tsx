"use client";

import React from "react";

interface Props extends React.ButtonHTMLAttributes<unknown> {
}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, Props> = ({children, ...props}, ref) => {
    return <button ref={ref} {...props}>{children}</button>;
};


export default React.forwardRef(Button)
