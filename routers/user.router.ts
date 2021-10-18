const router = require('express').Router();

import { userMiddleware } from '../middlewares';
import { userController } from '../controllers';

const { register, login } = userController;
const { findUserByParam, checkUserNotExists, checkUserExists } = userMiddleware;

router.post('/sign_up',
  findUserByParam('email', 'body', 'email'),
  checkUserNotExists,
  register);

router.post('/login',
  findUserByParam('email', 'body', 'email'),
  checkUserExists,
  login);

export const userRouter = router;
