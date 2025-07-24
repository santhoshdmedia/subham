 const {addTour, getTour, editTour, deleteTour,getSingleTour}=require("../routes/contorllers_import");
const {searchTour}=require("../routes/contorllers_import")
const router = require("express").Router();


router.post("/add_tour",addTour)
router.get("/get_tour/:search",getTour)
router.delete("/delete_tour/:id",deleteTour)
router.put("/edit_tour/:id",editTour)

router.get("/search_tour/:search",searchTour)
router.get("/get_single_tour/:id",getSingleTour)



module.exports = router;
