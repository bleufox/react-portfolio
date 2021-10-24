import React from 'react';

function NavBar({ currentPage, handlePageChange }) {


    return (
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
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
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
    )
}

export default NavBar;