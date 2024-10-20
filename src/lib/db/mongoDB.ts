import mongoose from "mongoose";

async function dbConnect(): Promise<void> {
  // Check if there's an existing connection in mongoose itself
  if (
    mongoose.connections.length > 0 &&
    mongoose.connections[0].readyState === 1
  ) {
    console.log("Reusing existing database connection");
    return;
  }

  // check whether mongodb uri is in the environmental variables
  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI) {
    console.log("MongoDb Connection String Is Not Provided!");
    return;
  }

  try {
    // If no connection, create a new one
    const db = await mongoose.connect(MONGODB_URI, {});
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);

    // Graceful exit in case of a connection error
    process.exit(1);
  }
}

export default dbConnect;
