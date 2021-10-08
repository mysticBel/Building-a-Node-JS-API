const mongoose =  require ('mongoose');

const postSchema = new mongoose.Schema({
    title : {
        type: String,
        required: 'title is required',
        minlength: 3,
        maxlength:150,
    },
    body : {
        type: String,
        required: 'body is required',
        minlength: 5,
        maxlength:750,
    }
});

// let's export it usinf mongoose model method:  (moduleName, Schema)
module.exports = mongoose.model('Post', postSchema);