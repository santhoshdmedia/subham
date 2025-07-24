const mongoose = require("mongoose");

const createServer = async (app) => {
  const HOST = '0.0.0.0';
  mongoose
    .connect(process.env.DB)
    .then((res) => {
      app.listen('8000',HOST, (err) => {
        if (!err) {
          console.log(`listening on http://localhost:8000 ${HOST} \nmongodb connected successfully 🚀`);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { createServer };
