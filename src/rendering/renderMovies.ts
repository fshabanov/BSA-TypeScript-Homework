import { IMovieMapped } from '../@types/IMovie';
import createCard from '../createCard';

function renderMovies(movies: IMovieMapped[], isNewCategory = false): void {
    const favMovStr = localStorage.getItem('favMovies');
    if (!favMovStr) return;
    let favMovies: number[] = JSON.parse(favMovStr);
    const mainContainer: HTMLDivElement = document.getElementById(
        'film-container'
    ) as HTMLDivElement;
    if (isNewCategory) mainContainer.innerHTML = ''; // remove previous movies if new category
    movies.forEach((movie) => {
        // container
        const container = createCard(movie, favMovies);
        mainContainer.append(container);
    });
}

export default renderMovies;
