import { IUser } from '../models';
import { User } from '../database';

export const userService = {
  createUser: (data: Partial<IUser>): Promise<IUser> => {
    const user = new User(data);

    return user.save();
  }
};
