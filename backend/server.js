// MODULES
import express from 'express';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
//TODO: CREATE ENVIRONMENT CHECK
const config = require('./config.dev.json');
import dotenv from 'dotenv';
dotenv.config();

// create port 
const port = config.port

// create an express server
const app = express();

// parse incoming req to JSON payload
app.use(express.json());

// // parse incoming requests with URL-encoded payloads
// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ message: "API is running"})
});

app.post('/authenticate', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

// starter port
app.listen(port, () => {
  console.log(`Server has started on PORT: ${port}`);
})
