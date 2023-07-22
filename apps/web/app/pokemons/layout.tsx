"use client"

import styled from "styled-components";

const Navbar = styled.div`
  height: 64px;
  padding: 0 24px;
  border-bottom: 1px solid #ebebeb;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 3000;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

const Layout = ({children}) => {


    return <>
        <Navbar>
            <div>Pokemons!</div>
        </Navbar>

        {children}
    </>
}

export default Layout;
