const { Schema, model } = require("mongoose");

module.exports = model(
  "blog",
  Schema(
    {
      blog_name: {
        type: String,
        required: true,
      },
      blog_author_name: {
        type: String,
        required: true,
      },
      blog_image: {
        type: String,
        required: true,
      },
      blog_short_description: {
        type: String,
        required: true,
      },
      blog_description: {
        type: String,
        required: true,
      },
    },
    {
      collection: "blog",
      timestamps: true,
    }
  )
);
