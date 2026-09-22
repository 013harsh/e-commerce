# E-Commerce Store — Books & Stationery 🛒📚

A full-featured e-commerce frontend for books and stationery, with product browsing by category, cart management, user accounts, and an admin panel for managing products — built with React, Redux, and Appwrite as the backend service.

**Live Demo:** [Add your deployed link here]

---

## ✨ Features

- 🛍️ **Product Catalog** — books and stationery items organized into categories (Filing & Organization, Paper & Notebooks, Ruler & Scale, Writing Tools, and more)
- 🔍 **Search** — find products quickly via the search component
- 🛒 **Cart** — add/remove items, manage quantities, backed by Redux state
- 👤 **User Accounts** — register, login, view account, edit profile
- 🛠️ **Admin Panel** — create, update, and view details of products
- 📦 **Appwrite Integration** — backend-as-a-service for data, auth, and/or storage
- 🌐 **API Layer** — Axios configuration for HTTP requests alongside Appwrite services
- 🎨 **Responsive UI** — styled with Tailwind CSS
- 🚦 **Routing** — centralized route definitions with a custom 404 page

---

## 🛠️ Tech Stack

- **Frontend:** React (JSX) + Vite
- **State Management:** Redux (actions/reducers via `store/`)
- **Backend-as-a-Service:** Appwrite (`appwrite/appwrite.service.js`, `api/appwriteConfig.jsx`)
- **HTTP Client:** Axios (`api/axiosconfig.jsx`)
- **Styling:** Tailwind CSS + PostCSS
- **Routing:** React Router (`routes/MainRoutes.jsx`)
- **Linting:** ESLint

---

## 📁 Project Structure

```
frontend/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── src/
    ├── App.jsx                       # Root app component
    ├── main.jsx                       # Entry point
    ├── index.css                      # Global styles
    ├── api/
    │   ├── appwriteConfig.jsx         # Appwrite client/config
    │   └── axiosconfig.jsx            # Axios instance/config
    ├── appwrite/
    │   └── appwrite.service.js        # Appwrite service methods (auth/db/storage)
    ├── component/
    │   ├── Footer.jsx
    │   ├── NavBar.jsx
    │   ├── ScrollToTop.jsx
    │   ├── Search.jsx
    │   └── Card/
    │       ├── BookCard.jsx
    │       ├── Card.jsx
    │       └── Homecard1.jsx
    ├── pages/
    │   ├── Account.jsx
    │   ├── Cart.jsx
    │   ├── EditProfile.jsx
    │   ├── Home.jsx
    │   ├── Login.jsx
    │   ├── PageNotFound.jsx
    │   ├── Register.jsx
    │   ├── admin/
    │   │   ├── CreateProduct.jsx
    │   │   ├── ProductDetails.jsx
    │   │   └── UpdateProduct.jsx
    │   └── product/
    │       ├── BookProduct.jsx
    │       ├── StationeryProduct.jsx
    │       └── Categories/
    │           ├── FilingOrganization.jsx
    │           ├── OtherUsefultems.jsx
    │           ├── PaperNotebooks.jsx
    │           ├── RulerScale.jsx
    │           └── WritingTools.jsx
    ├── routes/
    │   └── MainRoutes.jsx
    └── store/
        ├── store.jsx
        ├── action/
        │   ├── CartAction.jsx
        │   ├── ProductAction.jsx
        │   └── UserAction.jsx
        └── reducer/
            ├── CartSlice.jsx
            ├── ProductSlice.jsx
            └── UserSlice.jsx
```
## Git Diagram

<img width="6856" height="4667" alt="diagram (6)" src="https://github.com/user-attachments/assets/a102be67-32a7-4485-a3c3-10f97bae5a1e" />

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- An [Appwrite](https://appwrite.io/) project (Cloud or self-hosted) with a database/collection set up for products, users, and orders/cart as needed

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd 013harsh-e-commerce/frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment
Set up your Appwrite project details in `src/api/appwriteConfig.jsx` (endpoint, project ID, database ID, collection IDs, bucket ID), and configure `src/api/axiosconfig.jsx` if using a separate API base URL. Consider moving these to a `.env` file for production use.

### 4. Start the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production
```bash
npm run build
```

---

## 🧩 Key Modules

| Module | Purpose |
|---|---|
| `appwrite/appwrite.service.js` | Centralized Appwrite auth/database/storage calls |
| `store/action/CartAction.jsx` | Cart operations (add, remove, update quantity) |
| `store/action/ProductAction.jsx` | Fetching/managing product data |
| `store/action/UserAction.jsx` | Auth/user profile operations |
| `pages/admin/` | Admin-only product management (create/update/view) |
| `pages/product/Categories/` | Category-specific product listing pages |

---

## 🔐 Admin Access

The `pages/admin/` routes (Create/Update/Product Details) are intended for admin use. Make sure to gate these behind proper role checks / protected routes before deploying to production, if not already enforced via Appwrite permissions.

---

## 📦 Deployment

Build the app with `npm run build` and deploy the static output to Vercel, Netlify, or similar. Ensure your Appwrite project's allowed platforms/origins include your deployed domain.

---

## 📌 Roadmap / Ideas

- [ ] Order history and checkout flow
- [ ] Payment gateway integration
- [ ] Product reviews and ratings
- [ ] Wishlist functionality

---

## 🙋 About

Built by **Harsh** — a B.Tech Computer Science student and Full Stack (MERN) Developer.

---

## 📄 License

This project is open source. Feel free to fork and adapt it — attribution appreciated!
