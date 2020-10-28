const mongoose = require('mongoose');

const { Schema } = mongoose;

const opportunitySchema = new Schema({
  name: String, //name of oopertunity
  description: String,
  organization: Schema.Types.ObjectId, //org email
  rating: String,

});

module.exports = mongoose.model('Opportunity', opportunitySchema);
