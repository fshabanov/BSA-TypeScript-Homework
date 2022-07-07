import { IMovieMapped } from '../@types/IMovie';
import createCard from '../createCard';
import fetchFavMovies from '../fetching/fetchFavMovies';

async function renderFavMovies(): Promise<void> {
    const moviesStr = localStorage.getItem('favMovies');
    if (!moviesStr) return;
    const favMovieIds: number[] = JSON.parse(moviesStr);
    const movies: IMovieMapped[] = await fetchFavMovies(favMovieIds);
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
