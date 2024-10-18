import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
    const currentPage = useLocation().pathname;

    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <a href="https://github.com/JB0341" target="_blank" rel="no opener noreferrer">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jeremy-brown-21a5bb174/" target="_blank" rel="no opener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
