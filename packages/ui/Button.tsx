"use client";

import React from "react";

interface Props extends React.ButtonHTMLAttributes<unknown> {
}


export const Button: React.FC<React.PropsWithChildren<Props>> = ({children, ...props}) => {
    return <button {...props}>{children}</button>;
};
