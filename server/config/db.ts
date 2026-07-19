import mongoose from "mongoose";

export async function connectDB(): Promise<void> {
  const mongoURI = process.env.MONGODB_URI;
  if (!mongoURI) {
    console.warn("⚠️ MONGODB_URI environment variable is missing. MongoDB connectivity disabled.");
    return;
  }

  try {
    await mongoose.connect(mongoURI);
    console.log("🔋 Successfully connected to MongoDB Atlas.");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB Atlas:", err);
  }
}
