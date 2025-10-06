# 🧩 Backend Internship - Foxbith

## 📖 Project Overview
This project was created as part of the **Backend Internship Test** for **Foxbith**.  
It is an **Order Management System** that provides a RESTful API for managing orders using **Node.js**, **Express**, **TypeScript**, **Prisma**, and **MongoDB**.

The system allows performing **CRUD operations** (Create, Read, Update, Delete) on orders and supports filtering and pagination.

---

## ⚙️ Tech Stack
- **Node.js** — Backend runtime environment  
- **Express.js** — Web framework for routing and API handling  
- **TypeScript** — For type-safe and structured code  
- **Prisma ORM** — For database management (connected to MongoDB)  
- **MongoDB** — NoSQL database for storing order data  
- **dotenv** — For environment variable management  

---

## 📁 Project Structure
Backend_-Internship-_Foxbith/
├── prisma/
│ └── schema.prisma # Prisma schema for MongoDB models
├── src/
│ ├── controller/
│ │ └── orderController.ts # Logic for handling order CRUD
│ ├── routes/
│ │ └── orderRoutes.ts # Express routing definitions
│ ├── prisma.ts # Prisma client configuration
│ ├── index.ts # Main entry point
│ └── utils/ # (optional) Helper or middleware files
├── .env # Environment variables
├── package.json # Dependencies and scripts
├── tsconfig.json # TypeScript configuration
└── README.md

---

## 🚀 Setup & Run
### 1️⃣ Clone Repository
```bash
git clone https://github.com/bigbossa/Backend_-Internship-_Foxbith.git
cd Backend_-Internship-_Foxbith
2️⃣ Install Dependencies
npm install

3️⃣ Create .env File

Example:

DATABASE_URL="your_mongodb_connection_string"
PORT=5000

4️⃣ Push Prisma Schema
npx prisma db push

5️⃣ Start Development Server
npm run dev


Server will run at:
👉 http://localhost:5000

📦 API Endpoints
Method	Endpoint	Description
Root     /        Root Dir
POST	/create	    Create a new order
GET	/allorders    all orders (with pagination/filter)
GET	/order/:id	  Get order details by ID
PUT	/status/:id	  Update order status by ID
PUT /up/:id       Update order all by ID 
DELETE	/del/:id  Delete order by ID

JSON สำหรับ Postman
{
  "OrderNumber": "ORD001",
  "Name": "Jaturapat",
  "Item": "Laptop",
  "Quantity": 2,
  "Price": 15000,
  "Subtotal": 30000
}

🧰 Scripts
Command	Description
npm run dev	Run server in development mode (with ts-node-dev)
npm run build	Compile TypeScript into JavaScript
npm start	Run compiled JavaScript in production mode
npx prisma db push	Apply Prisma schema changes to database

📚 Learning Objectives
Understand backend REST API design
Implement CRUD operations using Prisma and MongoDB
Learn TypeScript for type-safe backend development
Practice modular code structure (routes, controllers, services)
Deploy or run locally with .env configuration

🧑‍💻 Author

Name: Jaturapat (Bigboss)
Role: Backend Developer Intern
Company: Foxbith
GitHub: bigbossa
