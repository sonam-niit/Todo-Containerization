# MERN To-Do App with Docker

## Overview
This is a **MERN (MongoDB, Express, React, Node.js) To-Do App** containerized using Docker. The backend is built using **Node.js & Express**, while the frontend is created using **React with Vite**. MongoDB is containerized using Docker for persistent data storage.

## Features
- **Create, Read, Update, Delete (CRUD) operations** for To-Do items.
- **MongoDB containerization** for managing data.
- **Docker Compose** for running frontend, backend, and database in separate containers.

## Project Structure
    mern-todo-app/
    │-- backend/        # Node.js Express backend
    │-- frontend/       # React frontend (Vite)
    │-- docker-compose.yml
    │-- README.md       # Project documentation


## Prerequisites
Ensure you have the following installed:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup and Running the Application
### 1️⃣ Clone the Repository
    
    git clone https://github.com/your-repo/mern-todo-app.git
    cd mern-todo-app

### 2️⃣ Start Containers with Docker Compose

    docker-compose up -d

- This will start:
- MongoDB container
- Backend container (Express.js)
- Frontend container (React with Vite)

### 3️⃣ Check Running Containers
- docker ps

### API Endpoints

#### Base URL
- **Backend API**: `http://localhost:5000/api/todos`

#### API Routes

| Method | Endpoint          | Description          | Request Body Example |
|--------|------------------|----------------------|----------------------|
| **GET**    | `/api/todos`       | Get all to-dos       | N/A |
| **POST**   | `/api/todos`       | Add a new to-do      | `{ "title": "New Task", "completed": false }` |
| **PUT**    | `/api/todos/:id`   | Update a to-do       | `{ "title": "Updated Task", "completed": true }` |
| **DELETE** | `/api/todos/:id`   | Delete a to-do       | N/A |

### Example API Calls

#### 1️⃣ Get All To-Dos
GET /api/todos

### Frontend Access

#### Base URL
- **Backend API**: `http://localhost:3000/`

#### MongoDB Shell Commands

##### **Check Running Containers**
- docker ps

##### **Access MongoDB Shell**
- docker exec -it mongodb-container mongosh

##### **Show Available Databases**
- show dbs

##### **Create or Switch to Database**
- use todoapp

##### **Show Collections (Tables)**
- show collections

##### **View All To-Dos**
- db.todos.find()