import Image from "next/image";
import {Modal} from "ui";
import React, {useState} from "react";

const PokemonImage: React.FC<{ src: string, alt: string }> = ({alt, src}) => {

    return <>
        <Image
            style={{cursor: "pointer"}}
            width={200}
            height={200}
            alt={alt}
            src={src}

        />
    </>
}

export default PokemonImage