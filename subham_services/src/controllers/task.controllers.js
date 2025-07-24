const { default: mongoose } = require("mongoose");
const { TaskSchema, TourSchema } = require("../controllers/models_import");
const { TASK_ADDED_FAILED, TASK_ADDED_SUCCESS, TASK_UPDATE_SUCCESS, TASK_UPDATE_FAILED, TASK_DELETE_SUCCESS, TASK_DELETE_FAILED } = require("../helpers/message.helper");
const { successResponse, errorResponse } = require("../helpers/response.helper");

const addTask = async (req, res) => {
  try {
    const result = await TaskSchema.create(req.body);
    successResponse(res, TASK_ADDED_SUCCESS, result);
  } catch (err) {
    errorResponse(res, TASK_ADDED_FAILED);
    console.log(err);
  }
};

const getTask = async (req, res) => {
  let where = {};
  try {
    const result = await TaskSchema.aggregate([
      {
        $match: where,
      },
      {
        $lookup: {
          from: "user",
          localField: "select_employees",
          foreignField: "_id",
          as: "employee_details",
          pipeline: [
            {
              $project: {
                password: 0,
              },
            },
          ],
        },
      },
    ]);
    successResponse(res, " ", result);
  } catch (err) {
    errorResponse(res, " ");
  }
};

const editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaskSchema.findByIdAndUpdate(id, req.body, { new: true });
    successResponse(res, TASK_UPDATE_SUCCESS, result);
  } catch (err) {
    errorResponse(res, TASK_UPDATE_FAILED);
    console.log(err);
  }
};

const deleteTask = async (req, res) => {
  try {
    const result = await TaskSchema.findByIdAndDelete({ _id: req.params.id });
    successResponse(res, TASK_DELETE_SUCCESS, result);
  } catch {
    errorResponse(res, TASK_DELETE_FAILED);
  }
};

const getSingleTask = async (req, res) => {
  const { id } = req.params;

  try {
    let where = "";

    if (id !== "null") {
      where = { _id: new mongoose.Types.ObjectId(id) };
    } else {
      return errorResponse(res, "This is an error: ID cannot be null");
    }

    const result = await TaskSchema.aggregate([
      {
        $match: where,
      },
      {
        $lookup: {
          from: "user",
          localField: "select_employees",
          foreignField: "_id",
          as: "employee_details",
        },
      },
    ]);

    successResponse(res, "This is your employee data", result);
    console.log(result);
  } catch (err) {
    console.error(err);
    return errorResponse(res, "An error occurred while fetching the task data");
  }
};

const adminTask = async (req, res) => {
  try {
    const { id } = req.userData;

    const tasks = await TaskSchema.aggregate([
      {
        $match: {
          select_employees: { $in: [id] },
        },
      },
      {
        $lookup: {
          from: "tour",
          localField: "tour_id",
          foreignField: "_id",
          as: "tour_details",
        },
      },
    ]);

    successResponse(res, "Tasks retrieved successfully", tasks);
  } catch (err) {
    errorResponse(res, "Failed to retrieve tasks");
    console.log(err);
  }
};

module.exports = {
  addTask,
  getTask,
  editTask,
  deleteTask,
  getSingleTask,
  adminTask,
};
