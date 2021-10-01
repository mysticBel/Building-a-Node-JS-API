// bring in routes using object destructuring :P

const express = require ('express');
const morgan = require('morgan'); 
const app = express();  //executing and ready to listen any request
//enables to access all properties and methods from 'Express' package
// default url, callback function
const postRoutes = require('./routes/post.js') // postRoutes now works as a middleware
//middleware
app.use(morgan('dev'));

app.use('/', postRoutes);


const port = 8080;
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

