import { Request, Response, NextFunction } from "express";
import Contact from "../models/Contact";
import { sendContactEmail } from "../services/emailService";

// helper to check if mongo is connected
import mongoose from "mongoose";

function isDatabaseConnected(): boolean {
  return mongoose.connection.readyState === 1;
}

// 1. Submit contact message
export async function submitContact(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const { name, email, phone, subject, message } = req.body;
    const ipAddress = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress || "";
    const userAgent = req.headers["user-agent"] || "";

    const createdAt = new Date();

    let savedContact = null;

    // Check database connection and save
    if (isDatabaseConnected()) {
      const contact = new Contact({
        name,
        email,
        phone,
        subject,
        message,
        ipAddress,
        userAgent,
      });
      savedContact = await contact.save();
    } else {
      console.warn("⚠️ Database is not connected. Skipping MongoDB persistence.");
    }

    // Trigger email send
    const emailSent = await sendContactEmail({
      name,
      email,
      phone,
      subject,
      message,
      createdAt,
      ipAddress,
      userAgent,
    });

    return res.status(201).json({
      success: true,
      message: "Message submitted successfully!",
      data: savedContact || { name, email, phone, subject, message, createdAt },
      emailSent,
    });
  } catch (error) {
    next(error);
  }
}

// 2. Fetch all contact messages (Admin only)
export async function getContacts(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const adminSecret = process.env.ADMIN_SECRET || "admin_secret_123";
    const authHeader = req.headers.authorization || req.headers["x-admin-key"];
    const token = typeof authHeader === "string" ? authHeader.replace("Bearer ", "").trim() : "";

    if (!token || token !== adminSecret) {
      return res.status(401).json({
        success: false,
        error: "Unauthorized access. Valid admin key required.",
      });
    }

    if (!isDatabaseConnected()) {
      return res.status(503).json({
        success: false,
        error: "Database connection unavailable. Cannot fetch records.",
      });
    }

    const messages = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    next(error);
  }
}

// 3. Delete a contact message by ID (Admin only)
export async function deleteContact(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const { id } = req.params;
    const adminSecret = process.env.ADMIN_SECRET || "admin_secret_123";
    const authHeader = req.headers.authorization || req.headers["x-admin-key"];
    const token = typeof authHeader === "string" ? authHeader.replace("Bearer ", "").trim() : "";

    if (!token || token !== adminSecret) {
      return res.status(401).json({
        success: false,
        error: "Unauthorized access. Valid admin key required.",
      });
    }

    if (!isDatabaseConnected()) {
      return res.status(503).json({
        success: false,
        error: "Database connection unavailable. Cannot complete deletion.",
      });
    }

    const deleted = await Contact.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: "Contact message record not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact message record deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
}
