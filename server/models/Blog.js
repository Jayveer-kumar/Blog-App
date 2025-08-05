const  mongoose = require("mongoose");
const subSectionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    shortDescription:{
        type:String,
        required:false,
    },
    fullContent:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:false,
    }
});

const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    shortDescription:{
        type:String,
        required:false,
    },
    mainImage:{
        type:String,
        required:true,
    },
    subSection:[subSectionSchema],
    postDate:{
        type:Date,
        default:Date.now
    },
    readTime:{
        type:String,
        required:true,
    },
    tags:[String],
    category:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
        unique:true,
    }
});

module.exports = mongoose.model("BlogPost",BlogSchema);