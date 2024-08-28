# Inventory Management System

## Overview

The **Inventory Management System** is a security-focused application designed exclusively for a store's internal use. This system allows administrators and managers to manage the store's inventory by adding, updating, and tracking products. Key features include validation, error handling, and role-based access control to ensure the integrity and security of the system.

## Features

- **Secure Access**: The system is restricted to authorized personnel only. Role-based access control ensures that only admins and managers can log in and manage inventory.
  
- **Product Management**: Admins and managers can:
  - Add new products to the inventory.
  - Update existing product details.
  - Remove products that are no longer available.
  - View the list of all products in the inventory.

- **Validation**: The system includes comprehensive validation to ensure that all data entered is correct and adheres to business rules.
  - Product name and descriptions must meet specified criteria.
  - Price and quantity fields are validated to ensure they contain appropriate values.
  
- **Error Handling**: Robust error handling mechanisms are in place to manage any issues that arise during the operation of the system.
  - User-friendly error messages guide users to resolve issues.
  - Logging of errors for future analysis and troubleshooting.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Inventory_management_system.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Inventory_management_system
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the following variables:
     - `DB_CONNECTION_STRING` - Database connection string.
     - `JWT_SECRET` - Secret key for JSON Web Token (JWT) authentication.
     - `ADMIN_EMAIL` and `ADMIN_PASSWORD` - Credentials for the initial admin user.

5. Run the application:
   ```bash
   npm start
   ```

## Usage

1. **Logging In**: Admins and managers can log in using their credentials. Unauthorized users are prevented from accessing the system.

2. **Managing Inventory**: Once logged in, users can manage the inventory:
   - **Add Product**: Fill in the product details, ensuring that all fields meet validation criteria.
   - **Update Product**: Select a product to update its details.
   - **Delete Product**: Remove a product from the inventory.
   - **View Products**: Browse the inventory to see all products.

3. **Error Handling**: In case of errors, follow the on-screen instructions or refer to the logs for troubleshooting.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your proposed changes. Ensure that all new features include appropriate validation and error handling.

## Contact

For any inquiries or issues, please contact osamaeldemerdash57@gmail.com.



