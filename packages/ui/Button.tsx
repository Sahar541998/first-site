"use client"

import React from "react";
import styled from "styled-components";

const Button = styled.button<{ cancel?: boolean }>`
  background-color: ${({cancel = false}) => cancel ? 'grey' : '#0066ff'};
  color: #fff;
  border: 0;
  border-radius: 24px;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .3s ease;

  &:hover {
    background-color: ${({cancel = false}) => cancel ? 'darkgrey' : '#005ce6'};

  }
`


export default Button;


