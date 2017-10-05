This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To run the app you should run 

```bash
npm start
```
 on two directories 
 
- root project directory
- my-app/backend

Note that backend directory contains the express backend with mogodb

```
my-app/
  README.md
  node_modules/
  package.json
  backend/
  public/
  src/
 
```

Please don't forget to create account on mongolab and create database and change the url in this file app.js listed below

```
my-app/backend/app.js
```

change the following line 

```js
mongoose.connect('mongodb://melkotoury:elmenu@ds151014.mlab.com:51014/elmenus')

```

to:
```js
mongoose.connect('mongodb://<username>:<password>@ds151014.mlab.com:51014/<dbname>')

```

