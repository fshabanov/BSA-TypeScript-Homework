import { IMovieMapped } from './@types/IMovie';
import renderFavMovies from './renderFavMovies';

function toggleFav(movie: IMovieMapped): void {
    const favMovStr = localStorage.getItem('favMovies');
    let favMovies: IMovieMapped[] = [];
    if (favMovStr) favMovies = JSON.parse(favMovStr);
    const svg: SVGElement = document.querySelector(
        `svg[data-id="${movie.id}"]`
    ) as SVGElement;
    if (favMovies?.find((favMovie) => favMovie.id === movie.id)) {
        svg.setAttribute('fill', '#ff000078');
        favMovies = favMovies.filter((favMovie) => favMovie.id !== movie.id);
    } else {
        svg.setAttribute('fill', 'red');
        favMovies.push(movie);
    }
    localStorage.setItem('favMovies', JSON.stringify(favMovies));
    renderFavMovies();
}

export default toggleFav;
