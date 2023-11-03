import React from "react";
import PokemonView from "../../_pokemonView/PokemonView";
import Link from "next/link";


interface Props {
    params: {
        pokemon: string
    }
}

const Page: React.FC<Props> = async ({params: {pokemon}}) => {
    return (
        <>
            <Link href={"/pokemons"}>Back</Link>
            <PokemonView pokemon={pokemon}/>
        </>)
}


export default Page;