const { PrismaClient } = require("@prisma/client");

const { StatusCodes } = require("http-status-codes");

const prisma = new PrismaClient();



const getVehicleByType = async (req, res) => {
  const { category } = req.query;

  if (!category) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Please provide a category parameter." });
  }

  try {
    const vehicleTypes = await prisma.vehicleType.findMany({
      where: {
        category,
      },
      include: { Vehicle: true },
    });

    if (vehicleTypes.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: `No vehicles found for category '${category}'.` });
    }

    res.json(vehicleTypes);
  } catch (error) {
    console.error("Error fetching vehicle types:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error." });
  }
};

module.exports = {
  getVehicleByType,
};
