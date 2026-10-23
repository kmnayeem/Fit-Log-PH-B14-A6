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

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | Application framework, routing, and page rendering |
| [React](https://react.dev/) | Building reusable user interface components |
| [TypeScript](https://www.typescriptlang.org/) | Adding static typing to the application |
| [Tailwind CSS](https://tailwindcss.com/) | Styling the responsive interface |
| [React Icons](https://react-icons.github.io/react-icons/) | Providing icons for the user interface |
| REST API | Fetching workout data |

## Key Features

1. Browse workouts with images and target muscle groups.
2. View workout details, including equipment, difficulty, sets, reps, duration, calories burned, and ratings when available.
3. Read exercise descriptions and step-by-step instructions.
4. Navigate to workout-specific pages using dynamic routes in the Next.js App Router.
5. Use the responsive interface across mobile, tablet, and desktop screen sizes.

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

Install [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/). npm is included with Node.js.

### Installation

1. Open a terminal in the project directory.
2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API

The application retrieves workout information from this REST API endpoint:

[https://api.abcz.workers.dev/api/fitlog](https://api.abcz.workers.dev/api/fitlog)

## Design

Fit-Log features a dark interface with lime-green accents. Its responsive layout keeps workout information clear and accessible across different screen sizes.

## Author

**@kmnayeem**

This project is part of my learning journey with Programming Hero. Through its development, I practiced Next.js fundamentals, reusable React components, dynamic routing, TypeScript, API integration, and responsive web design.

---

**Fit-Log — Your journey to a stronger you.**
