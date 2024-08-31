require('dotenv').config();
require("./db/connectDB");
require('./config/passport');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);

const app = express();

// api for using mongoDB
const adminRoutes = require('./api/admin/admin.controller');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const categoryRoutes = require('./api/routes/category');
const cartRoutes = require('./api/routes/cart');
const userRoutes = require('./api/routes/user');

// CORS
// app.use(cors);
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin' , '*');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append("Access-Control-Allow-Headers", "Origin, Authorization, Accept, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append('Access-Control-Allow-Credentials', true);
    next();
});

// view engine
app.set('view enigne','ejs');

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

// cookies
app.use(cookieParser());

// session
app.use(session({
    secret:process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    cookie: {
        maxAge: 180 * 60 * 1000,
        secure: false
    }
}));

// passport authentication
app.use(passport.initialize());
app.use(passport.session());

// dist folder
// app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'/uploads')));
app.use(express.static(path.join(__dirname,'/angular-src/dist/angular-src')))


//APPLICATION ROUTES TO HANDLE
app.use('/admin', adminRoutes);
app.use('/products', productRoutes);
app.use('/order', orderRoutes);
app.use('/category', categoryRoutes);
app.use('/user' , userRoutes);
app.use('/cart', cartRoutes);

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/angular-src/dist/angular-src/index.html'));
  });

app.use(function (req , res , next) {
  res.locals.session = req.session;
  next();
});

// set port 
const port = process.env.PORT || 3000;
app.set('port',port);
const server = http.createServer(app);
server.listen(port , () => console.log('Running on localhost:'+port));
