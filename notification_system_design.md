# Notification System Design

## Overview

The project is a full stack notification dashboard system built using React and Node.js.
The frontend fetches notification data from the backend API and displays it in a searchable dashboard.
The backend aggregates data from multiple external APIs and formats the response before sending it to the frontend.
A reusable logging middleware package is integrated into the backend for logging application events.

---

# Architecture

```txt
Frontend (React)
        ↓
Backend API (Node.js + Express)
        ↓
External APIs
```

---

# Backend Flow

1. Client sends request to backend API.
2. Backend fetches users, posts, and comments data from external APIs.
3. Backend combines and formats the data.
4. Logging middleware logs important events.
5. Backend sends final response to frontend.

---

# Frontend Flow

1. React frontend calls backend API.
2. Notifications are fetched and stored in state.
3. Data is displayed using reusable components.
4. Search functionality filters notifications dynamically.

---

# Logging Middleware

A reusable logging middleware package is created separately inside:

```txt
logging_middleware/
```

The middleware is used inside backend controllers and services.

---

# Features

- Full stack architecture
- Modular backend structure
- Reusable middleware
- Search functionality
- Responsive UI
- Error handling
- External API integration

---

# Scalability Improvements

Future improvements can include:

- Database integration
- Authentication
- Pagination
- Caching
- Rate limiting
- Deployment using Docker and cloud services