import { IMovieMapped, IMovieOriginal, IResponseError } from '../@types/IMovie';
import mapper from '../movieMapper';
import { API_KEY, BASE_URL } from '../tmdb';

async function fetchFavMovies(favMovieIds: number[]): Promise<IMovieMapped[]> {
    const movies: IMovieMapped[] = [];
    const promises = [];
    for (const movieId of favMovieIds) {
        promises.push(
            fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
                .then((res) => res.json())
                // IResponseError if the movie with the id does not exist
                .then((data: IMovieOriginal | IResponseError) => {
                    // if data is of type IMovieOriginal (if title exists)
                    if ((<IMovieOriginal>data).title !== undefined)
                        // mapper function gets and returns an array
                        return mapper([data as IMovieOriginal])[0];
                    // else handle error (no movie found)
                })
                .then((movieData) => movieData && movies.push(movieData))
                .catch((err) => alert(err.message))
        );
    }
    await Promise.all(promises);
    return movies;
}

export default fetchFavMovies;
