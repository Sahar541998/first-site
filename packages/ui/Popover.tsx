"use client"

import React from "react";
import styled from "styled-components";


const PopoverWrapper = styled.div`
  background-color: white;
  border: 4px solid black;
  
`

interface Props {
}

const Popover: React.FC<React.PropsWithChildren<Props>> = ({children}) => {

    return <PopoverWrapper>{children}</PopoverWrapper>
}

export default Popover