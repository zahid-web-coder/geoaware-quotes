# 🌟 GeoAware Quotes

A motivational quote web app that tailors experience based on your location, internet speed, and scrolling behavior.

## 🔍 Real-Life Problem

People often browse for motivation during commute or low attention moments. This app:
- Detects your location to feel personalized.
- Detects network quality to optimize UI.
- Loads quotes lazily for smoother performance.

## 🧠 Web APIs Used
- **Geolocation API** – Gets user's city and country
- **Network Information API** – Shows connection type and speed
- **Intersection Observer API** – Animates quotes when in view

## ⚙️ Tech Stack
- React + Vite
- Tailwind CSS
- TypeScript

## 📁 Folder Structure

geoaware-quotes/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Location.tsx
│ │ ├── NetworkStatus.tsx
│ │ └── QuoteSection.tsx
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md


---

## ✅ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/zahid-web-coder/geoaware-quotes.git
cd geoaware-quotes```
2. Install dependencies
npm install
3. Start the development server
npm run dev
📦 Build for Production
npm run build

🙌 Author
Made with ❤️ by Mohammed Zahid for the TAP Invest assignment.
