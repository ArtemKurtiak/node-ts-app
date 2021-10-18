import { Document, model, Model, Schema } from 'mongoose';

import { IAuth } from '../../models';
import { DbTablesEnum } from '../../constants';

const { USER, AUTH } = DbTablesEnum;

type AuthType = IAuth & Document;

const AuthSchema: Schema = new Schema<IAuth>({
  token: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: USER,
    required: true
  }
});

AuthSchema.pre('findOne', function(): void {
  this.populate(USER);
});

export const Auth: Model<AuthType> = model<AuthType>(AUTH, AuthSchema);
