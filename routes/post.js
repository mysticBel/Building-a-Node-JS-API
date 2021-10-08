const express = require('express');
const postController = require('../controllers/postController.js');

// we are creating Express Router
const router = express.Router();
 router.get('/', postController.getPosts );
 router.post('/post', postController.createPosts );

 module.exports = router;
