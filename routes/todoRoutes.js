const express = require('express');
const { createTodo, getTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.post('/todo', authenticate, createTodo);
router.get('/todo', authenticate, getTodo);
router.put('/todo/:id', authenticate, updateTodo);
router.delete('/todo/:id', authenticate, deleteTodo);

module.exports = router;
