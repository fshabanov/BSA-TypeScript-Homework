import { IMovieMapped, IMovieOriginal } from './@types/IMovie';

function mapper(movies: IMovieOriginal[]): IMovieMapped[] {
    return movies.map((movie) => ({
        title: movie.title,
        body: movie.overview,
        id: movie.id,
        imageUrl: movie.poster_path,
        horizontalImageUrl: movie.backdrop_path,
        date: movie.release_date,
    }));
}

export default mapper;
