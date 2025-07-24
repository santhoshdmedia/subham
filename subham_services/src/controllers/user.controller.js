const { EMPLOYEE_ADD_FAILED, EMPLOYEE_ADD_SUCCESS, EMAIL_ALREADYIN_USE, SOMETING_WENT_WRONG, EMPLOYEE_UPDATE_SUCCESS, EMPLOYEE_UPDATE_FAILED, USER_ADD_FAILED, USER_ADD_SUCCESS } = require("../helpers/message.helper");
const { errorResponse, successResponse } = require("../helpers/response.helper");
const { EncryptPassword } = require("../helpers/shared.helper");
const { UserSchema } = require("./models_import");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const _ = require("lodash");

const addUser = async (req, res) => {
  try {
    const { id } = _.get(req, "userData", "");
    console.log(_.get(req, "userData", ""));

    req.body.password = await EncryptPassword(req.body.password);

    if (id) {
      req.body.added_by = id;
    }

    await UserSchema.create(req.body);

    return successResponse(res, id ? EMPLOYEE_ADD_SUCCESS : USER_ADD_SUCCESS);
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return errorResponse(res, EMAIL_ALREADYIN_USE);
    }

    return errorResponse(res, id ? EMPLOYEE_ADD_FAILED : USER_ADD_FAILED);
  }
};

const editUser = async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  try {
    if (email) {
      const existingUser = await UserSchema.findOne({ email, _id: { $ne: id } });
      if (existingUser) {
         return res.status(400).json({ message: "Email is already in use by another user." });
      }
    }
    const updatedData = { ...req.body };

    const updatedUser = await UserSchema.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Failed to update user" });
  }
};

const getEmployee = async (req, res) => {
  let omit = ["super_admin", "customer"];
  let where = {};

  const { role, id } = req.userData;
  const { search } = req.params;

  if (role === "area_admin") {
    omit = ["super_admin", "area_admin", "ferry_staff", "customer"];
    where.selected_area_admin = new ObjectId(id);
  } else if (!["super_admin", "area_admin"].includes(role)) {
    omit = ["super_admin", "area_admin", "ferry_staff", "customer", "agent", "area_staffs"];
  }

  where.role = {
    $not: {
      $in: omit,
    },
  };

  try {
    if (search && search !== "null") {
      where.$or = [{ work_district: { $regex: search, $options: "i" } }, { name: { $regex: search, $options: "i" } }];
    }

    const result = await UserSchema.aggregate([
      {
        $match: where,
      },
      {
        $project: {
          password: 0,
        },
      },
      {
        $lookup: {
          from: "user",
          localField: "selected_area_admin",
          foreignField: "_id",
          as: "area_admin",
          pipeline: [
            {
              $project: {
                _id: 1,
                name: 1,
                role: 1,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "user",
          localField: "added_by",
          foreignField: "_id",
          as: "added_by",
          pipeline: [
            {
              $project: {
                _id: 1,
                name: 1,
                role: 1,
              },
            },
          ],
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
    ]);

    return successResponse(res, "", result);
  } catch (err) {
    console.log(err);
    return errorResponse(res, SOMETING_WENT_WRONG);
  }
};

const getAllAreaAdmins = async (req, res) => {
  try {
    const result = await UserSchema.aggregate([
      {
        $match: { role: "area_admin" },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          work_district: 1,
        },
      },
    ]);
    return successResponse(res, "", result);
  } catch (err) {
    return errorResponse(res, SOMETING_WENT_WRONG);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const userData = req.userData;
    const { id } = req.params;

    let where = "";

    if (id !== "null") {
      where = id;
    } else {
      where = userData.id;
    }

    let result = await UserSchema.findOne({ _id: where }, { password: 0 });
    successResponse(res, "", result);
  } catch (err) {
    console.log(err);
    errorResponse(res, SOMETING_WENT_WRONG);
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const { search, _id } = JSON.parse(req.params.id);
    let where = {};
    if (search && search !== "null") {
      where = {
        $or: [
          {
            name: { $regex: search, $options: "i" },
          },
          {
            email: { $regex: search, $options: "i" },
          },
        ],
      };
    }
    if (_id) {
      where._id = new ObjectId(_id);
    }

    let raw = [
      {
        $match: where,
      },
      {
        $match: {
          role: "customer",
        },
      },
    ];

    if (false) {
      raw.push({ $limit: 2 });
    }
    console.log(raw);
    const result = await UserSchema.aggregate(raw);
    successResponse(res, "", result);
  } catch (err) {
    console.log(err);
    errorResponse(res, SOMETING_WENT_WRONG);
  }
};

const editEmployee = async (req, res) => {
  try {
    let result = await UserSchema.findByIdAndUpdate({ _id: req.params.id }, req.body);
    successResponse(res, EMPLOYEE_UPDATE_SUCCESS, result);
  } catch (err) {
    errorResponse(res, EMPLOYEE_UPDATE_FAILED);
  }
};

module.exports = {
  addUser,
  editUser,
  getEmployee,
  getAllAreaAdmins,
  getSingleUser,
  editEmployee,
  getAllCustomers,
};
