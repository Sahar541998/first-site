import React from "react";
import PokemonResponse from "../_entities/PokemomResponse";
import {Header} from "ui";
import {capsFirstLetter} from "utils";
import PokemonImage from "../pokemon/[pokemon]/PokemonImage";

async function getData(pokemon: string): Promise<PokemonResponse> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, { cache: 'force-cache' })
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
    pokemon: string
}

const PokemonView: React.FC<Props> = async ({pokemon}) => {
    const summary = await getData(pokemon);

    return <>
        <Header>{capsFirstLetter(summary.name)}</Header>
        <PokemonImage alt={summary.name} src={summary.sprites.front_default}/>
    </>
}

export default PokemonView