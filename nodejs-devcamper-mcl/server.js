const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

//Route files
const bootcamp = require('./routes/bootcamp');

// LOAD ENV
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB()

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


//Mount routes
app.use('/api/v1/bootcamp', bootcamp);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT, 
  console.log( `Server running in ${ process.env.NODE_ENV } mode on port ${PORT}` )
);

//Handle rejections
process.on('unhandledRejection', (err,promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
