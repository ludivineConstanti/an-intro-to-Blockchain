require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

const apiRouter = require('./app/router');

// on rajoute la gestion des POST body
app.use(express.urlencoded({extended: true}));

app.use('/v1', apiRouter);

app.listen(port, () => console.log(`Server listenning on http://localhost:${port}`))