const { successResponse, errorResponse } = require("../helpers/response.helper");
const { BackGroundImageSchema } = require("./models_import");

const add_background_image = async (req, res) => {
  try {
    const checkoldImage = await BackGroundImageSchema.findOne();

    if (checkoldImage) {
      errorResponse(res, "A background image already exists. Please delete the existing image before uploading a new one");
    } else {
      const result = await BackGroundImageSchema.create(req.body);
      return successResponse(res, "Background image added", result);
    }
  } catch (err) {
    console.log(err);
    return errorResponse(res, "Failed to add background image");
  }
};

const get_background_image = async (req, res) => {
  try {
    const result = await BackGroundImageSchema.find({});
    successResponse(res, "Background image fetched", result);
  } catch (err) {
    console.error(err);
    errorResponse(res, "Failed to fetch background image");
  }
};

const delete_background_image = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await BackGroundImageSchema.findByIdAndDelete(id);
    successResponse(res, "Background image deleted", result);
  } catch (err) {
    console.error(err);
    errorResponse(res, "Failed to delete background image");
  }
};

module.exports = {
  add_background_image,
  get_background_image,
  delete_background_image,
};
