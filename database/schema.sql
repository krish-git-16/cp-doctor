CREATE DATABASE IF NOT EXISTS cp_doctor;

USE cp_doctor;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    codeforces_handle VARCHAR(100),
    cf_rank VARCHAR(50),
    cf_max_rank VARCHAR(50),
    contribution INT DEFAULT 0,
    organization VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    contest_id INT NOT NULL,
    contest_name VARCHAR(255) NOT NULL,
    contest_rank INT,
    old_rating INT,
    new_rating INT,
    rating_change INT,
    contest_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    contest_id INT,
    problem_name VARCHAR(255) NOT NULL,
    rating INT,
    verdict VARCHAR(50),
    tags VARCHAR(255),
    submission_time DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE problem_bank (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contest_id INT NOT NULL,
    problem_index VARCHAR(10) NOT NULL,
    problem_name VARCHAR(255) NOT NULL,
    rating INT,
    tags VARCHAR(255),
    solved_count INT DEFAULT 0,
    UNIQUE(contest_id, problem_index)
);
