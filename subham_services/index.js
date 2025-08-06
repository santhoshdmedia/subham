const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { createServer } = require("./config/db.config");
require("dotenv").config();

const app = express();

app.use(morgan("dev"));
// const allowedOrigins = [
//   'https://sailsubham.com',        // Your production domain
//   'http://62.72.58.252',           // Your VPS IP (HTTP)
//   'https://62.72.58.252',          // Your VPS IP (HTTPS)
//   'http://localhost:8000',         // Local development
// ];
// Define allowed origins
const allowedOrigins = [
  'https://sailsubham.com',        // Production domain
  'http://62.72.58.252',           // VPS IP (HTTP)
  'https://62.72.58.252',          // VPS IP (HTTPS)
  'http://localhost:8000',         // Local development
];

// Configure CORS with proper origin handling
app.use(
  cors({
    origin: function(origin, callback) {
      // Allow requests with no origin (like mobile apps, curl requests)
      if (!origin) return callback(null, true);
      
      // Check if the origin is in the allowed list
      if (allowedOrigins.indexOf(origin) === -1) {
        // If not in allowed origins, still allow but log it
        console.log('CORS request from unauthorized origin:', origin);
      }
      
      // Allow all origins but with proper CORS headers
      return callback(null, true);
    },
    credentials: true,            // Allow credentials (cookies, authorization headers)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  })
);

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Hello World!");
});
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const indexRouter = require("./src/routes/index.routes");

app.use("/api", indexRouter);

createServer(app);
