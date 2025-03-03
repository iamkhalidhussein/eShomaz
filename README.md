# eShomaz

eShomaz is a social media web application that allows users to connect with friends, share updates, photos, and videos, and stay connected with their network.

## Features

- User authentication and authorization
- Create, edit, and delete posts
- Upload and share photos and videos
- Comment and like posts
- Follow and unfollow users
- Real-time notifications

## Technologies Used

- Frontend:
  - React
  - React Router
  - React Helmet
  - Axios
  - Kinde Auth
  - CSS

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/iamkhalidhussein/eShomaz.git
    ```

2. Navigate to the project directory:

    ```bash
    cd eShomaz
    ```

3. Install dependencies for both frontend and backend:

    ```bash
    # For frontend
    cd eshomaz-frontend
    npm install

    # For backend
    cd eshomaz-backend
    npm install
    ```

4. Set up environment variables for backend and frontend:

    Create a `.env` file in the `eshomaz-backend` directory with the following variables:

    ```env
    PORT = your_port
    DB_USER = your_db_user
    DB_PASS = your_db_pass
    MONGO_URI = your_mongo_uri
    ```

    Create a `.env` file in the `eshomaz-frontend` directory with the following variables:

    ```env
    VITE_BACKEND_URL = your_backend_url
    VITE_CLOUDINARY_CLOUD_NAME = cloudinary_cloud_name
    CLOUDINARY_API_KEY = cloudinary_api_key
    CLOUDINARY_API_SECRET = cloudinary_api_secret
    ```

5. Start the development server:

    ```bash
    # For frontend
    cd eshomaz-frontend
    npm start

    # For backend
    cd eshomaz-backend
    npm start
    ```

6. Open your browser and navigate to `http://localhost:your_port` to see the application running.

## Contributing

We welcome contributions to improve eShomaz! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Special thanks to all the open-source contributors who helped make this project possible.
---

Happy coding!
