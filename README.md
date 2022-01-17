# E-commerce (back-end)
This project was done as part of my Becode training. It's a simplified clone of the [Fake Store API](https://fakestoreapi.com/).

## Technology Stack
| |
| ------| 
| MongoDB |
| Express |
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

Run the server at [localhost:4000](http://localhost:4000) and launch connection to database.

```
npm run server
``` 

