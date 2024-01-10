const express = require("express");
const app = express();

//middleware
app.use(express.json());

const server = app.listen(3001, () => {
  const port = server.address().port;
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Recipes",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  /* (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  } */
);

const userRouter = require("./routes/RecipeRoutes");
app.use("/api/recipes", userRouter);

