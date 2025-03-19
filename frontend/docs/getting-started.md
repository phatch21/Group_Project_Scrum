# Getting Started

This guide will help you set up and run the Home Screen application on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher) or yarn (v1.22.0 or higher)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/home-screen-app.git
cd home-screen-app
```

2. Install dependencies:

```bash
npm install
# or if you use yarn
yarn install
```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the Vite development server, typically at http://localhost:5173. The page will reload automatically when you make changes to the code.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

This will generate optimized files in the `dist` directory.

## Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

This will serve the production build from the `dist` directory, typically at http://localhost:4173.

## Code Quality

To run ESLint and check code quality:

```bash
npm run lint
# or
yarn lint
```

## Project Structure

The main files you'll be working with are:

- `src/App.tsx` - The main application component
- `src/components/HomeScreen.tsx` - The home screen component
- `src/styles/HomeScreen.css` - Styles for the home screen

For a complete overview of the project structure, see the [Project Structure Documentation](./project-structure.md).

## Component Documentation

For details about the HomeScreen component, see the [HomeScreen Component Documentation](./components/HomeScreen.md).

## Troubleshooting

### Common Issues

1. **Module not found errors**

   - Make sure all dependencies are installed by running `npm install`
   - Check import paths for typos

2. **Styles not applying correctly**

   - Verify that CSS files are being imported properly
   - Check for CSS specificity issues

3. **TypeScript errors**
   - Run `npm run build` to see detailed TypeScript errors
   - Make sure your TypeScript version matches the project requirements

### Getting Help

If you encounter any issues not covered here, please:

1. Check the existing documentation
2. Look for similar issues in the project repository
3. Create a new issue with detailed information about the problem
