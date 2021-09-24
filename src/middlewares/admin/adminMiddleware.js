const jwt = require('jsonwebtoken');
let adminMiddleware = (req,res,next)=>{
    //1. Read the Authorization token
    console.log(req.headers.authorization.split(' ').pop());//To Access the last element of the array
   
    let token = req.headers.authorization.split(' ').pop();
    console.log(token);

    //verify the jwt token

    try {
        var decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.xyz = decoded;
        next();
    } catch(err) {
        // err
        res.status(403).json({
            msg:"Unauthorized Access"
        });
    }
}

module.exports = adminMiddleware;