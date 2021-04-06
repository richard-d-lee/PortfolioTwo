// server.jsx
const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static('../client/dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser

// If you had to handle requests on the server side, this is where that would occur

// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});