const { VerifyToken } = require("../helpers/shared.helper");
const {addTask, getTask,editTask,deleteTask,getSingleTask,adminTask}=require("../routes/contorllers_import")

const router = require("express").Router();

router.post("/add_task",addTask)
router.get("/get_task",getTask)
router.delete("/delete_task/:id",deleteTask)
router.put ("/edit_task/:id",editTask)


router.get("/get_single_task/:id",getSingleTask)
router.get("/admin_task",VerifyToken,adminTask)



module.exports = router;
