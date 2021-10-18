import bcrypt from 'bcrypt';

import { CustomError } from '../errors';
import { StatusCodesEnum } from '../constants';

const { BAD_REQUEST } = StatusCodesEnum;

export const passwordService = {
  hashPassword: async (password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    return hashedPassword;
  },

  comparePasswords: async (password: string, hash: string) => {
    const matched = await bcrypt.compare(password, hash);

    if (!matched) {
      throw new CustomError('Invalid credentials', BAD_REQUEST);
    }
  }
};
