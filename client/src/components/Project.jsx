import React, { useState } from 'react';
import gif from './images/giphy.gif';
import Button from 'react-bootstrap/Button';

function Project(props) {
    return (
        <div>
            <div className="project">
                <div id="project-title">
                    <p id="project-title-text">
                        <center>
                            Title
                    </center>
                    </p>
                </div>
                <img id="project-gif" src={gif}></img>
                <center>
                    <label id="project-description">These are my projects!</label>
                </center>
            </div>
        </ div>
    )
}

export default Project;