import { setCategory } from './categorySelect';
import mapper from './movieMapper';
import renderMovies from './rendering/renderMovies';
import { BASE_URL, API_KEY } from './tmdb';
function handleSearch(e: SubmitEvent): void {
    e.preventDefault();
    const input: HTMLInputElement = document.getElementById(
        'search'
    ) as HTMLInputElement;
    const value = input.value;
    fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${value}`)
        .then((res) => res.json())
        .then((data) => mapper(data.results))
        .then((movies) => {
            renderMovies(movies, true);
        });
    setCategory('');
}

export default handleSearch;
