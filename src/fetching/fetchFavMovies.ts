import { IMovieMapped } from '../@types/IMovie';
import mapper from '../movieMapper';
import { API_KEY, BASE_URL } from '../tmdb';

async function fetchFavMovies(): Promise<IMovieMapped[]> {
    const favMovieIdsStr = localStorage.getItem('favMovies');
    const movies: IMovieMapped[] = [];
    if (!favMovieIdsStr) return movies;
    const favMovieIds: number[] = JSON.parse(favMovieIdsStr);
    const promises = [];
    for (const movieId of favMovieIds) {
        promises.push(
            fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
                .then((res) => res.json())
                .then((data) => mapper([data])[0])
                .then((movieData) => movies.push(movieData))
        );
    }
    await Promise.all(promises);
    return movies;
}

export default fetchFavMovies;
