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

⚙️ Local Setup
1. Clone the repository
git clone https://github.com/krish-git-16/cp-doctor.git
cd cp-doctor

2. Backend Setup
cd backend
npm install

Create a .env file inside the backend folder:

DB_HOST=your_database_host
DB_PORT=your_database_port
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name

Start the backend:

npm start
3. Frontend Setup

Open another terminal:

cd frontend
npm install

Create a .env file:

VITE_API_URL=http://localhost:5000

Start the frontend:

npm run dev
🗄️ Database

CP Doctor uses MySQL to store:

User information
Codeforces contest data
Submission data
Practice problems

The database schema is available in:

database/schema.sql
📚 Problem Bank

The application uses Codeforces problems for practice recommendations.

To populate the problem bank:

cd backend
node populate.js
🌐 Live Demo

Frontend:

https://cp-doctor-frontend.onrender.com

Backend:

https://cp-doctor-backend.onrender.com

🔐 Environment Variables

Environment files containing passwords and secrets should not be committed to GitHub.

The project uses:

backend/.env
frontend/.env

These files are included in .gitignore.

🔮 Future Improvements
More detailed performance analytics
Improved problem recommendations
Topic-wise progress tracking
Rating progress visualization
Contest reminders
Support for additional competitive programming platforms
👨‍💻 Author

Krish Chauhan

GitHub: https://github.com/krish-git-16

