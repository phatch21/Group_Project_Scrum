# Home Screen App

A modern, responsive React application featuring a stylish home screen with goals tracking functionality.

## Project Overview

This project is built with React 19, TypeScript, and Vite, providing a fast and efficient development experience. The application features a mobile-friendly home screen with a goals section.

## Features

- Responsive design that works on both desktop and mobile devices
- Clean, modern UI with a goals tracking section
- Optimized for performance

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/home-screen-app.git
   cd home-screen-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/       # React components
│   └── HomeScreen.tsx
├── styles/           # CSS files
│   └── HomeScreen.css
├── docs/             # Documentation
├── App.tsx           # Main application component
├── App.css           # Main application styles
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## Components

### HomeScreen

The main component that displays a mobile-friendly home screen with:

- Status bar
- Goals section with two goal items
- Home indicator

See [Component Documentation](./docs/components/HomeScreen.md) for more details.

## Mobile Responsiveness

The application is fully responsive and optimized for mobile devices:

- Adapts to different screen sizes
- Maintains proper layout on small screens
- Prevents horizontal scrolling
- Adjusts font sizes and spacing for better mobile experience

## Development

### ESLint Configuration

This project uses ESLint for code quality. If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

## License

MIT
