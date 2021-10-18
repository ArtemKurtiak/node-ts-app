import { Request } from 'express';
import { IUser } from './user.model';
import { IAuth } from './auth.model';

export interface IExtendedRequest extends Request {
  user?: IUser,
  auth?: IAuth
}
