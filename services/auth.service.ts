import { Auth } from '../database';

export const authService = {
  createAuthToken: async (token: string, userId: string) => {
    await Auth.create({ token, user: userId });
  }
};
