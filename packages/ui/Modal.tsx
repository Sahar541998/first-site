"use client"

import {createPortal} from "react-dom";
import React, {useCallback, useEffect} from "react";
import styled from "styled-components";
import Button from "./Button";

const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 3001;
  display: flex;
`

const ModalBox = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 500px;
  background-color: white;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

const ModalHeaderRow = styled.div`
  padding: 16px 8px;
  border-bottom: 2px solid darkgray;
`

const ModalTitle = styled.h2`
  margin: 0;
`
const ModalActions = styled.div`
  border-top: 2px solid darkgray;
  padding: 8px;
  display: flex;
  gap: 8px;
  direction: rtl;

`
const ModalContent = styled.div`
  flex-grow: 1`

interface ModalProps {
    open: boolean,
    onClose?: () => void
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({children, onClose, open}) => {

    const closeCallBack = useCallback((e: KeyboardEvent) => {
        if (open && e.code === "Escape") onClose?.()
    }, [onClose, open])

    useEffect(() => {
        window.document.addEventListener('keydown', closeCallBack)

        return () => {
            window.document.removeEventListener('keydown', closeCallBack)
        }
    }, [closeCallBack])


    if (!open) {
        return <></>
    }


    return createPortal(<ModalBackdrop>
        <ModalBox>
            <ModalHeaderRow>
                <ModalTitle>Modal Title</ModalTitle>
            </ModalHeaderRow>

            <ModalContent>

                {children}
            </ModalContent>

            <ModalActions>
                <Button onClick={onClose}>Save</Button>
                <Button onClick={onClose} cancel>Cancel</Button>
            </ModalActions>

        </ModalBox>

    </ModalBackdrop>, window.document.body)
}

export default Modal