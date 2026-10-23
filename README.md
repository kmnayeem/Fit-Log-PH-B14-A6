# Fit-Log

**Track your workouts. Keep moving.**

Fit-Log is a fitness and workout web application developed for the **Programming Hero B14 A6 assignment — Milestone 6: Next.js Foundation**. It helps users explore workouts, review exercise instructions, and learn about target muscle groups, required equipment, difficulty levels, duration, calories burned, and ratings when available.

## Features

- **Workout listing:** Browse workouts, images, and target muscle groups.
- **Workout details:** View available exercise information, including equipment, difficulty, sets, reps, duration, calories burned, and ratings.
- **Exercise instructions:** Read exercise descriptions and step-by-step instructions.
- **Responsive design:** Use the application on mobile phones, tablets, and desktop devices.
- **Dynamic navigation:** Navigate using the Next.js App Router, with dynamic workout detail pages, loading states, and custom not-found pages.

## Technologies Used

- Next.js and the Next.js App Router
- React
- TypeScript
- Tailwind CSS
- React Icons
- REST API

## Project Structure

```text
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
```

## Getting Started

### Prerequisites

Make sure the following are installed on your system:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

   Replace `YOUR_REPOSITORY_URL` with the URL of your GitHub repository.

2. Navigate to the project directory:

   ```bash
   cd Fit-Log-PH-B14-A6
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API

The application uses an external REST API to retrieve workout information.

**API endpoint:** `https://api.abcz.workers.dev/api/fitlog`

## Design

Fit-Log uses a dark theme with lime-green accents to create a modern, fitness-inspired interface. Its responsive layout keeps workout information organized and accessible across different screen sizes.

## Author

**@kmnayeem**

This project is part of my learning journey with Programming Hero. Through its development, I practiced Next.js fundamentals, reusable React components, dynamic routing, TypeScript, API integration, and responsive web design.

---

**Fit-Log — Your journey to a stronger you.**
