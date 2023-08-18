const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String,
  userId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Task', taskSchema);
