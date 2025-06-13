import express from 'express'
import cors from 'cors'
import { connectDatabase } from './config/dbconfig.js'
import 'dotenv/config'
const app=express()
const PORT=process.env.PORT || 4000
app.use(express.json())
app.use(cors())
connectDatabase()
app.get('/',(req,res)=>{
res.send('Api working')
})

app.listen(PORT,()=>{
console.log(`http://localhost:${PORT}`)
})