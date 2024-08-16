# User Acquisition System

This project is a simple user acquisition system built with Node.js, Express, MongoDB, and React.js. The system allows users to register, log in, and tracks the total number of users. It serves as a foundation for analyzing user behavior and optimizing user acquisition strategies.

## Features

- **User Registration**: Users can create an account with a username, email, and password.
- **User Login**: Registered users can log in to the system.
- **User Count**: The system tracks and displays the total number of registered users.

## Requirements

- Node.js v14.0+ 
- MongoDB v4.0+
- React.js v16.0+

## Project Structure


user-acquisition-system/
├── server.js
├── models/
│   └── User.js
└── frontend/
    ├── src/
    │   └── App.js
    └── package.json


## Installation

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/user-acquisition-system.git
   cd user-acquisition-system
   ```

2. **Install backend dependencies**:
   ```bash
   npm install
   ```

3. **Setup MongoDB**:
   - Ensure MongoDB is installed and running.
   - The default MongoDB URL is `mongodb://localhost:27017/user_acquisition`. You can change it in `server.js` if needed.

4. **Start the backend server**:
   ```bash
   node server.js
   ```
   The server will start on `http://localhost:3000`.

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install frontend dependencies**:
   ```bash
   npm install
   ```

3. **Start the frontend development server**:
   ```bash
   npm start
   ```
   The React app will run on `http://localhost:3001` by default.

## Usage

1. **Register a User**:
   - Open the React app in your browser.
   - Enter a username, email, and password, and click "Register".

2. **Log in**:
   - Enter your registered email and password, and click "Login".

3. **Check User Count**:
   - Visit `http://localhost:3000/user-count` in your browser to see the total number of registered users.

## Customization

- **Frontend**:
  - Modify `App.js` in the `src` directory to customize the user interface and functionality.

- **Backend**:
  - Modify `server.js` and `User.js` in the `models` directory to add new features or change existing logic.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Submit a pull request.


This `README.md` provides a comprehensive overview of the User Acquisition System project, including installation instructions, usage guidelines, and contribution details.
