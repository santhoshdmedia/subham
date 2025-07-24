const { Schema, model } = require("mongoose");

module.exports = model(
  "task",
  Schema(
    {
      tour_id: {
        type: Schema.Types.ObjectId,
        ref: "tour",
        require: true,
      },
      task_name: {
        type: String,
        require: true,
      },
      select_employees: {
        type: Array,
        require: true,
      },
      task_description: {
        type: String,
        require: true,
      },
      task_status: {
        type: String,
        default: "ASSIGNED",
      },
    },
    {
      collection: "task",
      timestamps: true,
    }
  )
);
