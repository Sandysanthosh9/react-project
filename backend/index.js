const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

const menuRoutes = require("./routes/menu");
app.use("/api/menu", menuRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
