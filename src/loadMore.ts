import { fetchAll } from './fetchAll';
import renderMovies from './renderMovies';
import { category } from './categorySelect';

let page = 1;
function loadMore(): void {
    page++;
    fetchAll(category, page).then((movies) => {
        renderMovies(movies);
    });
}

export default loadMore;
