const mongoose = require("mongoose");
const colors = require("colors");       //To highlight mongo connection line in command line

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {        //URI in env file
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;
