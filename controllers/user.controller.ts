import { NextFunction, Request, Response } from 'express';
import { userService } from '../services';
import {StatusCodesEnum} from '../constants';

const { createUser } = userService;
const { CREATED } = StatusCodesEnum;

export const userController = {
  register: async (req: Request, res: Response, next: NextFunction) => {

    await createUser({ ...req.body });

    res
      .status(CREATED)
      .json({ token: 'adsfsg' });
  }
};
