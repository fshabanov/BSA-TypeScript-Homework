import { listenForCategoryChange } from './categorySelect';
import { fetchAll } from './fetching/fetchAll';
import handleSearch from './handleSearch';
import loadMore from './loadMore';
import renderFavMovies from './rendering/renderFavMovies';
import renderMovies from './rendering/renderMovies';
import renderRandomMovie from './rendering/renderRandomMovie';

export async function render(): Promise<void> {
    // TODO render your app here

    // initial render
    const movies = await fetchAll();
    renderMovies(movies);
    renderRandomMovie(movies);

    // load more
    const loadMoreButton: HTMLButtonElement = document.getElementById(
        'load-more'
    ) as HTMLButtonElement;
    loadMoreButton.onclick = loadMore;

    // category selection
    listenForCategoryChange();

    // search
    const form: HTMLFormElement = document.getElementById(
        'search-form'
    ) as HTMLFormElement;
    form.onsubmit = handleSearch;

    // favourite movies
    renderFavMovies();
}
