const { model, Schema } = require("mongoose");
const { collection } = require("./resetpasswordtoken.models");

module.exports = model(
  "pop_message",
  Schema(
    {
      pop_message: {
        type: String,
        required: true,
      },
      pop_status: {
        type: Boolean,
        default: true,
      },
    },

    {
      collection: "pop_message",
      timestamps: true,
    }
  )
);
