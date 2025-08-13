# Project Roadmap

## **Phase 1: Core Foundation (MVP)**

### **1. User Authentication & Management (Person 1)**

* **Objective:** Implement user sign-up, login, and session management.
* **Tasks:**

  * Set up authentication service (email/password and Google OAuth).
  * Implement React Context (or Redux) to manage user session.
  * Handle session persistence (localStorage, AsyncStorage).
  * Handle error states (invalid login, password reset).
* **Deliverables:**

  * Auth service working with backend (Appwrite, etc.).
  * User session management in the frontend.
  * Simple login/signup screens (can be styled minimally for MVP).

**Key considerations:** This is the entry point to the app, so it should be fully tested and work reliably.

---

### **2. Media Upload & Management (Person 2)**

* **Objective:** Implement media upload flow and user media storage.
* **Tasks:**

  * Set up file upload to the backend (e.g., Appwrite storage).
  * Implement file validation for images/videos (size, type).
  * Develop UI for users to upload media.
  * Handle media metadata storage (e.g., filename, upload time, user ID).
* **Deliverables:**

  * Media upload UI with file input and progress indicators.
  * Basic error handling for failed uploads.
  * Media storage in the backend (e.g., Appwrite storage).

**Key considerations:** Ensuring smooth media uploads is critical. Focus on usability and handling large files efficiently.

---

### **3. Sync & Refetch Mechanism (Person 3)**

* **Objective:** Implement automatic and manual media refetch (sync) mechanism.
* **Tasks:**

  * Implement the refetch logic that grabs random media from the backend.
  * Implement local cache folder for storing refetched media.
  * Manage cache size (controlled by user settings).
  * Handle offline scenarios (graceful deferring of refetch and notification to the user).
* **Deliverables:**

  * Sync mechanism that works automatically (or on demand).
  * Proper handling of local storage (clearing and updating cache folder).
  * Notify users when offline and prompt them to reconnect.

**Key considerations:** Ensuring the sync runs smoothly, respects user storage limits, and handles edge cases (e.g., no internet).

---

### **Shared Responsibilities**

While each member works on their assigned feature, there should be some shared tasks to ensure smooth collaboration:

* **Backend setup (All Team Members)**:

  * Configure Appwrite or your backend of choice to support authentication, media storage, and refetch queries.
  * Establish API contracts between the frontend and backend.

* **UI/UX Design (All Team Members)**:

  * Plan wireframes for basic screens (login, media upload, sync progress).
  * Ensure that all components are visually cohesive, even for MVP.

* **Code Review & Testing (All Team Members)**:

  * Establish a testing strategy (unit tests for backend, integration testing for frontend).
  * Regular code reviews to ensure quality and prevent feature overlap.

---

### Timeline (Approximate)

* **Week 1-2:**

  * Person 1: Authentication Service + Basic UI (Login, Signup)
  * Person 2: Media Upload Functionality + Frontend Integration
  * Person 3: Sync Refetch Mechanism + Local Cache

* **Week 3:**

  * Testing and bug fixes for all components.
  * Backend and frontend integration.
  * Review the overall flow and ensure everything works together.
  * Basic styling and cleanup.

* **Week 4:**

  * Final bug fixing, documentation, and preparation for deployment.

---

### Post-MVP (Phase 2 and Beyond)

After the MVP is ready and foundational features are complete, the team can then start thinking about expanding and improving the app:

* **Media Management Enhancements** (e.g., sorting, album creation)
* **Advanced User Settings** (e.g., customizing refetch settings, media prioritization)
* **Offline-first Strategy** (e.g., offline caching improvements)
* **Notifications** (to notify users of failed uploads, successful syncs, etc.)

---

### Key Points to Keep in Mind

* **Regular Sync-ups**: Since there is overlap between tasks (e.g., authentication affecting media uploads), daily standups or regular check-ins are crucial to avoid bottlenecks.
* **Back-end flexibility**: As the project evolves, try to abstract backend dependencies and ensure that your API contracts can accommodate future features.
* **User Experience Focus**: Even if it's an MVP, pay attention to user flow (e.g., a smooth login, easy media upload, and reliable refetch mechanism).
