# Reactflix App

A React-based movie browsing application built with Vite. Users can browse movies, add them to favorites, and manage their favorite collection with persistent local storage.

## Features

- **Movie Browsing**: Display and explore movies from an API
- **Favorites Management**: Add and remove movies from your favorites list
- **Persistent Storage**: Favorites are saved to browser's local storage and restored on page reload
- **Responsive Navigation**: Clean navigation bar for app navigation
- **Movie Cards**: Display movie information in an organized card layout

## Tech Stack

- **React** - UI library
- **Vite** - Build tool with HMR (Hot Module Replacement)
- **Context API** - State management for favorites
- **Local Storage** - Client-side data persistence
- **CSS** - Styling for components and pages

## Project Structure

```
src/
├── components/       # Reusable React components (MovieCard, NavBar)
├── contexts/         # React Context for global state (MovieContext)
├── pages/            # Page components (Home, Favorites)
├── services/         # API integration (api.js)
├── css/              # Stylesheet files
└── App.jsx           # Main application component
```

## Getting Started

1. Install dependencies:

   ```
   npm install
   ```

2. Run the development server:

   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```
