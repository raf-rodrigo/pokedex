const pokemonList = document.getElementById('container__pokemons__id');

const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 151;
const limit = 10;
let offset = 0;





function loadPokemonitens(){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) =>
        `<li class="container__pokemons__pokemon ${pokemon.type}">
            <div class="pokemon__left">
                <span class="pokemon__left__name" >${pokemon.name}</span>     
                <span class="pokemon__left__types">
                    <ol class="pokemon__left__types__types">
                        ${pokemon.types.map((type) => `<li class="pokemon__left__types__types_type">${type}</li>`).join('')}
                    </ol>
                </span>
            </div>
            <div class="pokemon__right">
                <span class="pokemon__right__number">#${pokemon.number} </span>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>`).join('');   
    })
    
}

loadPokemonitens(offset, limit);

loadMoreButton.addEventListener('click',() => {
    offset += limit;

    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonitens(offset, newLimit);
        
        loadMoreButton.parentElement.removeChild(loadMoreButton);
        
    }else {
        
        loadPokemonitens(offset, limit);
    }
})
