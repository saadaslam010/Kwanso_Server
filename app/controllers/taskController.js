const taskService = require('../services/taskService');

exports.createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body, req.user.id);
    res.json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listTasks = async (req, res) => {
  try {
    const tasks = await taskService.listTasks(req.user.id);
    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBulkTasks = async (req, res) => {
  const { taskIds } = req.body;

  try {
    await taskService.deleteBulkTasks(taskIds);
    res.status(200).json({ message: 'Tasks deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
