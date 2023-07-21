import * as React from "react";

interface Props {
}

export const Header: React.FC<React.PropsWithChildren<Props>> = ({children}) => {
    return <h1>{children}</h1>;
};
