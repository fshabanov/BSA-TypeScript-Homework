import { IMovieMapped } from './@types/IMovie';
import renderFavMovies from './rendering/renderFavMovies';

async function toggleFav(movie: IMovieMapped): Promise<void> {
    const favMovStr = localStorage.getItem('favMovies');
    let favMovies: number[] = [];
    if (favMovStr) favMovies = JSON.parse(favMovStr);
    const svg: SVGElement = document.querySelector(
        `svg[data-id="${movie.id}"]`
    ) as SVGElement;
    if (favMovies?.find((favMovie) => favMovie === movie.id)) {
        svg.setAttribute('fill', '#ff000078');
        favMovies = favMovies.filter((favMovie) => favMovie !== movie.id);
    } else {
        svg.setAttribute('fill', 'red');
        favMovies.push(movie.id);
    }
    localStorage.setItem('favMovies', JSON.stringify(favMovies));
    renderFavMovies();
}

export default toggleFav;
