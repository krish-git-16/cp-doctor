# CP Doctor 🩺

CP Doctor is a full-stack web application that helps competitive programmers track their Codeforces performance, analyze contests and submissions, and discover practice problems based on their performance.

## 🚀 Features

- User registration and login
- Connect Codeforces handle
- Codeforces rating and rank information
- Contest history
- Submission statistics
- Personalized practice problems
- Problem filtering by topic
- User profile
- Codeforces API integration

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- Axios
- MySQL2
- dotenv

### Database
- MySQL
- Aiven MySQL

### API
- Codeforces API

### Deployment
- Render
- Aiven

## 📁 Project Structure

```text
cp-doctor/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── populate.js
│   ├── server.js
│   └── package.json
│
├── database/
│   └── schema.sql
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
