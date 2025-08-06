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
app.use(cors({
  origin: ["https://sailsubham.com", "https://www.sailsubham.com"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));


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
