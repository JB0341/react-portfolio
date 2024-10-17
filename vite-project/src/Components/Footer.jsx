import { Link, useLocation } from 'react-router-dom'; 

function Footer() {
    const currentPage = useLocation().pathname;

    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className={currentPage === '/' ? 'active' : ''}>
                            GitHub
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={currentPage === '/about' ? 'active' : ''}>
                            LinkedIn
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className={currentPage === '/projects' ? 'active' : ''}>
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>   
    )
}