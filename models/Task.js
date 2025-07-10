const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  userId: Number,
  title: String,
  description: String,
  dueDate: Date,
  status: { type: String, enum: ['Pending', 'In Progress', 'Completed'] },
  priority: { type: String, enum: ['Low', 'Medium', 'High'] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', TaskSchema);


