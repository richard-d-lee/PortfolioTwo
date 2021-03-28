import React, { useState } from 'react';
import gif from './images/giphy.gif';
import youtube from './images/youtube.png';
import github from './images/github.png'

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
                <div className="project-links">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.duolingo.com/register">
                        <img id='youtube' src={youtube} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.duolingo.com/register">
                        <img id='youtube' src={github} />
                    </a>
                </div>
            </div>
        </ div>
    )
}

export default Project;