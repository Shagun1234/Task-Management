const { body } = require('express-validator');

const registerValidation = [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
];

// Full validation for task creation
const taskCreateValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('dueDate').isISO8601().withMessage('Due date must be in ISO8601 format'),
  body('status').isIn(['Pending', 'In Progress', 'Completed']).withMessage('Invalid status'),
  body('priority').isIn(['Low', 'Medium', 'High']).withMessage('Invalid priority'),
];

// Partial validation for task update
const taskUpdateValidation = [
  body('status')
    .optional()
    .isIn(['Pending', 'In Progress', 'Completed'])
    .withMessage('Invalid status'),
  body('priority')
    .optional()
    .isIn(['Low', 'Medium', 'High'])
    .withMessage('Invalid priority'),
];
module.exports = {
  registerValidation,
  taskCreateValidation,
  taskUpdateValidation
};