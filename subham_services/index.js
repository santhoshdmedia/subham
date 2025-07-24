const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const https = require('https');
const fs = require('fs');
const { createServer } = require("./config/db.config");
require("dotenv").config();

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(cors({
  origin: ['https://sailsubham.com'], // Only HTTPS in production
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// Routes
app.get("/health", (req, res) => {
  res.send("Hello World!");
});

app.get('/', (req, res) => {
  res.send('Backend is running with HTTPS!');
});

const indexRouter = require("./src/routes/index.routes");
app.use("/api", indexRouter);

// SSL Certificate Paths (update these)
const sslOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/sailsubham.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/sailsubham.com/fullchain.pem'),
  // ca: fs.readFileSync('/path/to/ca_bundle.crt') // if needed
};

// Create HTTPS server
const httpsPort = process.env.HTTPS_PORT || 443;
const server = https.createServer(sslOptions, app);

// Initialize database connection
createServer()
  .then(() => {
    server.listen(httpsPort, () => {
      console.log(`HTTPS server running on port ${httpsPort}`);
      console.log(`MongoDB connected`);
    });
  })
  .catch(err => {
    console.error("Database connection failed", err);
    process.exit(1);
  });