import './Header.css'
import Search from './Search'
import Logo from './Logo'
import Nav from './Nav'
import MobileSearch from './MobileSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return ( 
        <>
        <header className="header">
            <div className="main">
                <div className="firstPartHeader">
                    <Logo />
                    <Search />
                </div>
                <Nav />
                <div className="mobile-header-search-icon">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="mobile-header-hamburger-icon">
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </header>
        <MobileSearch />
        </>
    );
}

export default Header;