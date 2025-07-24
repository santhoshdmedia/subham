const { BLOG_ADDED_SUCCESS, BLOG_ADDED_FAILED, BLOGS_DELETE_SUCCESS, BLOGS_DELETE_FAILED, BLOGS_UPDATE_SUCCESS, BLOGS_UPDATE_FAILED } = require("../helpers/message.helper");
const { successResponse, errorResponse } = require("../helpers/response.helper");
const { BlogSchema } = require("./models_import");

const addbolgs = async (req, res) => {
  try {
    await BlogSchema.create(req.body);
    return successResponse(res, BLOG_ADDED_SUCCESS);
  } catch (err) {
    console.log(err);
    return errorResponse(res, BLOG_ADDED_FAILED);
  }
};

const getblogs = async (req, res) => {
  try {
    const { search } = req.params;
    let where = {};
    if (search != "null") {
      where.blog_name = { $regex: search, $options: "i" };
    }
    const result = await BlogSchema.find(where).sort({ createdAt: -1 });
    return successResponse(res, "", result);
  } catch (err) {
    return errorResponse(res, " this non result");
  }
};

const deleteblogs = async (req, res) => {
  try {
    await BlogSchema.findByIdAndDelete({ _id: req.params.id });
    return successResponse(res, BLOGS_DELETE_SUCCESS);
  } catch (err) {
    return errorResponse(res, BLOGS_DELETE_FAILED);
  }
};

const editblogs = async (req, res) => {
  try {
    await BlogSchema.findByIdAndUpdate({ _id: req.params.id }, req.body);
    return successResponse(res, BLOGS_UPDATE_SUCCESS);
  } catch (err) {
    return errorResponse(res, BLOGS_UPDATE_FAILED);
  }
};

const getSingleblogs = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await BlogSchema.find({ _id: id });
    return successResponse(res, "", result);
  } catch (err) {
    return errorResponse(res, " this non result");
  }
};

module.exports = {
  addbolgs,
  getblogs,
  deleteblogs,
  editblogs,
  getSingleblogs,
};
