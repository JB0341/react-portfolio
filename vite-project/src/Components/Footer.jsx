import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const currentPage = useLocation().pathname;

  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <h5 className="text-uppercase">Connect with Me</h5>
            <nav>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://github.com/JB0341"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark text-decoration-none"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jeremy-brown-21a5bb174/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark text-decoration-none"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-dark text-white">
        © {new Date().getFullYear()} Jeremy Brown. All rights reserved.
      </div>
    </footer>
  );
}
