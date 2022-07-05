import { Category } from './@types/IMovie';
import { fetchAll } from './fetchAll';
import renderMovies from './renderMovies';

let category: Category | '' = Category.Popular;

function setCategory(newCategory: Category | ''): void {
    category = newCategory;
    // '' for search requests (no category)
    if (category !== '') {
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
