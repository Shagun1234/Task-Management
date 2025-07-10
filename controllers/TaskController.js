const Task = require('../models/Task');


exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority, status } = req.body;

    const task = new Task({
      title,
      description,
      dueDate,
      priority,
      status,
      userId: req.user.userId // assuming userId is available in req.user from the authentication token
    });

    await task.save();
    // console.log('Created task:', task);
    // console.log("controller token:", req.user.id);

    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getTasks = async (req, res) => {
  try {
    const { status, priority, dueDate, page = 1, limit = 10} = req.query;

    // Start with filtering by user who is currently logged in
    const filter = { userId: req.user.userId };

    //Filtering based on query parameters
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    if (dueDate) filter.dueDate = { $lte: new Date(dueDate) };

     // Convert page/limit to integers since its in query string
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const skip = (pageNumber - 1) * limitNumber;

    const tasks = await Task.find(filter).skip(skip).limit(limitNumber);
   
    res.json({
      page: pageNumber,
      limit: limitNumber,
      tasks,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.taskId, userId: req.user.userId },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const result = await Task.findOneAndDelete({ _id: req.params.taskId, userId: req.user.userId });
    if (!result) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
