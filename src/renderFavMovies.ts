import { IMovieMapped } from './@types/IMovie';
import createCard from './createCard';

function renderFavMovies(): void {
    const moviesStr = localStorage.getItem('favMovies');
    let movies: IMovieMapped[];
    if (moviesStr) movies = JSON.parse(moviesStr);
    else return;
    const mainContainer: HTMLDivElement = document.getElementById(
        'favorite-movies'
    ) as HTMLDivElement;
    mainContainer.innerHTML = '';
    movies?.forEach((movie) => {
        // container
        const container = createCard(movie, movies, true);
        mainContainer.append(container);
    });
}

export default renderFavMovies;
