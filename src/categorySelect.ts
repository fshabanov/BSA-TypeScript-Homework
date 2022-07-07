import { Category } from './@types/IMovie';
import clearInput from './clearInput';
import { fetchAll } from './fetching/fetchAll';
import { setSearch, search } from './handleSearch';
import { setPage } from './loadMore';
import renderMovies from './rendering/renderMovies';

let category: Category = Category.Popular;

function setCategory(newCategory: Category): void {
    category = newCategory;
    setPage(1);
    // when category changes, fetch first page for the category
    fetchAll(category, 1).then((movies) => {
        renderMovies(movies, true);
    });
}

function listenForCategoryChange(): void {
    const popular: HTMLInputElement = document.getElementById(
        'popular'
    ) as HTMLInputElement;
    popular.onclick = () => {
        // if prev category is not the same with the new
        // to prevent fetching the same data again
        // if the previous request was for search, fetch category data on click
        if ((popular.checked && category !== Category.Popular) || search) {
            setCategory(Category.Popular);
        }
        clearInput();
        setSearch(false);
    };

    const upcoming: HTMLInputElement = document.getElementById(
        'upcoming'
    ) as HTMLInputElement;
    upcoming.onclick = () => {
        if ((upcoming.checked && category !== Category.Upcoming) || search) {
            setCategory(Category.Upcoming);
        }
        clearInput();
        setSearch(false);
    };

    const topRated: HTMLInputElement = document.getElementById(
        'top_rated'
    ) as HTMLInputElement;
    topRated.onclick = () => {
        if ((topRated.checked && category !== Category.TopRated) || search) {
            setCategory(Category.TopRated);
        }
        clearInput();
        setSearch(false);
    };
}

export { category, setCategory, listenForCategoryChange };
