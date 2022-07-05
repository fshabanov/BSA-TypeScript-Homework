import { Category, IMovieMapped } from './@types/IMovie';
import mapper from './movieMapper';
import { BASE_URL, API_KEY } from './tmdb';

async function fetchAll(
    category: Category | '' = Category.Popular,
    page = 1
): Promise<IMovieMapped[]> {
    let movies: IMovieMapped[] = [];
    if (category) {
        await fetch(
            `${BASE_URL}movie/${category}?api_key=${API_KEY}&page=${page}`
        )
            .then((res) => res.json())
            .then((data) => mapper(data.results))
            .then((movieData) => (movies = movieData));
    }
    return movies;
}

export { fetchAll };
