const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet')
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();
const rootRouter = require('./routes/rootRoutes')
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')

const app = express();



app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(cors());
app.use(helmet());


const uri = 'mongodb+srv://js:js@cluster0.irx0d.mongodb.net/2itechEcommerce?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () =>{
    console.log('Connected to the database');
});

const sessionStore = new MongoStore({
    mongooseConnection: db,
    collection: 'sessions'
})

app.use(session({
    secret: 'some-secret',
    resave:false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));


//  ------------ PASSPORT AUTHENTICATION --------------

const initializePassport = require('./config/passport')
initializePassport(passport)

app.use(passport.initialize());
app.use(passport.session());


//  ------------ ROUTES --------------
app.use('/', rootRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);


app.listen("8080", ()=>{
    console.log("Server is listening on port 8080");
});
