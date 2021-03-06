const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect to the database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Api is running'));

//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/courses', require('./routes/courses'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${5000}`));
