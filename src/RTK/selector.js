import { createSelector } from "@reduxjs/toolkit";

export const selectPokemonById = (pokemonId) => createSelector(
    state => state.pokemon.data,
    (pokemon) => pokemon.find(el => el.id === pokemonId)
)

export const selectPokemonByRegExp = (pokemonRegExp) => createSelector(
    state => state.pokemon.data,
    (pokemon) => pokemon.filter(el => el.name.match(pokemonRegExp))
)

export const selectFavoritePokemons = createSelector(
    state => state.pokemon.data,
    state => state.favorite,
    (pokemon, favorite) => {
        return pokemon.filter(el => favorite.includes(el.id));
    }
)