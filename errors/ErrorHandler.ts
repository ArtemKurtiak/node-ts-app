import { NextFunction, Request, Response } from 'express';

import { ICustomError } from '../models';
import { StatusCodesEnum } from '../constants';

const { SERVER_ERROR } = StatusCodesEnum;

export const _errorHandler = (err: ICustomError, req: Request, res: Response, _: NextFunction) => {
  const { message = 'Server error', status = SERVER_ERROR } = err;

  res
    .status(status)
    .json({ message });
};
