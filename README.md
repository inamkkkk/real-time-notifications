# Real-time Notifications Server

A Node.js server that sends real-time notifications to users about new events using WebSockets.

## Features

*   User Authentication (JWT)
*   Real-time Notifications via WebSockets
*   Event Creation and Management
*   MongoDB Integration

## Folder Structure


/
├── server.js
├── routes/
│   └── auth.js
│   └── events.js
├── controllers/
│   └── authController.js
│   └── eventController.js
├── models/
│   └── User.js
│   └── Event.js
├── middlewares/
│   └── authMiddleware.js
├── utils/
│   └── jwt.js
│   └── websocket.js
├── .env
└── package.json


## Setup

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Create a `.env` file with the following variables:
    
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/realtime-notifications
    JWT_SECRET=your-secret-key
    
4.  Start the server: `npm start`

## API Endpoints

*   `POST /auth/register`: Register a new user.
*   `POST /auth/login`: Login a user.
*   `POST /events`: Create a new event (requires authentication).
*   `GET /events`: Get all events (requires authentication).

## WebSocket

*   Connect to `/ws` to receive real-time notifications about new events.
