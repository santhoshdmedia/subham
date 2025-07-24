// authntications
const { login, checkLoginStatus } = require("../controllers/auth.contoller");
const { addbolgs, getblogs, deleteblogs, editblogs, getSingleblogs } = require("../controllers/blog.controller");
const { getAllCounts, getFiveUsers, getFiveBooking } = require("../controllers/dashboard.controller");
const { addUser, getEmployee, getAllAreaAdmins, getSingleUser, editEmployee, getAllCustomers, editUser } = require("../controllers/user.controller");
const { addPackages, getPackage, deletePackage, editPackage, get_india_packages, get_srlinka_packages } = require("../controllers/package.controller");
const { addTour, getTour, editTour, deleteTour, getSingleTour } = require("../controllers/tour.controller");
const { getAllpackeges, getAllblogs, getSinglepackage, getSingtour, booking, getSinglebooking, subscribe } = require("../controllers/client.controller");
const { searchTour } = require("../controllers/destination.controller");
const { addTask, getTask, editTask, deleteTask, getSingleTask, adminTask } = require("../controllers/task.controllers");
const { getAllBookings } = require("../controllers/get.booking.controllers");
const { UpdateDays, GetDisabledDates } = require("../controllers/resetdays.controller");
const { sendMail } = require("../helpers/shared.helper");
const { contactMail } = require("../controllers/mail.controller");
const { add_background_image, get_background_image, delete_background_image } = require("../controllers/backgroundImage.controller");
const { add_pop_message, get_pop_message, delete_pop_message, update_pop_status } = require("../controllers/popMessage.controller");

module.exports = {
  login,
  checkLoginStatus,

  // blogs
  addbolgs,
  getblogs,
  deleteblogs,
  editblogs,
  getSingleblogs,

  // employee
  addUser,
  editUser,
  getEmployee,
  getAllAreaAdmins,
  getSingleUser,
  editEmployee,
  subscribe,

  // user
  getAllCustomers,

  // dashboard
  getAllCounts,

  // clint
  getAllblogs,
  getAllpackeges,
  getSinglepackage,
  getSingtour,
  booking,
  getSinglebooking,

  getFiveUsers,
  getFiveBooking,

  // package
  addPackages,
  getPackage,
  deletePackage,
  editPackage,
  get_india_packages,
  get_srlinka_packages,

  //tour
  addTour,
  getTour,
  editTour,
  deleteTour,
  getSingleTour,

  // searchTour
  searchTour,

  //task
  addTask,
  getTask,
  editTask,
  deleteTask,
  getSingleTask,

  //admin booking
  getAllBookings,
  adminTask,

  // resetdays
  UpdateDays,
  GetDisabledDates,

  //mail
  contactMail,

  //hero
  add_background_image,
  get_background_image,
  delete_background_image,

  add_pop_message,
  get_pop_message,
  delete_pop_message,
  update_pop_status,
};
