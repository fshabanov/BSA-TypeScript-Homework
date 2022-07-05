import mapper from '../movieMapper';
import renderMovies from '../rendering/renderMovies';
import { BASE_URL, API_KEY } from './../tmdb';
function fetchSearch(page = 1, isNewSearch = true): void {
    const input: HTMLInputElement = document.getElementById(
        'search'
    ) as HTMLInputElement;
    const query = input.value;
    fetch(
        `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    )
        .then((res) => res.json())
        .then((data) => mapper(data.results))
        .then((movies) => {
            renderMovies(movies, isNewSearch);
        });
}

export default fetchSearch;
