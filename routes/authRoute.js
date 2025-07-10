const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/AuthController');
const { registerValidation } = require('../middleware/validate');
const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.post('/register', registerValidation, validate, register);
router.post('/login', registerValidation, validate, login);

module.exports = router;
