# Patch Intelligence System

## 📌 Overview
The **Patch Intelligence System** helps track and manage **security patches** for vulnerabilities, allowing users to monitor updates from various **vendors**.

## 🚀 Features
- Fetch **security patch** data from trusted sources
- Track **patch availability** for affected software
- User-friendly **dashboard

## 🛠️ Tech Stack
- **Frontend:** React.js, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API Integration:** Vendor Patch Feeds

## 📖 Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Ziyahid/Patch-Intelligence.git
cd Patch-Intelligence
```

### 2️⃣ Install Dependencies
#### Backend
```sh
cd server
npm install
```
#### Frontend
```sh
cd client
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the **server** directory:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000

```

### 4️⃣ Start the Application
#### Backend
```sh
cd server
npm start
```
#### Frontend
```sh
cd client
npm run dev
```

## 📌 API Endpoints

| Method | Endpoint          | Description                  |
|--------|------------------|------------------------------|
| GET    | `/api/patches`   | Fetch all security patches  |
| GET    | `/api/patches/add` | add new security patches |


## 📄 License
MIT License © 2025 Mohammed Ziyahid
