# Organic Chemistry with Dr Khanyile 🧪

A sound-enhanced web app for South African matric students to master DBE organic chemistry past papers using Dr Khanyile's step-by-step method.

## Features ✨

- **5 Real DBE Questions** (2014-2023) with full worked solutions
- **Dr Khanyile's Method** — step-by-step explanations with tips
- **Sound Effects** — click, ding, buzz, and success sounds for interactions
- **Common Mistakes** — learn what NOT to do
- **Key Takeaways** — summarize each question's lesson
- **Mobile-Friendly** — study on your phone anywhere
- **100% Free** — no accounts, no payments

## Quick Start 🚀

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev

# 3. Open http://localhost:3000
```

## Deploy 🌐

```bash
npm run build
# Upload 'out/' folder to any static host:
# - Vercel (vercel.com)
# - Netlify (netlify.com)
# - GitHub Pages
```

## Add Sound Effects 🔊

Download free MP3 files from [freesound.org](https://freesound.org) and place in `public/sounds/`:

| File | Search Term |
|------|-------------|
| `click.mp3` | "UI click" |
| `ding.mp3` | "success ding" |
| `buzz.mp3` | "error soft" |
| `success.mp3` | "achievement" |
| `excellent.mp3` | Record yourself saying "Excellent!" |

## Add More Questions 📝

Edit `data/questions.json` following the existing format. Each question needs:
- ID, year, paper, topic
- Full question text
- Steps (instruction, tip, answer, common mistake)
- Key takeaway

## Tech Stack 🛠️

- Next.js 14 (static export)
- React + TypeScript
- Tailwind CSS
- Lucide React icons
- Web Audio API

## For Dr Khanyile 👨‍🏫

Record your voice saying encouraging phrases:
- "Excellent!"
- "Well done!"
- "You've got this!"

Save as MP3 in `public/sounds/` for personalized feedback.

---

Built for South African matric students. Good luck with your exams! 💪
