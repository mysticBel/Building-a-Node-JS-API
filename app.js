// bring in routes using object destructuring :P

const express = require ('express');
const app = express();  //executing and ready to listen any request
//enables to access all properties and methods from 'Express' package
// default url, callback function
const morgan = require('morgan'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
// db :
mongoose.connect(
    'mongodb+srv://ElmoOnFire666:elmo666@nodeapi.rd96d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {useNewUrlParser:true}
    )
.then(() => console.log('DB from MongoDB connected succesfully! :D '));
// if there's an error in database
mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});


const postRoutes = require('./routes/post.js') // postRoutes now works as a middleware
//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', postRoutes);


// const port = 8080; Let's use dotenv :
const port = process.env.PORT || 8080 ;

app.listen(port, () => {
     console.log(`A Node Js API is listening on port: ${port}`);
});


//----------------------------------
// const http = require (`http`);

// const server = http.createServer((req, res) =>{
//     res.end('hello world from node js , this is an update using nodemon');
// });

// server.listen(3000);
//port 3000 , localhost:3000
//----------------------------------
// console.log('hello world :3');

// const helper = require ('./helper');
//  const { sum } = require ('./helper');

//putting the arguments
// const total = sum(10,200);
// console.log('TOTAL:',total);

