const express = require('express');

const  { 
  getBootcamps, 
  createBootcamp, 
  updateBootcamp, 
  deleteBootcamp, 
  getBootcamp, 
  getBootcampsInRadius 
} = require( '../controllers/bootcamps' );

// Include other resourse routers
const courseRouter = require('./courses');

const router = express.Router();

// Re-route into other resourse routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp)

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp)


module.exports = router