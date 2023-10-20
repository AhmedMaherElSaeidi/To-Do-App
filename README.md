# To-Do App in React

A simple To-Do App built using React, allowing users to create and manage tasks.

## Components

The following components have been used in this app:

- `Home`: Top-level component that holds all the other components and manages the state of the application.
- `NavBar`: Component that displays a simple nav bar.
- `Footer`: Component that displays the app footer.
- `TaskList`: Component that displays the list of tasks and allows the user to mark them as completed.
- `TaskForm`: Component where you can add a task.
- `FavouriteTask`: Component that represents a single task that was marked as favorite.
- `FavouriteTasks`: Component that displays the list of favorite tasks the user marked them.

## State Management

The app's state is managed using the `useState` and `useEffect` hooks, which allows us to create and update state variables.

The data is loaded and retrieved to/from `localStorage` of browser by a `module` that facilitates `CRUD` operations.

When a new task is added, a new object is created with a `unique ID`, the `activity name`, the `description`, and the `dead line` entered by the user, and a `isFinished` and `isFav` property set to `false`. This object is then added to the `localStorage` using the `localStorage.js` module functions.

## Styling

Styling is done using CSS modules, which allow us to define styles for each component in a separate file and then import them into the component. This makes it easy to manage styles and avoid naming conflicts.

## Author

- **Name:** Ahmed Maher
- **Project:** ITI final project for react web development

## Project Overview
![My Image](./public/Screenshot%202023-05-12%20040731.png)

## Other ITI ReactJs Internship related Tasks

- Simulatingthe interface of google meet using ReactJS: [Google-Meet-Interface](https://github.com/AhmedMaherElSaeidi/Google-Meet-Interface)
- Simple chess board using html, css, and js: [Chess-Board](https://github.com/AhmedMaherElSaeidi/Chess-Board)
