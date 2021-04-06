import React, { useState } from 'react';

function Banner(props) {
  return (
    <div className="banner" onClick={props.return}>
      <center>
        <label id="name" onClick={props.return}>Richard Lee | Denver, CO </label>
      </center>
      <center>
        <label id="name" onClick={props.return}>Open to relocation!</label>
      </center>
    </div>
  )
}

export default Banner;