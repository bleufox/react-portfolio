import React from 'react';

function Cards({ name, description, id }) {
    return (
        <a href="https://trails-or-fails-app.herokuapp.com/" target="_blank" rel="noreferrer">
            <div class="project">
                <h3>
                    {name}
                    <h4>{description}</h4>
                </h3>
            </div>
        </a>
    )
}

export default Cards;