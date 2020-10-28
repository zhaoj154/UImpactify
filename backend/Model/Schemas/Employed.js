const mongoose = require('mongoose');

const { Schema } = mongoose;

const employedSchema = new Schema({
  OpportunityId: Schema.Types.ObjectId,  
  employed: Schema.Types.ObjectId //room to expand if more information is needed (ex: Completion, Grades, progress)
});

module.exports = mongoose.model('Employed', employedSchema);
