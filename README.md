# 🍛 FoodSnap AI

🌐 Live Demo
🔗 Live Project: https://foodsnap-ai.onrender.com

**Personal Project**  
Detect and analyze Kerala food items instantly through image recognition.

---

## 📖 Description

**FoodSnap AI** is a smart web application that allows users to snap or upload pictures of food—especially Kerala traditional dishes—and instantly receive detailed macro nutrient information, including calories, protein, carbs, sugar, fat, and fiber. It solves the lack of nutrition data available for local Kerala food by using a custom-trained AI model.

The application also allows users to adjust food quantity and receive updated nutritional values accordingly, making it an essential tool for health-conscious individuals in Kerala.

---

## ✨ Features

- 🥘 Recognize Kerala local food items via image upload or webcam.
- ⚡ AI-powered food detection using a custom Teachable Machine CNN model.
- 🍽️ Displays macro nutrients: Calories, Protein, Carbohydrates, Fat, Fiber, and Sugar.
- 📏 Dynamic quantity adjustment with real-time nutrition calculation.
- 📱 Responsive UI for mobile and desktop users.
- 📸 Image compression before upload for performance.
- 🚨 Friendly alerts and smooth navigation.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Lucide-react (icons)
- React Router DOM (navigation)
- SweetAlert2 (alerts)
- Compressor.js (image optimization)
- Axios (API handling)

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- CORS
- Dotenv
- Nodemon

### AI / ML
- Google Teachable Machine (custom-trained CNN model)
- TensorFlow.js

### Hosting
- **Render** (for both frontend and backend)

---

## 💻 Getting Started (Local Setup)

### Clone the Repository

```bash
git clone https://github.com/yourusername/foodsnap-ai.git
cd foodsnap-ai
```
## Setup Frontend
   npm install vite@latest client
   cd client
   npm install
   npm run dev

## Setup Backend 
   cd server
   npm install
   npm start or npm run dev (Node mon)
   
 ## 🔐 Backend Environment Variables

   MONGO_URI=your-mongodb-connection-uri

## 🎥 Demo Video

📹 [Watch the Demo Video on YouTube](https://youtu.be/ETo3jQP1cGs)



