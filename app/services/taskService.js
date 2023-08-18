const Task = require('../models/Task');

exports.createTask = async (taskData, userId) => {
  const task = await Task.create({ ...taskData, userId });
  return { id: task._id, name: task.name };
};

exports.listTasks = async (userId) => {
  const tasks = await Task.find({ userId });
  return tasks.map(task => ({ id: task._id, name: task.name }));
};

exports.deleteBulkTasks = async (taskIds) => {
  try {
    await Task.deleteMany({ _id: { $in: taskIds } });
  } catch (error) {
    throw new Error('An error occurred while deleting tasks');
  }
};
