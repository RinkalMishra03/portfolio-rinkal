import { Router } from "express";
import {
  submitContact,
  getContacts,
  deleteContact,
} from "../controllers/contactController";
import { validateContact } from "../middleware/validation";
import { contactRateLimiter } from "../middleware/rateLimiter";

const router = Router();

// POST /api/contact - Send contact details (rate-limited and validated)
router.post("/contact", contactRateLimiter, validateContact, submitContact);

// GET /api/contact - Admin fetch (unlimited, validated by admin keys)
router.get("/contact", getContacts);

// DELETE /api/contact/:id - Admin delete (unlimited, validated by admin keys)
router.delete("/contact/:id", deleteContact);

export default router;
