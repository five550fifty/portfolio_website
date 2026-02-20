<h1 align="center">✨ Portfolio Website ✨</h1>

<p align="center">
	A modern personal portfolio built with <b>Flask</b>, featuring a responsive UI, dark/light theme toggle, and a contact form powered by SQLite.
</p>

<p align="center">
	<img alt="Python" src="https://img.shields.io/badge/Python-3.10%2B-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
	<img alt="Flask" src="https://img.shields.io/badge/Flask-3.0-black?style=for-the-badge&logo=flask&logoColor=white"/>
	<img alt="SQLite" src="https://img.shields.io/badge/SQLite-DB-003B57?style=for-the-badge&logo=sqlite&logoColor=white"/>
	<img alt="Responsive" src="https://img.shields.io/badge/UI-Responsive-7C3AED?style=for-the-badge"/>
</p>

---

## 🌟 Overview

This project is a clean and elegant portfolio website for showcasing:

- your profile and strengths,
- project highlights,
- and an easy contact channel for visitors.

The contact form stores submitted messages in a local SQLite database (`portfolio.db`).

---

## 🧩 Features

- ⚡ Responsive layout for desktop and mobile
- 🎨 Dark/Light theme toggle
- 🧭 Smooth navigation (`Home`, `Projects`, `Contact`)
- 📬 Contact form with validation and flash messages
- 🗃️ SQLite-backed message storage
- 🧱 Structured Flask templates and static assets

---

## 🛠️ Tech Stack

- **Backend:** Flask
- **Database:** SQLite
- **Frontend:** HTML, CSS, JavaScript
- **Templating:** Jinja2

---

## 📁 Project Structure

```text
portfolio_website/
├── app.py
├── requirements.txt
├── README.md
├── static/
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   └── js/
│       └── main.js
└── templates/
		├── base.html
		├── index.html
		├── projects.html
		└── contact.html
```

---

## 🚀 Quick Start

### 1) Clone the repository

```bash
git clone https://github.com/five550fifty/portfolio_website.git
cd portfolio_website
```

### 2) Create and activate a virtual environment

**Windows (PowerShell):**

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

### 3) Install dependencies

```bash
pip install -r requirements.txt
```

### 4) Run the app

```bash
python app.py
```

Open: **http://127.0.0.1:5000**

---

## 🌍 Deploy to GitHub Pages

This repo now includes a static version in `docs/` for GitHub Pages:

- `docs/index.html`
- `docs/projects.html`
- `docs/contact.html`
- `docs/static/...`

### Enable Pages

1. Push your repo to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`
   - **Folder:** `/docs`
4. Save and wait 1–2 minutes.

Your URL will be:

`https://five550fifty.github.io/portfolio_website/`

### Contact form on Pages (Formspree)

GitHub Pages cannot run Flask/SQLite. For static form submissions:

1. Create a free form at Formspree.
2. Copy your form ID (example: `xpzgkabc`).
3. Edit `docs/contact.html` and replace:

```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

with:

```html
action="https://formspree.io/f/xpzgkabc"
```

---

## 💬 Contact Form Storage

- Messages are saved in `portfolio.db` (created automatically on first run).
- Table name: `messages`
- Stored fields:
  - `name`
  - `email`
  - `message`
  - `created_at`

---

## 🔧 Configuration Notes

- Update `app.secret_key` in `app.py` before production use.
- Replace placeholder GitHub/demo links in `templates/projects.html`.
- Update your personal info (name, social links, and email) inside templates.

---

## 🖼️ Optional: Add a Preview Screenshot

Place a screenshot in `static/img/preview.png`, then add this snippet:

```md
![Portfolio Preview](static/img/preview.png)
```

---

## 📫 Author

**Artem Bardyuk**

- GitHub: https://github.com/five550fifty
- Telegram: https://t.me/@lx_tmn
- Email: Bardyuka@inbox.ru

---

<p align="center"><i>Built with focus, clarity, and style.</i> ✨</p>
