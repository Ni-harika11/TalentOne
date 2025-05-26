const express= require("express");
const app=express();
const port=3000;

app.use(express.json());

//GET method (fetch data)
app.get("/get",(req,res)=>{
    res.send("GET request received");
})

//POST method (Send Data to Server)
app.post("/post",(req,res)=>{
    const user=req.body;
    res.json({messg:"user recived",user})
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})