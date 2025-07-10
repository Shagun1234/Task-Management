const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/TaskController');
const { taskCreateValidation, taskUpdateValidation } = require('../middleware/validate');
const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.use(auth);
router.post('/', validate, createTask);
router.get('/', getTasks);
router.put('/:taskId', taskUpdateValidation, validate, updateTask);
router.delete('/:taskId', deleteTask);

module.exports = router;
