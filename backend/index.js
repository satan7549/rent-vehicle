require("dotenv").config();
const express = require("express");
const bookingRoutes = require("./routes/bookingRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");

const app = express();
app.use(express.json());

app.use("/api", bookingRoutes);
app.use("/api", vehicleRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
