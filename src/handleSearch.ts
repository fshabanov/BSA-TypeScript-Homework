import fetchSearch from './fetching/fetchSearch';
import { setPage } from './loadMore';

let search = false;

function setSearch(value: boolean): void {
    search = value;
}

function handleSearch(e: Event): void {
    e.preventDefault();
    fetchSearch();
    setSearch(true);
    setPage(1);
}

export default handleSearch;
export { search, setSearch };
