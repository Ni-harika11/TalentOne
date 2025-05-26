const express=require("express");
const app=express();
///middleware it rubs first
app.use(express.static("public"));
//we used here absolute path to get the file from public folder
// const staticPath=path.join(import.meta.dirname,"public")
// app.use(express.static(staticPath));

//template engine
app.set("view engine","ejs");
//rnedering ejs diles index.ejs 
app.get("/indextemplateengine",(req,res)=>{
    const studentdata = {
        name: "Niharika",
        email: "malik@example.com",
        password: "password123",
        age: 20
      };
      const content = "Welcome to EJS Template Engine!";
    //res.render("index"); //index.js files  //http://localhost:3000/indextemplateengine
   // res.render('index',{content:"NIHARIKA AND this is Escaped Output"}) //
//    res.render('index',{content:"NIHARIKA AND this is UnEscaped Output "}); //http://localhost:3000/indextemplateengine
    res.render("index", { studentdata,content});
});



const userModel=require('./usermodel')
app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/create",async (req,res)=>{
   const createduser=await  userModel.create({
        name:"Niharika",
        email:"malik@example.com",
        password:"password123"
    })
    res.send(createduser);
})
//red all users
app.get('/read',async (req,res)=>{
    const user=await userModel.find({name:"Niharika"});
    res.send(user);
})
//Update  user 
app.get('/update',async (req,res)=>{
     const updatedUser=await userModel.findOneAndUpdate(
        {name:"Niharika"},
        {email:"niahrika@gmail.com"},
        {new:true}
     );
     res.send(updatedUser);
})


//delete user
app.get('/delete',async (req,res)=>{
    const users=await userModel.findOneAndDelete({
        name:"Niharika"
    })
    res.send("delete succesfull",users);
})

app.listen(3000,function(){
    console.log("Server is running on port 3000")
})