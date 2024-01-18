import mongoose from "mongoose"

// An object to store the connection state, initialized as an empty object
const connection = {};

export const connectDB = async () => {
  try {
    // Checking if the connection is already established
    if (connection.isConnected) {
      console.log("Already connected to MongoDB!");
      return;
    }
    // If no connection has been established, a connection to the MongoDB database using the Mongoose library is made
    // eslint-disable-next-line no-unused-vars
    const db = await mongoose
      .connect("mongodb://localhost:27017/next14-lamadev")
      .then(() => {
        connection.isConnected = true;
        console.log("App connected to database! 💃");
      });


  } catch (error) {
    // Handling errors if any occurred during the connection process
    console.error("Error connecting to Mongo:", error.message);
    throw new Error("Error connecting to Mongo");
  }
};
