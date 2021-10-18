import { PopulatedDoc } from 'mongoose';

import { IUser } from './user.model';

export interface IAuth {
  token: string,
  user: string | PopulatedDoc<IUser>
}
