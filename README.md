# 📦 Subscription Box Platform

A modern, responsive single-page application (SPA) that allows users to browse, subscribe to, and manage monthly subscription boxes tailored to their interests. Built with React and Firebase, the platform delivers a personalized experience where users can explore various categories, view details, leave reviews, and manage their profile and subscriptions.

🔗 **Live Site**: [https://subscription-box-platform.web.app/](https://subscription-box-platform.web.app/)

---

## 🎯 Project Purpose

The goal of this project is to create a curated subscription box service platform. Each box is designed to match the user's preferences and provides something new and exciting every month. The application includes secure authentication, interactive UI components, and user profile management.

---

## 🚀 Key Features

- 🔐 **Authentication** with Email/Password & Google using Firebase
- 🔄 **Persistent Login** via Firebase `onAuthStateChanged`
- 👥 **Profile Management** (view & update name and photo using `updateProfile`)
- 🔐 **Protected Routes** (redirects to login if not authenticated)
- 📝 **Review System** on service details
- 🔎 **Dynamic Routing** with detailed service pages
- 🖼️ **Image Sliders** using SwiperJS
- 📃 **404 Page** for invalid routes
- ✅ **Form Validation** with toast notifications
- 🕶️ **Show/Hide Password** toggle in forms
- 💌 **Forgot Password** functionality
- 🧭 **Dynamic Titles** on each route
- 🎨 **Fully Responsive Design** (mobile, tablet, desktop)
- 🗂️ **Extra Private Route** for additional functionality

---

## 🧰 Tech Stack & Packages Used

- **React** – Frontend framework
- **Firebase** – Authentication and hosting
- **Vite** – Fast build tool
- **TailwindCSS** – Utility-first CSS
- **DaisyUI** – Pre-styled UI components
- **React Router DOM** – Routing
- **React Icons** – Icon library
- **React Toastify** – Toast notifications
- **SwiperJS** – Sliders and carousels

---

## 📦 Environment Variables

Create a `.env.local` file in the root of the client project and add:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-id
VITE_FIREBASE_APP_ID=your-app-id
```


## 📜 Installation
```
npm install
npm run dev
```

---

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

📬 Contact
For questions or feedback, reach out via email: abuhurayrasyamofficial@gmail.com
