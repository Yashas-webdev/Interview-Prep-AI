# InterviewPrepAI 🚀

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express_5-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-AI_GenAI-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)

An intelligent, full-stack interview preparation platform designed to help developers and job seekers practice role-specific technical questions, learn concepts in-depth with AI, and track their preparation progress.

Powered by **Google Gemini AI**, **React 19**, **Tailwind CSS v4**, and **Node.js/Express + MongoDB**.

---

## 📑 Table of Contents

- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#1-backend-setup)
  - [Frontend Setup](#2-frontend-setup)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
  - [Authentication](#authentication)
  - [Interview Sessions](#interview-sessions)
  - [Questions & Notes](#questions--notes)
  - [AI Generation](#ai-generation)
- [Roadmap & Enhancements](#-roadmap--enhancements)
- [License](#-license)

---

## ✨ Key Features

- 🎯 **Tailored Q&A Generation**: Creates personalized technical interview questions and comprehensive model answers tailored to target role, experience level, and specific topics to focus on.
- 💡 **AI Concept Deep-Dives**: "Learn More" slide-out drawer providing in-depth, beginner-friendly explanations with formatted code examples and syntax highlighting.
- 📌 **Pinning & Prioritization**: Pin important or challenging questions to the top of your session list to prioritize your revision.
- 📝 **Personal Notes**: Attach custom markdown/text notes to any interview question to record personal takeaways or talking points.
- 🔄 **On-Demand Question Expansion**: Seamlessly generate and append additional AI questions into any active interview session.
- 🗂️ **Session Dashboard**: Save, organize, and revisit past interview preparation journeys with color-coded summary cards and date tracking.
- 🔐 **Secure Authentication**: Complete user authentication (Signup, Login, Profile) with JWT and bcrypt password hashing.
- 🖼️ **Profile Picture Uploads**: Upload and manage profile avatars via static media serving with Multer.
- 🎨 **Modern, Animated UI**: Fluid animations with Framer Motion, markdown rendering, syntax highlighting with Prism, and toast notifications.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Markdown & Code Display**: `react-markdown`, `remark-gfm`, `react-syntax-highlighter`
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons & UI**: [React Icons](https://react-icons.github.io/react-icons/), [React Hot Toast](https://react-hot-toast.com/)
- **Date Formatting**: [Moment.js](https://momentjs.com/)

### Backend
- **Runtime & Framework**: [Node.js](https://nodejs.org/) & [Express 5](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)
- **AI Engine**: Google Gemini API via official [`@google/genai`](https://www.npmjs.com/package/@google/genai) SDK (`gemini-3.5-flash-lite`)
- **Authentication**: [JSON Web Tokens (JWT)](https://jwt.io/) & [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **File Handling**: [Multer](https://github.com/expressjs/multer) for image uploads
- **CORS & Environment**: `cors`, `dotenv`
- **Dev Tooling**: `nodemon`

---

## 🏗️ System Architecture

```
┌────────────────────────────────────────────────────────┐
│                   React 19 Frontend                    │
│   Landing Page │ Dashboard │ InterviewPrep │ Drawer    │
└───────────────────────────┬────────────────────────────┘
                            │ Axios (JWT Bearer Token)
                            ▼
┌────────────────────────────────────────────────────────┐
│                   Express.js Backend                   │
│   Auth Middleware │ Upload Middleware │ Controllers    │
└──────────────┬────────────────────────────┬────────────┘
               │                            │
               ▼                            ▼
┌───────────────────────────┐  ┌─────────────────────────┐
│     MongoDB (Mongoose)    │  │     Google Gemini AI    │
│  Users, Sessions, Q&As    │  │  Questions & Deep-Dives │
└───────────────────────────┘  └─────────────────────────┘
```

---

## 📁 Project Structure

```text
INTERVIEWPREPARE/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection logic
│   ├── controllers/
│   │   ├── aiController.js       # Gemini question & explanation handlers
│   │   ├── authController.js     # User registration, login & profile
│   │   ├── questionController.js # Pinning, notes & adding Q&As
│   │   └── sessionController.js  # CRUD operations for interview sessions
│   ├── middlewares/
│   │   ├── authMiddleware.js     # JWT route protection middleware
│   │   └── uploadMiddleware.js   # Multer file upload setup
│   ├── models/
│   │   ├── Question.js           # Question, answer, notes & pinned schema
│   │   ├── Session.js            # User interview session schema
│   │   └── User.js               # User account schema
│   ├── routes/
│   │   ├── authRoutes.js         # /api/auth endpoints
│   │   ├── questionRoutes.js     # /api/questions endpoints
│   │   └── sessionRoutes.js      # /api/sessions endpoints
│   ├── uploads/                  # Uploaded profile images
│   ├── utils/
│   │   └── prompts.js            # Structured AI prompts for Gemini
│   ├── .env                      # Backend environment variables
│   ├── package.json              # Backend dependencies & scripts
│   └── server.js                 # Server entry point & route registration
│
├── frontend/
│   ├── public/                   # Static public assets
│   ├── src/
│   │   ├── assets/               # Hero illustrations, logos & icons
│   │   ├── components/           # Reusable UI components
│   │   │   ├── Cards/            # SummaryCard, QuestionCard, ProfileInfoCard
│   │   │   ├── Inputs/           # Input fields & ProfilePhotoSelector
│   │   │   ├── layouts/          # Navbar & DashboardLayout
│   │   │   ├── Loader/           # SkeletonLoader & SpinnerLoader
│   │   │   ├── Drawer.jsx        # Slide-over explanation drawer
│   │   │   └── Modal.jsx         # Accessible modal dialog
│   │   ├── context/
│   │   │   └── userContext.jsx   # Global user state & authentication context
│   │   ├── pages/
│   │   │   ├── Auth/             # Login & SignUp pages
│   │   │   ├── Home/             # Dashboard & CreateSessionForm
│   │   │   ├── InterviewPrep/    # Question cards, AI response previews
│   │   │   └── LandingPage.jsx   # Marketing landing page
│   │   ├── utils/
│   │   │   ├── apiPaths.js       # Centralized API endpoints & base URL
│   │   │   ├── axiosInstance.js  # Axios client with auth interceptors
│   │   │   ├── data.js           # Constants & visual themes
│   │   │   └── helper.js         # Utility functions
│   │   ├── App.jsx               # Application routes & toast provider
│   │   └── main.jsx              # Application DOM mount point
│   ├── package.json              # Frontend dependencies & scripts
│   └── vite.config.js            # Vite configuration
│
└── README.md                     # Documentation
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed on your local machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas URI)
- [Google Gemini API Key](https://aistudio.google.com/)

---

### 1. Backend Setup

1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your `.env` file in the `backend/` directory:
   ```env
   PORT=8000
   MONGO_URI=mongodb://localhost:27017/interviewprep
   JWT_SECRET=your_jwt_secret_key_here
   GEMINI_API_KEY=your_google_gemini_api_key_here
   ```

4. Start the backend development server:
   ```bash
   npm run dev
   ```
   > The server will start on `http://localhost:8000` (or the configured `PORT`).

---

### 2. Frontend Setup

1. Open a new terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Verify the backend base URL in `frontend/src/utils/apiPaths.js`:
   ```javascript
   export const BASE_URL = "http://localhost:8000";
   ```
   *(Ensure the port matches your backend `PORT`).*

4. Run the Vite development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

---

## 🔑 Environment Variables

| Variable | Description | Example |
| :--- | :--- | :--- |
| `PORT` | Backend server port | `8000` |
| `MONGO_URI` | MongoDB connection URI | `mongodb+srv://...` or `mongodb://localhost:27017/interviewprep` |
| `JWT_SECRET` | Secret key for JWT signing & verification | `supersecretkey_123` |
| `GEMINI_API_KEY` | Google Gemini API Key | `AIzaSy...` |

---

## 📡 API Reference

### Authentication
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Public | Register a new user |
| `POST` | `/api/auth/login` | Public | Authenticate user & get JWT token |
| `GET` | `/api/auth/profile` | Private | Retrieve logged-in user profile |
| `POST` | `/api/auth/upload-image`| Public | Upload profile picture via Multer |

### Interview Sessions
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/sessions/create` | Private | Create session with initial Q&As |
| `GET` | `/api/sessions/my-sessions` | Private | Fetch all sessions of the current user |
| `GET` | `/api/sessions/:id` | Private | Get session details & questions |
| `DELETE` | `/api/sessions/:id` | Private | Delete a session and its questions |

### Questions & Notes
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/questions/add` | Private | Append more questions to a session |
| `POST` | `/api/questions/:id/pin` | Private | Toggle question pinned state |
| `POST` | `/api/questions/:id/note`| Private | Save or update custom question notes |

### AI Generation
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/ai/generate-questions` | Private | Generate Q&A array via Gemini AI |
| `POST` | `/api/ai/generate-explanation`| Private | Generate detailed concept breakdown |

---

## 🗺️ Roadmap & Enhancements

- [ ] 🎙️ **Voice & Mock Interview Mode**: Speech-to-text practice for real-time interview simulations.
- [ ] 📊 **Performance Analytics**: Track preparation metrics, questions covered, and time spent.
- [ ] 📄 **Resume / Job Description Parsing**: Tailor questions directly by uploading target job specifications or resumes.
- [ ] 💾 **Export Sessions**: Export interview summaries to PDF or Markdown files.

---

## 📄 License

This project is licensed under the ISC License. Feel free to use and customize it for your own interview preparation!