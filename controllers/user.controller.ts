import { NextFunction, Request, Response } from 'express';
import { authService, jwtService, passwordService, userService } from '../services';
import { StatusCodesEnum } from '../constants';
import { documentUtil } from '../utils';
import { IExtendedRequest } from '../models';

const { createUser } = userService;
const { generateToken } = jwtService;
const { createAuthToken } = authService;
const { hashPassword, comparePasswords } = passwordService;
const { normalizeDocument } = documentUtil;
const { CREATED, SUCCESS } = StatusCodesEnum;

export const userController = {
  register: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { password } = req.body;

      const hashedPassword = await hashPassword(password);

      const user = await createUser({ ...req.body, password: hashedPassword });

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

  login: async (req: IExtendedRequest, res: Response, next: NextFunction) => {
    try {
      const { user } = req;
      const { password } = req.body;

      await comparePasswords(password, user.password);

      const token: string = generateToken();

      await createAuthToken(token, user._id);

      res
        .status(SUCCESS)
        .json({ token });

    } catch (e) {
      next(e);
    }
  }
};
