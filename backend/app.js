
const express = require('express');
const stuffRoutes = require('./routes/stuff')
const app = express();
 const userRoutes = require('./routes/user');
 const path = require('path');


const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb+srv://weijiangyang:Ywj32559438@cluster0.bjkt6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(bodyParser.json());

app.use('/api/stuff',stuffRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));


app.use('/api/auth', userRoutes);
// var session = require("express-session");
// var NedbStore = require('nedb-session-store')( session );
// const sessionMiddleware = session({
//     secret: "fas fas",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       path: '/',
//       httpOnly: true,
//       maxAge: 365 * 24 * 60 * 60 * 1000   // e.g. 1 year
//     },
//     store: new NedbStore({
//       filename: 'path_to_nedb_persistence_file.db'
//     })
//   });

//   app.use(sessionMiddleware);
  


module.exports = app;