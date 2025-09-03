# React To-Do List Application

A simple and intuitive to-do list application built with React. This project allows users to efficiently manage their daily tasks by adding, viewing, marking as complete, and deleting items from their list.

## Features

* **Add a Task:** Quickly add new tasks to your list through a simple input field.
* **Display List of Tasks:** View all your current tasks in a clean and organized list.
* **Mark a Task as Completed:** Click on a task to toggle its completion status, visually striking it through.
* **Delete a Task:** Remove tasks you no longer need with a single click.
* **Responsive Design:** A clean and functional layout that works well on various screen sizes.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (Node Package Manager) installed on your system. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/react-todo-list.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd react-todo-list
    ```

3. **Install the dependencies:**

    ```sh
    npm install
    ```

4. **Run the application:**

    ```sh
    npm start
    ```

    This will start the development server and open the application in your default web browser at `http://localhost:3000`.

## Project Structure

The project is structured into modular components for better organization and reusability.

```txt
src/
|-- App.js          # Main application component, manages state and logic
|-- TodoList.js     # Renders the list of to-do items
|-- TodoItem.js     # Represents a single to-do item
|-- index.css       # Global styles for the application
|-- index.js        # Entry point of the React application
```

### Component Breakdown

* **`App.js`**: This is the root component of the application. It holds the state for the list of tasks and contains the core logic for adding, completing, and deleting tasks.
* **`TodoList.js`**: This component receives the list of tasks from `App.js` as a prop and maps over the array to render an `TodoItem` for each task.
* **`TodoItem.js`**: This component displays an individual task. It receives the task details and the handler functions (`toggleComplete`, `deleteTask`) as props from its parent.

## How to Use

1. **Add a new task:** Type your task into the input field at the top and click the "Add Task" button or press Enter.
2. **Mark a task as complete:** Click on the text of any task in the list to toggle its completed state. A completed task will have a line through it.
3. **Delete a task:** Click the "Delete" button next to a task to remove it permanently from the list.
