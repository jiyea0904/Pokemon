import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import { selectPokemonByRegExp } from "../RTK/selector";

const Search = () => {
    const [searchParams] = useSearchParams()
    const param = searchParams.get('pokemon')
    const pokemonRegExp = getRegExp(param)

    const pokemon = useSelector(selectPokemonByRegExp(pokemonRegExp))

    getRegExp(param)
    return(
        <>
            {pokemon.map(el => <Card key={el.id} pokemon={el} />)}
        </>
    )
}

export default Search;