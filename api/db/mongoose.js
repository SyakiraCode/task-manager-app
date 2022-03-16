// This file will handle connection logic to the MangoDB

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection to MongoDB successfully :)");
  })
  .catch((e) => {
    console.log("error: ", e);
  });

//To prevent depreciation warnings (from MongoDB native driver)
// mongoose.set("useCreateIndex", true);
// mongoose.set("useFindAndModify", false);

module.exports = {
  mongoose,
};
