const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// LOAD ENV
dotenv.config({ path: './config/config.env' });

//Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');

// Connect to database
connectDB()

const app = express();

//Body parser
app.use(express.json())

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


//Mount routes
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);

app.use( errorHandler );

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT, 
  console.log( `Server running in ${ process.env.NODE_ENV } mode on port ${PORT}`.yellow.bold )
);

//Handle rejections
process.on('unhandledRejection', (err,promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  server.close(() => process.exit(1));
});
