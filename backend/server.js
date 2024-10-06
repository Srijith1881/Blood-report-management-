import  bloodRequestRoutes from "./routes/bloodRequestRoutes"
const express = require('express');
const cors = require('cors'); // Add this
const dbConn = require('./config/db');
require('dotenv').config();

const app = express();
app.use(express.json());

const corsconfig = {
    origin: process.env.CORSURL
  };
app.use(cors(corsconfig))

// Routes
app.use('/api/blood-request', bloodRequestRoutes);

const port = process.env.PORT || 7778;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
