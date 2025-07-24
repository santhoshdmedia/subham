const { errorResponse, successResponse } = require("../helpers/response.helper");
const { TourSchema } = require("./models_import");
const mongoose = require("mongoose");

const searchTour = async (req, res) => {
  const { location, from, to } = JSON.parse(req.params.search);
 
  try {
    let where = {};

    if (location) {
      where.select_packages = new mongoose.Types.ObjectId(location);
    }
 
    const result = await TourSchema.aggregate([
      { $match: where },
      {
        $lookup: {
          from: "packages",
          localField: "select_packages",
          foreignField: "_id",
          as: "package_details",
        },
      },
    ]);
 

    return successResponse(res, "", result);
    } catch (err) {
    console.error("Error during tour search:", err);
    return errorResponse(res, "An error occurred while searching for tours.");
  }
};

module.exports = { searchTour };
