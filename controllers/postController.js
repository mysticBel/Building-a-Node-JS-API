const Post = require('../models/postModel.js')


//extracting the logic from '../routes/post.js'
exports.getPosts = (req,res) => {
    const posts = Post.find()
    .then((posts) => {
        res.status(200).json({posts:posts});
    })
    .catch(err =>console.error(err));

    // res.send('hey! hello from Express :P');

    // using JSON
    // res.json({
    //     posts: [{ title : "First post"},{ title : "Second post"}]
    // });
};

// TO see it better in the browser, install JSON viewer(Google Extensions)
// To handle API , we will use Postman.

///-----  Let's create a new method for creating a post: -----------------
exports.createPosts = (req, res) => {
    const post = new Post(req.body);
    // console.log('creating post: ' , post);
    // console.log('creating post: ' , req.title);
    //console.log(req.body); --> this works
    post.save( (err, result) => {
        if(err) {
            return res.status(400).json({
                 error:err
                });
        }
        res.status(200).json({
            post: result
        });
    });
;
}

//go and create another route to see the post...