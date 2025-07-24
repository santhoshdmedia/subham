const mongoose = require("mongoose");

const createServer = async (app) => {
  mongoose
    .connect(process.env.DB)
    .then((res) => {
      app.listen(process.env.PORT, (err) => {
        if (!err) {
          console.log(`listening on http://localhost:${process.env.PORT} \nmongodb connected successfully 🚀`);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { createServer };
