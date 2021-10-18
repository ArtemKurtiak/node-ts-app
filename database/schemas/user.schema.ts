import { Document, model, Model, Schema } from 'mongoose';

import { IUser } from '../../models';
import {DbTablesEnum} from '../../constants';

const { USER } = DbTablesEnum;

type UserType = IUser & Document;

const UserSchema: Schema = new Schema<IUser>({
  username: {
    type: String,
    trim: true,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const User: Model<UserType> = model<UserType>(USER, UserSchema);
