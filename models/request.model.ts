import { Request } from 'express';
import { IUser } from './user.model';

export interface IExtendedRequest extends Request {
  user?: IUser
}
