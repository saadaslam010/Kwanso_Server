const express = require('express');
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.use(authMiddleware.authenticate);

router.post('/create-task', taskController.createTask);
router.get('/list-tasks', taskController.listTasks);
router.post('/delete-bulk-tasks', taskController.deleteBulkTasks);

module.exports = router;
