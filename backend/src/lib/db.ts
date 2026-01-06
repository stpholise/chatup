import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in enviroment veriable");
    }
    const conn = await mongoose.connect(mongoUri);
    // console.log("MONGODB CONNECTED: ", conn.connection.host)
  } catch (error) {
    console.error("Error connecting to mongoDB:", error);
    process.exit(1);
  }
};
