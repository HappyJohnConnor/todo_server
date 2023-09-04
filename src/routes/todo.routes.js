import express from 'express';
import controller from '../controllers/todo.contoller';

const router = express.Router();
const { authJwt } = require('../middleware');

router.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-type, Accept'
  );
  next();
});

router.get('/all', [ authJwt.verifyToken ], controller.getAllTodo);
router.post('/create', [ authJwt.verifyToken ], controller.createTodo);
router.get('/get', [ authJwt.verifyToken ], controller.getTodoById);
router.post('/update', [ authJwt.verifyToken ], controller.updateTodoById);
router.delete('/delete', [ authJwt.verifyToken ], controller.deleteTodo);

module.exports = router;
