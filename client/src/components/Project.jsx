import React, { useState } from 'react';
import youtube from './images/youtube.png';
import github from './images/github.png';
import background from './images/background.jpg'

function Project(props) {
    return (
        <div className="full-project" style={{ 'backgroundImage': `url(${background})` }}>
            <div className="project">
                <div id="one-project-title">
                    <p id="project-title-text">
                        <center>
                            {props.title}
                        </center>
                    </p>
                </div>
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
            <div className="gif-and-return">
                <div id="last-one-project-title" onClick={props.return}>
                    <p id="project-title-text">
                        <center>
                            {'Return to Projects'}
                        </center>
                    </p>
                </div>
                <img id="last-project-gif" src={props.gif}></img>
            </div>
        </ div>
    )
}

export default Project;