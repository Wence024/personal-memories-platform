# Personal Memories Platform

## Project Idea

A cloud storage platform for one's pictures and videos that have outgrown local storage capacity. The platform enables automatic, periodic "refetching" of random media files for a set size (e.g., 1 GB) to help users relive memories without needing to back up everything.

## Objectives

Automated fetching of memories when the media storage exceeds local device capacity (e.g., cellphone, laptop), with flexible and user-driven syncing preferences.

## Supported Platforms

* Web
* Android (via React Native)
* iOS (via React Native, planned)

## Architecture & Storage

* Backend-agnostic storage service approach.
* Short-term: Appwrite storage free tier (1 GB limit).
* Long-term: Support for personal laptops, external storage devices, or other cloud services.

## Features

### Authentication

* Email-password authentication.
* Google Sign-In integration.

### Media Management

* Support for images and videos in common formats.
* Video size limit: max 100 MB per file due to initial storage constraints.
* Limit videos to no more than half the number of pictures uploaded.

### Regular Random Sync (Refetch)

* Automatic refetching of random media files according to user-defined frequency (daily, weekly, monthly).
* User-configurable total allocated storage size limit on local device (default/fallback 1 GB).
* Manual refetch trigger available to users at any time.
* Refetch output is stored in a dedicated local cache folder, cleared before each new refetch.
* Cached media is separated from the user's main media directories, avoiding overwriting or conflicts.
* Offline or limited connectivity during scheduled refetch silently delays the process and notifies the user upon app launch.

### User Interface / UX

* Support for albums and search functionality (date metadata important).
* Media preview within the app.
* Slideshow widget for reliving memories.
* Cached refetched media and main media treated uniformly in the UI.

### Notifications & Feedback

* No push notifications by default.
* In-app feedback on upload errors and refetch status when user opens the app.
* Minimal alerts for refetch errors.

### Data Security & Privacy

* No encryption or strict privacy compliance in the initial phase.
* Secure connections (HTTPS) and authentication are implemented.

### Conflict Handling

* No conflict resolution needed due to refetch being a download-only cache.
* Refetched media does not overwrite or alter existing local media files.

### Duplicate Handling

* Duplicate media between cached refetch and local media allowed but separated.
* Possible future optimization to detect duplicates during upload.

### Analytics & Logging

* No analytics or usage logging included in the initial phase.

### Scaling & Performance

* Prototype targets small user base (e.g., a family).
* Storage capped initially at 1 GB (Appwrite free tier).
* Long-term goal: support ~50 GB per user; scalability deferred.

## Project Structure & Components

For detailed component descriptions and responsibilities, see  
📄 **[docs/components.md](./docs/components.md)**.

## Development Guidelines

* [Coding Guidelines](./docs/coding-guidelines.md)  
* [Git Commit Guidelines](./docs/git-commit-guidelines.md)  
* [Testing Guide](./docs/testing-guide.md)

## Roadmap

See 📄 **[docs/roadmap.md](./docs/roadmap.md)**.

## Future Enhancements

* Media processing: thumbnail generation, video transcoding, compression.
* Duplicate detection and optimization.
* Enhanced security and privacy compliance.
* Push notifications and richer feedback mechanisms.
* Analytics and monitoring.

## Tech Stack

* **Frontend**: React + TypeScript + Vite
* **Styling**: Tailwind CSS + shadcn-ui
* **State Management**: React Query
* **Backend**: Lovable Cloud (Supabase)
* **Storage**: Appwrite (initial), extensible to other providers

## Getting Started

1. Clone the repository  
2. Install dependencies: `npm install`  
3. Run development server: `npm run dev`  
4. Open browser at: **http://localhost:8080**

## Lovable Project

Built with **Lovable** —  
**URL:** https://lovable.dev/projects/714eda88-1501-4ec6-968a-a49d72ff7530
