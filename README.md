# RestaurantsRectJs

[Final Deploy](https://restaurants-nuwbie-11.vercel.app/?price=undefined&cate=undefined&isOpen=null)

Built with :
- Node version V18.14.1
- React version 18.2.0
- Vercel for Deploy


## Used Api

- API that used on this projects are provided by [dicoding](https://restaurant-api.dicoding.dev/)

## How to start

- Make Sure you already install [Node.Js](https://nodejs.org/en)
- After Node.Js installed you can run `npx create-react-app <app-name>`
- Wait a momment till your app ready
- type and run `cd/app-name` then `npm start` to run the app
- The sources are on `src folder`
- Happy Developing !!


## Used Library

### Font Awesome
- in this app i used `fontawesome` to provide icons
- to install please read the [documention](https://fontawesome.com/v5/docs/web/use-with/react)
- Install extras for brands like github. And to doing it you can do `npm install --save @fortawesome/free-brands-svg-icons`

### Vercel
- In this app i also use `vercel` to provide deploys to vercel itself
- to insall please read the [documentation](https://vercel.com/guides/deploying-react-with-vercel)
- or you can type `npm i -g vercel`
- then go to terminal and go to project folder then type `vercel`

## Main Features 

- Shows Restaurants
- Filter by Open Status, Price and Categories
- Because Price and Status are not built in on API, i built or generate custom status/price. Thus, Every page reload, those custom are re-generated
