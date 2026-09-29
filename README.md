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
## ⚙️ Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/krish-git-16/cp-doctor.git
cd cp-doctor
```
⚙️ Local Setup
1. Clone the Repository

git clone https://github.com/krish-git-16/cp-doctor.git
cd cp-doctor

2. Backend Setup

Navigate to the backend directory:

cd backend
npm install

Create a .env file inside the backend directory:

DB_HOST=your_database_host
DB_PORT=your_database_port
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name

Start the backend:

npm start

The backend runs locally on:

http://localhost:5000

3. Frontend Setup

Open another terminal and navigate to the frontend directory:

cd frontend
npm install

Create a .env file inside the frontend directory:

VITE_API_URL=http://localhost:5000

Start the frontend:

npm run dev

The frontend will be available at the URL provided by Vite, usually:

http://localhost:5173
🗄️ Database Setup

CP Doctor uses MySQL to store application and Codeforces data.

The main database tables are:

users
contests
submissions
problem_bank

The database schema is available in:

database/schema.sql

Make sure the database credentials in backend/.env match your MySQL database.

📚 Populate Problem Bank

CP Doctor uses Codeforces problems for its practice recommendation system.

From the backend directory, run:

node populate.js

This fetches Codeforces problems and stores them in the problem_bank table.

🔄 Codeforces Integration

Users can connect their Codeforces handle to CP Doctor.

The application retrieves information such as:

Current rating
Maximum rating
Current rank
Maximum rank
Contribution
Organization
Contest history
Submission history

This information is stored in the MySQL database and used by the dashboard and recommendation system.

📊 Dashboard

The dashboard provides an overview of the user's competitive programming performance.

It includes:

Current rating
Maximum rating
Number of solved problems
Number of contests
Rating progress chart
Recommended problems
📸 Dashboard Preview

💻 Practice

The Practice section provides problems from the problem bank.

Users can:

View recommended problems
Filter problems by topic
View problem ratings
Practice problems based on their performance
👤 Profile

The Profile section displays:

User information
Codeforces handle
Codeforces rank
Rating information
Other Codeforces statistics
🌐 Live Demo
Frontend

https://cp-doctor-frontend.onrender.com

Backend

https://cp-doctor-backend.onrender.com

🔐 Environment Variables

Environment files containing passwords and other sensitive information should never be committed to GitHub.

The project uses:

backend/.env
frontend/.env

These files are excluded using .gitignore.

Backend Environment Variables
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
Frontend Environment Variable
VITE_API_URL=
🔮 Future Improvements
More detailed performance analytics
Improved problem recommendation system
Topic-wise progress tracking
Advanced rating analysis
Contest reminders
Performance comparison
Support for additional competitive programming platforms
Improved dashboard visualizations
👨‍💻 Author

Krish Chauhan

GitHub: https://github.com/krish-git-16

📄 License

This project was developed for educational and learning purposes.


**Important:** this assumes your screenshot is actually located in GitHub at:

```text
screenshots/dashboard.png
