# Testing Guidelines for Personal Memories Platform

## **Overview**

This document outlines the testing approach for each core feature of the **Personal Memories Platform**. The focus is on **unit** and **integration testing**, with a future focus on using **Vitest** as the test framework.

---

## **Core Features Testing Breakdown**

### **1. Authentication (Login, Signup, Session Management)**

#### **Unit Tests**

* **AuthContext Tests**

  * Test if the context provides the correct user session state.
  * Test if login/logout actions update the state correctly.
  * Mock API calls and check if authentication state is handled correctly (i.e., storing the token, clearing on logout).

  Example tests:

  * Verify that calling `login` sets the correct user data.
  * Verify that calling `logout` clears the user data.
  * Test that unauthorized access redirects to the login page.
* **Auth API Helper Tests**

  * Test the `authAPI.ts` functions (e.g., `login`, `signup`, `logout`) with mock requests.
  * Validate the success and error handling of API calls.

  Example tests:

  * Mock a successful login and verify the response data is returned correctly.
  * Mock a failed login and verify the correct error message is thrown.

#### **Integration Tests**

* **Login Flow**

  * Test the entire login flow, including UI and context update.
  * Use mocks to simulate API calls and verify if the UI reflects successful login, session persistence, and error handling.

  Example test:

  * Test if logging in from the UI triggers the correct context changes and navigates to the home screen.

* **Session Persistence**

  * Test if the app properly persists the user's session after page reloads (using `localStorage`, `AsyncStorage`).

  Example test:

  * Check if the user is auto-logged in after app restart if a valid session is available.

---

### **2. Media Upload & Management**

#### **Unit Tests**

* **Upload Function Tests**

  * Test the `uploadMedia()` function to ensure it correctly handles file validation, such as type and size.

  Example tests:

  * Verify that `uploadMedia()` rejects invalid file types (e.g., non-image/video).
  * Test that files exceeding size limits are properly rejected.
* **Media API Helper Tests**

  * Test functions responsible for interacting with the backend (e.g., `uploadMedia()`).
  * Mock API requests and validate the response structure.

  Example tests:

  * Ensure that the backend responds with success status upon file upload.
  * Test error handling for failed uploads.

#### **Integration Tests**

* **Upload Flow**

  * Test the complete file upload process, including:

    * UI file selection.
    * Calling the API to upload the media.
    * Correct UI updates (progress bar, success/error messages).

  Example test:

  * Verify that the media upload button triggers the file selection and progress bar.
* **Media Library Update**

  * Test if the media library updates after successful upload. Ensure new media appears in the UI.

  Example test:

  * After a successful upload, verify if the new media is displayed in the media gallery.

---

### **3. Sync & Refetch Mechanism**

#### **Unit Tests**

* **Sync Function Tests**

  * Test the `fetchRandomMedia()` function that queries random media from the backend.
  * Mock the backend response and test if the function correctly handles random media selection.

  Example tests:

  * Ensure that `fetchRandomMedia()` returns a random subset of the user’s media.
  * Validate that the media is properly filtered according to user preferences (e.g., media size, date).

* **Local Cache Management**

  * Test cache clearing and cache size logic when syncing new media.

  Example tests:

  * Test that the cache is cleared when a new refetch happens.
  * Test that the cache size does not exceed the user-defined limit (e.g., 1GB).

#### **Integration Tests**

* **Automatic Sync Flow**

  * Test if the automatic sync respects the user’s refetch frequency (e.g., daily, weekly, monthly).
  * Use mocks to simulate network connectivity and check if the sync process handles offline situations properly.

  Example test:

  * Simulate the scenario where the app is offline, and check if it defers sync and informs the user on the next app launch.

* **Manual Refetch Flow**

  * Test if the user can manually trigger a refetch and get the correct subset of media.

  Example test:

  * Verify that when the user clicks the "Refetch" button, the media cache is updated with a new subset of media.

---

## **General Guidelines for Writing Tests**

### **Test Strategy**

* **Unit Testing**:

  * Test small, isolated pieces of logic (e.g., functions, hooks).
  * Use mocking libraries (e.g., `jest.mock()` or Vitest’s mock functions) to mock external dependencies like API calls.
  * Each test should validate a single behavior (e.g., "Ensure login works when credentials are correct").

* **Integration Testing**:

  * Test the flow between components (e.g., interaction between UI, context, and API).
  * Use **React Testing Library** for UI tests (including component rendering, event handling).
  * Use **Vitest’s** mock functions to simulate API responses and check the integration of components with the backend.

### **Best Practices**

* **Write isolated tests**: Ensure each test checks one specific feature or behavior. This helps identify the cause of errors easily.
* **Mock dependencies**: Use mock data and functions to avoid relying on external services. This makes tests faster and more reliable.
* **Test edge cases**: Consider how the application should behave in unusual or error scenarios (e.g., large media files, corrupted uploads, network failures).
* **Keep tests up-to-date**: Ensure that any changes in features or behavior are reflected in the tests.
* **Test both success and failure**: Always test how the app behaves in both successful and failed scenarios (e.g., API call succeeds or fails).

---

## **Conclusion**

These guidelines provide a structured approach to testing the **Personal Memories Platform** using unit and integration tests. As you move forward with testing and transitioning these guidelines into **Vitest** tests, remember to start with core functionality and ensure that each feature is well-tested for both correctness and edge cases.
