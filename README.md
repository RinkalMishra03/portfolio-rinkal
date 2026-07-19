# Rinkal Mishra — Premium Full-Stack Portfolio

A professional, high-performance, and highly animated portfolio showcasing **Rinkal Radheraman Mishra**, an aspiring Software Engineer. Features a recruiter dossier, academic transcript visualizers, interactive code metrics, and a production-ready, secure contact backend.

---

## 🚀 Key Features

### 👤 Recruiter & Candidate Dossier
- **Academic Highlights**: Contextualized, visual representation of semesters showing overall CGPA.
- **Work Credentials**: Verified internships with Google Cloud, Celonis, and Zscaler including verified credential codes.
- **GitHub Code Metrics**: High-fidelity live code composition logs featuring dynamic bar charts and contribution trackers.
- **Recruiter Console**: Copyable ATS Pitch, direct mail pipelines, dialer links, and printer-ready PDF export views.

### 📬 Real Working Secure Contact System
- **Real SMTP E-mailing**: Forwards submissions in real-time to your inbox with client parameters (browser agent, IP address).
- **MongoDB Atlas Storage**: Persists submissions to an Atlas cluster with robust, production-ready schemas.
- **Security Protocols**: Armed with Helmet security headers, CORS protection, express-rate-limit to curb spam, and mongo-sanitize to prevent SQL/NoSQL injection.
- **Form Validation & Sanitization**: Validates required fields, email syntax, message length, and strips HTML markup on input to prevent cross-site scripting (XSS).

---

## 📂 Modular Backend Architecture
Our backend code is structured inside `/server` under a robust Model-View-Controller (MVC) architectural design pattern:

```bash
server/
├── config/
│   └── db.ts               # Mongoose MongoDB Atlas database connection
├── models/
│   └── Contact.ts          # Contact Message mongoose database schema
├── controllers/
│   └── contactController.ts # Submission, query, and record deletion controllers
├── routes/
│   └── contactRoutes.ts    # REST endpoints mapping controllers to endpoints
├── services/
│   └── emailService.ts     # Nodemailer SMTP transporter and templates
├── middleware/
│   ├── errorHandler.ts     # Centralized Express error interceptor
│   ├── rateLimiter.ts      # Anti-abuse Express IP rate limiter
│   └── validation.ts       # HTML sanitizing, field validator
├── app.ts                  # App initializations (cors, helmet, sanitizers)
└── server.ts               # Server bootstrapping and Vite compiler middleware
```

---

## ⚙️ Environment Variables Setup

Create a `.env` file in the root directory. Copy the contents of `.env.example` and replace the placeholders:

```env
PORT=3000
MONGODB_URI=your_mongodb_atlas_connection_string
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_gmail_address@gmail.com
SMTP_PASS=your_16_character_app_password
RECEIVER_EMAIL=your_inbox_address@gmail.com
ADMIN_SECRET=your_custom_admin_api_key_here
```

---

## 📧 How to Enable Gmail App Passwords

To use Nodemailer with Gmail SMTP, standard account passwords are blocked by Google's modern security policies. You must configure an **App Password**:

1. **Enable 2-Step Verification**:
   - Go to your [Google Account Console](https://myaccount.google.com/).
   - Select **Security** in the left menu.
   - Under *How you sign in to Google*, find **2-Step Verification** and turn it **ON** if it's disabled. Follow Google's prompts to verify your identity.

2. **Generate App Password**:
   - Return to the **Security** tab.
   - Scroll down to *How you sign in to Google* or search the top search bar for `"App passwords"`.
   - Click on **App Passwords** (or [Direct App Passwords Link](https://myaccount.google.com/apppasswords)).
   - Under *App name*, input a recognizable label like `"Portfolio Website"`.
   - Click **Create**.
   - Copy the generated **16-character passcode** from the popup (e.g. `abcd efgh ijkl mnop`). *Note: Google will only display this password once.*

3. **Configure env**:
   - Paste the copied 16-character string (without spaces) as your `SMTP_PASS` value in your `.env` or deployment variables configuration.

---

## 💻 Local Installation & Run Guide

### Prerequisites
- **Node.js** (v18.0 or higher)
- **npm** (v9.0 or higher)

### Setup & Run Steps
1. Install all required client and server-side dependencies:
   ```bash
   npm install
   ```

2. Launch the server in development mode:
   ```bash
   npm run dev
   ```
   *The Express server boots on `http://localhost:3000` with the Vite development compiler hot-reloading changes.*

3. Generate a production-ready client bundle and compile typescript configurations:
   ```bash
   npm run build
   ```

4. Launch the standalone production-compiled Node bundle:
   ```bash
   npm start
   ```

---

## 🌐 Production Deployment Guide

### A. Deploying to Render
Render is a premium hosting service ideal for running custom Express/Vite hybrid apps:

1. **Create Web Service**:
   - Register or log in to [Render](https://render.com/).
   - Click **New +** -> **Web Service**.
   - Connect your GitHub repository containing the portfolio codebase.

2. **Configure Settings**:
   - **Language**: `Node`
   - **Branch**: `main` (or your production branch)
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

3. **Add Environment Variables**:
   - Navigate to the **Environment** tab inside your service dashboard on Render.
   - Add the key-value pairs matching your configuration:
     - `NODE_ENV` = `production`
     - `PORT` = `3000`
     - `MONGODB_URI` = `your_mongodb_atlas_uri_here`
     - `SMTP_HOST` = `smtp.gmail.com`
     - `SMTP_PORT` = `587`
     - `SMTP_USER` = `your_sender_gmail_address@gmail.com`
     - `SMTP_PASS` = `your_16_character_app_pass`
     - `RECEIVER_EMAIL` = `your_destination_mailbox@gmail.com`
     - `ADMIN_SECRET` = `your_secure_random_string`

4. **Deploy**: Click **Deploy Web Service**.

---

### B. Deploying and Configuring Environment Variables on Vercel
Vercel is optimized for serverless applications. If deploying on Vercel as a full-stack Node.js runtime, you can configure Environment Variables as follows:

1. **Create Project**:
   - Go to [Vercel Dashboard](https://vercel.com/) and click **Add New** -> **Project**.
   - Select your repository.

2. **Configure Environment Variables**:
   - In the **Configure Project** setup wizard, locate the **Environment Variables** expandable pane.
   - Enter your variables (e.g. `MONGODB_URI`, `SMTP_PASS`, `SMTP_USER`, etc.) as key-value pairs and hit **Add** for each.
   - Ensure the server-side API endpoints can handle serverless functions or match Vercel’s pathing setup.

---

## 🛠️ Technology Stack
- **Frontend**: React (v19) with Vite
- **Animations**: `motion/react` (Framer Motion)
- **Icons**: `lucide-react`
- **Backend**: Express, Node.js, Mongoose, Nodemailer, TypeScript
- **Security**: Helmet, CORS, Express-rate-limit, Express-mongo-sanitize

---

## 🛡️ License
This project is open-source and licensed under the MIT License.
