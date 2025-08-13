# Your First REST API - IPT2, Week 3

This project implements a basic backend server using Node.js and the Express framework. It serves static HTML content and JSON data, and handles POST requests to echo back client data. This serves as a practical introduction to backend development and RESTful API concepts for the IPT2 course.

## Project Context

* **Course:** IPT2
* **Activity:** Laboratory Activity 3 - "Your First REST API"
* **Objective:** Create a Node.js + Express backend that serves HTML and JSON, and accepts POST requests.
* **Key Learnings:** Understanding the fundamental role of the backend, RESTful API principles, and serving static vs. dynamic content.

## Table of Contents

1. [Setup & Installation](#setup--installation)
2. [Project Structure](#project-structure)
3. [API Endpoints](#api-endpoints)
4. [Testing with Postman](#testing-with-postman)
5. [Expected Output](#expected-output)
6. [Next Steps & Further Exploration](#next-steps--further-exploration)

## Setup & Installation

1. **Clone or Download:** Obtain the project files.
2. **Navigate to Project Directory:** Open your terminal or command prompt and change to the project's root directory:

    ```bash
    cd wence-labs\Lab-3
    ```

3. **Initialize NPM:** Install project dependencies:

    ```bash
    npm install
    ```

    *(This command runs `npm init -y` and `npm install express` as described in the activity instructions).*
4. **Start the Server:** Run the Node.js server:

    ```bash
    node server.js
    ```

    The server will typically start on `http://localhost:3000`.

## Project Structure

```txt
week3-backend/
├── node_modules/
├── public/
│   └── index.html
├── package.json
├── package-lock.json
└── server.js
```

* `node_modules/`: Contains project dependencies (like `express`).
* `public/`: Directory for static assets.
  * `index.html`: The main HTML file served by the root endpoint.
* `package.json`: Metadata for the Node.js project, including dependencies.
* `package-lock.json`: Records the exact versions of installed dependencies.
* `server.js`: The main server-side application file.

## API Endpoints

The backend exposes the following RESTful API endpoints:

### **Part B: Create Routes**

* **`GET /`**
  * **Description:** Serves a welcome message directly from the server.
  * **Response:** Plain text.
  * **Example Response:** `Welcome to my first REST API!`

* **`GET /api/info`**
  * **Description:** Provides information about the course and the current week's topic.
  * **Response:** JSON object.
  * **Example Response:**

      ```json
      {
        "course": "IPT2",
        "week": 3,
        "topic": "Backend Integration"
      }
      ```

* **`POST /api/echo`**
  * **Description:** Accepts a JSON payload from the client and returns the exact same JSON payload back.
  * **Request Body:** JSON object.
  * **Example Request Body:**

      ```json
      {
        "name": "Sample User",
        "data": "Some value"
      }
      ```

  * **Example Response:**

      ```json
      {
        "name": "Sample User",
        "data": "Some value"
      }
      ```

### **Part C: Serve Static Files**

* **`GET /`** (also served by `express.static`)
  * **Description:** When a GET request is made to the root URL, the server serves the `index.html` file from the `public` directory.
  * **Response:** HTML document.

## Testing with Postman

This section outlines how to test the implemented API endpoints using Postman. Ensure your server is running (`node server.js`) before testing.

1. **Testing `GET /` (Static HTML):**
    * Open Postman.
    * Create a new request.
    * Set the HTTP Method to `GET`.
    * Enter the URL: `http://localhost:3000/`
    * Send the request.
    * **Expected:** You should see the HTML content of your `public/index.html` file in the response body.

2. **Testing `GET /api/info`:**
    * Open Postman.
    * Create a new request.
    * Set the HTTP Method to `GET`.
    * Enter the URL: `http://localhost:3000/api/info`
    * Send the request.
    * **Expected:** The response body should be a JSON object containing the course information.

3. **Testing `POST /api/echo`:**
    * Open Postman.
    * Create a new request.
    * Set the HTTP Method to `POST`.
    * Enter the URL: `http://localhost:3000/api/echo`
    * Navigate to the **Body** tab.
    * Select the `raw` radio button.
    * In the dropdown next to `raw`, select `JSON`.
    * Enter a JSON payload in the text area, for example:

        ```json
        {
          "greeting": "Hello from Postman!",
          "timestamp": "2023-10-27T10:00:00Z"
        }
        ```

    * Send the request.
    * **Expected:** The response body should be the exact same JSON payload that you sent.

## Expected Output

* **Browser:** Accessing `http://localhost:3000/` in a web browser should display the content of `public/index.html`.
* **Postman (GET /api/info):** A successful request to this endpoint should return the specified JSON object.
* **Postman (POST /api/echo):** A successful request with a JSON body should return the identical JSON body.

## Next Steps & Further Exploration

This activity is a foundational step. Based on the lesson's "Beyond the Basics" section, consider exploring:

* **Advanced API Design:** Implementing authentication (e.g., JWT, OAuth), pagination for larger datasets, and API versioning.
* **Database Integration:** Connecting the backend to a database (e.g., PostgreSQL for SQL, MongoDB for NoSQL) to persist data. Learning about ORMs/ODMs like Sequelize or Mongoose.
* **Deployment:** Deploying the Node.js application to cloud platforms like Heroku, AWS, Azure, or Google Cloud.
* **Error Handling:** Implementing robust error handling mechanisms for API requests.
* **More Complex Routes:** Building out more sophisticated API endpoints for creating, reading, updating, and deleting resources.
