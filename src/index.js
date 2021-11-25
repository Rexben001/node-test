const express = require('express');
const app = express();
const { User, connectWithRetry } = require('./models');
const PORT = process.env.PORT || 4100;

app.use(express.json());

connectWithRetry();

// mongoose.connect('mongodb://mongo:27017/test_mongo');
// mongoose.connect('mongodb://localhost/test_mongo');

app.get('/', (req, res) => res.send('API is live!!'));

app.get('/users', async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).send(error);
  }
});

app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).send(error);
  }
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));
