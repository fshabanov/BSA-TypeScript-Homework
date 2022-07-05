import { setCategory } from './categorySelect';
import fetchSearch from './fetching/fetchSearch';
import { setPage } from './loadMore';
function handleSearch(e: SubmitEvent): void {
    e.preventDefault();
    fetchSearch();
    setCategory('');
    setPage(1);
}

export default handleSearch;
