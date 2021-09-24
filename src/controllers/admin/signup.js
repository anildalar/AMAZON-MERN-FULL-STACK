const { validationResult } = require('express-validator');
const userModel = require('../../models/userModel');
let signup = (req,res)=>{
   

    console.log(req.body.email);
    //1. Find the email address if availble show error if not avaible then create the record
   
    userModel.findOne({email:req.body.email },function(e,d){
        //1. check if any error
        if(e) res.status(400).json(e);
        
        //2. Check if the email is avaible or not
        if(d){
            res.status(404).json({
                msg:"Admin Already Exits"
            });
        }else{
            //Then create the record in mongodb
           //lets create a new parameter in req.body
           req.body.role = 'admin';
            userModel.create(req.body,function(e,d){
                //1. check if any error
                if(e) res.status(400).json(e);
                res.status(201).json({
                    msg:"Admin Created Succeffully",
                    d:req.body
                });
        
            });
            
        }
    });  
}

module.exports = signup;