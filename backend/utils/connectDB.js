const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://manmps17:mohak@mohakcluster.4j3w76o.mongodb.net/?retryWrites=true&w=majority&appName=Mohakcluster"
    );
    // msTnx1UWsKcW0dxv

    console.log(`Mongodb connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
