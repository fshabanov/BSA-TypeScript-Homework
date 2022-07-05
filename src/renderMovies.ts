import { IMovieMapped } from './@types/IMovie';
import createCard from './createCard';

function renderMovies(movies: IMovieMapped[], isNewCategory = false): void {
    const favMovStr = localStorage.getItem('favMovies');
    let favMovies: IMovieMapped[];
    if (favMovStr) favMovies = JSON.parse(favMovStr);
    const mainContainer: HTMLDivElement = document.getElementById(
        'film-container'
    ) as HTMLDivElement;
    if (isNewCategory) mainContainer.innerHTML = '';
    movies.forEach((movie) => {
        // container
        const container = createCard(movie, favMovies);
        mainContainer.append(container);
    });
}

export default renderMovies;
