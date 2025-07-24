const { VerifyToken } = require("../helpers/shared.helper");
const { getAllblogs, getAllpackeges, getSinglepackage, getSingtour, booking, getSinglebooking, subscribe } = require("./contorllers_import");

const router = require("express").Router();

router.get("/getAll_blogs", getAllblogs);

router.get("/getAll_packages", getAllpackeges);

router.get("/getSingle_package/:id", getSinglepackage);

router.get("/getSingle_tour/:id", getSingtour);

router.post("/booking", VerifyToken, booking);

router.get("/getSingle_booking", VerifyToken, getSinglebooking);

router.post("/subscribe", subscribe);

module.exports = router;