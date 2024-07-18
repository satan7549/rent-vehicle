const express = require("express");
const { getVehicleTypes, getVehicles } = require("../controllers/vehicleController");

const router = express.Router();

router.get("/vehicle-types/:wheels", getVehicleTypes);
router.get("/vehicles/:typeId", getVehicles);

module.exports = router;
