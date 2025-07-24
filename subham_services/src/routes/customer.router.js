const { addUser } = require("./contorllers_import");

const router = require("express").Router();

router.post("/register_user", addUser);

module.exports = router;
