import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
                                Resume
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

