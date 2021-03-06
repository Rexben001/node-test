const mongoose = require('mongoose');
require('dotenv').config();

const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
};

let UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const connectWithRetry = () => {
  console.log('MongoDB connection with retry', process.env.MONGO_URL);
  mongoose
    .connect(process.env.MONGO_URL, options)
    .then(() => {
      console.log('MongoDB is connected');
    })
    .catch((err) => {
      console.log('err>>>', err);
      console.log('MongoDB connection unsuccessful, retry after 5 seconds.');
      setTimeout(connectWithRetry, 5000);
    });
};

const User = mongoose.model('User', UserSchema);

module.exports = { connectWithRetry, User };
