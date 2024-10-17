import { Link, useLoaction } from 'react-router-dom';

function Header() {
    const location = useLocation();
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
