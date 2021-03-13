import React, { useState } from 'react';

function Banner(props) {
  return (
    <div className="banner" onClick={props.return}>
      <center>
        <label id="name" onClick={props.return}>Richard Lee | Denver, CO | Open to remote work or relocation.</label>
      </center>
      <center>
        <label id="name" onClick={props.return}>Node.js, React, SQL and no-SQL, AWS</label>
      </center>
    </div>
  )
}

export default Banner;