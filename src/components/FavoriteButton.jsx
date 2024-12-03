import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/slice";

const FavoriteButton = ({ pokemonId }) => {

   const isFavorite = useSelector(state => state.favorite.some((item => item === pokemonId)))
    const dispatch = useDispatch();

    return (
        <button onClick={(e) => {e.stopPropagation()
            dispatch(isFavorite? favoriteSlice.actions.removeFromFavorite({ pokemonId }) : favoriteSlice.actions.addTodFavorite({ pokemonId }))
        }} 
         className={isFavorite? 'text-[red]' : ''}>
            {isFavorite? '❤️' : '♡'}
        </button>
    )
}
export default FavoriteButton;