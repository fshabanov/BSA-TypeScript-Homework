import { IMovieMapped } from './@types/IMovie';

function renderRandomMovie(movies: IMovieMapped[]): void {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    const header: HTMLHeadingElement = document.getElementById(
        'random-movie-name'
    ) as HTMLHeadingElement;
    header.innerHTML = randomMovie.title;
    const paragraph: HTMLParagraphElement = document.getElementById(
        'random-movie-description'
    ) as HTMLParagraphElement;
    paragraph.innerHTML = randomMovie.body;

    const section: HTMLElement = document.getElementById(
        'random-movie'
    ) as HTMLElement;
    section.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${randomMovie.horizontalImageUrl})`;
}

export default renderRandomMovie;
