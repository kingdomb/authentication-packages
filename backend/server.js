// MODULES
import 'dotenv/config';
import express from 'express';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cors from 'cors';
import debug from 'debug';
import { createRequire } from 'module'; // Bring in the ability to create the 'require' method
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';
import authProcess from './routes/AuthRoute';

const require = createRequire(import.meta.url); // construct the require method
//TODO: CREATE ENVIRONMENT CHECK
const config = require('./config.dev.json');


// create port
const port = config.port;

// Initialize debug
const debugLogger = debug('app:startup');
debugLogger('SERVER1');

// create an express server
const app = express();

// parse incoming req to JSON payload
app.use(express.json());

app.use(cookieParser())

// Enable CORS for requests from http://localhost:4000
// Allow methods: GET, POST and EX-include credentials
app.use(
  cors({
    origin: ['http://localhost:3001'],
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

// base route
app.use('/api/v1', authProcess)


// 1. Connect to the MongoDB database
// 2. Start server
connectDB()
  .then((urls_database) => {
    app.locals.urls_database = urls_database; // Make the database accessible in the app's locals

    app.listen(port, () => {
      console.log(
        `Server has started on PORT: ${port} : NOTE per cors in server.js only get and post are allowed and credentials are excluded  `
      );
    });
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process if there's an error connecting to the database
  });