let userProfile = (req,res)=>{
    res.status(200).json({
        msg:"ok",
        data:req.xyz
    });
}


module.exports = userProfile;