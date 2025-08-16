const mongoose = require('mongoose');

let isConnected = false; // Track the connection status

const initializeMongo = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected.');
    return mongoose;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB connected', { tags: 'mongo' });

    mongoose.connection.on('disconnected', () => {
      isConnected = false;
      console.log('MongoDB disconnected', { tags: 'mongo' });
    });

    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB error: ${err.message}`, { tags: 'mongo' });
    });

    return mongoose;
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`, { tags: 'mongo' });
    throw error;
  }
};

module.exports = { initializeMongo, mongoose };
