const { PrismaClient } = require("@prisma/client");
const { StatusCodes } = require("http-status-codes");
const prisma = new PrismaClient();

// Create a new booking
const createBooking = async (req, res) => {
  const { firstName, lastName, vehicleId, startDate, endDate } = req.body;

  console.log(req.body, "body in backend");

  try {
    if (!vehicleId || !startDate || !endDate) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Missing required fields." });
    }

    // Check for overlapping bookings
    const overlappingBooking = await prisma.booking.findFirst({
      where: {
        vehicleId: Number(vehicleId),
        OR: [
          {
            AND: [
              { startDate: { lte: new Date(endDate) } },
              { endDate: { gte: new Date(startDate) } },
            ],
          },
          {
            AND: [
              { startDate: { gte: new Date(startDate) } },
              { startDate: { lte: new Date(endDate) } },
            ],
          },
        ],
      },
    });

    if (overlappingBooking) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Booking overlaps with existing booking." });
    }

    // Create the new booking
    const newBooking = await prisma.booking.create({
      data: {
        firstName,
        lastName,
        vehicleId: Number(vehicleId),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });

    res.status(StatusCodes.CREATED).json(newBooking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Error creating booking." });
  }
};

module.exports = {
  createBooking,
};
