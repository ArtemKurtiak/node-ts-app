import { NextFunction, Request, Response } from 'express';
import { authService, jwtService, userService } from '../services';
import { StatusCodesEnum } from '../constants';
import { documentUtil } from '../utils';
import { IExtendedRequest } from '../models';

const { createUser } = userService;
const { generateToken } = jwtService;
const { CREATED } = StatusCodesEnum;
const { normalizeDocument } = documentUtil;
const { createAuthToken } = authService;

export const userController = {
  register: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await createUser({ ...req.body });

      const token: string = generateToken();

      await createAuthToken(token, user._id);

      const normalizedUser = normalizeDocument(user.toJSON());

      res
        .status(CREATED)
        .json({ user: normalizedUser, token });
    } catch (e) {
      next(e);
    }
  },

  login: (req: IExtendedRequest, res: Response, next: NextFunction) => {
    try {

    } catch (e) {
      next(e);
    }
  }
};
