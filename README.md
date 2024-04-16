# Contact API

This API provides endpoints for managing user accounts and contacts. It allows users to register, login, and perform CRUD operations on their contacts.

## Installation

1. Clone the repository:

2. Install dependencies:

## Usage

### Scripts

- `npm start`: Starts the server.
- `npm run dev`: Starts the server in development mode with nodemon.

### User Routes

- **Register User**: `POST /api/users/register`
- **Login User**: `POST /api/users/login`
- **Get Current User**: `GET /api/users/current`

### Contacts Routes

- **Get All Contacts**: `GET /api/contacts`
- **Get Single Contact**: `GET /api/contacts/:id`
- **Create New Contact**: `POST /api/contacts`
- **Update Contact**: `PUT /api/contacts/:id`
- **Delete Contact**: `DELETE /api/contacts/:id`

## Access Control

- **Public Routes**: Register User, Login User.
- **Private Routes**: Get Current User, Get All Contacts, Get Single Contact, Create New Contact, Update Contact, Delete Contact.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
