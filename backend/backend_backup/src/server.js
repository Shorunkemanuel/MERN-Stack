import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

// Load environment variables
// If running on Render or another cloud, Render provides env variables automatically.
// dotenv.config() will load them only if .env exists locally.
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
    console.log("⚙️ Running in development mode — .env loaded");
    } else {
      console.log("🚀 Running in production mode — using Render environment variables");
      }

      // Middleware
      app.use(express.json());

      // Connect to MongoDB
      const mongoURI = process.env.MONGO_URI;
      if (!mongoURI) {
        console.error("❌ MONGO_URI not found. Please set it in .env or Render environment.");
          process.exit(1);
          }

          mongoose
            .connect(mongoURI)
              .then(() => console.log("✅ MongoDB connected"))
                .catch((err) => console.error("❌ MongoDB connection error:", err));

                // Example route
                app.get("/", (req, res) => {
                  res.send("Server is running successfully 🚀");
                  });

                  // Start server
                  const PORT = process.env.PORT || 5000;
                  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));