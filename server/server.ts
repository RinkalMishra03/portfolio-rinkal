import express from "express";
import dotenv from "dotenv";
import path from "path";
import app from "./app";
import { connectDB } from "./config/db";

// Ensure variables are initialized from environment or .env file
dotenv.config();

const PORT = parseInt(process.env.PORT || "3000", 10);

async function startServer(): Promise<void> {
  // Connect to MongoDB Atlas (handled safely if URI is absent)
  await connectDB();

  // Serve frontend assets or integrate Vite development compiler middleware
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("⚙️ Vite development middleware successfully integrated.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log(`📦 Serving production build assets from: ${distPath}`);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`📡 Server running and listening at: http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("💥 Severe failure during server bootstrapping process:", error);
});
