require('dotenv').config();
const express = require('express');
const app = express();
const { mysqlPool } = require('./db/connection');

const authRoutes = require('./routes/authRoute');
const taskRoutes = require('./routes/taskRoute');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
