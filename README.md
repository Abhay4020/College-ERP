# 🎓 College ERP System

A full-stack **College Management System** built with the **MERN stack** (MongoDB, Express.js, React, Node.js). It provides a unified platform for admins, faculty, and students to manage academic operations through role-based dashboards.

---

## 🚀 Tech Stack

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Frontend   | React (Create React App), Tailwind CSS  |
| Backend    | Node.js, Express.js                     |
| Database   | MongoDB (via Mongoose)                  |
| Auth       | JWT (JSON Web Tokens) + HTTP-only cookies |
| File Upload | Multer (local storage → `/media`)      |

---

## ✨ Features

### 👑 Admin
- Add / manage students, faculty, and other admins
- Manage branches, subjects, timetables, exams
- View all users and their details
- Upload and manage study materials
- Post notices

### 👨‍🏫 Faculty
- View assigned students and timetable
- Upload study materials
- Manage marks and exam data
- Post notices

### 🎓 Student
- View timetable, marks, materials
- View notices and profile

---

## 🏗️ Project Structure

```
College ERP/
├── backend/                 # Express.js API server
│   ├── controllers/         # Route handler logic
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API route definitions
│   ├── middlewares/         # Auth, role, multer middlewares
│   ├── utils/               # ApiResponse, SendMail (stub), cloudinary (stub)
│   ├── Database/            # MongoDB connection
│   ├── media/               # Locally stored uploaded files
│   ├── admin-seeder.js      # Seeds the admin account
│   ├── faculty-seeder.js    # Seeds faculty accounts
│   ├── student-seeder.js    # Seeds student accounts
│   └── index.js             # App entry point
│
├── frontend/                # React app
│   ├── src/
│   │   ├── Screens/         # Page-level components (Login, Admin, Faculty, Student)
│   │   ├── components/      # Reusable UI components
│   │   └── utils/           # AxiosWrapper, baseUrl, media helpers
│   └── public/
│
├── .env (backend)           # Backend environment variables
├── .env (frontend)          # Frontend environment variables
└── README.md
```

---

## ⚙️ Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/try/download/community) running locally on port `27017`

---

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd "College ERP"
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/college-erp
JWT_SECRET=your_super_secret_jwt_key
FRONTEND_API_LINK=http://localhost:3001
PORT=3000
```

Start the backend:

```bash
node index.js
```

> ✅ Backend runs on **http://localhost:3000**

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` folder:

```env
REACT_APP_APILINK=http://localhost:3000/api
REACT_APP_MEDIA_LINK=http://localhost:3000/media
```

Start the frontend:

```bash
npm start
```

> ✅ Frontend runs on **http://localhost:3001**

---

### 4. Seed the Database

Run the seeders from the `backend/` directory to populate the database with initial data:

```bash
node admin-seeder.js
node faculty-seeder.js
node student-seeder.js
```

---

## 🔐 Default Login Credentials

| Role    | Email              | Password     |
|---------|--------------------|--------------|
| Admin   | admin@gmail.com    | admin123     |
| Faculty | *(set by seeder)*  | faculty123   |
| Student | *(set by seeder)*  | student123   |

> Open **http://localhost:3001** to access the login page.

---

## 📡 API Overview

All backend routes are prefixed with `/api`.

| Prefix           | Description                  |
|------------------|------------------------------|
| `/api/auth`      | Login, logout, password reset |
| `/api/users`     | User registration, management |
| `/api/branch`    | Branch CRUD                  |
| `/api/subject`   | Subject CRUD                 |
| `/api/timetable` | Timetable management         |
| `/api/notice`    | Notice board                 |
| `/api/material`  | Study material upload/fetch  |
| `/api/exam`      | Exam management              |
| `/api/marks`     | Marks entry and retrieval    |

---

## 📁 File Uploads

Files (profile pictures, study materials) are stored **locally** in `backend/media/` and served via the `/media` route.

> **Coming soon:** Cloudinary integration for cloud-based file storage.

---

## 📧 Email / Password Reset

The **Forgot Password** flow is currently **disabled** (email sending is a no-op stub).

> **Coming soon:** Nodemailer (Gmail SMTP) or Brevo API integration.

---

## 🗺️ Roadmap

- [ ] Cloudinary integration for cloud file storage
- [ ] Email-based password reset (Nodemailer / Brevo)
- [ ] Attendance management module
- [ ] Notifications system
- [ ] Deployment guide (Render + Vercel)

---

## 📄 License

ISC License — see [LICENSE](LICENSE) for details.
