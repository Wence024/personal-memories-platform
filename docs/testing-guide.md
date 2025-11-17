# Testing Guidelines for Personal Memories Platform

## Overview

This document outlines the testing approach for each core feature of the **Personal Memories Platform**. The focus is on **unit** and **integration testing**, with a future plan to use **Vitest** as the test framework.

---

## Core Features Testing Breakdown

### 1. Authentication (Login, Signup, Session Management)

#### Unit Tests

* **AuthContext Tests**
  * Test if the context provides the correct user session state.
  * Test if login/logout actions update the state correctly.
  * Mock API calls and check if authentication state is handled correctly.
  * Example:
    * Verify that `login` sets the correct user data.
    * Verify that `logout` clears user data.
    * Test unauthorized access redirect logic.

* **Auth API Helper Tests**
  * Test login, signup, and logout functions using mock requests.
  * Example:
    * Mock successful login and assert returned user data.
    * Mock failed login and assert correct error is thrown.

#### Integration Tests

* **Login Flow**
  * Test UI + context updates together.
  * Verify successful login updates context and redirects.

* **Session Persistence**
  * Test persistent login using localStorage/AsyncStorage.

---

### 2. Media Upload & Management

#### Unit Tests

* **Upload Function Tests**
  * Validate file type, size, and rejection of invalid files.

* **Media API Helper Tests**
  * Validate upload requests and responses with mocks.

#### Integration Tests

* **Upload Flow**
  * Test UI file picker, API calls, progress bar, and user feedback.

* **Media Library Update**
  * Verify new media appears in the UI after a successful upload.

---

### 3. Sync & Refetch Mechanism

#### Unit Tests

* **Sync Function Tests**
  * Test `fetchRandomMedia()` with mock backend responses.
  * Ensure it returns a random subset of the user's media.
  * Validate filtering based on preferences (size, date).

* **Local Cache Management**
  * Test cache clearing and size limit enforcement.

#### Integration Tests

* **Automatic Sync Flow**
  * Test refetch schedule respecting user frequency settings.
  * Simulate offline mode and verify sync defer logic.

* **Manual Refetch Flow**
  * Test manual refetch updates the cache correctly.

---

## General Guidelines for Writing Tests

### Test Strategy

* **Unit Testing**
  * Test isolated logic (functions, hooks).
  * Use mocks (`jest.mock()` or Vitest mocks) for API calls.
  * Each test validates one behavior.

* **Integration Testing**
  * Test how UI, context, and APIs work together.
  * Use React Testing Library for UI interactions.
  * Use Vitest mocks to simulate backend responses.

### Best Practices

* Write isolated tests.
* Mock dependencies for reliability.
* Test edge cases.
* Keep tests updated with feature changes.
* Test both success and failure paths.

---

## Conclusion

These guidelines provide a structured roadmap for testing the **Personal Memories Platform** using unit and integration tests, with Vitest as the backbone for automation.
