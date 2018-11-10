# portfolio-react
Here is the demo

# mern-stack
MongoDB, Express, React/Redux, Node

# Usage(make it run on your machine)
- You need make the both the following two run

## prerequirement
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^8.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

### Client-side usage(PORT: 3000)
```terminal
$ cd client
$ npm i
$ npm

### Server-side usage(PORT: 5000)
(You need to add a mongolab uri in .env to connect to MongoDB -> make it run -> check your terminal for instructions
)
```terminal
$ cd server
$ npm i
$ npm run dev
```

### Deploy Server to [Heroku](https://dashboard.heroku.com/)
```terminal
$ npm i -g heroku
$ heroku login
$ heroku create
$ heroku git:remote -a <your-heroku-app-name>
$ git push heroku master
```
