# Jet2 Tech Test Solution - build a responsive modal

## Introduction
Javascript is essential when creating a modal that can open and close upon user interaction. React as one of the most popular Javascript libraries, greatly simplifies adding interactivity to a web page, which is the main reason behind using React in my solution. 

React's compositional and functional nature also makes it great for creating reusable components. By extracting a [modal component](src/components/Modal.tsx), it can be reused as many times as needed across the whole application, and the same behaviour is expected. 

In addition, the solution makes use of Typescript instead of Vanilla Javascript to add type safety checks at compile time instead of runtime. This allows the developer to catch errors early and write cleaner code.

### Project structure
- [src/](src/)
  - [App.tsx](src/App.tsx)
   Two instances (success & error) of the Modal component in action, each triggered by a button and controlled using the useState hook. The first modal can also continue onto the second modal, showing that one modal can trigger another modal if needed.

  - [components/](src/components/)
     - [Modal.tsx](src/components/Modal.tsx)
         The modal component has the following features:
         - Returns null if modal is not open, returns a modal if it is open
         - A dialog window with title, description, and two buttons to either close or continue the modal
         - Accessibility features such as aria-label, aria-describedby, aria-modal
         - Responsive and mobile first using the min-width media query (from 37.5em onwards is desktop).
         - The opening, closing, and continuing of a modal can be controlled via state stored outside of the component.
         - Depdending on the status of a modal(success/error), a different icon is shown in front of the title
     - [Button.tsx](src/components/Button.tsx)
      A reusable button component.

   - [styles/](src/styles/)
      Project style files using SASS.

   - [enum/](src/enum/)
      Project enum types for Typescript.

   - [assets/](src/assets/)
      Project static assets.

- [tests/](tests/)
   - [App.test.tsx](tests/App.test.tsx)
      Unit and intergration tests for the App component
   - [components/Modal.test.tsx](tests/components/Modal.test.tsx)
      Unit tests for the modal component
   - [components/\__snapshots__/](tests/components/__snapshots__/)
      snapshots of the modal component


## Solution stack
- React v18
- Typescript v5
- Vite
- HTML
- SASS (node-sass using [.scss files](src/styles/))
- Eslint

   #### Testing stack
   - Vitest
   - React Testing Library

   #### Developer tooling
   - Eslint
   - VScode
   - Prettier
   - Git

## How to run
1. Install all dependencies
```bash
npm install
```

2. Run in development mode
```bash
npm run dev
```

3. Open http://localhost:5173/ to view the solution.

### Run unit tests
```bash
npm run test
```

### Run eslint
```bash
npm run lint
```
