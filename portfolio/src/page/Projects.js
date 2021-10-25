import React from 'react';

function Projects() {
    return (
        <React.Fragment>
            <section id="portfolio" className="projects">
                <div className="container">
                    <div className="grid">
                        <a href="https://trails-or-fails-app.herokuapp.com/" target="_blank" rel="noreferrer">
                            <div className="project">
                                <h3>Trails or Fails</h3>
                            </div>
                        </a>
                        <a href="https://piano-on-the-go.herokuapp.com/" target="_blank" rel="noreferrer">
                            <div class="project">
                                <h3>Piano on the Go!</h3>
                            </div>
                        </a>
                        <a href="https://gibsona475.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
                            <div class="project">
                                <h3>
                                    Weather <br /> Dashboard
                                    <h4>(Search by city weather info)</h4>
                                </h3>
                            </div>
                        </a>
                        <a href="https://www.canva.com/design/DAEN1jAJqSg/jTxJa3Q8JYvuq1z2B2lNAQ/view?utm_content=DAEN1jAJqSg&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank" rel="noreferrer">
                            <div class="project">
                                <h3>
                                    My <br /> Resume
                                    <h4>(My up to date resume )</h4>
                                </h3>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/anthony-gibson-aaa7aa157/" target="_blank" rel="noreferrer">
                            <div class="project">
                                <h3>
                                    My <br /> LinkedIn
                                    <h4>(My up to date LinkedIn)</h4>
                                </h3>
                            </div>
                        </a>
                        <a href="https://github.com/gibsona475" target="_blank" rel="noreferrer">
                            <div class="project">
                                <h3>
                                    My <br /> GitHub
                                    <h4>(My up to date GitHub)</h4>
                                </h3>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Projects;