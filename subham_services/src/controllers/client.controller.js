const { default: mongoose } = require("mongoose");
const {
  successResponse,
  errorResponse,
} = require("../helpers/response.helper");
const { BlogSchema, TourSchema, BookingSchema, SubscribeSchema } = require("./models_import");
const { PackageSchema } = require("./models_import");

const getAllblogs = async (req, res) => {
  try {
    const result = await BlogSchema.find({}).sort({ createdAt: -1 });

    return successResponse(res, " ", result);
  } catch (err) {
    return errorResponse(res, " ", err.message);
  }
};

const getAllpackeges = async (req, res) => {
  try {
    const result = await PackageSchema.find({}).sort({ createdAt: -1 });
    return successResponse(res, " ", result);
  } catch (err) {
    return errorResponse(res, " ", err.message);
  }
};

const getSinglepackage = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PackageSchema.findById(id);

    if (!result) {
      return errorResponse(res, "Package not found", null);
    }

    return successResponse(res, "Package retrieved successfully", result);
  } catch (err) {
    return errorResponse(res, "An error occurred", err.message);
  }
};

const getSingtour = async (req, res) => {
  const { id } = req.params;
  try {
    let where = "";

    if (id !== "null") {
      where = { _id: new mongoose.Types.ObjectId(id) };
    } else {
      return errorResponse(res, "this is error");
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
    ]);

    if (!result) {
      return errorResponse(res, "Tour not found", null);
    }

    return successResponse(res, "Tour retrieved successfully", result);
  } catch (err) {
    return errorResponse(res, "An error occurred", err.message);
  }
};

const booking = async (req, res) => {
  const { id } = req.userData;
  let formData = req.body;
  formData.booking_by = id;
  try {
    const result = await BookingSchema.create(formData);
    return successResponse(res, "Booked successfully!", result);
  } catch (error) {
    return errorResponse(res, "An error occurred", error.message);
  }
};

const getSinglebooking = async (req, res) => {
  const { id } = req.userData;
  try {
    let where = "";

    if (id !== "null") {
      where = { booking_by: new mongoose.Types.ObjectId(id) };
    } else {
      return errorResponse(res, "this is error");
    }

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
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "packages",
          localField: "package_id",
          foreignField: "_id",
          as: "packges_details",
        },
      },
    ]);

    successResponse(res, "Bookings retrieved successfully", result);
  } catch (err) {
    console.error(err);
    errorResponse(res, "Failed to retrieve bookings");
  }
};

const subscribe = async (req, res) => {
  const { email } = req.body;

  try {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return errorResponse(res, "Invalid email format" );
    }

    if (!email) {
      return errorResponse(res, "Please enter a valid email.");
    }

    const existingSubscription = await SubscribeSchema.findOne({ email });

    if (existingSubscription) {
      return errorResponse(res, "Email already subscribed");
    }

    const newSubscription = new SubscribeSchema({ email });
    const result = await newSubscription.save();

    return successResponse(res, "Subscribe successfully!", result);
  } catch (err) {
    console.error(err);
    console.log(err);
    return errorResponse(res, "Failed to retrieve bookings");
  }
};

module.exports = {
  getAllblogs,
  getAllpackeges,
  getSinglepackage,
  getSingtour,
  booking,
  getSinglebooking,
  subscribe,
};
