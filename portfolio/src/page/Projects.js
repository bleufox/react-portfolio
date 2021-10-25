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
                                <h2>Heroku App</h2>
                            </div>
                        </a>
                        <a href="https://piano-on-the-go.herokuapp.com/" target="_blank" rel="noreferrer">
                            <div class="project">
                                <h3>Piano on the Go!</h3>
                                <h2>Heroku App</h2>
                            </div>
                        </a>
                        <a href="https://bleufox.github.io/BleusDayPlanner/" target="_blank" rel="noreferrer">
                            <div class="project">
                                <h3>Bleu's Day Planner</h3>
                                <h2>jQuery</h2>
                            </div>
                        </a>
                        <a href="https://bleufox.github.io/Personal-Library/" target="_blank" rel="noreferrer">
                            <div class="project">
                                <h3>Personal Library</h3>
                                <h2>API</h2>
                            </div>
                        </a>
                        <a href="https://bleufox.github.io/BleusEmployeeTracker/" target="_blank" rel="noreferrer">
                            <div class="project">
                                <h3>Employee Tracking System</h3>
                                <h2>SQL</h2>
                            </div>
                        </a>
                        <a href="https://github.com/bleufox/BleusNoteTaker" target="_blank" rel="noreferrer">
                            <div class="project">
                                <h3>Note Taker</h3>
                                <h2>Express Server</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Projects;