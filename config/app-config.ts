export const config = {
  PORT: process.env.PORT || 5000,

  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/typescript_app',

  JWT_SECRET: process.env.JWT_SECRET || 'qazwsxedcrfvtgb',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1w'
};
