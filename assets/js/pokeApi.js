
const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDatail){
    const pokemon = new Pokemon();

    pokemon.number = pokeDatail.id;
    pokemon.name = pokeDatail.name;

    const types = pokeDatail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    pokemon.photo = pokeDatail.sprites.other.home.front_default;

    return pokemon;

}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
                .then(response => response.json())
                .then(convertPokeApiDetailToPokemon)

}

pokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then(response => response.json())
        .then(jsonBody => jsonBody.results)
        .then(pokemons => pokemons.map(pokeApi.getPokemonDetail))
        .then(detailRequest => Promise.all(detailRequest))
        .then(pokemonsDetails => pokemonsDetails)

        .catch(error => console.log(error))

}
