CREATE TABLE contests(

id INT AUTO_INCREMENT PRIMARY KEY,

user_id INT NOT NULL,

contest_id INT,

contest_name VARCHAR(255),

rank_position INT,

old_rating INT,

new_rating INT,

rating_change INT,

contest_time DATETIME,

FOREIGN KEY(user_id)
REFERENCES users(id)
ON DELETE CASCADE

);