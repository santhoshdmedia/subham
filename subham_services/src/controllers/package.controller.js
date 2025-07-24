const { PackageSchema } = require("../controllers/models_import");
const { PACKAGE_ADDED_SUCCESS, PACKAGE_ADDED_FAILED, PACKAGE_DELETE_SUCCESS, PACKAGE_DELETE_FAILED, PACKAGE_UPDATE_SUCCESS, PACKAGE_UPDATE_FAILED } = require("../helpers/message.helper");
const { errorResponse, successResponse } = require("../helpers/response.helper");

const addPackages = async (req, res) => {
  try {
    await PackageSchema.create(req.body);
    successResponse(res, PACKAGE_ADDED_SUCCESS);
  } catch (err) {
    errorResponse(res, PACKAGE_ADDED_FAILED);
  }
};

const getPackage = async (req, res) => {
  const { search } = req.params;
  let where = {};

  if (search != "null") {
    where.package_name = { $regex: search, $options: "i" };
  }

  try {
    const result = await PackageSchema.find(where).sort({ createAt: -1 });
    successResponse(res, "", result);
  } catch (err) {
    errorResponse(res, " ");
  }
};

const deletePackage = async (req, res) => {
  try {
    await PackageSchema.findByIdAndDelete({ _id: req.params.id });
    successResponse(res, PACKAGE_DELETE_SUCCESS);
  } catch (err) {
    errorResponse(res, PACKAGE_DELETE_FAILED);
  }
};

const editPackage = async (req, res) => {
  console.log(req.params.id, req.body);
  try {
    const result = await PackageSchema.findByIdAndUpdate({ _id: req.params.id }, req.body);

    successResponse(res, PACKAGE_UPDATE_SUCCESS, result);
  } catch (err) {
    console.log(err);
    errorResponse(res, PACKAGE_UPDATE_FAILED);
  }
};

const get_srlinka_packages = async (req, res) => {
  try {
    const result = await PackageSchema.aggregate([
      {
        $match: {
          country: "srilanka",
        },
      },
    ]);
    successResponse(res, "", result);
  } catch (err) {
    console.log(err);
    errorResponse(res, "Some Think Went Wrong");
  }
};

const get_india_packages = async (req, res) => {
  try {
    const result = await PackageSchema.aggregate([
      {
        $match: {
          country: "india",
        },
      },
    ]);

    successResponse(res, "", result);
  } catch (err) {
    console.log(err);
    errorResponse(res, "Some Think Went Wrong");
  }
};

module.exports = { addPackages, getPackage, deletePackage, editPackage, get_srlinka_packages, get_india_packages };
