import { fetchAll } from './fetching/fetchAll';
import renderMovies from './rendering/renderMovies';
import { category } from './categorySelect';
import fetchSearch from './fetching/fetchSearch';
import { search } from './handleSearch';

let page = 1;

function setPage(newPage: number): void {
    page = newPage;
}

function loadMore(): void {
    setPage(page + 1);
    if (!search) {
        fetchAll(category, page).then((movies) => {
            renderMovies(movies);
        });
    } else {
        fetchSearch(page, false);
    }
}

export default loadMore;
export { setPage };
