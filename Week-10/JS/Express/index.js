const express= require("express");
const path = require("path");
const app=express();
const port=3000;
app.use(express.json());

app.use(function(req,res,next){
    console.log("Request received");
    next();
});
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
  ];
// GET - Read all users
app.get('/get/users',function(req,res){
    res.json(users);
    return;
})
// GET - Read a single user by ID
app.get("/get/users/:id",(req,res)=>{
    const user=users.find(u=>u.id === parseInt(req.params.id))
    if(!user) return res.status(404).json({error:"user not found"})
    res.json(user)
})
// POST - Create a new user
app.post("/post/users",(req,res)=>{
    const {name}=req.body
    if(!name) return res.status(400).json({error:"Name is required"})
    
    const newUser={
        id:users.length +1,
        name
    };
    users.push(newUser);
    res.status(201).json(newUser);
})

// PUT - Update an existing user
app.put("/put/users/:id",(req,res)=>{
    const user=users.find(u=>u.id === parseInt(req.params.id))
    if(!user) return res.status(404).json({error:"User not found"});

    const {name}=req.body;
    if(!name) return res.status(400).json({error:"Name is required"});

    user.name=name;
    res.json(user);
})
// DELETE - Delete a user
app.delete("/delete/users/:id",(req,res)=>{
    const index=users.findIndex(u=>u.id === parseInt(req.params.id))
    if(index === -1) return res.status(404).json({error:"User not found"});

    const deletedUser=users.splice(index,1);
    res.json(deletedUser[0])
})

app.listen(port,function(){
    console.log(`server running in ${port}`)
})