# Photography Portfolio
This project was developed for a rising professional photographer with the goal of showcasing her work in an elegant, simple, and efficient way.

The portfolio features a minimalist and intuitive layout, focusing on the visual experience and highlighting the quality of the images.

## Pages
The website consists of 4 main pages:

Home – Initial presentation and visual highlights

About – Information about the photographer

Gallery – Display of photographic works

Contact – Contact form

## Layout
A simple and modern design that prioritizes:

Intuitive navigation

Focus on imagery

High performance and fast loading

Excellent User Experience (UX)

*The client chose all the layout, typography, and color palette.

## Technologies Used

### Frontend
React (v18+)

Vite (quick build tool)

TypeScript (static typing)

Tailwind CSS (CDN styling)

React Router Dom (SPA navigation)

Fetch (API consumption)

i18next, i18next-browser-languagedetector

### Backend
Node.js

Express

MongoDB

Mongoose

### Authentication
JWT (JSON Web Token)

Bcrypt

### Image Management
Cloudinary

Multer

Sharp

### Other Tools
CORS

Dotenv

Nodemon

## Installation and Configuration

### 1. Clone the repository

```bash
git clone https://github.com/leeonealves/portfolio-fotografia.git
cd your-repo
```

### 2. Install dependencies

 ```bash
npm install
```

## Configure the Backend

```bash
cd backend
npm install
npm run dev
```

## Configure the Frontend

```bash
cd frontend
npm install
npm run dev
```
Development dependencies:
npm install --save-dev nodemon

### 3. Configure environment variables

```bash
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Scripts in package.json

```bash
"scripts": {
  "dev": "nodemon server.js",
  "start": "node server.js"
}
```

### 5. Run the project

Development mode: ```bash npm run dev ```

Production mode: ```bash npm start```

## Authentication

The system uses JWT for authentication:

Login generates a token.

The token is stored on the frontend.

## Image Upload
Upload workflow:

Upload via Multer.

Processing with Sharp.

Cloud storage via Cloudinary.

## Security
Passwords encrypted with Bcrypt.

JWT-based authentication.

Sensitive variables protected with Dotenv.

Configured CORS.

## Features
Login system for the administrative area.

Image upload and management.

Dynamic gallery.

Cloud storage integration.

## Future Improvements

internationalization.

Client area.

Booking/Scheduling system.

Social media integration.

Advanced administrative dashboard.

## Author
Project developed for a growing professional photographer
