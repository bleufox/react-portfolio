import React from 'react';

function NavBar({ currentPage, handlePageChange }) {

    return (
        <section class='navbar-container'>
            <div class="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item"><span>
                        <a
                            href="#aboutme"
                            onClick={() => handlePageChange('AboutMe')}
                            className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </span>
                    </li>
                    <li className="nav-item"><span>
                        <a
                            href="#projects"
                            onClick={() => handlePageChange('Projects')}
                            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                        >
                            Projects
                        </a>
                    </span>
                    </li>
                    <li className="nav-item"><span>
                        <a
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </a>
                    </span>
                    </li><li className="nav-item">
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default NavBar;