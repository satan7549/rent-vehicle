const express = require("express");
const { getVehicleByType } = require("../controllers/vehicleController");

const router = express.Router();

router.get("/vehicle/type", getVehicleByType);

module.exports = router;
