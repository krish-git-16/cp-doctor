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
## 🗄️ Database Setup

CP Doctor uses MySQL to store user information, contest history, submissions, and Codeforces problems.

### Database Tables

The database contains the following main tables:

- `users` — Stores user account and Codeforces information
- `contests` — Stores Codeforces contest history and rating changes
- `submissions` — Stores submitted problem information
- `problem_bank` — Stores Codeforces problems used for practice recommendations

The database schema is available in:

```text
database/schema.sql
```

### Database Configuration

The application uses environment variables for database connection:

```env
DB_HOST=your_database_host
DB_PORT=your_database_port
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

For local development, make sure these values point to your MySQL database.

The deployed application uses **Aiven MySQL** as the database provider.
## 📚 Populate Problem Bank

CP Doctor uses Codeforces problems to provide practice recommendations.

From the `backend` directory, run:

```bash
node populate.js
```

This fetches problems from the Codeforces API and stores them in the `problem_bank` table.

> Make sure your database is configured correctly before running this command.
> ## 🔄 Codeforces Integration

CP Doctor integrates with the Codeforces API to collect and analyze competitive programming data.

The application uses a user's Codeforces handle to retrieve:

- Current rating
- Maximum rating
- Current rank
- Maximum rank
- Contribution
- Organization
- Contest history
- Submission history

This data is used to display performance statistics and generate personalized practice recommendations.

### How It Works

1. User connects their Codeforces handle.
2. CP Doctor fetches data from the Codeforces API.
3. Contest and submission data is stored in MySQL.
4. The dashboard analyzes the collected data.
5. Practice recommendations are generated based on the user's performance.

## 💻 Practice

The Practice section provides competitive programming problems based on the user's performance and available problem data.

Users can:

- View recommended problems
- Filter problems by topic
- View problem difficulty ratings
- View problem tags
- Practice problems based on their current skill level
- Open problems directly on Codeforces

The recommendation system uses the user's Codeforces performance to suggest problems for further practice.

## 👤 Profile

The Profile section displays the user's account and Codeforces information.

It includes:

- Username
- Email
- Connected Codeforces handle
- Current Codeforces rank
- Maximum Codeforces rank
- Current rating
- Maximum rating
- Contribution
- Organization

## 🌐 Live Demo

### Frontend

https://cp-doctor-frontend.onrender.com

### Backend

https://cp-doctor-backend.onrender.com

## 🔐 Environment Variables

Environment files containing passwords, API keys, and other sensitive information should never be committed to GitHub.

### Backend

Create a `.env` file inside the `backend` directory:

```env
DB_HOST=your_database_host
DB_PORT=your_database_port
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

### Frontend

Create a `.env` file inside the `frontend` directory:

```env
VITE_API_URL=http://localhost:5000
```

For the deployed frontend, `VITE_API_URL` should point to the deployed backend URL.

The `.env` files are excluded from Git using `.gitignore`.

## 🔮 Future Improvements

- More detailed performance analytics
- Improved problem recommendation system
- Topic-wise progress tracking
- Advanced rating analysis
- Contest reminders
- Performance comparison
- Support for additional competitive programming platforms
- Improved dashboard visualizations
- More personalized practice recommendations

## 🔮 Future Improvements

- More detailed performance analytics
- Improved problem recommendation system
- Topic-wise progress tracking
- Advanced rating analysis
- Contest reminders
- Performance comparison
- Support for additional competitive programming platforms
- Improved dashboard visualizations
- More personalized practice recommendations
