import React from "react";
import {Card} from "ui";
import PokemonSummary from "./_entities/PokemomSummary";
import {capsFirstLetter} from "utils";


async function getData(): Promise<PokemonSummary[]> {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return (await res.json()).results
}


interface Props {

}

const Page: React.FC<Props> = async () => {
    const pokemons = await getData();
    return (
        <div style={{display: 'flex', gap: "16px", flexWrap: 'wrap', justifyContent: 'center', marginTop: "16px"}}>
            {pokemons.map(pokemon =>
                <Card href={`/pokemons/${pokemon.name}`} key={pokemon.name}>{capsFirstLetter(pokemon.name)}</Card>
            )}
        </div>
    )

}


export default Page;