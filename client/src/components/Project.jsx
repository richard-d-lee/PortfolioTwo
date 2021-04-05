import React, { useState } from 'react';
import youtube from './images/youtube.png';
import github from './images/github.png';

function Project(props) {
    return (
        <div>
            <div className="project">
                <div id="project-title">
                    <p id="project-title-text">
                        <center>
                            {props.title}
                        </center>
                    </p>
                </div>
                <img id="project-gif" src={props.gif}></img>
                <div id="my-description">
                    <center>
                        <label id="project-description">{props.description}</label>
                    </center>
                </div>
                <div className="project-links">
                    <a target="_blank" rel="noopener noreferrer" href={props.youtube}>
                        <img id='youtube' src={youtube} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={props.github}>
                        <img id='github-two' src={github} />
                    </a>
                </div>
            </div>
        </ div>
    )
}

export default Project;