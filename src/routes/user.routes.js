import express from 'express';

const { authJwt } = require('../middleware');
const controller = require('../controllers/user.controller');

const router = express.Router();

router.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-type, Accept'
  );
  next();
});

router.get('/all', controller.allAccess);

router.get('/user', [ authJwt.verifyToken ], controller.userBoard);

router.get(
  '/mod',
  [ authJwt.verifyToken, authJwt.isModerator ],
  controller.moderatorBoard
);

router.get(
  '/admin',
  [ authJwt.verifyToken, authJwt.isAdmin ],
  controller.adminBoard
);

module.exports = router;
