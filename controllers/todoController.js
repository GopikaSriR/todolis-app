const Todo = require('../models/Todo');

const createTodo = async (req, res) => {
  const { title, description } = req.body;
  const todo = new Todo({
    userId: req.userId,
    title,
    description
  });
  await todo.save();
  res.status(201).json(todo);
};

const getTodo = async (req, res) => {
  const todo = await Todo.find({ userId: req.userId });
  res.json(todo);
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const todo = await Todo.findOneAndUpdate({ _id: id, userId: req.userId }, { title, description, completed }, { new: true });
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findOneAndDelete({ _id: id, userId: req.userId });
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json({ message: 'Todo deleted' });
};

module.exports = { createTodo, getTodo, updateTodo, deleteTodo };
