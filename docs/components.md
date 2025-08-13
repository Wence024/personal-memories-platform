# Architecture Document — Personal Memories Platform

## Overview

This document breaks down the platform into modular components to guide implementation and clarify responsibilities across frontend and backend.

---

## Frontend Modules

### 1. Authentication Module

* Email-password login and signup UI
* Google OAuth integration
* Token/session management
* Error handling and user feedback

### 2. Media Upload Module

* UI for selecting and uploading images/videos
* Client-side validation (file types, size limits)
* Progress indicators and error feedback
* Upload retry and pause/resume capability (optional)

### 3. User Preferences Module

* Settings UI for refetch frequency (daily, weekly, monthly)
* Storage size limit input with validation (default fallback 1 GB)
* Display current cache usage and limits

### 4. Media Library Module

* Display uploaded media in albums and grid/list views
* Search/filter media by date and metadata
* Media preview (images and video playback)
* Slideshow widget for easy viewing
* Unified display of main media and cached refetch media

### 5. Sync & Cache Management Module

* Scheduler to trigger automatic refetch based on preferences
* Manual refetch trigger UI
* Local cache folder management (clear before refetch, store new files)
* Offline handling: defer refetch and notify user on next app launch
* Storage monitoring to enforce cache size limits

### 6. Notification & Feedback Module

* In-app messages for upload errors and refetch status on app open
* Minimal error alerts for refetch failures

---

## Backend Modules

### 1. Authentication Service

* Support email-password authentication and Google OAuth
* Manage user sessions and tokens
* Integrate with storage service authentication

### 2. Media Storage Service

* Accept and store uploaded media files
* Enforce file size limits and formats (max 100 MB per video initially)
* Store and manage media metadata (upload date, format, size, user ID)
* Support scalable storage backends (Appwrite initially, extendable later)

### 3. Media Query & Refetch API

* Provide API to query a random subset of user media respecting size limits
* Support pagination and filtering by date or metadata (for search)
* Secure endpoints ensuring user authorization

### 4. Metadata Management

* Track upload timestamps and media file metadata
* Maintain consistency of metadata for refetch queries

### 5. Logging & Error Handling (Minimal for MVP)

* Basic server-side logging of uploads and refetch requests
* Error responses with useful messages for client handling

---

## Cross-Cutting Concerns

### Security

* HTTPS for all communication
* Secure storage of authentication tokens
* No encryption at rest in MVP, planned for future phases

### Scalability & Extensibility

* Design backend APIs and storage abstraction to allow swapping storage providers
* Frontend modularity to support future features like media processing, analytics, notifications

## Folder Organization

The frontend and backend code is organized using the Model-View-Controller (MVC) pattern, grouped by feature under the src/feature/ directory. This modular approach helps keep related files together, improving maintainability and scalability.

```txt
src/
 └── feature/
      ├── authentication/
      │     ├── model/                # Contexts, services, types, state management
      │     ├── view/                 # Login screen, Signup screen components
      │     │      └── components/
      │     └── controller/           # Hooks, API calls, interaction logic
      ├── mediaManagement/
      │     ├── model/
      │     ├── view/
      │     └── controller/
      ├── sync/
      │     ├── model/
      │     ├── view/
      │     └── controller/
      ├── userPreferences/
      │     ├── model/
      │     ├── view/
      │     └── controller/
      └── ...
```

### Example

```txt
src/
 └── feature/
      └── authentication/
            ├── model/
            │     ├── AuthContext.tsx           # React Context & Provider for auth state
            │     ├── authTypes.ts              # TypeScript types and interfaces
            │     └── authReducer.ts            # Reducer for auth state management (if using useReducer)
            ├── view/
            │     ├── LoginScreen.tsx           # Login UI component/screen
            │     ├── SignupScreen.tsx          # Signup UI component/screen
            │     └── AuthLoadingScreen.tsx    # Optional loading state UI
            └── controller/
                  ├── useAuth.ts                 # Custom hooks for auth logic (login, logout, signup)
                  ├── authAPI.ts                 # API calls related to authentication
                  └── authHelpers.ts             # Helper functions (e.g., validation, token storage)
```
