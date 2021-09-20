//Schema
//Collection
const mongoose = require('../db');
const { Schema } = mongoose;

const bcrypt = require('bcrypt');

//1. Lets Create a Schema
const userSchema = new Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true
    },
    hash_pass:{
        type:String
    },
    mobileno:{
        type:String
    },
    role:{
        type:String,
        enum:['admin','customer','customercare'],
        default:'customer'
    }
},{
    timestamps:true
});



//We are going to create virtual fields
//1 set
//2 get

//1. set

// Postman -> plainpass ->  hash ->  hash_pass
userSchema.virtual('password').set(function(password){
    this.hash_pass = bcrypt.hashSync(password, 10); 
});


//2. Lets Create a model

const userModel = mongoose.model('Users',userSchema);

//3. Lets Export this Model

module.exports = userModel;