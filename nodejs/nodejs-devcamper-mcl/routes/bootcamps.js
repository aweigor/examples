const express = require('express');

const  { 
  getBootcamps, 
  createBootcamp, 
  updateBootcamp, 
  deleteBootcamp, 
  getBootcamp, 
  getBootcampsInRadius,
  bootcampPhotoUpload
} = require( '../controllers/bootcamps' );

const Bootcamp = require('../models/Bootcamp');
const advancedResults = require('../middleware/advancedResults');

// Include other resourse routers
const courseRouter = require('./courses');
const reviewRouter = require('./reviews');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

// Re-route into other resourse routers
router.use('/:bootcampId/courses', courseRouter);
router.use('/:bootcampId/reviews', reviewRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);
router.route('/:id/photo').put(protect, authorize('publisher', 'admin'), bootcampPhotoUpload);
router
  .route('/')
  .get(advancedResults(Bootcamp, 'courses'), getBootcamps)
  .post(protect,authorize('publisher', 'admin'),createBootcamp)
router
  .route('/:id')
  .get(getBootcamp)
  .put(protect,authorize('publisher', 'admin'),updateBootcamp)
  .delete(protect,authorize('publisher', 'admin'),deleteBootcamp)


module.exports = router