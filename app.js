const express = require("express");

const cors = require("cors");
const path = require("path");

const db = require("./db/models");
//Routes
const categoriesRoutes = require("./routes/categories");
const ingredientsRoutes = require("./routes/ingredients");

const app = express();
//Middleware
app.use(cors());
app.use(express.json());
//routes
app.use("/categories", categoriesRoutes);
app.use("/ingredients", ingredientsRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));

app.use((req, res, next) => {
  const err = new Error("Path Not Found/URL Is Wrong");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status  || 500);
  res.json({ message: err.message  || "Internal server Error" });
});

app.listen(8000, () => {
  console.log("Running on localhost:8000");
});