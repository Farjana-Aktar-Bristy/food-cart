const FoodModel = require("../models/FoodModel");
exports.create=async (req, res)=>{
    try{
        let food = req.body;
        await FoodModel.create(food);
        console.log("food is created.",JSON.stringify(food));
        return res.status(200).json({status:"success",message:"Food is inserted."});
    }catch (e) {
        return res.status(500).json({err:e.toString()})
    }
}

exports.read=async (req, res)=>{
    try{
        let foods = await FoodModel.find();
        console.log("Food list = ",JSON.stringify(foods));
        return res.status(200).json(foods);
    }catch (e) {
        return res.status(500).json({err:e.toString()})
    }
}

exports.getFoodById=async (req, res)=>{
    try{
        const {foodId} = req.params;
        const food = await FoodModel.findOne({"_id":foodId});
        console.log("food with id ", food);
        return res.status(200).json(food);
    }catch (e) {
        return res.status(500).json({err:e.toString()})
    }
}

exports.update=async (req, res)=>{
    try {
        const {foodId} = req.params;
        let updatedFood = req.body;
        console.log("updated food = ",JSON.stringify(updatedFood));
        console.log("food id = ",foodId);
        await FoodModel.updateOne({_id:foodId},updatedFood);
        return res.status(200).json({message:"Food updated successfully."});
    } catch (e){
        return res.status(500).json({err:e.toString()})
    }
}

exports.delete=async (req,res)=>{
    try {
        const {foodId} = req.params;
        console.log("food id for delete = ",foodId);
        await FoodModel.deleteOne({_id:foodId});
        return res.status(200).json({message:"Food deleted successfully."});
    } catch (e){
        return res.status(500).json({err:e.toString()})
    }
}