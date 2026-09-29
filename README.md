# CP Doctor 🩺

CP Doctor is a full-stack web application designed to help competitive programmers track their Codeforces performance, analyze contest and submission data, and get personalized practice recommendations.

## 🚀 Features

- User registration and login
- Connect Codeforces handle
- Codeforces rating and rank information
- Maximum rating tracking
- Contest history
- Submission statistics
- Rating progress visualization
- Personalized practice recommendations
- Problem filtering by topic
- Problem ratings and tags
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
│
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
├── screenshots/
│   └── dashboard.png
│
├── .gitignore
└── README.md
