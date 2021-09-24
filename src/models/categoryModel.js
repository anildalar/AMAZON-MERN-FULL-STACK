const mongoose = require('../db');

const { Schema } = mongoose;

const categoryScheme = new Schema({
    name:{
        type:String,
        unique:true,//Constraint
        required:true
    },
    slug:{
        type:String,
        unique:true,
        required:true
    },
    parentId:{
        type:String
    }
});

//lets create the model

let categoryModel = mongoose.model('categories',categoryScheme);

module.exports = categoryModel;