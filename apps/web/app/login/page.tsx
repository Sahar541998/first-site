"use client"

import React from "react";
import styled from "styled-components";
import {Button, Header, Input} from "ui";


const FullScreen = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #d3d3d3;
  display: flex;
`

const LoginBoxForm = styled.form`
  width: 500px;
  height: 400px;
  border: 1px solid grey;
  border-radius: 4px;
  margin: auto;
  background-color: white;

`

interface Props {

}

const Page: React.FC<Props> = () => {
    const [formData, setFormData] = React.useState<{ userName: string, password: string }>({userName: "", password: ""})


    return <FullScreen>
        <LoginBoxForm onSubmit={(event) => {
            event.preventDefault();

            alert(JSON.stringify(formData))
        }}>
            <Header>Login Here</Header>

            <Input required name={"username"} placeholder={"User Name"}
                   onChange={e => setFormData((prev) => ({...prev, userName: e.target.value}))}/>

            <Input required placeholder={"password"} type={'password'}
                   onChange={e => setFormData((prev) => ({...prev, password: e.target.value}))}/>

            <Button type={"submit"}>Submit</Button>
        </LoginBoxForm>
    </FullScreen>
}


export default Page;