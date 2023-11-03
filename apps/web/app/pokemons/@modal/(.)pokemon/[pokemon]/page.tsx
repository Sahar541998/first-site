"use client"
import React from "react";
import PokemonView from "../../../_pokemonView/PokemonView";
import {Modal} from "ui";
import {useRouter} from "next/navigation";
import PokemonWrapper from "./pokemonWrapper";

const Page: React.FC<React.PropsWithChildren<{ params: { pokemon: string } }>> = ({params}) => {

    const router = useRouter()
    return (

        // eslint-disable-next-line react/no-children-prop
        <Modal open={true} onClose={router.back}>

            <PokemonWrapper pokemon={params.pokemon}/>
        </Modal>
    )
}

export default Page