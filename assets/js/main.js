function convertPOkemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="pokemon__left__types__types_type">${typeSlot.type.name}</li>`);
}



function convertPokemonToLi(pokemon) {
    return `
        <li class="container__pokemons__pokemon water">
            <div class="pokemon__left">
                <span class="pokemon__left__name" >${pokemon.name}</span>     
                <span class="pokemon__left__types">
                    <ol class="pokemon__left__types__types">
                        ${convertPOkemonTypesToLi(pokemon.types).join('')}
                    </ol>
                </span>
            </div>
            <div class="pokemon__right">
                <span class="pokemon__right__number">#${pokemon.order} </span>
                <img src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}">
            </div>
        </li>
    `;
}

const pokemonList = document.getElementById('container__pokemons__id');

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');   
})
