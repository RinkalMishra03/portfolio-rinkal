import { Request, Response, NextFunction } from "express";

export function validateContact(
  req: Request,
  res: Response,
  next: NextFunction
): any {
  let { name, email, phone, subject, message } = req.body;

  // Trim all string inputs safely
  name = typeof name === "string" ? name.trim() : "";
  email = typeof email === "string" ? email.trim() : "";
  phone = typeof phone === "string" ? phone.trim() : "";
  subject = typeof subject === "string" ? subject.trim() : "";
  message = typeof message === "string" ? message.trim() : "";

  // Assign cleaned fields back to the request body
  req.body.name = name;
  req.body.email = email;
  req.body.phone = phone || undefined;
  req.body.subject = subject;
  req.body.message = message;

  // Required check
  if (!name) {
    return res.status(400).json({ success: false, error: "Full Name is required." });
  }
  if (!email) {
    return res.status(400).json({ success: false, error: "Email Address is required." });
  }
  if (!subject) {
    return res.status(400).json({ success: false, error: "Subject is required." });
  }
  if (!message) {
    return res.status(400).json({ success: false, error: "Message is required." });
  }

  // Regex validation for email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: "Please provide a valid email address." });
  }

  // Length check
  if (message.length < 10) {
    return res.status(400).json({
      success: false,
      error: "Message is too short. It must be at least 10 characters long.",
    });
  }

  // Simple HTML strip sanitization
  const cleanTags = (str: string) => str.replace(/<[^>]*>/g, "");
  req.body.name = cleanTags(name);
  req.body.subject = cleanTags(subject);
  req.body.message = cleanTags(message);
  if (req.body.phone) {
    req.body.phone = cleanTags(phone);
  }

  next();
}
