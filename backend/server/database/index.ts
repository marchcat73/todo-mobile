import mongoose from 'mongoose';
import { connectDatabaseOptions } from '../database/utils/index.js';
import { MONGO_DB_URL } from '../constants/index.js';
import task from './models/task.js';

task;

export const connectDatabase = async (): Promise<void> => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(MONGO_DB_URL, connectDatabaseOptions);
    console.info('Mongodb connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
