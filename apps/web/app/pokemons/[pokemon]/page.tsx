import React from "react";
import {Header} from "ui";
import PokemonResponse from "../_entities/PokemomResponse";
import Image from "next/image";
import Link from "next/link";

async function getData(pokemon: string): Promise<PokemonResponse> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


interface Props {
    params: {
        pokemon: string
    }
}

const Page: React.FC<Props> = async ({params: {pokemon = "ditto"}}) => {
    const summary = await getData(pokemon);
    return (
        <>
            <Link href={"/pokemons"}>Back</Link>
            <Header>{summary.name}</Header>
            <Image width={200} height={200} alt={summary.name} src={summary.sprites.front_default}></Image>
        </>
    )

}


export default Page;