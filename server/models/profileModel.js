const mongoose = require('mongoose');

const profileModel = mongoose.Schema(
    {
        userId:{
            type:String,
            required:true,
        },
        avatar:{
            type:String,
            required:false,
        },
        name:{
            type:String,
            required:true,
        }   
    }
);

const Profile = mongoose.model("Profile",profileModel);
module.exports = Profile;