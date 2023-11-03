"use client"
import React from "react";
import styled from "styled-components";
import Link from 'next/link'


const CardView = styled(Link)`
  position: relative;
  width: 220px;
  height: 320px;
  background: mediumturquoise;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;


  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 20%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    background-color: lightblue;
    transition: all 0.5s;
  }

  &::before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 100%;
  }

  &::after {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 15px;
  }

  &:hover::before,
  &:hover:after {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: all 0.5s;
  }

  &:hover:after {
    content: 'View'

  }
`


interface Props {
    // todo use real types
    href: string;
    replace?: boolean
}

const Card: React.FC<React.PropsWithChildren<Props>> = ({children, ...props}) => {


    return <CardView scroll={false} {...props}>{children}</CardView>
}

export default Card