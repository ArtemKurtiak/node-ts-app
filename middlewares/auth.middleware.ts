import { NextFunction, Request, Response } from 'express';

import { Auth } from '../database';
import { jwtService } from '../services';
import { IExtendedRequest } from '../models';

const { verifyToken } = jwtService;

export const authMiddleware = {
  checkAuthToken: async (req: IExtendedRequest, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization.split(' ')[1];

      verifyToken(token);

      const auth = await Auth.findOne({ token });

      req.auth = auth;

      next();
    } catch (e) {
      next(e);
    }
  }
};
