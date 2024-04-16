# Contact API

This API provides endpoints for managing user accounts and contacts. It allows users to register, login, and perform CRUD operations on their contacts.

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
