# User Registration API

This is a simple RESTful API for user registration and data validation. It includes basic validation for user information, stores data in memory, and logs errors to a file. The API allows the validation of user data, registration, and retrieval of all registered users.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [POST /user](#post-user)
  - [POST /register](#post-register)
  - [GET /users](#get-users)
- [Testing](#testing)
- [Error Logging](#error-logging)
- [Contributing](#contributing)

## Project Overview

This project is designed to provide basic functionality for user registration with validation, error handling, and in-memory data storage. The validation checks user details like name, email, password, and age. If valid, user data is stored, and a success message is returned.

## Features

- **Data Validation**: Ensures the user data meets the required format and constraints.
- **In-memory Storage**: User data is stored in an in-memory array for testing and demonstration purposes.
- **Error Logging**: Errors are logged to a file for debugging and tracking.
- **Testable Endpoints**: You can interact with the API via tools like Postman or `curl`.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework to handle HTTP requests.
- **JSDoc**: Documentation comments for API and functions.
- **FS (File System)**: Used for logging errors to a file.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/user-registration-api.git
   cd user-registration-api
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the server**:

   ```bash
   node src/server.js
   ```

   The server will start on port `3000`.

## API Endpoints

### POST /user

Validates user data.

- **Request Body**:

  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "age": 30
  }
  ```

- **Response**:

  - `200 OK`: If the data is valid.
  - `400 Bad Request`: If there are validation errors.

### POST /register

Registers a user after validating the data and stores it.

- **Request Body**:

  ```json
  {
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "password": "password456",
    "age": 25
  }
  ```

- **Response**:

  - `201 Created`: If registration is successful.
  - `400 Bad Request`: If the data fails validation.
  - `500 Internal Server Error`: If there’s an unexpected server error.

### GET /users

Retrieves all registered users.

- **Response**:

  - `200 OK`: Returns an array of all registered users.
  - Example:

    ```json
    [
      {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "password123",
        "age": 30
      },
      {
        "name": "Jane Doe",
        "email": "jane.doe@example.com",
        "password": "password456",
        "age": 25
      }
    ]
    ```

## Testing

You can test the API using tools like **Postman** or **curl**. Below are example curl requests:

### Validate User Data

```bash
curl -X POST http://localhost:3000/user -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john.doe@example.com", "password": "password123", "age": 30}'
```

### Register User

```bash
curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"name": "Jane Doe", "email": "jane.doe@example.com", "password": "password456", "age": 25}'
```

### Get All Users

```bash
curl http://localhost:3000/users
```

## Error Logging

All errors are logged to a file named `error.log` for debugging purposes. This helps track any issues that arise during the operation of the API.

## Contributing

We welcome contributions to improve this project! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'feat: add new feature'`).
5. Push to your branch (`git push origin feature-name`).
6. Open a pull request.

Please ensure your code follows the project’s coding style and includes appropriate documentation.

---

**License**: MIT License
