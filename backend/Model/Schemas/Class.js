const mongoose = require('mongoose');

const { Schema } = mongoose;

const classSchema = new Schema({
  name: String,
  description: String,
  instructorId: Schema.Types.ObjectId,
  givingGarden: Boolean, 
  rating: String,
});

module.exports = mongoose.model('Class', classSchema);
