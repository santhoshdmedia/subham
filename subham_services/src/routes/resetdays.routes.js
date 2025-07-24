const { UpdateDays, GetDisabledDates } = require("./contorllers_import");

const router = require("express").Router();

router.put("/Update_days", UpdateDays);
router.get("/get_reset_days", GetDisabledDates);

module.exports = router;
