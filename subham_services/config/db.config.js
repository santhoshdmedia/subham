const mongoose = require("mongoose");

const createServer = async (app) => {
  const HOST = '0.0.0.0';
  const PORT = process.env.PORT || 8000;
  
  mongoose
    .connect(process.env.DB)
    .then((res) => {
      app.listen(PORT, HOST, (err) => {
        if (!err) {
          console.log(`Server running on http://${HOST}:${PORT}`);
          console.log(`MongoDB connected successfully 🚀`);
        } else {
          console.error('Error starting server:', err);
        }
      });
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
    });
};
module.exports = { createServer };
