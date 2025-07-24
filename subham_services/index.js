const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { createServer } = require("./config/db.config");
require("dotenv").config();

const app = express();

app.use(morgan("dev"));
// app.use(cors("dev"));

const allowedOrigins = [
  'https://sailsubham.com',        // Your production domain
  'http://62.72.58.252',           // Your VPS IP (HTTP)
  'https://62.72.58.252',          // Your VPS IP (HTTPS)
  'http://localhost:8000',         // Local development
];
app.use(cors({
 origin: function (origin, callback) {
    // Allow requests with no origin (e.g., mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    
    // Check if the origin is in the allowed list
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS'));
    }
  },
  methods: '*',
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Hello World!");
});
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const indexRouter = require("./src/routes/index.routes");

app.use("/api", indexRouter);

createServer(app);
