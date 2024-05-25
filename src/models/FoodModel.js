const mongoose=require('mongoose')

const FoodSchema=mongoose.Schema({
    name:{type:String,required:true},
    code:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},
    quantity:{type:Number,required:true},
    price:{type:Number,required:true},
},{timestamps:true,versionKey:false})

const FoodModel=mongoose.model('foods',FoodSchema);
module.exports=FoodModel;