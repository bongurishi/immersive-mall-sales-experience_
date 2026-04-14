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

## 💻 How to Run It in VS Code

Follow these steps to run the project locally on your machine:

### Prerequisites
You need to have **Node.js** installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

### Step-by-Step Instructions

1. **Download the Code**
   - Export this project from AI Studio as a ZIP file and extract it to a folder on your computer.

2. **Open in VS Code**
   - Open Visual Studio Code.
   - Go to `File` > `Open Folder...` and select the folder where you extracted the code.

3. **Open the Terminal**
   - In VS Code, go to the top menu and select `Terminal` > `New Terminal` (or press `` Ctrl + ` ``).

4. **Install Dependencies**
   - In the terminal, type the following command and press Enter:
     ```bash
     npm install
     ```
   - *This will download all the required libraries (React, Tailwind, Framer Motion, etc.) into a `node_modules` folder.*

5. **Start the Development Server**
   - Once the installation is complete, type the following command and press Enter:
     ```bash
     npm run dev
     ```

6. **View the App**
   - The terminal will output a local URL, usually `http://localhost:5173/` or `http://localhost:3000/`.
   - `Ctrl + Click` (or `Cmd + Click` on Mac) that link to open the application in your web browser.

### How to Build for Production (Deployment)
If you want to deploy this to a service like Vercel or Netlify:
1. Run `npm run build` in the terminal.
2. This will create a `dist` folder containing the highly optimized, minified HTML, CSS, and JS files ready to be uploaded to any web host.
