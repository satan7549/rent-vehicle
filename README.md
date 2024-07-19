# Vehicle Renting System

A comprehensive vehicle renting system built with React, Material UI, and a Node.js/Express backend using PostgreSQL and Prisma ORM. This application allows users to rent vehicles, including cars and bikes, through a dynamic form-based interface.

## Features

- **Frontend**: 
  - React application with Material UI for theming and utility classes.
  - Multi-step form with one question per screen (name, number of wheels, vehicle type, specific model, and date range picker).
  - Form validation and handling of loading, error, and success states.

- **Backend**: 
  - Node.js and Express server.
  - PostgreSQL database with Prisma ORM.
  - RESTful API endpoints for vehicle renting and data retrieval.
 

## Demo

Check out the live demo of application: [Demo Link](https://rent-vehicle-frontend.vercel.app/)


## Getting Started

### Prerequisites

- Node.js and npm 
- PostgreSQL

### Installation

#### Frontend

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```

#### Backend

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your PostgreSQL database and configure your `.env` file with the database connection details.

4. Run migrations and seed the database:
    ```bash
    npm run prisma:migrate
    npm run seed
    ```

5. Start the backend server:
    ```bash
    npm start
    ```


## Contributing

Feel free to submit issues and pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please contact [satansharma7549@gmail.com](mailto:satansharma7549@gmail.com).
