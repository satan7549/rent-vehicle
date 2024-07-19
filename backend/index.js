require("dotenv").config();
const express = require("express");
const bookingRoutes = require("./routes/bookingRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/test", async (req, res) => {
  res.status(200).json({ message: "success" });
});

app.use("/api", bookingRoutes);
app.use("/api", vehicleRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
