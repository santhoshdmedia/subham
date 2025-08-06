const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { createServer } = require("./config/db.config");
require("dotenv").config();

const app = express();

// Trust proxy settings (must come first)
app.set('trust proxy', 1); // Trust first proxy
app.enable('trust proxy'); // Alternative syntax

// Middleware pipeline
app.use(morgan("dev"));

// Enhanced CORS configuration
const allowedOrigins = [
  'https://sailsubham.com',
  'https://www.sailsubham.com',
  'http://62.72.58.252',
  'https://62.72.58.252',
  'http://localhost:8000'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,
  maxAge: 86400 // 24 hours
}));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTPS enforcement middleware
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    req.secure = true; // Explicitly set secure flag
  }
  next();
});

// Security headers middleware
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});

// Test endpoints
app.get('/api/test-https', (req, res) => {
  res.json({
    protocol: req.protocol,
    secure: req.secure,
    host: req.headers.host,
    forwardedProto: req.headers['x-forwarded-proto'],
    ip: req.ip,
    ips: req.ips,
    headers: req.headers
  });
});

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Main routes
app.use("/api", require("./src/routes/index.routes"));

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
createServer(app);