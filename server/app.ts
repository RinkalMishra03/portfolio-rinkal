import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import contactRoutes from "./routes/contactRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

// Set security headers (disable CSP specifically to allow developer previews to render correctly)
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Parse incoming request JSON bodies
app.use(express.json());

// Sanitize inputs against MongoDB Query Injection attacks
app.use(mongoSanitize());

// Mount contact API routes under "/api" prefix
app.use("/api", contactRoutes);

// Apply central error-handling middleware
app.use(errorHandler);

export default app;
