const createBooking = async (req, res) => {
  const body = req.body;
  console.log(body, "body");
  res.status(201).json("booking success");
};

module.exports = {
  createBooking,
};
