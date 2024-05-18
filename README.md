# Rewards Redemption App

## Overview

This application is a rewards redemption web app that allows users to:
- View their current reward points balance.
- Browse available rewards.
- Redeem rewards using their points.
- See a history of their reward redemptions.

The application uses a React frontend with Material-UI for styling, a Node.js/Express backend, and a MySQL database.

## Technologies Used

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Language**: JavaScript


## Setup and Run the Application

### Prerequisites

- Node.js (v14 or higher)
- MySQL Server
- npm (Node Package Manager)

### Backend Setup

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/your-repo/rewards-redemption-app.git
   cd rewards-redemption-app/backend
    ```

2. **Install Dependencies**:

```sh
   npm install
    ```

3. **Database Configuration**:

Modify the `db.config.js` file in the `backend/config` directory to change your database configuration in the format of:

```javascript
    const mysql = require('mysql2/promise');

    const db = mysql.createPool({
    host: 'localhost',
    user: 'your-username',
    password: 'your-password',
    database: 'rewards_db',
    });

    module.exports = db;
```

4. **Database Setup**:

Run the `rewards_db` SQL file to create the necessary database and tables.

5. **Start the Backend Server**:

```sh
npm start
```

The backend server will start on `http://localhost:3001`.


### Frontend Setup

1. **Navigate to Frontend Directory**:

```sh
cd ../frontend
```

2. **Install Dependencies and Start the Frontend Development Server**:

```sh
npm install
npm start
```