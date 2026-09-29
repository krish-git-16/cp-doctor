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

```
## ⚙️ Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/krish-git-16/cp-doctor.git
cd cp-doctor
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
DB_HOST=your_database_host
DB_PORT=your_database_port
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

Start the backend:

```bash
npm start
```

The backend runs locally on:

```text
http://localhost:5000
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` directory:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```
