const express = require('express');
const router = express.Router();

var jwt = require('jsonwebtoken');

const userModel = require('../models/userModel');

router.post('/signup',(req,res)=>{
    console.log(req.body.email);
    //1. Find the email address if availble show error if not avaible then create the record
   
    userModel.findOne({email:req.body.email },function(e,d){
        //1. check if any error
        if(e) res.status(400).json(e);
        
        //2. Check if the email is avaible or not
        if(d){
            res.status(404).json({
                msg:"User Already Exits"
            });
        }else{
            //Then create the record in mongodb
           
            userModel.create(req.body,function(e,d){
                //1. check if any error
                if(e) res.status(400).json(e);
                res.status(201).json({
                    msg:"User Created Succeffully",
                    d:req.body
                });
        
            });
            
        }
    });  
});

router.post('/signin',(req,res,next)=>{
    next();
},(req,res)=>{
    console.log(req.body.email);
    userModel.findOne({email:req.body.email},function(e,userObject){
        //check for any error
        if(e) res.status(400).json(e);
        //check if the email if available
        if(userObject){ 
            // email address is available
            //Check if the password
            if(userObject.checkMyPassword(req.body.password)){ //password match //actual arg
                
                //Lets create a jwt token
                let token = jwt.sign({d:userObject},process.env.JWT_SECRET,{expiresIn:'1h'});

                res.status(200).json({
                    msg:"Login Success",
                    tokn:token,
                    data:userObject
                });
            }else{
                res.status(403).json({
                    msg:"Invalid Credential"
                });
            }
        }else{
            // email address is not available
            //403 status code is used for un authorized access
            res.status(403).json({
                msg:"Invalid Credential"
            });
        }

    });
});


router.get('/getUserInfo',(req,res)=>{
    //1. Read the Authorization token
    //console.log(req.headers.anil);

    let token = req.headers.authorization;
    console.log(token);

    //verify the jwt token

    try {
        var decoded = jwt.verify(token,process.env.JWT_SECRET);
        res.status(200).json({
            msg:"ok",
            data:decoded
        });
    } catch(err) {
        // err
        res.status(403).json({
            msg:"Unauthorized Access"
        });
    }
    

    
});

module.exports = router;