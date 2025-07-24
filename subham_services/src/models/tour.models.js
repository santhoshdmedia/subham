const { Schema, model } = require("mongoose");

module.exports = model(
  "tour",
  Schema(
    {
      from_date: {
        type: String,
        required: true,
      },
      to_date: {
        type: String,
        required: true,
      },
      invoice_number: {
        type: String,
        required: true,
      },
      select_packages: {
        type: Schema.Types.ObjectId,
        ref: "package",
        required: true,
      },
      select_employees: [
        {
          type: Schema.Types.ObjectId,
          ref: "user",
          required: true,
        },
      ],
    },
    {
      collection: "tour",
      timestamps: true,
    }
  )
);
