const { default: mongoose } = require("mongoose");
const { TOUR_ADDED_SUCCESS, TOUR_ADDED_FAILED, TOUR_DELETE_SUCCESS, TOUR_DELETE_FAILED, TOUR_UPDATE_SUCCESS, TOUR_UPDATE_FAILED, SOMETING_WENT_WRONG } = require("../helpers/message.helper");
const { successResponse, errorResponse } = require("../helpers/response.helper");
const { TourSchema } = require("./models_import");

const addTour = async (req, res) => {
  try {
    const { from_date, to_date } = req.body;

    const currentdate = new Date();

    if (new Date(from_date) <= currentdate || new Date(to_date) <= currentdate) {
      return errorResponse(res, "only enter futhure date");
    }

    const existingTours = await TourSchema.find({
      $or: [
        {
          from_date: { $lte: new Date(to_date) },
          to_date: { $gte: new Date(from_date) },
        },
      ],
    });
    if (existingTours.length > 0) {
      return errorResponse(res, "This Date is Already Existing");
    }
    req.body.invoice_number = `SUBHAM${Date.now()}`;
    await TourSchema.create(req.body);
    successResponse(res, TOUR_ADDED_SUCCESS);
  } catch (err) {
    errorResponse(res, TOUR_ADDED_FAILED);
    console.log(err);
  }
};

const getTour = async (req, res) => {
  const { search } = req.params;
  let where = {};
  if (search != "null") {
    where.select_package = { $regex: search, $options: "i" };
  }
  try {
    const result = await TourSchema.aggregate([
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
      {
        $lookup: {
          from: "packages",
          localField: "select_packages",
          foreignField: "_id",
          as: "packages_details",
        },
      },
    
      {
        $sort: { createAt: -1 },
      },
    ]);
    successResponse(res, "", result);
  } catch (err) {
    errorResponse(res, "");
  }
};

const deleteTour = async (req, res) => {
  try {
    await TourSchema.findByIdAndDelete({ _id: req.params.id });
    successResponse(res, TOUR_DELETE_SUCCESS);
  } catch (err) {
    errorResponse(res, TOUR_DELETE_FAILED);
  }
};

const editTour = async (req, res) => {
  try {
    const result = await TourSchema.findByIdAndUpdate({ _id: req.params.id }, req.body);
    successResponse(res, TOUR_UPDATE_SUCCESS, result);
  } catch (err) {
    errorResponse(res, TOUR_UPDATE_FAILED);
  }
};

const getSingleTour = async (req, res) => {
  const { id } = req.params;
 
  try {
    let where = "";

    if (id !== "null") {
      where = { _id:new mongoose.Types.ObjectId(id) };
    }else{
      return errorResponse(res,"this is error")
    }
    const result = await TourSchema.aggregate([
      {
        $match: where,
      },
      {
        $lookup: {
          from: "packages",
          localField: "select_packages",
          foreignField: "_id",
          as: "packages_details",
        },
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
      {
        $lookup: {
          from: "task",
          localField: "_id",
          foreignField: "tour_id",
          as: "task_details",
        },
      },
      {
        $lookup: {
          from: "user",
          let: {
            employees: {
              $reduce: {
                input: "$task_details.select_employees",
                initialValue: [],
                in: { $concatArrays: ["$$value", "$$this"] }   
              }
            }
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ["$_id", { $map: { input: "$$employees", as: "emp", in: { $toObjectId: "$$emp" } } }]
                }
              }
            },
            {
              $project: { password: 0 }
            }
          ],
          as: "employee_details_from_tasks"
        }
      }
      
      
    ]);
     successResponse(res, "", result);
   } catch (err) {
     errorResponse(res, SOMETING_WENT_WRONG);
  }
};

module.exports = {
  addTour,
  editTour,
  deleteTour,
  getTour,
  getSingleTour,
};
                  