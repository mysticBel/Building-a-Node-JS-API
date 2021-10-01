//extracting the logic from '../routes/post.js'
exports.getPosts = (req,res) => {
    
    // res.send('hey! hello from Express :P');

    // using JSON
    res.json({
        posts: [{ title : "First post"},{ title : "Second post"}]
    });
};

// TO see it better in the browser, install JSON viewer(Google Extensions)
// To handle API , we will use Postman.