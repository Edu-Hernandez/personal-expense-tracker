const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const transactionRoutes = require('./src/interfaces/transaction/transactionRoutes');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/transactions', transactionRoutes);

app.listen(PORT, () => {console.log(`🚀 Backend running on port ${PORT}`)});