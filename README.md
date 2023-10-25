# Social Network API

A RESTful API built with Express.js and MongoDB that simulates a basic social networking platform.

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Video Walkthrough](#video-walkthrough)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Description

This API supports a simple social networking application where users can share their thoughts, react to friends' thoughts, and create a friend list. It demonstrates the power of a NoSQL database, using MongoDB, to handle large amounts of unstructured data efficiently.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Make sure you have MongoDB installed on your machine.
2. Clone the repository.
3. Navigate to the directory and install dependencies with `npm install`.
4. Run the server with `npm start`.

## Usage

The server will start and connect to the MongoDB database. You can test the API routes using tools like Insomnia or Postman.

## API Routes

### Users

- **GET** all users: `/api/users`
- **GET** a single user by ID: `/api/users/:id`
- **POST** a new user: `/api/users`
- **PUT** to update a user by its ID: `/api/users/:id`
- **DELETE** a user by its ID: `/api/users/:id`
- **POST** add a friend: `/api/users/:userId/friends/:friendId`
- **DELETE** remove a friend: `/api/users/:userId/friends/:friendId`

### Thoughts

- ... _(and so on for each route)_

## Video Walkthrough

_Link to video walkthrough (e.g. on YouTube or another platform)._

## License

This project is licensed under the MIT License.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Questions

For any questions or feedback, please contact [Your Name / Email].
