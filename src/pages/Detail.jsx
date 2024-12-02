import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";

const Detail = () => {
    const { pokemonId } = useParams()
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

    return(
        <div className="flex flex-col justify-center items-center border-[gray] p-[30px] rounded-[10px]">
            <h4 className="text-[24px]">{pokemon.name}</h4>
            <p className="whitespace-pre-wrap text-center">{pokemon.description}</p>
            <img className="w-[200px]" src={pokemon.frontImg} alt={pokemon.name} />
        </div>
    )
}

export default Detail;
