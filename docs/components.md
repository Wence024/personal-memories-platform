# Architecture Document — Personal Memories Platform

## Overview

This document breaks down the platform into modular components to guide implementation and clarify responsibilities across frontend and backend.

---

## Frontend Modules

### 1. Authentication Module
* Email-password login & signup  
* Google OAuth  
* Session/token management  
* Error feedback

### 2. Media Upload Module
* UI for selecting / uploading media  
* File validation  
* Upload progress and errors  
* Optional pause/resume

### 3. User Preferences Module
* Refetch frequency settings  
* Storage size limit input  
* Cache usage display

### 4. Media Library Module
* Album/grid views  
* Search by metadata  
* Media preview  
* Slideshow  
* Unified display of main + cached media

### 5. Sync & Cache Management Module
* Scheduler  
* Manual refetch  
* Cache folder management  
* Offline handling  
* Storage limit enforcement

### 6. Notification & Feedback Module
* Upload error messages  
* Refetch summaries  
* Minimal alerting

---

## Backend Modules

### 1. Authentication Service
* Email/password + Google OAuth  
* Token/session management

### 2. Media Storage Service
* Store uploaded files  
* Enforce size limits  
* Maintain metadata  
* Extendable storage backend

### 3. Media Query & Refetch API
* Fetch random user media  
* Pagination  
* Authorization

### 4. Metadata Management
* Timestamps  
* Metadata consistency

### 5. Logging & Error Handling
* Minimal MVP logging  
* Useful error messages

---

## Cross-Cutting Concerns

### Security
* HTTPS  
* Safe token storage  
* No at-rest encryption in MVP

### Scalability
* Modular backend API design  
* Extensible frontend structure

---

## Folder Organization

```

src/
└── feature/
├── authentication/
│     ├── model/
│     ├── view/
│     └── controller/
├── mediaManagement/
├── sync/
├── userPreferences/
└── ...

```

### Example

```

src/
└── feature/
└── authentication/
├── model/
│     ├── AuthContext.tsx
│     ├── authTypes.ts
│     └── authReducer.ts
├── view/
│     ├── LoginScreen.tsx
│     ├── SignupScreen.tsx
│     └── AuthLoadingScreen.tsx
└── controller/
├── useAuth.ts
├── authAPI.ts
└── authHelpers.ts

```