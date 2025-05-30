# URL Shortener

A modern, full-stack URL shortener application built with Node.js, Express, TypeScript, and MongoDB for the backend, and a frontend (structure ready for your preferred framework).

## Features
- Shorten long URLs to easy-to-share short links
- RESTful API built with Express and TypeScript
- MongoDB integration for persistent storage
- Environment variable support for secure configuration
- Nodemon for automatic server reload during development

## Project Structure
```
backend/
  app.ts            # Express server entry point
  src/
    config/
      mongo.config.ts  # MongoDB configuration
  package.json
  tsconfig.json
frontend/
  # (Frontend code goes here)
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Backend Setup
1. Install dependencies:
   ```sh
   cd backend
   npm install
   ```
2. Create a `.env` file in the `backend` folder with your MongoDB URI and other environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=4000
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The server will run on [http://localhost:4000](http://localhost:4000).

### Frontend Setup
- (Add your frontend framework and setup instructions here)

## Scripts
- `npm run dev` — Start backend with nodemon
- `npm run build` — Build TypeScript files
- `npm start` — Start compiled server

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
