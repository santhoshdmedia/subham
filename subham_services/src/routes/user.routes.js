const { addUser, getEmployee, getAllAreaAdmins, getSingleUser, editEmployee, getAllCustomers, editUser } = require("./contorllers_import");

const router = require("express").Router();

router.post("/add_user", addUser);
router.put("/edit_user/:id", editUser);
router.get("/get_users/:search", getEmployee);
router.get("/get_area_admin/", getAllAreaAdmins);
router.get("/get_single_user/:id", getSingleUser);
router.put("/edit_user_details/:id", editEmployee);
router.get("/getall_customers/:id", getAllCustomers);

module.exports = router;
