import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
    return ( 
        <div className="search-form">
            <form className="search-entry-form">
                <input type="search" placeholder='Try "Physics Career Advice"' />
                <div className="search-icon">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </form>
        </div>
    );
}

export default Search;