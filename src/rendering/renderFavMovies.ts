import { IMovieMapped } from '../@types/IMovie';
import createCard from '../createCard';
import fetchFavMovies from '../fetching/fetchFavMovies';

async function renderFavMovies(): Promise<void> {
    const moviesStr = localStorage.getItem('favMovies');
    const movies: IMovieMapped[] = await fetchFavMovies();
    if (!moviesStr) return;
    let favMovieIds: number[] = JSON.parse(moviesStr);
    const mainContainer: HTMLDivElement = document.getElementById(
        'favorite-movies'
    ) as HTMLDivElement;
    mainContainer.innerHTML = '';
    movies?.forEach((movie) => {
        // container
        const container = createCard(movie, favMovieIds, true);
        mainContainer.append(container);
    });
}

export default renderFavMovies;
