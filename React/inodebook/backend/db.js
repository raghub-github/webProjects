const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/?directConnection=true";
// const mongoURI = "mongodb://localhost:27017/?readPrefere=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = async () => {
  //   mongoose.connect(mongoURI, () => {
  //     console.log("Connected to Mongo Successfully");
  //   });
  try {
    mongoose.connect(mongoURI);
    console.log("Connected to MongoDB Successfully");
  } catch (error) {
    console.log(error);
    // process.exit()
  }
};

module.exports = connectToMongo;
