const { add_background_image, get_background_image, delete_background_image, add_pop_message, get_pop_message, delete_pop_message, update_pop_status } = require("./contorllers_import");

const router = require("express").Router();

router.post("/add_background_image", add_background_image);
router.get("/get_background_image", get_background_image);
router.delete("/delete_background_image/:id", delete_background_image);

// Pop message routes
router.post("/add_pop_message", add_pop_message);
router.get("/get_pop_message", get_pop_message);
router.delete("/delete_pop_message/:id", delete_pop_message);
router.put("/change_pop_message/:id", update_pop_status);
module.exports = router;
