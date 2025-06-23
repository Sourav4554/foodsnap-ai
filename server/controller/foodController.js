import foodModel from "../model/foodModel.js";


export const getNutrients=async(req,res)=>{
 const {name}=req.body;
 if(!name){
 return res.status(400).json({success:false,message:'upload a food image'})
 }
try {
 const nutrients=await foodModel.findOne({name:new RegExp(`${name.trim()}`,'i')},{ calories: 1, fat: 1, sugar: 1, protein: 1, fiber: 1,carbs:1, _id: 0 })
 if(!nutrients){
return res.status(400).json({success:false,message:'this food is not in our collection try other food'})
}
return res.status(200).json({success:true,message:nutrients})
} catch (error) {
    console.log(error)
    return res.status(500).json({success:false,message:"Internal server error"})
}
}
