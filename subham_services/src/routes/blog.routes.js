const { addbolgs, getblogs, deleteblogs, editblogs, getSingleblogs } = require("./contorllers_import");

const router = require("express").Router();

router.post("/add_blogs", addbolgs);
router.get("/get_blogs/:search", getblogs);
router.delete("/delete_blogs/:id", deleteblogs);
router.put("/update_blogs/:id", editblogs);

// client side
router.get("/get_single_blogs/:id", getSingleblogs);

module.exports = router;
