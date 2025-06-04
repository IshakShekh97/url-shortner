import mongoose from "mongoose";

export const connectToDB = async () => {
  console.log(process.env.MONGO_URL);

  try {
    const connection = await mongoose.connect(process.env.MONGO_URL as string);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
    process.exit(1);
  }
};
