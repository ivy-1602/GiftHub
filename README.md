# 🎁 GiftHub
### *Find the perfect gift for your loved ones.*

> Because "I didn't know what to get you" is not so thoughtfull.

**Live Site →** [gift-hub-for-your-loved-ones.vercel.app](https://gift-hub-for-your-loved-ones.vercel.app/)

---

## 💡 The Real Problem.

It's your best friend's wedding in 3 days. You want it to be *perfect*. You open 14 tabs. You close 14 tabs. You spiral. You send a "what do you want?" text at 11 PM or give a generic gift hamper.

GiftHub takes your recipient's personality, runs it through a recommendation engine + Claude AI, and hands you the perfect gift in under 60 seconds.

**The workflow:** Take quiz → Get matched → Buy the gift → Be the favourite person

---

## 📸 Screenshots

**Landing Page**
![Landing](https://i.imgur.com/QiD16bC.png)

**Product Catalog**
![Catalog](https://i.imgur.com/2JSFTIQ.png)

**Quiz CTA**
![Quiz](https://i.imgur.com/SNKijIU.png)

**Results**
![Results](https://i.imgur.com/LYelEqo.png)

---

## ✨ E-Commerce Features

**Core**
- Product Catalog — 24 curated products across 4 categories, with filter tabs
- Recommendation Quiz — 5 questions about your recipient, instant results
- Rule-Based Engine — custom JS scoring logic matches answers to products
- Claude AI (Anthropic API) — "why this gift"
- Responsive Design — works on your phone at midnight when the panic sets in

**Beyond Requirements**
- AI integration in a fully static site — no backend needed
- Personality-driven copy that actually makes you want to scroll
- Cohesive brand identity across all three pages
- Deployed on Vercel, live and accessible

---

## 🛠️ Tech Stack

| Technology | What it does here |
|---|---|
| HTML5 | Structure — semantic, clean, no div soup |
| CSS3 | All styling, handcrafted, no Bootstrap crutch |
| JavaScript (Vanilla ES6+) | Quiz logic, recommendation engine, API calls |
| Claude API (Anthropic) | Personalized gift suggestions |
| Vercel | Deployment — live in seconds |

No frameworks. No build tools. Just `fetch()`.

---

## 🤖 How the AI Part Works

Quiz answers get mapped to product attribute tags. The engine scores all 24 products and picks the top 3. Then GiftHub sends your recipient's profile + matched products to **Claude (Anthropic)**, which writes a personalized note explaining *why* these gifts suit your person.

```
Quiz Answers → Tag Mapping → Product Scoring → Top 3 Picks
                                                     ↓
                              Prompt Construction → Claude API
                                                     ↓
                                         Personalized Suggestions ✨
```

---

## 🗂️ Project Structure

```
GiftHub/
├── index.html          # Landing page — hero, categories, featured products
├── products.html       # Full catalog with category filter
├── quiz.html           # 5-question quiz + results + AI message
├── style.css           # All styles
├── script.js           # Product data, quiz logic, recommendation engine
├── quiz.js             # Quiz state, API call, results rendering
└── README.md           # You are here
```

---

## 🚀 Run Locally

No installs. No setup.

```bash
git clone https://github.com/ivy-1602/GiftHub.git
cd GiftHub
# open index.html in your browser
```

Add your Anthropic API key where the `fetch()` call is made in `quiz.js` for the AI features to work.

---

## 📌 Project Context

| | |
|---|---|
| **Course** | E-Commerce — Semester 4 |
| **Deployment** | Live on Vercel |
| **Status** | ✅ Live and functional |

---

## 📫 About me!

**Uma Salunke** — SE AI & ML Engineering

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Uma_Salunke-blue?style=flat&logo=linkedin)](https://linkedin.com/in/umasalunke7)
[![GitHub](https://img.shields.io/badge/GitHub-ivy--1602-black?style=flat&logo=github)](https://github.com/ivy-1602)

---

## 📄 License

MIT — built for education, built with a little too much personality.

---

*P.S. — Why build a fake store for imaginary products when gifting is a real problem everyone actually has?*
