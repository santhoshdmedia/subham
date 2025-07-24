const { successResponse, errorResponse } = require("../helpers/response.helper");
const { BookingSchema } = require("./models_import");

const getAllBookings = async (req, res) => {
  try {
    let where = {};

    const result = await BookingSchema.aggregate([
      {
        $match: where,
      },
      {
        $lookup: {
          from: "user",
          localField: "booking_by",
          foreignField: "_id", 
          as: "user_details",
          pipeline: [
            {
              $project: {
                password: 0,  
              }
            }
          ]
        }
      },
      {
          $lookup:{
               from:"packages",
               localField:"package_id",
               foreignField:"_id",
               as:"packges_details",  
          }
      }
    ]);

    successResponse(res, "Bookings retrieved successfully", result);
   } catch (err) {
    console.error(err);
    errorResponse(res, "Failed to retrieve bookings");
  }
};

module.exports = {
  getAllBookings,
};
