import { useSelector } from "react-redux";
import { selectFavoritePokemons } from "../RTK/selector";
import Card from "../components/Card";

const Favorite = () => {
    const pokemon = useSelector(selectFavoritePokemons)
    return(
        <>
            {pokemon.map(el => <Card key={el.id} pokemon={el} />)}
        </>
    )
}

export default Favorite;