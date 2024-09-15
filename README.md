# Project Title

Pizza Rover - POS and Inventory

## Overview

Pizza Rover is their name and slinging pizza is their game. My app will be an integrated POS and inventory system that will make the day to day operation of a food truck just a little bit easier.

### Problem Space

My brother and soon to be sister-in-law are opening up a food truck in the Columbus, Ohio area and I want to help them out any way that I can. The goal is to build a custom POS and inventory system to help them save some money on the start-up costs.

### User Profile

Small business owners:

- mobile POS
- order tracking
- inventory system that fits thier needs

### Features

1. User Authentication & Roles:

   - Admin Login: Admins can log in to access a dashboard to manage orders, sales, and inventory.
   - Cashier Login: Cashiers log in to use the POS system for order-taking and payment processing.

2. Menu Management:

   - View Menu: Admins and cashiers can view the food truck’s menu.
   - Modify Menu: Admins can add, remove, or update menu items, including descriptions, prices, and availability.
   - Menu Categories: Organize menu items into categories (e.g., "Drinks," "Main Course," "Desserts").

3. Order Management:

   - Place Orders: Cashiers can select menu items, add customizations (e.g., extra toppings), and submit orders.
   - View Current Orders: Cashiers can view a list of current orders being processed or waiting to be fulfilled.
   - Order Status Updates: Cashiers can mark orders as "In Progress" or "Completed" for tracking.
   - Order History: Admins can access a list of past orders with details for reference.

4. Inventory Management:

   - Real-Time Stock Tracking: Inventory levels update automatically when items are sold, showing current stock counts.
   - Low Stock Alerts: Admins receive notifications when stock for specific items falls below a predefined threshold.
   - Add/Remove Stock: Admins can manually adjust stock levels to account for restocks or changes.
   - View Inventory History: Admins can view past changes to inventory levels, including restocks and deductions.

## Implementation

### Tech Stack

- Front-End:

  - React.js
  - Scss
  - Vite

- Back-End:

  - Node.js
  - Express.js
  - Database: MySQL with Knex.js
  - Payment Processing: Square

- Additional:
  - Real-Time Data: Firebase or Supabase
  - Deployment and Hosting: AWS and Docker
  - Authentication & Security: JWT and Bcrypt.js
  - Testing and Quality Assurance: Jest & React Testing Library(front-end), Mocha/Chai(Back-end)
  - Analytics & Reporting: Chart.js
  - Notifications: Twilio API

### APIs

1. Payment Processing APIs
2. Twilio API (Optional)

### Sitemap

1. Login Page
2. Page Directory
3. Order Management Page
4. Admin Dashboard
5. Menu Management
6. Inventory Management Page
7. Sales Report Page
8. Customer Notification page (optional)
9. Settings Page
10. Low Stock Alerts Page

[Login Page] --> [Page Directory]
--> [Order Management Page]
--> [Admin Dashboard] --> [Menu Management]
--> [Inventory Management] --> [Sales Reports]
--> [Low Stock Alerts]
--> [Settings ]

### Mockups

1. Login
   ![Login Screen](./src/assets/mockups/Login%20Screen.png)

2. Directory Page

- Admin
  ![Admin Directory Page](./src/assets/mockups/Admin%20-%20Directory%20Page.png)

- Cashier
  ![Cashier Directory Page](./src/assets/mockups/Cashier%20-%20Directory%20Page.png)

3. Order Management Page
   ![Order Screens](./src/assets/mockups/Menu%20Pages.png)

### Data

[Users] ---> [Orders] ---> [Order_Items] ---> [Menu Items] ---> [Inventory]
| | |
[Payments] [Notifications] [Sales Reports]

1. Users

- Fields:
  - user_id (Primary Key)
  - name
  - email
  - password
  - role (Admin, Cashier)
- Relationships:
  - A user can have multiple roles (Admin or Cashier), determining what parts of the system they can access.
  - Users (Admin and Cashier) interact with orders, manage inventory, and view reports

2. Menu Items

- Fields:
  - item_id (Primary Key)
  - name
  - description
  - category
  - price
  - availability (Boolean)
- Relationships:
  - Menu items are linked to orders (one-to-many relationship). Each order contains multiple menu items.
  - Menu items have relationships with inventory data to track stock levels for each item.

3. Orders

- Fields:
  - order_id (Primary Key)
  - order_date
  - total_price
  - payment_status (Pending, Paid, Refunded)
  - order_status (In Progress, Completed)
  - user_id (Foreign Key - Cashier who placed the order)
- Relationships:
  - Each order is placed by a user (Cashier).
  - Orders have many menu items (many-to-many relationship), stored in a junction table (Order_Items).
  - Orders are tied to payments (one-to-one relationship) through payment details (e.g., transaction IDs).

4. Order_Items (Junction Table)

- Fields:
  - order_item_id (Primary Key)
  - order_id (Foreign Key)
  - item_id (Foreign Key)
  - quantity
  - customizations (e.g., extra toppings)
- Relationships:
  - Links orders and menu items to show which items were ordered and in what quantities.

5. Payments

- Fields:
  - payment_id (Primary Key)
  - order_id (Foreign Key)
  - payment_method (Credit Card, Mobile Payment)
  - payment_status (Pending, Completed, Refunded)
  - transaction_id
- Relationships:
  - Each payment is linked to a single order (one-to-one relationship). Payments store transaction details for tracking financial records.

6. Inventory

- Fields:
  - inventory_id (Primary Key)
  - item_id (Foreign Key)
  - current_stock
  - low_stock_threshold
- Relationships:
  - Each inventory record corresponds to a menu item (one-to-one relationship).
    Inventory is updated when an order is placed, automatically deducting the quantity sold.

7. Sales Reports

- Fields:
  - report_id (Primary Key)
  - report_date
  - total_sales
  - total_orders
  - most_sold_items
  - generated_by (User who generated the report)
- Relationships:
  - Sales reports are linked to the orders table (aggregation of multiple orders).
  - Reports are generated by Admin users.

8. Notifications

- Fields:
  - notification_id (Primary Key)
  - order_id (Foreign Key)
  - customer_contact (Email/SMS)
  - notification_type (Order Ready, Low Stock)
- Relationships:
  - Notifications are tied to orders (one-to-one relationship) for sending out alerts to customers.

### Endpoints

1. User Authentication

   POST /api/auth/login

- Description: Authenticate users (Admin or Cashier) and return a token for session management.
- Parameters:
  - email (string)
  - password (string)
- Example Request:
  {
  "email": "cashier@example.com",
  "password": "password123"
  }
- Example Response:
  {
  "token": "jwt_token",
  "user": {
  "id": 1,
  "name": "John Doe",
  "role": "Cashier"
  }
  }
- HTTP Status Codes:
  - 200 OK (successful login)
  - 401 Unauthorized (invalid credentials)

2. Menu Management

   GET /api/menu

- Description: Retrieve the entire menu for the POS.
- Parameters: None
- Example Response:
  [
  {
  "id": 1,
  "name": "Cheeseburger",
  "description": "Delicious grilled cheeseburger",
  "price": 9.99,
  "category": "Main",
  "availability": true
  },
  {
  "id": 2,
  "name": "Fries",
  "description": "Crispy golden fries",
  "price": 2.99,
  "category": "Sides",
  "availability": true
  }
  ]

  POST /api/menu

- Description: Add a new menu item (Admin only).
- Parameters:
  - name (string)
  - description (string)
  - price (number)
  - category (string)
  - availability (boolean)
- Example Request:
  {
  "name": "Milkshake",
  "description": "Classic vanilla milkshake",
  "price": 4.99,
  "category": "Drinks",
  "availability": true
  }
- Example Response:
  {
  "id": 3,
  "name": "Milkshake",
  "description": "Classic vanilla milkshake",
  "price": 4.99,
  "category": "Drinks",
  "availability": true
  }
- HTTP Status Codes:
  - 201 Created (item added successfully)
  - 403 Forbidden (if not Admin)

3. Orders

   POST /api/orders

- Description: Place a new order.
- Parameters:
  - items (array of objects with item_id and quantity)
  - payment_method (string)
- Example Request:
  {
  "items": [
  { "item_id": 1, "quantity": 2 },
  { "item_id": 2, "quantity": 1 }
  ],
  "payment_method": "Credit Card"
  }
- Example Response:
  {
  "order_id": 123,
  "order_status": "In Progress",
  "total_price": 22.97,
  "payment_status": "Pending",
  "items": [
  { "item_id": 1, "name": "Cheeseburger", "quantity": 2 },
  { "item_id": 2, "name": "Fries", "quantity": 1 }
  ]
  }
- HTTP Status Codes:

  - 201 Created (order placed successfully)
  - 400 Bad Request (invalid request data)

  GET /api/orders/{order_id}

- Description: Retrieve the details of a specific order.
- Parameters:
  - order_id (URL parameter)
- Example Response:
  {
  "order_id": 123,
  "order_status": "Completed",
  "total_price": 22.97,
  "payment_status": "Paid",
  "items": [
  { "item_id": 1, "name": "Cheeseburger", "quantity": 2 },
  { "item_id": 2, "name": "Fries", "quantity": 1 }
  ]
  }
- HTTP Status Codes:
  - 200 OK (order retrieved successfully)
  - 404 Not Found (if the order does not exist)

4. Inventory Management

   GET /api/inventory

- Description: Retrieve the current stock levels for all items.
- Parameters: None
- Example Response:
  [
  { "item_id": 1, "name": "Cheeseburger", "current_stock": 50 },
  { "item_id": 2, "name": "Fries", "current_stock": 100 }
  ]
  PATCH /api/inventory/{item_id}
- Description: Update stock levels for a specific item (Admin only).
- Parameters:
  - item_id (URL parameter)
  - current_stock (integer)
- Example Request:
  {
  "current_stock": 80
  }
- Example Response:
  {
  "item_id": 1,
  "name": "Cheeseburger",
  "current_stock": 80
  }
- HTTP Status Codes:
  - 200 OK (stock updated successfully)
  - 403 Forbidden (if not Admin)
  - 404 Not Found (if the item does not exist)

5. Payment Processing

   POST /api/payments

- Description: Process a payment for an order.
- Parameters:
  - order_id (integer)
  - payment_method (string)
- Example Request:
  {
  "order_id": 123,
  "payment_method": "Credit Card"
  }
- Example Response:
  {
  "payment_id": "txn_456",
  "order_id": 123,
  "payment_status": "Paid",
  "total_price": 22.97
  }
- HTTP Status Codes:
  - 200 OK (payment processed successfully)
  - 400 Bad Request (invalid request or insufficient funds)

6. Sales Reports

   GET /api/reports/sales

- Description: Retrieve sales data for a given date range.
- Parameters:
  - start_date (query parameter)
  - end_date (query parameter)
- Example Request: /api/reports/sales?start_date=2023-01-01&end_date=2023-01-31
- Example Response:
  {
  "total_sales": 4500.50,
  "total_orders": 150,
  "most_sold_items": [
  { "item_id": 1, "name": "Cheeseburger", "quantity_sold": 75 },
  { "item_id": 2, "name": "Fries", "quantity_sold": 50 }
  ]
  }
- HTTP Status Codes:
  - 200 OK (report generated successfully)
  - 400 Bad Request (invalid date range)

## Roadmap

Week 1: Back-End Setup, Database Schema, and User Authentication
Week 2: Front-End Setup, POS Interface, and Order Management

beyond the bootcamp

Week 3: Payment Integration, Inventory Management, and Admin Dashboard
Week 4: Testing, Bug Fixes, and Final Adjustments for Capstone Submission

---

## Future Implementations

1. Customer Loyalty Program

- Feature: Add a simple customer loyalty system where customers earn points on purchases, which can later be redeemed for discounts.
- Benefit: Encourages repeat business and increases customer engagement.
- Details:
  - Track customer orders and award points based on total purchase amounts.
  - Provide a “redeem points” option during the payment process.

2. Advanced Sales Analytics

- Feature: Provide more in-depth sales analytics, such as sales trends over time, customer demographics, or item popularity by day of the week.
- Benefit: Helps the food truck owner make data-driven decisions, optimizing menu items and business operations.
- Details:
  - Integrate additional charts and graphs in the admin dashboard.
  - Show predictive analytics based on past sales data.
