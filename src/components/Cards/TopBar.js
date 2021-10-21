import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function TopBar() {
    return (
        <div className="topBar">
            <div className="card-search-form">
                <form className="card-search-entry-form">
                    <div className="search-input">
                        <input type="search" placeholder='Try "Physics Career Advice"' />
                        <div className="card-search-icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                    <div className="dropdown-input">
                        <select name="subject-input" id="subject-input">
                            <option value="Subject">Subject</option>
                            <option value="Subject">Subject</option>
                            <option value="Subject">Subject</option>
                        </select>
                    </div>
                    <div className="dropdown-input">
                        <select name="subject-input" id="subject-input">
                            <option value="Areas of Interest">Areas of Interest</option>
                            <option value="Areas of Interest">Areas of Interest</option>
                            <option value="Areas of Interest">Areas of Interest</option>
                        </select>
                    </div>
                </form>
            </div>
            <div className="results-data">
                <p className="results-number">126 results</p>
                <div className="sort-results">
                    <select name="sort-results" id="subject-input">
                        <option value="sort-results">Sort Results</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default TopBar;