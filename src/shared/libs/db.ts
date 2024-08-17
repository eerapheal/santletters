import mongoose from "mongoose";
import { driver, createAstraUri } from "stargate-mongoose";

export const connectDb = async () => {
  try {
    const uri = createAstraUri(
      process.env.ASTRA_DB_API_ENDPOINT!,
      process.env.ASTRA_DB_APPLICATION_TOKEN!
    );

    // Check if there's an existing connection
    if (mongoose.connection.readyState !== 0) {
      // Disconnect the existing connection
      await mongoose.disconnect();
    }

    mongoose.set("autoCreate", true);
    mongoose.setDriver(driver);

    await mongoose.connect(uri, {
      isAstra: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000, // 45 seconds
      useUnifiedTopology: true,
    });

    console.log("db is connected");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
