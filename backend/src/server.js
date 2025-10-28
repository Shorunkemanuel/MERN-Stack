import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Test route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
  });

  // Connect to MongoDB
  const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
              useNewUrlParser: true,
                    useUnifiedTopology: true,
                        });
                            console.log("✅ MongoDB Connected...");
                              } catch (error) {
                                  console.error("❌ MongoDB connection error:", error.message);
                                      process.exit(1); // Exit process with failure
                                        }
                                        };

                                        connectDB();

                                        // Start server
                                        const PORT = process.env.PORT || 5000;
                                        app.listen(PORT, () => {
                                          console.log(`🔥 Server running on http://localhost:${PORT}`);
                                          });