This task manager app has following :
Users can register, log in, and manage their tasks.
Tasks can be associated with specific users.
Tasks should support basic CRUD operations (Create, Read, Update, Delete).
A task should have a title, description, due date, status (e.g., Pending, In Progress, Completed), and
priority (Low, Medium, High).
User credentials should be stored securely and should be hashed.

Tech Stack
Node.js, Express
MySQL (using mysql2)
MongoDB (with Mongoose)
bcrypt for password hashing
JWT for authentication
express-validator for input validation

To run the application-

1- Clone the repository
git clone repoLink

2- Install dependencies
npm install

3- Setup environment variables
Create a .env file to store your credentials like jwt token, mysql password etc.

4- Create MySQL Database & Table
CREATE DATABASE nameOfYourTable;

USE nameOfYourTable;

CREATE TABLE users ...

5- Start MongoDB

6-Running the Server
npm start