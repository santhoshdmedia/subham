const { getAllCounts, getFiveUsers ,getAllBookings,getFiveBooking} = require("./contorllers_import");

const router = require("express").Router();

router.get("/getall_dashboard_counts", getAllCounts);
router.get("/get_recent_five", getFiveUsers);


router.get("/get_all_booking",getAllBookings)
router.get("/get_five_booking",getFiveBooking)

module.exports = router;
