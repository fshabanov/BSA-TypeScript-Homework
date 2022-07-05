import { fetchAll } from './fetching/fetchAll';
import renderMovies from './rendering/renderMovies';
import { category } from './categorySelect';

let page = 1;

function setPage(newPage: number): void {
    page = newPage;
}

function loadMore(): void {
    setPage(page + 1);
    fetchAll(category, page).then((movies) => {
        renderMovies(movies);
    });
}

export default loadMore;
export { setPage };
