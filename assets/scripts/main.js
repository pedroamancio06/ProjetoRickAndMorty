const API = 'https://rickandmortyapi.com/api';

const charsContainer = document.querySelector('.characters-container');
const nameFilter = document.querySelector('#name');
const speciesFilter = document.querySelector('#species');
const genderFilter = document.querySelector('#gender');
const statusFilter = document.querySelector('#status');
const btnLoad = document.querySelector('.btn-load-more');

const defaultFilters = {
    name: '',
    species: '',
    gender: '',
    status: '',
    page: 1,
}

async function getCharacters({ name, species, gender, status, page = 1 }) {
    const response = await fetch(`${API}/character/?name=${name}&species=${species}&gender=${gender}&status=${status}&page=${page}`);
    const characters = await response.json();
    
    return characters.results;
}

async function allCharacters({ characters }) {

    characters.forEach((character) => {
        return charsContainer.innerHTML += `
            <a href='#' class="character-content">
                <img src="${character.image}" alt="">
                <div class="info">
                    <h3>${character.name}</h3>
                    <p>${character.species}</p>
                </div>
            </a>
        `
    })
}

nameFilter.addEventListener('keypress', async () => {
    defaultFilters.name = nameFilter.value;
    defaultFilters.page = 1;
    charsContainer.innerHTML = ``;
    const characters = await getCharacters(defaultFilters);
    allCharacters({ characters });

})

speciesFilter.addEventListener('change', async (e) => {
    defaultFilters.species = e.target.value;
    defaultFilters.page = 1;
    charsContainer.innerHTML = ``;
    const characters = await getCharacters(defaultFilters);
    allCharacters({ characters });
})

genderFilter.addEventListener('change', async (e) => {
    defaultFilters.gender = e.target.value;
    defaultFilters.page = 1;
    charsContainer.innerHTML = ``;
    const characters = await getCharacters(defaultFilters);
    allCharacters({ characters });
})

statusFilter.addEventListener('change', async (e) => {
    defaultFilters.status = e.target.value;
    defaultFilters.page = 1;
    charsContainer.innerHTML = ``;
    const characters = await getCharacters(defaultFilters);
    allCharacters({ characters });
})

btnLoad.addEventListener('click', async (e) => {
    defaultFilters.page += 1;
    charsContainer.innerHTML += '';
    const characters = await getCharacters(defaultFilters);
    allCharacters({ characters });
})

async function execute() {
    const characters = await getCharacters(defaultFilters);
    allCharacters({ characters });
}

execute();