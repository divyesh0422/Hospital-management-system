 Hospital Management System (MERN Stack)

## 🚀 Introduction
The **Hospital Management System (HMS)** is a web-based application built using the **MERN (MongoDB, Express.js, React, Node.js) stack** to manage hospital operations efficiently. The system enables patients, doctors, and administrators to interact seamlessly, ensuring streamlined management of appointments, medical records, and hospital resources.

## 📌 Features
### 👨‍⚕️ Doctor Module
- Doctor registration & authentication
- View & manage appointments
- Access patient medical history
- Prescription & treatment management

### 🏥 Patient Module
- Patient registration & authentication
- Book & manage appointments
- View prescriptions & medical records
- Payment & billing integration

### 🔧 Admin Module
- Manage doctors & patients
- Schedule appointments
- View reports & analytics
- Hospital resource management

## 🛠️ Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Token)
- **Other Tools:** Cloudinary (for image upload), Stripe (for payments)

## 🚀 Getting Started
### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB
- npm or yarn

### 🔧 Installation & Setup
#### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/hospital-management-system.git
cd hospital-management-system
```
#### 2️⃣ Backend Setup
```sh
cd backend
npm install
```
Create a `.env` file in the `backend/` directory and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_API_KEY=your_cloudinary_key
```
Start the backend server:
```sh
npm run dev
```
#### 3️⃣ Frontend Setup
```sh
cd frontend
npm install
npm start
```


## 📜 License
This project is licensed under the **MIT License**.

## 🤝 Contributing
Contributions are welcome! Fork the repo, make your changes, and create a pull request.

