const { PrismaClient } = require("@prisma/client");
const { StatusCodes } = require("http-status-codes");

const prisma = new PrismaClient();

const createBooking = async (req, res) => {
  const { vehicleId, startDate, endDate } = req.body;

  if (!vehicleId || !startDate || !endDate) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Missing required fields." });
  }

  try {
    const booking = await prisma.booking.create({
      data: {
        vehicleId: Number(vehicleId),
        startTime: new Date(startDate),
        endTime: new Date(endDate),
      },
    });
    res.status(StatusCodes.CREATED).json(booking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error." });
  }
};

module.exports = {
  createBooking,
};
