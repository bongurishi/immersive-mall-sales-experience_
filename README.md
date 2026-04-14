# Immersive Mall Sales Experience (IMSE)

## 🚀 How It Works

This project is a modern, interactive web application built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. It is designed to act as a cinematic sales tool.

### Core Technologies
- **React & Vite**: Provides a lightning-fast development environment and optimized production builds.
- **Tailwind CSS**: Used for all styling, ensuring a fully responsive, utility-first design system.
- **Framer Motion**: Powers all the smooth animations, scroll-triggered reveals, and layout transitions.
- **Lenis**: A lightweight library used to create the "smooth scrolling" effect, making the site feel premium and native.

### Key Features & Architecture
1. **App.tsx**: The main entry point. It initializes the smooth scrolling (`Lenis`) and renders all the individual sections sequentially.
2. **Navigation (`src/components/Navigation.tsx`)**: A sticky header that tracks your scroll position. It includes a responsive mobile menu.
3. **Hero Section (`src/components/sections/Hero.tsx`)**: Features a video background and a "User Segmentation" toggle. The toggle saves your choice (Retail, Event, Sponsor) to your browser's `localStorage` so your preference is remembered if you refresh.
4. **Interactive Event Booking (`src/components/sections/EventBooking.tsx`)**: A dynamic module where selecting different event types and audience sizes instantly filters and recommends the best venue.
5. **Analytics (`src/lib/analytics.ts`)**: A mock analytics service. Every time you click a CTA or change a setting, it logs an event to the browser console. In the real world, this would send data to Google Analytics or Mixpanel.
6. **Demo Mode (`src/components/DemoMode.tsx`)**: A unique feature that, when clicked, automatically scrolls through the site and simulates user clicks to demonstrate the flow.

---
-------------------
-------------------
Screenshots
<img width="1853" height="914" alt="image" src="https://github.com/user-attachments/assets/ad26d2a3-4da2-4bf2-b11c-24bcf1cb3a95" />



Demo Video
(" https://drive.google.com/file/d/1Uix0lvDG2Kdk3y0Fux_0ucAWmdxK-qSf/view?usp=sharing ")
-------------------
---
Build By
Bongu Rishi
bongurishi07@gmail.com

