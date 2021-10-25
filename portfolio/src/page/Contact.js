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
                    <div className="grid">
                        <a href="mailto:thebleufox8@gmail.com">
                            <div className="project">
                                <h3>Email</h3>
                                <h2>thebleufox8@gmail.com</h2>
                            </div>
                        </a>
                        <a href="https://github.com/bleufox" target="blank" rel="noreferrer">
                            <div className="project">
                                <h3>GitHub</h3>
                                <h2>@bleufox</h2>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/bleufox/" target="blank" rel="noreferrer">
                            <div className="project">
                                <h3>LinkedIn</h3>
                                <h2>@bleufox</h2>
                            </div>
                        </a>
                        <a href="https://drive.google.com/file/d/1upQ6iPjUo1oXvPEMFhn8QCgEl-7bJ3Cl/view?usp=sharing" target="blank" rel="noreferrer">
                            <div className="project">
                                <h3>Resume</h3>
                            </div>
                        </a>
                        <a href="mailto:thebleufox8@gmail.com">
                            <div className="project">
                                <h3>LinkedIn</h3>
                                <h2>thebleufox8@gmail.com</h2>
                            </div>
                        </a>
                        <a href="mailto:thebleufox8@gmail.com">
                            <div className="project">
                                <h3>LinkedIn</h3>
                                <h2>thebleufox8@gmail.com</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Projects;