import { IResponseData } from '../@types/IMovie';
import mapper from '../movieMapper';
import renderMovies from '../rendering/renderMovies';
import { BASE_URL, API_KEY } from './../tmdb';
import { fetchAll } from './fetchAll';
async function fetchSearch(page = 1, isNewSearch = true): Promise<void> {
    const input: HTMLInputElement = document.getElementById(
        'search'
    ) as HTMLInputElement;
    const query = input.value;
    if (!query) {
        const movies = await fetchAll();
        renderMovies(movies, true);
    } else {
        fetch(
            `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
        )
            .then((res) => res.json())
            .then((data: IResponseData) => mapper(data.results))
            .then((movies) => {
                renderMovies(movies, isNewSearch);
            })
            .catch((err) => alert(err.message));
    }
}

export default fetchSearch;
