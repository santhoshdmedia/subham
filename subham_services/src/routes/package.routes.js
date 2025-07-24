const { addPackages, getPackage, deletePackage, editPackage, get_india_packages, get_srlinka_packages } = require("./contorllers_import");

const router = require("express").Router();

router.post("/add_package", addPackages);
router.get("/get_package/:search", getPackage);
router.delete("/delete_package/:id", deletePackage);
router.put("/edit_package/:id", editPackage);
router.get("/get_india_package", get_india_packages);
router.get("/get_srilanka_package", get_srlinka_packages);

module.exports = router;
