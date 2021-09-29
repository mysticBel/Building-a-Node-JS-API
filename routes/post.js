
 // we are moving the callback function from app.js
 // getPosts will be responsible to get posts for the frontend
 const getPosts = (req,res) => {
    //res.end()
    res.send('hey! hello from Express :P');
};

module.exports = {
  getPosts
};

/*other method :
exports.getPosts = getPosts= (req,res) => {
    res.send('hey! hello from Express :P');
};*/