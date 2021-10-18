import { NextFunction, Response } from 'express';

import { User } from '../database';
import {IExtendedRequest, IUser } from '../models';
import { CustomError } from '../errors';
import { StatusCodesEnum } from '../constants';

const { CONFLICT, NOT_FOUND } = StatusCodesEnum;

export const userMiddleware = {
  findUserByParam: (paramName: string, reqObject: string, dbName: string = paramName) => {

    return async (req: IExtendedRequest, res: Response, next: NextFunction) => {
      try {
        const paramValue = req[reqObject][paramName];

        const user: IUser | null = await User.findOne({ [dbName]: paramValue });

        req.user = user;

        next();
      } catch (e) {
        next(e);
      }
    };

  },

  checkUserNotExists: (req: IExtendedRequest, res: Response, next: NextFunction) => {
    try {
      const { user } = req;

      if (user) {
        throw new CustomError('Email already in use', CONFLICT);
      }

      next();
    } catch (e) {
      next(e);
    }
  }
};
