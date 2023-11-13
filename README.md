# E-Commerce Backend Application

Welcome to the E-Commerce Backend Application, a system that leverages MySQL2 and Sequelize to create and manage tables for an e-commerce database. Additionally, it provides an Express API for handling all CRUD operations for categories, products, and tags. With this application, users can seamlessly add, view, update, and delete data within their e-commerce platform.

## Table of Contents

* [Technologies](#technologies)
* [Usage](#usage)
* [Functionality](#functionality)
* [Future Development](#future-development)
* [Video Walkthrough](#video-walkthrough)
* [License](#license)

## Technologies

- **MySQL**
- **Sequelize**
- **Node.js**
- **Express**
- **JavaScript**
- **Insomnia**

## Usage

### App Initialization

To get started with this application, follow these steps:

1. After cloning this repository or copying its code, run `npm install` to install the required Node modules.
2. Configure your database connection in `connection.js`. You can use a `.env` file for this purpose.
3. Run the following commands to initialize your database:
   ```
   mysql -u root -p
   source ./db/schema.sql;
   exit
   ```
4. Seed the database with sample data using `npm run seed`.
5. Start the application by running `npm start`. It will listen on port 3001.

### Functionality
 ![Screenshot of project](./Assets/13-orm-homework-demo-01.gif)
 ![Screenshot of project](./Assets/13-orm-homework-demo-02.gif)
 ![Screenshot of project](./Assets/13-orm-homework-demo-03.gif)


### Future Development

In the future, the application can be enhanced by:

- Developing a user-friendly front-end interface to complement the existing API.
- Expanding functionality to support additional features and improvements.

# Video Walkthrough

[Video Demonstration](https://watch.screencastify.com/v/kqLWUX6EustGbNtSw7MN)

### License

This project is licensed under the MIT License. 