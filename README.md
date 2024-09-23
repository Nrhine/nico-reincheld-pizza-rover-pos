# Pizza Rover POS

**Pizza Rover POS** is a custom Point of Sale (POS) system developed for a new food truck business. This project is designed to manage orders efficiently and provide a smooth user experience for the business owners and staff.

## Table of Contents

- [Project Description](#project-description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [License](#license)

## Project Description

Pizza Rover POS is built using modern web technologies to deliver a responsive and user-friendly interface. The system helps manage orders, track sales, and handle inventory, tailored specifically for the needs of a food truck business.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   git clone https://github.com/yourusername/nico-reincheld-pizza-rover-pos.git

2. **Navigate to the project directory**:
   cd nico-reincheld-pizza-rover-pos

3. **Install the dependencies**:
   npm install

## Environment Variables

The project requires some environment variables to be set for proper configuration. Create a .env file in the root directory and add the following variables:

VITE_SERVER_HOST=localhost
VITE_SERVER_PORT=8080

These variables define the server host and port where your backend is running. Adjust the values according to your setup.

## Usage

To start the development server, run:

npm run dev

## Dependencies

The project relies on the following key dependencies:

- React: A JavaScript library for building user interfaces.
- React DOM: React package for working with the DOM.
- React Router DOM: Declarative routing for React applications.
- Axios: A promise-based HTTP client for making requests to the server.
- Sass: A CSS preprocessor to write maintainable and scalable styles.
- uuid: For generating unique identifiers.
- dotenv: For managing environment variables.
