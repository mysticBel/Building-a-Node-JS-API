// bring in routes using object destructuring :P
const { getPosts } = require('./routes/post.js')

const express = require ('express');
const app = express();  //executing and ready to listen any request
//enables to access all properties and methods from 'Express' package
// default url, callback function


app.get('/', getPosts);

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

