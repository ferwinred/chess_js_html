const express = require('express');
const router = require('./components');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, 'public/index.html'))
})
app.use('/api', router);

module.exports = app;
