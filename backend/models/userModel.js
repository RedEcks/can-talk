const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{type:String, require:true},
    email: {type: String, require: true},
    password: {type: String, required: true},
    pic: {type: String, required: true, default: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"},
}, {timestamps:true})


const User = mongoose.model("User", userSchema)


module.exports=User