import { mongoose, dotenv } from "../deps.ts";
dotenv.config();

const MONGO_URI = Deno.env.get("MONGODB_URI");

if (!MONGO_URI) {
  console.error("MONGODB_URI is not set in .env");
  Deno.exit(1);  
}

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    Deno.exit(1);  
  }
};
