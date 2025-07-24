const router = require("express").Router();
const { UploadImage } = require("../controllers/shared.contorller");
const { upload } = require("../helpers/multer.helper");
const { VerifyToken } = require("../helpers/shared.helper");
const { auth_routes, blogs_routes, user_routes, customer_routes, dashboard_routes, package_routes, tour_routes, client_router, task_routes, resetdays_routes, contact_routes, hero_routes } = require("../routes/routes_import");

router.use("/auth", auth_routes);
router.use("/user", VerifyToken, user_routes);

// blogs
router.use("/blogs", blogs_routes);

// upload
router.post("/upload_images", upload.single("image"), UploadImage);

// customers
router.use("/customers", customer_routes);

// dashboard
router.use("/dashboard", dashboard_routes);

// clint
router.use("/Client", client_router);

//package
router.use("/package", package_routes);
//tour
router.use("/tour", tour_routes);

//task
router.use("/task", task_routes);

router.use("/days", resetdays_routes);

//contact
router.use("/contact", contact_routes);

//hero
router.use("/hero", hero_routes);

module.exports = router;
