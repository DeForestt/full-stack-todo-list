# Aflat To-Do List Application

This is a simple To-Do List application built using the Aflat programming language. The application provides basic CRUD (Create, Read, Update, Delete) functionality for managing tasks.

## Getting Started

To run the application, follow these steps:

1. **Install Aflat:**
   - Make sure you have the Aflat programming language installed on your system.

2. **Clone the Repository:**
   - Clone this repository to your local machine.

3. **Run the Application:**
   - Open a terminal/command prompt and navigate to the project directory.
   - Run the command `aflat run` to start the server.

4. **Access the Application:**
   - Open your web browser and go to `http://localhost:8080` to access the application.

## API Endpoints

### Get Tasks

- **Endpoint:** `GET /api/tasks`
- **Description:** Retrieve a list of all tasks or a specific task by providing an `id` query parameter.

### Create Task

- **Endpoint:** `POST /api/tasks`
- **Description:** Create a new task by sending a POST request with the task data in the request body.

### Delete Task

- **Endpoint:** `DELETE /api/tasks`
- **Description:** Delete a task by providing the `id` query parameter.

## Frontend Files

- The HTML file is located at `./html/index.html`.
- The JavaScript file is located at `./js/index.js`.

## Directory Structure

- `./data/todo.json`: JSON file used for storing tasks.
- `./src/JSON`: Contains utility functions for parsing JSON data.

## Usage

- Open the application in your web browser.
- Use the interface to add, edit, and delete tasks.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

You can include this `README.md` file in your project repository to provide an overview of your Aflat To-Do List application along with instructions for running it. Feel free to customize it further to suit your specific project details.
