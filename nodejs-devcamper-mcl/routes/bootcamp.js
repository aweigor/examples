const express = require('express');

const  { getBootcamps, createBootcamp, updateBootcamp, deleteBootcamp, getBootcamp } = require( '../controllers/bootcamp' )

const router = express.Router();

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