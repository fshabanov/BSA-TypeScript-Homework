import { IMAGE_BASE_URL } from './tmdb';
import { IMovieMapped } from './@types/IMovie';
import toggleFav from './toggleFav';

function createCard(
    movie: IMovieMapped,
    favMovies: number[],
    favMovie = false
): HTMLDivElement {
    const container: HTMLDivElement = document.createElement('div');
    container.classList.add('col-12', 'p-2');
    if (!favMovie) {
        container.classList.add('col-lg-3', 'col-md-4');
    }
    // wrapper
    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.classList.add('card', 'shadow-sm');
    // image
    const image: HTMLImageElement = document.createElement('img');
    image.src = movie.imageUrl
        ? `${IMAGE_BASE_URL}w500${movie.imageUrl}`
        : '../image_placeholder.png';
    // svg
    const svg: SVGElement = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg'
    );
    svg.setAttribute('width', '50');
    svg.setAttribute('height', '50');
    svg.setAttribute('stroke', 'red');
    svg.setAttribute(
        'fill',
        favMovies?.find((favMovie) => favMovie === movie.id)
            ? 'red'
            : '#ff000078'
    ); // #ff000078 if not liked
    svg.setAttribute('viewBox', '0 -2 18 22');
    svg.classList.add('bi', 'bi-heart-fill', 'position-absolute', 'p-2');
    if (!favMovie) {
        svg.setAttribute('data-id', movie.id.toString());
    }
    svg.onclick = () => toggleFav(movie);

    // path
    const path: SVGPathElement = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
    );
    path.setAttribute(
        'd',
        'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
    );
    path.setAttribute('fill-rule', 'evenodd');

    svg.append(path);

    // card
    const card: HTMLDivElement = document.createElement('div');
    card.classList.add('card-body');
    // overview
    const overview: HTMLParagraphElement = document.createElement('p');
    overview.classList.add('card-text', 'truncate');
    overview.innerText = movie.body;
    // date container
    const date: HTMLDivElement = document.createElement('div');
    date.classList.add(
        'd-flex',
        'justify-content-between',
        'align-items-center'
    );
    // date
    const small: HTMLElement = document.createElement('small');
    small.classList.add('text-muted');
    small.innerText = movie.date;

    date.append(small);
    card.append(overview, date);
    wrapper.append(image, svg, card);
    container.append(wrapper);
    return container;
}

export default createCard;
