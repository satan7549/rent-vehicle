const { PrismaClient } = require("@prisma/client");

const { StatusCodes } = require("http-status-codes");

const prisma = new PrismaClient();

const getVehicleTypes = async (req, res) => {
  const { wheels } = req.params;

  if (!wheels) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Please provide the number of wheels." });
  }

  try {
    const vehicleTypes = await prisma.vehicleType.findMany({
      where: {
        category: wheels == 2 ? "Two-Wheeler" : "Four-Wheeler",
      },
    });

    if (vehicleTypes.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: `No vehicle types found for ${wheels} wheels.` });
    }

    res.status(StatusCodes.OK).json(vehicleTypes);
  } catch (error) {
    console.error("Error fetching vehicle types:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error." });
  }
};

const getVehicles = async (req, res) => {
  const { typeId } = req.params;


  if (!typeId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Please provide a typeId parameter." });
  }

  try {
    const vehicles = await prisma.vehicle.findMany({
      where: {
        typeId: parseInt(typeId),
      },
    });

    if (vehicles.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: `No vehicles found for typeId '${typeId}'.` });
    }

    res.json(vehicles);
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error." });
  }
};

module.exports = {
  getVehicleTypes,
  getVehicles,
};
