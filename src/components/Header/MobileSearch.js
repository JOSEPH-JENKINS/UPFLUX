import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function MobileSearch() {
    return (
        <div className="mobile-search-form">
            <form className="mobile-search-entry-form">
                <input type="search" placeholder='Try "Physics Career Advice"' />
                <div className="search-icon">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </form>
        </div>
    );
}

export default MobileSearch;