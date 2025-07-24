const { model, Schema } = require("mongoose");

module.exports = model(
  "hero_background_image",
  Schema(
    {
      background_image: {
        type: String,
        required: true,
      },
    },
    {
      collection: "hero_background_image",
      timestamps: true,
    }
  )
);
