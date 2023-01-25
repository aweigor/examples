const express = require('express');
const dotenv = require('dotenv');

//Route files
const bootcamp = require('./routes/bootcamp');

// LOAD ENV
dotenv.config({ path: './config/config.env' });

const app = express();

//Mount routes
app.use('/api/v1/bootcamp', bootcamp);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log( `Server running in ${ process.env.NODE_ENV } mode on port ${PORT}` ));