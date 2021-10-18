import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

import { config } from './config';
import { userRouter } from './routers';
import { _errorHandler } from './errors';

const { PORT, MONGODB_URL } = config;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(MONGODB_URL);

app.use('/api/auth', userRouter);

app.use(_errorHandler);

app.listen(PORT, () => {
  console.log(`App runs at ${PORT}`);
});

