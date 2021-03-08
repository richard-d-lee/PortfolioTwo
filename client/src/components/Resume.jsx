import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';    

function Resume(props) {
    return (
        <div className="resume">
            <center>
                <Button onClick={() => { console.log('hallo') }} variant="light" size="lg" href="https://drive.google.com/uc?id=1Lkc8UWqKGRWODuUSSdzWcda7vUeCE-lO&export=download">Download Resume</Button>
            </center>
        </div>
    )
}

export default Resume;