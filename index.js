const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./app/routes/authRoutes');
const taskRoutes = require('./app/routes/taskRoutes');
const userRoutes = require('./app/routes/userRoutes');
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors())

mongoose.connect('mongodb://saad:123@cluster0-shard-00-00.egvy9.mongodb.net:27017,cluster0-shard-00-01.egvy9.mongodb.net:27017,cluster0-shard-00-02.egvy9.mongodb.net:27017/as_decor?ssl=true&replicaSet=atlas-n778ub-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);