const express = require("express");
const app = express();
require("dotenv").config({ path: "./.env" });
const port = process.env.NODE_PORT;
const cors = require("cors");

app.use(
  cors({
    origin: "https://reactfakeapigunaguna.netlify.app",
  })
);
app.get("/", async (req, res, next) => {
  try {
    const arrName = [0, 1, 2, 3, 4, 5, 6];
    res.status(200).json({
      status: "Success",
      message: arrName,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      errorMessage: error,
    });
  }
});

app.listen(port, () => {
  console.log("SERVER" + "" + port);
});
