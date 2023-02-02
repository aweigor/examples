const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add a course title']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  weeks: {
    type: String,
    required: [true]
  },
  tuition: {
    type: Number, 
    required: [true]
  },
  minimumSkill: {
    type: String,
    required: [true],
    enum: ['beginner','intermediate','advances']
  },
  scholarshipAvailable: {
    type: Boolean,
    default: false
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  bootcamp: {
    type: mongoose.Schema.ObjectId,
    ref: 'Bootcamp',
    required: true
  }
});

// Static method to get avg cost of course tuition
CourseSchema.statics.updateAverageCost = async function (bootcampId) {

  const obj = await this.aggregate([
    {
      $match: { bootcamp: bootcampId }
    },
    {
      $group: {
        _id: '$bootcamp',
        averageCost: { $avg: '$tuition' }
      }
    }
  ])

  try {
    await this.model('Bootcamp').findByIdAndUpdate(bootcampId, {
      averageCost: Math.ceil(obj[0].averageCost / 10) * 10
    })
  } catch (err) {
    console.error(err);
  }
}

// Call getAverageCost after save
CourseSchema.post('save', function () {
  this.constructor.updateAverageCost(this.bootcamp);
})

// Call getAverageCost before remove
CourseSchema.pre('remove', function () {
  this.constructor.updateAverageCost(this.bootcamp);
})

module.exports = mongoose.model('Course',CourseSchema);