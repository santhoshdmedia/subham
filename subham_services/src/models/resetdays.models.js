const { model, Schema } = require("mongoose");

module.exports = model(
  "resetdays",
  Schema(
    {
      day: {
        type: [Number],
        default: 0,
      },
      updateAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      collection: "resetdays",
      timestamps: true,
    }
  )
);
