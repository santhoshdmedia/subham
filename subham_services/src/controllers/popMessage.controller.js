const { successResponse, errorResponse } = require("../helpers/response.helper");
const { PopMessage } = require("./models_import");

const add_pop_message = async (req, res) => {
  try {
    const checkPopmessage = await PopMessage.findOne();
    if (checkPopmessage) {
      errorResponse(res, "A Pop Message already exists. Please delete the existing pop before uploading a new one");
    }
    const result = await PopMessage.create(req.body);
    successResponse(res, "Pop message added", result);
  } catch (err) {
    console.log(err);
    errorResponse(res, "Failed to add pop message");
  }
};

const get_pop_message = async (req, res) => {
  try {
    const result = await PopMessage.find({});
    successResponse(res, "Pop message fetched", result);
  } catch (err) {
    console.error(err);
    errorResponse(res, "Failed to fetch pop message");
  }
};

const delete_pop_message = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PopMessage.findByIdAndDelete(id);
    successResponse(res, "Pop message deleted", result);
  } catch (err) {
    console.error(err);
    errorResponse(res, "Failed to delete pop message");
  }
};

const update_pop_status = async (req, res) => {
  try {
    const { id } = req.params;
    const { pop_status } = req.body;
    if (typeof pop_status !== "boolean") {
      return errorResponse(res, "Invalid pop_status value");
    }

    const result = await PopMessage.findByIdAndUpdate(id, { pop_status }, { new: true });

    if (!result) {
      return errorResponse(res, "Pop message not found");
    }
    successResponse(res, "Pop status updated", result);
  } catch (err) {
    console.log(err);
    errorResponse(res, "Failed to update pop status");
  }
};

module.exports = {
  add_pop_message,
  get_pop_message,
  delete_pop_message,
  update_pop_status,
};
