import { NextFunction, Response } from 'express';

import { CustomError } from '../errors';
import { IExtendedRequest } from '../models';
import { RolesEnum } from '../constants/enums/roles.enum';
import { StatusCodesEnum } from '../constants';

const { FORBIDDEN } = StatusCodesEnum;

export const roleMiddleware = {
  checkUserRole: (roleToBe: RolesEnum) => (req: IExtendedRequest, res: Response, next: NextFunction) => {
    try {
      const { role } = req.auth.user;

      if (role !== roleToBe) {
        throw new CustomError('Forbidden', FORBIDDEN);
      }

      next();
    } catch (e) {
      next(e);
    }
  }
};
