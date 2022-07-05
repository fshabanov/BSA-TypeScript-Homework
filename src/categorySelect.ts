import { Category } from './@types/IMovie';
import { fetchAll } from './fetching/fetchAll';
import { setPage } from './loadMore';
import renderMovies from './rendering/renderMovies';

let category: Category | '' = Category.Popular;

function setCategory(newCategory: Category | ''): void {
    category = newCategory;
    setPage(1);
    // '' for search requests (no category)
    if (category !== '') {
        // when category changes, fetch first page for the category
        fetchAll(category, 1).then((movies) => {
            renderMovies(movies, true);
        });
    }
}

function listenForCategoryChange(): void {
    const popular: HTMLInputElement = document.getElementById(
        'popular'
    ) as HTMLInputElement;
    popular.onclick = () => {
        // if prev category is not the same with the new
        // to prevent fetching the same data again
        if (popular.checked && category !== Category.Popular) {
            setCategory(Category.Popular);
        }
    };

    const upcoming: HTMLInputElement = document.getElementById(
        'upcoming'
    ) as HTMLInputElement;
    upcoming.onclick = () => {
        if (upcoming.checked && category !== Category.Upcoming) {
            setCategory(Category.Upcoming);
        }
    };

    const topRated: HTMLInputElement = document.getElementById(
        'top_rated'
    ) as HTMLInputElement;
    topRated.onclick = () => {
        if (topRated.checked && category !== Category.TopRated) {
            setCategory(Category.TopRated);
        }
    };
}

export { category, setCategory, listenForCategoryChange };
