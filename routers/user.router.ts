const router = require('express').Router();

import {userMiddleware} from '../middlewares';
import { userController } from '../controllers';

const { register } = userController;
const { findUserByParam, checkUserNotExists } = userMiddleware;

router.post('/sign_up',
  findUserByParam('email', 'body', 'email'),
  checkUserNotExists,
  register);

export const userRouter = router;
