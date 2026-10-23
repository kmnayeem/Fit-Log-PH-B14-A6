🏋️ Fit-Log-PH-B14-A6

Track Your Workouts. Keep Moving. 💪

📌 About the Project

Fit-Log-PH-B14-A6 is a fitness and workout web application built as part of the Programming Hero B14 A6 assignment for Milestone 6: Next.js Foundation.

The main purpose of this project is to help users explore different workouts and learn more about each exercise. Users can browse workouts, read exercise instructions, discover target muscle groups, and check information such as required equipment, difficulty levels, duration, calories burned, and ratings.

I built this project using Next.js, React, and TypeScript. I focused on creating a clean interface that is easy to navigate and works well on different screen sizes.

✨ Key Features
Workout Listing: Browse different workouts and explore their names, images, and target muscle groups.
Workout Details: View exercise information, including equipment, difficulty, sets, reps, duration, calories burned, and ratings when available.
Exercise Instructions: Read exercise descriptions and step-by-step instructions to learn how to perform different workouts.
Responsive Design: Enjoy a user-friendly experience on mobile phones, tablets, and desktop devices.
Dynamic Navigation: Navigate between pages using the Next.js App Router, with dynamic workout detail pages, loading states, and custom not-found pages.
🛠️ Technologies Used
Technology	Purpose
Next.js	Building the web application and user interface
Next.js App Router	Handling page navigation, layouts, and dynamic routes
React	Creating reusable and interactive UI components
TypeScript	Writing type-safe and maintainable code
Tailwind CSS	Styling the application and making it responsive
React Icons	Adding icons to the user interface
REST API	Fetching workout data from an external API
📂 Project Structure
Fit-Log-PH-B14-A6/
├── public/
├── src/
│   ├── app/
│   │   ├── myplan/
│   │   │   └── page.tsx
│   │   ├── workouts/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── assets/
│   ├── components/
│   │   ├── AllWorks.tsx
│   │   ├── Banner.tsx
│   │   ├── ClientLayout.tsx
│   │   ├── DetailsPageButton.tsx
│   │   ├── Footer.tsx
│   │   ├── MyPlan.tsx
│   │   ├── Navbar.tsx
│   │   ├── NavLinks.tsx
│   │   └── WorkOutCard.tsx
│   ├── context/
│   │   └── WOContext.tsx
│   ├── lib/
│   │   └── api.ts
│   └── Types/
│       └── work.type.ts
├── package.json
└── README.md

🚀 Getting Started

Follow these steps to run the project on your local machine.

Prerequisites

Make sure you have installed:

Node.js
npm
Git
Installation

1. Clone the repository

git clone YOUR_REPOSITORY_URL


2. Go to the project directory

cd Fit-Log-PH-B14-A6


3. Install the dependencies

npm install


4. Start the development server

npm run dev


5. Open the application

Visit http://localhost:3000 in your browser.

🔗 API

This project uses an external REST API to fetch workout information.

API Endpoint: https://api.abcz.workers.dev/api/fitlog

The retrieved data is used to display workout information throughout the application.

🎨 Design

Fit-Log features a dark theme with lime-green accents to create a modern, fitness-inspired look. The layout keeps workout information organized and easy to read, while responsive styling helps the application work across different devices.

🎓 Project Information
Project Name: Fit-Log-PH-B14-A6
Course: Programming Hero
Assignment: B14 A6
Milestone: 6 — Next.js Foundation
Project Type: Fitness and Workout Web Application
👨‍💻 Author

K. M. Nayeem

GitHub: @kmnayeem

This project is part of my learning journey with Programming Hero. While building it, I practiced Next.js fundamentals, reusable React components, dynamic routing, TypeScript, API integration, and responsive web design.

Fit-Log — Stay Active. Stay Consistent. Keep Moving. 💪