## Login and Signup using backend

Certainly! Below is a sample README file for a backend signup and login system using Express.js, MongoDB, and the bcrypt library for password encryption. This README provides an overview of the project structure, dependencies, and how to set up and run the application.

# Backend Signup and Login System

This project implements a backend system for user signup and login using Express.js, MongoDB, and bcrypt for password encryption. It allows users to register with a unique username, password, email, and role (admin, student, visitor). If a user already exists, the system handles it gracefully.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Gittushar88448/Authentication_backend.git

   cd Authapp

2. Install dependencies:
    npm install

3. Set up environment variables:
  Create a .env file in the root directory and provide the following variables: 

    PORT=3000
    MONGODB_URI=mongodb+srv://kmrtushar01:Vc1Fy16UgCsykjox@cluster0.2uqvolw.mongodb.net/Authapp

4. Start server 

    npm start

## Usage
Once the server is running, you can use the provided API endpoints to interact with the system.

## API Endpoints

1. POST /api/signup: Endpoint to register a new user. Requires name, password, 
2. email, and role fields in the request body.
3. POST /api/login: Endpoint to authenticate a user. Requires email and password fields in the request body.
4. GET /api/user/:id: Endpoint to retrieve user information by ID.

## Dependencies

1. Express.js: Web framework for Node.js
2. Mongoose: MongoDB object modeling for Node.js
3. bcrypt: Library for password hashing
4. dotenv: Module to load environment variables from a .env file

## Contributing
Contributions are welcome! Feel free to open issues or pull requests for any improvements or features you'd like to add.

## License
This project is licensed under the MIT License - see the LICENSE file for details.