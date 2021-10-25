import React from 'react';

function Projects() {
    return (
        <React.Fragment>
            <div>
                <h1>Ashley Jones</h1>
                <h2>Junior Full Stack Web Developer</h2>
            </div>
            <section id="portfolio" className="projects">
                <div className="container">
                    <div className="contact-grid">
                        <a href="mailto:thebleufox8@gmail.com">
                            <div className="contact-project">
                                <h3>Email</h3>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/bleufox/" target="blank" rel="noreferrer">
                            <div className="contact-project">
                                <h3>LinkedIn</h3>
                            </div>
                        </a>
                        <a href="https://drive.google.com/file/d/1upQ6iPjUo1oXvPEMFhn8QCgEl-7bJ3Cl/view?usp=sharing" target="blank" rel="noreferrer">
                            <div className="contact-project">
                                <h3>Resume</h3>
                            </div>
                        </a>
                        <a href="https://github.com/bleufox" target="blank" rel="noreferrer">
                            <div className="contact-project">
                                <h3>GitHub</h3>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/juniperinwanderland/" target="blank" rel="noreferrer">
                            <div className="contact-project">
                                <h3>Instagram</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Projects;