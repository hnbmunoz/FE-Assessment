# FE-Assessment
  This is an initial FE Assessment for Fiable via this link https://fiable.atlassian.net/wiki/external/NzM2YWM4MzI3MGM4NDZlZThjYzc3NWE4NDU4MGEzZTA

## For Developers 
  1. After getting the repo run npm install to install dependencies
  2. Run npm storybook to run storybook to test the components
  3. Run npm run dev to run the application

## How to use
  1. Type on the indicated text box the necessary paramaters using this syntax ( x-axis, y-axis, direction)
  2. x/y - axis could only be numbers
  3. Direction only accepts One of the four cardinal directions (NORTH, EAST, SOUTH, WEST).
  4. Once button set parameters is clicked an arrow object will appear on the grid
  5. The location of the arrow should be based on the x/y axis of user input and the arrow should be pointed based on direction of user input 


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
