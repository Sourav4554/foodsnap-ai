import express from 'express'
import cors from 'cors'
import { connectDatabase } from './config/dbconfig.js'
import 'dotenv/config'
import foodRouter from './routes/foodRoute.js'
const app=express()
const PORT=process.env.PORT || 4000
app.use(express.json())
app.use(cors())
connectDatabase()

app.use('/api/food',foodRouter)
app.get('/',(req,res)=>{
res.send('Api working')
})

app.listen(PORT,()=>{
console.log(`http://localhost:${PORT}`)
})