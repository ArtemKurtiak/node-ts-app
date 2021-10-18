import { IUser } from '../models';
import { User } from '../database';
import { Document } from 'mongoose';

export const userService = {
  createUser: (data: Partial<IUser>): Promise<IUser & Document> => {
    const user = new User(data);

    return user.save();
  }
};
