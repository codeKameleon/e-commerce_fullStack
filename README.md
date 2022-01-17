# E-commerce Full Stack

As a part of our BeCode training, this project brings together the backend and frontend parts for a [E-commerce challenge](https://github.com/becodeorg/BXL-Hopper-2-33/tree/master/3.The-Mountain/Projects/5.E-Commerce)

## Technology Stack
| |
| ------| 
| MongoDB |
| Express |
| React |
| NodeJS |

## API

### Products
| Method | Routes | Description
| --- | --- | --- |
| GET | /api/products | Get all products
| GET | /api/products/:id | Get a single product
| POST | /api/products/:id | Add a new product (ADMIN access mandatory)
| PUT | /api/products/:id | Update a product (ADMIN access mandatory)
| DELETE | /api/products/:id | Delete a new product (ADMIN access mandatory)

### Carts
| Method | Routes | Description
| --- | --- | --- |
| GET | /api/carts | Get all carts
| GET | /api/carts/:id | Get a single cart
| PUT | /api/carts/:id | Update cart products list


## Usage

To run the backend server at [localhost:4000](http://localhost:4000) and launch connection to database, go inside `backend` folder and run

```
npm run server
``` 

To run the frontend server go inside `frontend` folder and run
```
npm run start
``` 

Then open your browser at [localhost:3000](http://localhost:3000)

## Features to add

### Backend
- Host DB on Heroku
- Implementation pattern Regex for password (Register)
- Refactor "Add product to cart" logic
- Create Logout controller and route (+ expire token before redirect)
- Create controllers and routes to handle users edit + delete

### Frontend
- Create Cart component
- Create Login component
- Create Register component


#### Authors
- [Axel Tavormina](https://github.com/codeKameleon) - Backend
- [Dylan Richardson](https://github.com/Dyl-Richardson) - Frontend
