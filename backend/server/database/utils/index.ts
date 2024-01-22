import mongoose from 'mongoose';

export const connectDatabase = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_DB_URL, {
      autoIndex: true,
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4, // Use IPv4, skip trying IPv6
    });
    console.info('Mongodb connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
