# Project Structure Documentation

## Overview

This project is a React application built with TypeScript and Vite. It features a responsive home screen with goals tracking functionality.

## Directory Structure

```
/
├── docs/                 # Documentation files
│   ├── components/       # Component-specific documentation
│   └── project-structure.md  # This file
├── public/               # Static assets served as-is
├── src/                  # Source code
│   ├── assets/           # Images, fonts, and other static assets
│   ├── components/       # React components
│   │   └── HomeScreen.tsx  # Main home screen component
│   ├── styles/           # CSS files
│   │   └── HomeScreen.css  # Styles for the HomeScreen component
│   ├── App.css           # Main application styles
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global styles
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite type definitions
├── .eslintrc.js          # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # App-specific TypeScript configuration
├── tsconfig.node.json    # Node-specific TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # Project overview and documentation
```

## Key Files and Their Purposes

### Configuration Files

- **package.json**: Defines project dependencies and npm scripts
- **tsconfig.json**: Main TypeScript configuration file
- **tsconfig.app.json**: TypeScript configuration for the application code
- **tsconfig.node.json**: TypeScript configuration for Node.js code (like Vite config)
- **vite.config.ts**: Configuration for the Vite build tool
- **.eslintrc.js**: ESLint rules and configuration

### Application Files

- **index.html**: The HTML template for the application
- **src/main.tsx**: The entry point that renders the React application
- **src/App.tsx**: The main application component that includes the HomeScreen
- **src/components/HomeScreen.tsx**: The main UI component displaying the home screen
- **src/styles/HomeScreen.css**: Styles specific to the HomeScreen component
- **src/index.css**: Global styles applied to the entire application
- **src/App.css**: Styles specific to the App component

## Build and Development

The project uses Vite for fast development and optimized production builds:

- **Development**: `npm run dev` - Starts the development server
- **Build**: `npm run build` - Creates a production build
- **Preview**: `npm run preview` - Previews the production build locally
- **Lint**: `npm run lint` - Runs ESLint to check code quality

## TypeScript Configuration

The project uses a split TypeScript configuration:

1. **tsconfig.json**: References the app and node configurations
2. **tsconfig.app.json**: Configuration for the React application code
3. **tsconfig.node.json**: Configuration for the Vite configuration file

This split configuration allows for different settings between the application code and build tools.

## Styling Approach

The project uses plain CSS files with a component-based organization:

- Component-specific styles are in dedicated CSS files (e.g., HomeScreen.css)
- Global styles are in index.css
- App-level styles are in App.css

This approach keeps styles modular and maintainable while avoiding the need for CSS-in-JS libraries.
