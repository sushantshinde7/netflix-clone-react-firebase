# 🎬 React Netflix Clone (Firebase + Vite)

A fully responsive **Netflix-inspired web application** built with **React, Vite, and Firebase Authentication**, powered by the **TMDB API**.  
This project focuses on clean UI, scalable architecture, and real-world production practices.

> 🔗 Live Demo: [react-time-tools.vercel](https://my-netflix-clone-react.vercel.app/)

> 📦 Repository: [react-netflix-firebase-clone](https://github.com/sushantshinde7/netflix-clone-react-firebase)

---

## ✨ Features

- 🔐 **Authentication**
  - Email & Password authentication using **Firebase Auth**
  - Secure login, signup, and logout
  - Auth state persistence across refresh

- 🎞️ **Movie & TV Content**
  - Trending, popular, upcoming movies & shows
  - Netflix-style categorized rows
  - Dynamic movie data from **TMDB API**

- ▶️ **Player Page**
  - Dedicated movie player route
  - Dynamic routing using React Router

- 🎨 **UI / UX**
  - Netflix-inspired modern UI
  - Fully responsive (desktop & mobile)
  - Smooth hover effects and transitions

- ⚡ **Performance & DX**
  - Vite for fast builds & HMR
  - Lazy loading & optimized imports
  - Environment-based configuration

---

## 🧱 Tech Stack

### Frontend
- **React 18**
- **Vite**
- **React Router v6**
- **CSS Modules / Custom CSS**

### Backend / Services
- **Firebase Authentication**
- **TMDB API** (movies & TV data)

### Tooling & Deployment
- **Vercel** (production hosting)
- **ESLint** (code quality)
- **Environment Variables (.env)**

---

## 📁 Project Structure

```txt
src/
├── assets/            # Images, icons
├── components/        # Reusable UI components
│   ├── Navbar/
│   └── ...
├── pages/             # Route-based pages
│   ├── Home/
│   ├── Login/
│   └── Player/
├── config.js          # Firebase app + TMDB config
├── firebaseAuth.js    # Firebase auth instance
├── firebaseActions.js # login / signup / logout logic
├── App.jsx            # Routes & auth handling
└── main.jsx           # App bootstrap
```
## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_TMDB_ACCESS_KEY=your_tmdb_access_key
```

⚠️ Do not commit .env files to GitHub.

## 🛠️ Installation & Local Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/yourusername/react-netflix-firebase-clone.git
```

2️⃣ Install dependencies
```sh
cd react-netflix-firebase-clone
npm install
```

3️⃣ Start development server
```sh
npm run dev
```


App will run at:
```sh
http://localhost:5173
```

## 🚀 Deployment

This project is deployed on **Vercel**.

### Vercel Configuration

- **Framework**: Vite  
- **Build Command**: `npm run build`  
- **Output Directory**: `dist`

### Required Environment Variables (Vercel)

- `VITE_FIREBASE_API_KEY`
- `VITE_TMDB_ACCESS_KEY`


## 🧪 Authentication Flow

```txt
config.js  ──Initializes Firebase App (singleton)

firebaseAuth.js ──Creates Firebase Auth instance

firebaseActions.js ──Handles signup / login / logout

App.jsx ──Controls routing via onAuthStateChanged
 ```


##This ensures:
- No duplicate Firebase initialization
- Clean separation of concerns
- Production-safe architecture
## 📌 Why This Project?

This repository demonstrates:

- Real-world React project structure
- Secure Firebase authentication handling
- Proper environment variable management
- Scalable frontend architecture
- Clean, maintainable, portfolio-ready code

This is **not a tutorial dump**, but a **production-style application**.

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository  
2. Create a new branch  
3. Make your changes  
4. Submit a Pull Request

## 📜 License

This project is for **educational and portfolio purposes only**.

All Netflix branding, logos, and media content belong to their respective owners.

## 👤 Author

**Sushant Shinde**  
Frontend Developer | React & UI Enthusiast

If you like this project, consider giving it a ⭐

