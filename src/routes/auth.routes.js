import express from 'express';
import { verifySignUp } from '../middleware';
import controller from '../controllers/auth.controller';

const router = express.Router();

router.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept'
  );
  next();
});

router.post(
  '/signup',
  [ verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted ],
  controller.signup
);

router.post('/signin', controller.signin);

module.exports = router;
