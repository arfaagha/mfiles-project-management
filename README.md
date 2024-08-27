
# Project Management Application

This is a TypeScript-based application designed to manage project states within a project list. It provides visual feedback and interaction capabilities for selecting, launching, and finishing projects. 

## Features

- **Project State Indication**: 
  - Projects in the Project List are visually differentiated based on their state, using both text and color.
  - The border color on the right side of each project item represents the project's state.

- **Hover Interaction**:
  - When hovering over a project item, the background color changes (e.g., to light blue) if the project is selectable, indicating its interactivity.

- **Non-selectable Finished Projects**:
  - Projects that have been completed are non-selectable. 
  - Only projects with the same state can be selected simultaneously.

- **Project Selection**:
  - Clicking on a project selects it, changing the background color (e.g., to dark blue) to indicate selection.

- **Project Unselection**:
  - Clicking on a selected (highlighted) project unselects it, background color reverts to its initial state (e.g., white) post-action.

- **Batch Actions**:
  - After selecting one or more projects, users can apply actions such as "Launch" or "Finish" via buttons.
  - The state of the selected projects is updated accordingly after the action is executed.
  - The background color reverts to its initial state (e.g., white) post-action.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [TypeScript](https://www.typescriptlang.org/) (version 4.x or later)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/project-management-app.git
   cd project-management-app

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
