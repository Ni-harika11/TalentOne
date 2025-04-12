const express=require("express")
///get json data
const users=require("./data.json")
const app=express();
const PORT=8000;

// // //Routes 
// app.get("/users",(req,res)=>{
//     return res.json(users)
// })
app.use(express.json());
// app
// .route("/users/:id")
// .get((req,res)=>{
//     const id=Number(req.params.id);
//     const user=users.find(user=>user.id===id)

//     if(!user){
//         return res.status(404).json({
//             message:"user not found"
//         })
//     }
//     return res.json(user)

// })
// .post((req,res)=>{
//     return res.json({status:"pending"})
// })
// .patch((req,res)=>{
//     const {name}=req.body;
//     if(name)users.name=name;
//     return res.json({
//         message:"User updated successfully",
//         users
//     })
//     // return res.json({status:"pending"})
// })
// .delete((req,res)=>{
//     return res.json({status:"pending"})
// })

// app.post("/users",(req,res)=>{
//     const body=req.body
//     return res.json({status:"pending"})
// })
 


// //Routes 
app.get("/users",(req,res)=>{
    return res.json(users)
})

app.get("/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find(user=>user.id===id)

    if(!user){
        return res.status(404).json({
            message:"user not found"
        })
    }
    return res.json(user)

})

app.post("/users",(req,res)=>{
    //Create new users
    return res.json({status:"pending"})
})

app.patch("/patch/:id",(req,res)=>{
    const {name}=
    //edit the user with id
    // return res.json({status:"pending"})
})

app.delete("/users/:id",(req,res)=>{
    //delete user with id
    return res.json({status:"pending"})
})

app.listen(PORT,()=> console.log(`Server stated at port:${PORT}`))


// ///////
// const express = require('express')
// const app = express()
// const PORT = 8000
// const fs = require('fs')

// app.use(express.json())

// app.get("/get",[], async (req, res)=> {
//   // file data read
//   fs.readFile('./db.json', 'utf-8', (err, data) => {
//     if (err) {
//      return res.status(500).json({
//         message: "server error occurred"
//       })
//     }else {
//       return res.status(200).json({
//         message: 'data read successfully',
//         data : JSON.parse(data)
//       })
//     }
//   })
// })
// // http://localhost:3000/get?id=1   => queryParams
// app.get("/get/:id",[], async (req, res)=> {
//   const userId = req.params.id
//   // file data read
//   fs.readFile('./db.json', 'utf-8', (err, data) => {
//     if (err) {
//      return res.status(500).json({
//         message: "server error occurred"
//       })
//     }else {
//       const userDetails = JSON.parse(data).find((user) => user.id == userId)
//       if (!userDetails) {
//         return res.status(404).json({
//           message: 'user not found'
//         })
//       }else{
//         return res.status(200).json({
//           message: 'data read successfully',
//           data : JSON.parse(data)
//         })
//       }
//     }
//   })
// })

// app.post("/post", (req, res)=> {
//   const userData = req.body
//   const userDataFromFile = fs.readFileSync('./db.json', 'utf-8')
//   const userDataFromFileParsed = JSON.parse(userDataFromFile)
//   const userId = userDataFromFileParsed.length + 1
//   userData.id = userId
//   userDataFromFileParsed.push(userData)

//   // savin data to file
//   fs.writeFileSync('./db.json', JSON.stringify(userDataFromFileParsed))
//   console.log(userData)
//   return res.status(201).json({
//     message: "User Created Successfully",
//     data: userData
//   })
// })

// app.patch("/patch", (req, res)=> {
//   return res.json({
//     message: "hello from patch Route"
//   })
// })

// app.put("/put", (req, res)=> {
//   return res.json({
//     message: "hello from put Route"
//   })
// })

// app.delete("/delete", (req, res)=> {
//   return res.json({
//     message: "hello from delete Route"
//   })
// })
// app.listen(PORT, () => {console.log("Server is running on Port =>", PORT)})
