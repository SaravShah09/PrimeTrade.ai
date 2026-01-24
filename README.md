Task Management App:

This is a simple full-stack web application built as part of a Frontend Developer Intern assessment.
The project includes user authentication, a dashboard, and CRUD operations on tasks.

The main focus of this project is:

Clean frontend implementation

Proper backend integration

Secure authentication

Scalable project structure

Features:

Authentication
User registration with email & password

User login with JWT-based authentication

Protected routes (dashboard accessible only after login)

Logout functionality

Dashboard:

Display logged-in user information

Create, read, update, and delete tasks

Mark tasks as completed or pending

Data is user-specific

Security:

Passwords are hashed using bcrypt

JWT used for secure authentication

Protected backend routes

CORS handled for frontend-backend communication

Tech Stack used:

Frontend-

React (Vite)

Tailwind CSS

Axios

React Router

Backend-

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

Deployment-

Frontend: Vercel

Backend: Render

Database: MongoDB

Deployment Link: https://primetrade-pi.vercel.app/

To run it locally:

for backend:

cd backend

npm install

npm run dev

for frontend:

cd frontend

npm install

npm run dev


If this project were to be scaled for production:

CORS would be restricted to specific domains

Environment-based configs would be used

Backend could be containerized (Docker)

Frontend state management could be enhanced

Rate limiting and logging could be added
