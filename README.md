# 📦 Product Listing Web App

A modern **Next.js-based product listing application** that allows users to browse products, search by category, and view detailed product information including nutrition facts.

🔗 Live Demo: https://fnextus.vercel.app/

---

## 🚀 Features

- 🛍️ Product listing in responsive grid layout  
- 🔍 Dynamic search/filter by category using URL query params  
- 📄 Dedicated product detail page (`/product/[id]`)  
- 🧾 Nutrition facts display (energy, fat, carbs, protein, etc.)  
- ⚡ Fast routing using Next.js App Router  
- 📱 Fully responsive UI for mobile, tablet, and desktop  
- 🖼️ Optimized images using Next.js Image component  

---

## 🧑‍💻 Tech Stack

- Next.js (App Router)
- React.js
- TypeScript
- Tailwind CSS
- REST API (OpenFoodFacts or external product API)
- Vercel (Deployment)

---

## 📂 Project Structure

app/
 ├── page.tsx                  # Home page (product listing)
 ├── product/[id]/page.tsx    # Product detail page
 ├── component/               # Reusable components
 │    ├── ProductCard
 │    ├── Search
 │    ├── NutritionItem
 │    └── UI Components
lib/
 ├── api.ts                  # API functions

---

## ⚙️ Getting Started

Clone the repository:

```bash

https://github.com/Mkdwive/fnextus.git