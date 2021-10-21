function Nav() {
    return (
        <div className="navLinks">
            <nav>
                <ul>
                    <li><a href="/">How it Works</a></li>
                    <li><a href="/">Find a Mentor</a></li>
                </ul>
            </nav>
            <div className="headerButtons">
                <div className="button">
                    <a href="/">Sign In</a>
                </div>
                <div className="button alternate">
                    <a href="/">Sign Up</a>
                </div>
            </div>
        </div>
    );
}

export default Nav;