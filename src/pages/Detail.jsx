import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import FavoriteButton from "../components/FavoriteButton";
import FlipCard from "../components/FlipCard";

const Detail = () => {
    const { pokemonId } = useParams()
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

    return(
        <div className="flex flex-col justify-center items-center border-[gray] p-[30px] rounded-[10px]">
            <h4 className="text-[24px]">
                {pokemon.name}
                <FavoriteButton pokemonId={Number(pokemonId)} />
            </h4>
            <p className="whitespace-pre-wrap text-center">{pokemon.description}</p>
            <FlipCard frontImg={pokemon.frontImg} backImg={pokemon.backImg} />
        </div>
    )
}

export default Detail;
