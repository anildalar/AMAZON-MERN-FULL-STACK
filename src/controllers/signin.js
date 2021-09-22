var jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

let signin = (req,res)=>{
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
}

module.exports = signin;