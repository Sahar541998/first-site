"use client"
import Image from "next/image";
import {Modal} from "ui";
import React, {useState} from "react";

const PokemonImage: React.FC<{ src: string, alt: string }> = ({alt, src}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return <>
        <Image
            style={{cursor: "pointer"}}
            width={200}
            height={200}
            alt={alt}
            src={src}
            onClick={() => {
                setIsModalOpen(true)
            }}
        />

        <Modal open={isModalOpen} onClose={() => {
            setIsModalOpen(false)
        }}>
            <>
                My-Poke
                <Image width={200}
                       height={200}
                       alt={alt}
                       src={src}
                       onClick={() => {
                           setIsModalOpen(true)
                       }
                       }
                />

            </>
        </Modal>

    </>
}

export default PokemonImage