# ⚡ FlashForge — AI Flashcard Generator

> Upload any PDF → Get smart flashcards instantly, powered by Google Gemini AI

![HTML](https://img.shields.io/badge/Built%20With-HTML%20%2B%20JS-f7a26a?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Backend-Node.js-64d97b?style=for-the-badge)
![Gemini](https://img.shields.io/badge/Powered%20by-Google%20Gemini-7c6af7?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 🎯 What is this?

FlashForge is a web app that takes any PDF — lecture notes, textbooks, research papers — and automatically generates smart flashcards using Google Gemini AI. Perfect for students who want to study smarter, not harder.

---

## ✨ Features

- 📄 **PDF Upload** — drag & drop or browse, supports up to 20 MB
- 🤖 **AI-Powered** — uses Google Gemini to generate high-quality Q&A pairs
- 🃏 **3D Flip Cards** — satisfying card flip animation for each flashcard
- 🎓 **Study Mode** — full-screen quiz mode with progress tracking and score
- 🏷️ **Difficulty Levels** — Easy / Medium / Hard, automatically assigned by AI
- 🔍 **Filter by Difficulty** — focus on the cards you need most
- 📊 **Stats Dashboard** — see a breakdown of your card set at a glance
- ⬇️ **Export** — download as CSV or JSON for Anki, Quizlet, or any tool
- 📱 **Responsive** — works on mobile and desktop

---

## 🖼️ Preview

> Upload a PDF → AI generates flashcards → Study with flip cards → Export anywhere

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) installed
- A free Google Gemini API key from [aistudio.google.com](https://aistudio.google.com)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/YOURUSERNAME/flashforge.git
cd flashforge
```

**2. Install dependencies**
```bash
npm install
```

**3. Add your Gemini API key**

Open `server.cjs` and replace line 4:
```js
const API_KEY = 'YOUR_GEMINI_API_KEY_HERE';
```
With your actual key from [aistudio.google.com](https://aistudio.google.com).

**4. Run the app**
```bash
node server.cjs
```

**5. Open your browser**
```
http://localhost:3000
```

---

## 🔑 Getting a Free Gemini API Key

1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Sign in with your Google account
3. Click **"Get API Key"** → **"Create API Key"**
4. Copy and paste it into `server.cjs`

> The Gemini API has a free tier — no credit card needed!

---

## 📁 Project Structure

```
flashforge/
├── index.html       ← Frontend (HTML + CSS + JS)
├── server.cjs       ← Backend server (Node.js)
├── package.json     ← Dependencies
└── README.md        ← This file
```

---

## 🛠️ How It Works

1. You upload a PDF file
2. **PDF.js** extracts all the text from it
3. The text is sent to your local Node.js server
4. The server calls the **Google Gemini API** with a smart prompt
5. Gemini returns a JSON array of question-answer pairs
6. Cards are displayed with 3D flip animations
7. You can study, filter by difficulty, and export

---

## 🎨 Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML / CSS / JavaScript | Frontend — no framework needed |
| Node.js | Backend server to handle API calls |
| PDF.js (Mozilla) | Extract text from PDF files |
| Google Gemini API | AI flashcard generation |
| CSS 3D Transforms | Card flip animations |
| Google Fonts (Syne + DM Sans) | Typography |

---

## 📤 Export Formats

- **CSV** — import into Excel, Google Sheets, or Anki
- **JSON** — use programmatically or with any flashcard tool

---

## 🤝 Contributing

Pull requests are welcome! Some ideas for future improvements:

- [ ] Support for DOCX and TXT files
- [ ] Save card sets to local storage
- [ ] Anki `.apkg` export format
- [ ] Custom card topics and tags
- [ ] Light mode toggle
- [ ] Deploy to cloud (Vercel, Railway)

---

## ⚠️ Important Note

Never commit your API key to GitHub! Replace the key with a placeholder in `server.cjs` before pushing.

---

## 📄 License

MIT — free to use, modify, and share.

---

Made with 💜 by Manasa Pillai &nbsp;|&nbsp; Powered by Google Gemini AI
