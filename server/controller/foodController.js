import foodModel from "../model/foodModel.js";


export const getNutrients=async(req,res)=>{
 const {name}=req.body;
 if(!name){
 return res.status(400).json({success:false,message:'upload a food image'})
 }
try {
 const nutrients=await foodModel.findOne({name:new RegExp(`${name.trim()}`,'i')})
 if(!nutrients){
return res.status(400).json({success:false,message:'this food is not in our collection try other food'})
}
return res.status(200).json({success:true,message:nutrients})
} catch (error) {
    console.log(error)
    return res.status(500).json({success:false,message:"Internal server error"})
}
}
