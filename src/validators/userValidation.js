const { check, body, validationResult } = require("express-validator");

const userValidations = [
     // username must be an email
    //Serial Function Calling
    check('email').isEmail().withMessage("Kindly enter the correct email address os that we can proccess your account"),
    // password must be at least 5 chars long
    body('password').isLength({ min: 8 })
];

let validateRequest = (req,res,next)=>{
     // Finds the validation errors in this request and wraps them in an object with handy functions
     const errors = validationResult(req);
     //errors = []
     //errors = ['someerror'],
     //true
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }
     next();
}

module.exports = { userValidations,validateRequest  };//userValidations;