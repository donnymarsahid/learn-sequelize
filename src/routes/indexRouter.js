const express = require('express');
const router = express.Router();

const { getTodos, addTodos, updateTodos } = require('../controllers/todo');

router.get('/todos', getTodos);
router.post('/todos', addTodos);
router.put('/todos/:id', updateTodos);

module.exports = router;
