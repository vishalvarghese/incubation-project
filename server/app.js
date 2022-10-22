const express =require("express")
const app = express()

app.get('/api',(req,res)=>{{
    res.json({'user':'vishal varghese'})
}})
 
app.listen(5000,()=>{console.log("running at port 5000");})