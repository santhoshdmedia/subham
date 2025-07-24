const { contactMail } = require("./contorllers_import");
const router = require("express").Router();

router.post("/form_contact", contactMail);

module.exports = router;
