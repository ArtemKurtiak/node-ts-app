import jwt from 'jsonwebtoken';

import { config } from '../config';
import { CustomError } from '../errors';
import { StatusCodesEnum } from '../constants';

const { JWT_SECRET, JWT_EXPIRES_IN } = config;
const { UNAUTHORIZED } = StatusCodesEnum;

export const jwtService = {
  generateToken: () => {
    const token: string = jwt.sign({}, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    return token;
  },

  verifyToken: (token: string) => {
    try {
      jwt.verify(token, JWT_SECRET);
    } catch (e) {
      throw new CustomError('Invalid JWT token', UNAUTHORIZED);
    }
  }
};
