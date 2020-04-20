# Shopify Product Editing App
This is sample application that we can use to edit product details. This app uses Shopify Oauth process for authentication. 
This app is build using following technologies
- KoaJs
- NextJS
- Shopify API
- Shopify Auth Module
- Polaris

## Installation 
Run the following command in terminal
```
yarn install
```

## Structure
This app has two sections
- KoaJS Server
- NextJS Frontend

### KoaJS Server
In order to define the server middleware and define NextJS routing we use `server.js` file. 
For server we are using following middleware

#### createShopifyAuth
This middleware takes the Shopify API key and the Shopify API secret key and trigger the authentication screen.
#### verifyRequest
The verifyRequest redirects users to the OAuth route if they haven’t been authenticated.

### NextJS Frontend
NextJS pages are defined in `pages` folder.