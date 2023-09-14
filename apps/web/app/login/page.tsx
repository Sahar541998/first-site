"use client"

import React from "react";
import styled from "styled-components";
import {Button, Header} from "ui";
import Link from "next/link";


const FullScreen = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
`

const LoginBox = styled.div`
  max-width: 300px;
  background: #f1f7fe;
  overflow: hidden;
  border-radius: 16px;
  color: #010101;
  height: 350px;
  margin: auto;
  border: 2px solid gray;
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

const FormBox = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 24px 24px;
  gap: 16px;
  text-align: center;
`

const InputBox = styled.div`
  overflow: hidden;
  border-radius: 8px;
  background-color: #fff;
  margin: 1rem 0 .5rem;
  width: 100%;
`

const FormInput = styled.input`

  background: none;
  border: 0;
  outline: 0;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #eee;
  font-size: .9rem;
  padding: 8px 15px;`

interface Props {

}

const Page: React.FC<Props> = () => {
    const [, setFormData] = React.useState<{ userName: string, password: string }>({userName: "", password: ""})

    return <FullScreen>
        <LoginBox>
            <FormBox action={"pokemons"}>
                <Header>Login</Header>

                <InputBox>
                    <FormInput required name={"username"} placeholder={"User Name"}
                               onChange={e => setFormData((prev) => ({...prev, userName: e.target.value}))}/>

                    <FormInput required placeholder={"Password"} type={'password'}
                               onChange={e => setFormData((prev) => ({...prev, password: e.target.value}))}/>
                </InputBox>

                <Link href={"/pokemons"} onClick={()=>{return false}}>pokemon</Link>
                <Button type={"submit"}>Submit</Button>
            </FormBox>

        </LoginBox>
    </FullScreen>
}


export default Page;



