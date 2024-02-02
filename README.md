E-Commerce Back End
Description
This project is a back-end application for an e-commerce site built using Express.js API and Sequelize to interact with a MySQL database. It allows users to perform CRUD operations on categories, products, and tags through RESTful APIs. This application demonstrates the use of Object-Relational Mapping (ORM) techniques to simplify database transactions and interactions.

Installation

-Clone the repository
git clone https://github.com/your-github-username/your-repo-name.git
cd your-repo-name

-Install dependencies
npm install

-Set up your MySQL database
Log into your MySQL shell and run the following command:
source db/schema.sql;
Exit the MySQL shell.

-Configure environment variables
Update the .env file with your MySQL username, password, and database name.

Usage

-Start the server using the following command:
node server.js
Once the server is running, you can use API testing tools like Insomnia or Postman to test the RESTful API endpoints.

API Routes
-Categories

GET /api/categories to view all categories.
GET /api/categories/:id to view a single category by ID.
POST /api/categories to add a new category.
PUT /api/categories/:id to update a category by ID.
DELETE /api/categories/:id to delete a category by ID.

-Products

GET /api/products to view all products.
GET /api/products/:id to view a single product by ID.
POST /api/products to add a new product.
PUT /api/products/:id to update a product by ID.
DELETE /api/products/:id to delete a product by ID.

-Tags

GET /api/tags to view all tags.
GET /api/tags/:id to view a single tag by ID.
POST /api/tags to add a new tag.
PUT /api/tags/:id to update a tag by ID.
DELETE /api/tags/:id to delete a tag by ID.

Technologies Used

Node.js
Express.js
MySQL
Sequelize ORM
dotenv