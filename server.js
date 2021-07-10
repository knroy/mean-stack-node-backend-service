const express = require('express');
const welcome = require('./welcome');
const upload = require('./upload');

const app = express();
const port = process.env.PORT || 3000;

// welcome module init
welcome(app);
// file upload module init
upload(app);

// listening to server / initialization of server
app.listen(port, () => {
    console.log(`node server is running on http://localhost:${port}`);
})
