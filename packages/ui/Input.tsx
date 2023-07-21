import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}


const Input: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
    {
        ...props
    },
    ref,
) => {

    return <input ref={ref} {...props}></input>
}

export default React.forwardRef(Input);