const { successResponse, errorResponse } = require("../helpers/response.helper");
const { ResetDaysSchema } = require("./models_import");

const UpdateDays = async (req, res) => {
  try {
    const { day } = req.body;
    const result = await ResetDaysSchema.findOne();
    if (!result) {
      await ResetDaysSchema.create({ day });
    } else {
      (result.day = day), (result.update = Date.now()), await result.save();
    }
    successResponse(res, "Update successfully date", result);
  } catch (err) {
    errorResponse(err, "Some error");
    console.log(err);
  }
};

const GetDisabledDates = async (req, res) => {
  try {
    const result = await ResetDaysSchema.findOne();
    if (!result) {
      return errorResponse(res, "No rest days have been set yet.");
    }

    successResponse(res, "Disabled dates fetched successfully.", result.day);
  } catch (err) {
    console.error("Error fetching disabled dates:", err);
    return errorResponse(res, "Failed to fetch disabled dates.");
  }
};

module.exports = { UpdateDays, GetDisabledDates };
