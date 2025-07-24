const auth_routes = require("./auth.routes");
const user_routes = require("./user.routes");
const blogs_routes = require("./blog.routes");
const customer_routes = require("./customer.router");
const dashboard_routes = require("./dashboard.routes");
const client_router = require("./client.routes");
const package_routes = require("./package.routes");
const tour_routes = require("./tour.routes");
const task_routes = require("./task.routes");
const resetdays_routes = require("./resetdays.routes");
const contact_routes = require("./contact.routes");
const hero_routes = require("./hero.routes");

module.exports = {
  auth_routes,
  user_routes,
  blogs_routes,
  customer_routes,
  dashboard_routes,
  client_router,
  package_routes,
  tour_routes,
  task_routes,
  resetdays_routes,
  contact_routes,
  hero_routes,
};
