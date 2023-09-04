import { v4 as uuidv4 } from 'uuid';
import db from '../models';

const Todo = db.todo;

exports.getAllTodo = (req, res) => {
  Todo.findAll({
    where: {
      createdBy: req.query.createdBy,
    },
  }).then((todos) => {
    res.status(200).send(todos);
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });
};

exports.createTodo = (req, res) => {
  const todoData = req.body;
  Todo.create({
    id: uuidv4(),
    title: todoData.title,
    alerm: null,
    createdBy: todoData.createdBy,
  }).then((todo) => {
    res.json(todo);
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });
};

exports.getTodoById = (req, res) => {
  Todo.findByPk(req.body.id).then((item) => {
    if (!item) {
      return res.status(404).send({ message: 'Todo not found' });
    }
    res.status(200).send(item);
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });
};

// POST /todo/update
exports.updateTodoById = (req, res) => {
  const todoData = req.body;
  Todo.findByPk(req.body.id).then((todo) => {
    if (todo === null) {
      res.status(500).send('Todo was not found');
    }
    todo.update({ ...todoData });
    res.status(200).send(todo);
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });
};

// DELETE /todo/delete
exports.deleteTodo = (req, res) => {
  Todo.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((response) => {
      res.status(200).send(response.toString());
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
