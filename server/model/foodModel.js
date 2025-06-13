import mongoose from "mongoose";

const foodSchema=new mongoose.Schema({
name:{
    type:String,
    required:true,
},
calories:{
    type:Number
},
protein:{
    type:Number
},
fat:{
    type:Number
},
sugar:{
    type:Number
},
carbs:{
    type:Number
},
fibre:{
    type:Number
},
},{collection:'foods'})

const foodModel=mongoose.models.food || mongoose.model('food',foodSchema)

export default foodModel