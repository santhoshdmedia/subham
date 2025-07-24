const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { createServer } = require("./config/db.config");
require("dotenv").config();

const app = express();

app.use(morgan("dev"));
// app.use(cors("dev"));
app.use(cors({
  origin: ["*"],
  methods: ['GET', 'POST'],
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
