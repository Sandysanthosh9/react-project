const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://santhosh9726:<sandy9726>@digital-menu.km55hdy.mongodb.net/?retryWrites=true&w=majority&appName=digital-menu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error("MongoDB connection error: ", err);
  });

module.exports = mongoose;
