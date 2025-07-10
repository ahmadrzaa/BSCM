# BSCM Congress Website

Welcome to the official repository for the **BSCM Congress Website** – the digital platform for the Bahrain Society for Human Capital Management’s annual congress event.
<img width="1884" height="986" alt="homepage_bscm" src="https://github.com/user-attachments/assets/75f54031-1c59-4cb1-847d-b4b6aaf9d0ae" />



##  Project Status: Frontend Completed

This project includes a fully responsive **frontend interface** for:

- Congress information display
- Mobile-first design
- Speaker & agenda sections
- Registration form (UI only)
- Navbar with smooth scroll navigation
- Country selector with flags
- GitHub Pages deployment for live testing

---

## 🛠️ Backend & Polling Feature (Pending)

The **polling/voting section** (live and real-time) is under development.

### Planned Backend:
- **Technology**: Node.js + Express
- **Database**: MongoDB or MySQL
- **Features**:
  - Live voting system (poll results update in real time)
  - Secure registration data storage
  - Email notification integration

---

## 🔗 Live Demo

> [https://ahmadrzaa.github.io/BSCM/](https://ahmadrzaa.github.io/BSCM/)

---

## 📁 Folder Structure

```bash
BSCM_Congress/
├── frontend/                   # Static website frontend (HTML/CSS/JS)
│   ├── index.html              # Homepage
│   ├── register.html           # Registration form page
│   ├── styles.css              # Global styles
│   ├── register.css            # Registration-specific styles
│   ├── script.js               # JS for navbar, scroll, dropdowns
│   ├── images/                 # All media assets (logos, banners, etc.)
│   ├── fonts/                  # Gotham and other web fonts
│   └── video/                  # Video content
│
├── backend/                    # Node.js + Express backend API
│   ├── server.js               # Main server file
│   ├── routes/                 # Express route handlers
│   │   └── pollRoutes.js       # Poll-related API endpoints
│   ├── controllers/            # Logic for routes
│   │   └── pollController.js
│   ├── models/                 # MongoDB models/schemas
│   │   └── Poll.js
│   ├── config/                 # Configuration files (DB connection, etc.)
│   │   └── db.js
│   ├── middleware/             # Express middlewares (auth, error handlers)
│   └── .env                   # Environment variables (not pushed to repo)
│
├── poll-client/                # React app for live polling/voting UI
│   ├── public/                 # Static public assets
│   ├── src/
│   │   ├── components/         # React components (e.g. VoteForm.jsx)
│   │   ├── App.jsx             # Main React app component
│   │   └── index.js            # ReactDOM render entry point
│   ├── package.json            # React app dependencies and scripts
│   └── README.md               # Poll client specific docs (optional)
│
├── .gitignore                  # Files/folders git should ignore
├── README.md                   # Project overview and instructions
└── package.json                # Root-level (optional if backend root)
