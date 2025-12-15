# 🎬 React Netflix Clone (Firebase + Vite)

A fully responsive **Netflix-inspired web application** built with **React, Vite, and Firebase Authentication**, powered by the **TMDB API**.  
This project focuses on clean UI, scalable architecture, and real-world production practices.

> 🔗 Live Demo: [Netflix Clone Live](https://my-netflix-clone-react.vercel.app/)

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
NETFLIX-CLONE
├── node_modules/          # Installed dependencies (not committed)
├── public/                # Static public assets
│   ├── background_banner.jpg
│   └── netflix_favicon.ico
│   │
├── src/
│   ├── assets/            # Images, icons, media assets
│   │   ├── cards/         # Movie card images & metadata
│   │   │   ├── card1.jpg
│   │   │   ├── card2.jpg
│   │   │   ├── ...
│   │   │   ├── card14.jpg
│   │   │   └── Cards_data.js  # Card metadata (titles, images, ids)
│   │   ├── logo.svg
│   │   ├── hero.png
│   │   └── ...
│   │
│   ├── components/        # Reusable UI components
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   └── TitleCards/
│   │       ├── TitleCards.jsx
│   │       └── TitleCards.css
│   │
│   ├── pages/             # Route-level pages
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Login/
│   │   │   ├── Login.jsx
│   │   │   └── Login.css
│   │   └── Player/
│   │       ├── Player.jsx
│   │       └── Player.css
│   │
│   ├── config.js          # Firebase initialization + TMDB config
│   ├── firebaseAuth.js    # Firebase Auth instance (singleton)
│   ├── firebaseActions.js # Auth actions (signup, login, logout)
│   ├── App.jsx            # Routes & protected navigation
│   ├── index.css          # Global styles
│   └── main.jsx           # React app entry point
│
├── .env                   # Environment variables (not committed)
├── .eslintrc.js           # ESLint configuration
├── .gitignore             # Git ignore rules
├── index.html             # HTML entry file
├── package.json           # Dependencies & scripts
├── package-lock.json      # Dependency lock file
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation

```
## 🔐 Environment Variables

Create a `.env` file in the project root:
These variables are required for Firebase Authentication and TMDB API access.

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

### 2️⃣ Install dependencies
```sh
cd react-netflix-firebase-clone
npm install
```

### 3️⃣ Start development server
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
Auth state persistence using onAuthStateChanged
```txt
config.js  ──Initializes Firebase App (singleton)

firebaseAuth.js ──Creates Firebase Auth instance

firebaseActions.js ──Handles signup / login / logout

App.jsx ──Controls routing via onAuthStateChanged
 ```

The authentication architecture follows a clean separation of responsibilities:

### This ensures:
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
Built to reflect real-world frontend engineering practices.

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

