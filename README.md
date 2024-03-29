# DaSSH

DaSSH is a fully responsive ecommerce web application developed with React, Typescript, Redux Toolkit, React Router 6, SCSS, Tailwind. For the backend I used [json-server](https://github.com/typicode/json-server) to generate a fake REST API.

You can visit the website here: https://da-ssh-app.herokuapp.com/

## Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Features](#features)
- [Folder Structure](#folder-structure)

## Prerequisites

Before running this project, ensure you have the following installed:

1. Node.js
2. Git

## Installation

1. Clone the repository: git clone https://github.com/MihaiDragutescu/da-ssh-frontend.git
2. Install the dependencies: npm install
3. Start the server: npm run start

## Features

* Product listings: Users can view products for sale.
* Product filtering: Users can filter the products by size, brand, color, price (range), collection or category.
* Product sorting: Users can sort the products by price (ascending or descending) or by newest.
* Product details: Users can view detailed information about each product.
* Shopping cart: Users can add products to their shopping cart.
* Checking out (only form validation, no payment method implemented for the current version).

## Folder Structure

### assets/

This directory contains all the images and fonts used in the application.

### components/

This directory contains reusable React components grouped by category: form components, layout components and general ui components.

### hooks/

This directory contains all the custom hooks used in the application.

### pages/

This directory contains the main pages of the application. Each page has its own directory containing the main TypeScript (.tsx) file and subdirectories for its specific sections and components.

### store/

This directory contains the Redux related files. The `slices` directory contains all the slices with the reducers logic for the application. The `api.ts` file defines an *API slice* that lists the server's base URL and the endpoints we interact with in the application. The `index.ts` file configures the store and exports all the actions and auto-generated hooks by RTK Query.

### styles/

This directory contains global SCSS variables, mixins and fonts used throughout the application.

### types/

This directory contains all the type definitions for the application.

### utils/

This directory contains utility functions and helper modules used throughout the application.

### App.tsx

This is the main component that renders the application.

### index.tsx

This is the main entry point for the application.

