const mongoose = require('mongoose');

const postModel = mongoose.Schema(
    {
        userId:{
            type:String,
            required:true,
        },
        post:{
            type:String,
            required:true,
        },
        postDes:{
            type:String,
            required:false,
        }
    }
);

const Post = mongoose.model("Post",postModel);
module.exports = Post;