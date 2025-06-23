import express from 'express'
import { getNutrients } from '../controller/foodController.js';

const foodRouter=express.Router();

foodRouter.post('/nutrients',getNutrients)

export default foodRouter