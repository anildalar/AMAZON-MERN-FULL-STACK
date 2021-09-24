const { default: slugify } = require('slugify');
const categoryModel = require('../../models/categoryModel');
let createCategory = (req,res)=>{

    categoryModel.create({
        name:req.body.name,
        slug:slugify(req.body.name).toLowerCase(),
        parentId: req.body.parentId?req.body.parentId:''
    },function(e,d){
        if(e) res.status(400).json(e);
        if(d){
            res.status(201).json({
                msg:"Category Created Successfully",
                data:d
            });
        }
    });
}

let getCategory = (req,res)=>{
    console.log(req.body._id);
    categoryModel.findOne({_id:req.body._id },function(e,d){
        if(e) res.status(400).json(e);
        if(d){
            res.status(200).json({
                data:d
            });
        }else{
            res.status(404).json({
                msg:"Category Not Found"
            });
        }
    })
}
module.exports = {createCategory,getCategory};