const Admins = require("../models/user.models");
const Blog = require("../models/blogs.models");
const Package = require("../models/package.models");
const Tour = require("../models/tour.models");
const Task = require("../models/task.models");
const Booking = require("../models/booking.models");
const Subscribe = require("../models/subscribe.models");
const ResetDays = require("../models/resetdays.models");
const backgroundImageModel = require("../models/backgroundImage.model");
const popMessageModel = require("../models/popMessage.model");

module.exports = {
  UserSchema: Admins,
  BlogSchema: Blog,
  PackageSchema: Package,
  TourSchema: Tour,
  TaskSchema: Task,
  BookingSchema: Booking,
  ResetDaysSchema: ResetDays,
  SubscribeSchema: Subscribe,
  BackGroundImageSchema: backgroundImageModel,
  PopMessage: popMessageModel,
};
