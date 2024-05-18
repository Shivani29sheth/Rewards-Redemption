CREATE DATABASE rewards_db;

USE rewards_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  points INT NOT NULL DEFAULT 0
);

CREATE TABLE rewards (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  points INT NOT NULL
);

CREATE TABLE redemptions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  reward_id INT NOT NULL,
  redeemed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (reward_id) REFERENCES rewards(id)
);

INSERT INTO users (name, points) VALUES ('User 1', 1000), ('User 2', 800), ('User 3', 600), ('User 4', 80), ('User 5', 100);

INSERT INTO rewards (name, points) VALUES ('Reward 1', 100), ('Reward 2', 200), ('Reward 3', 300);
