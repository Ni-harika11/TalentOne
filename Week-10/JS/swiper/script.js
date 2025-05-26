const express= require('express'); //Importing the express module
const app= express(); //Creates an instance of an Express application
const port= 5000; //Specifies the port number on which the server will listen

app.use(express.static('public')); //Serves static files from the 'public' directory

app.get('/',(req,res)=>{ //`/` is the root URL of the application
    res.send('Hello World!') //Sends a response with the text 'Hello World!' when the root URL is accessed
})

app.get('/about',(req,res)=>{ //`/about` is another URL endpoint
    res.send('About this page') //Sends a response with the text 'About this page' when the `/about` URL is accessed
})

app.get('/contact',(req,res)=>{ //`/contact` is another URL endpoint
    res.send('Contact us here') //Sends a response with the text 'Contact us here' when the `/contact` URL is accessed
})

app.listen(port,()=>{       //Starts the server and listens on the specified port
    console.log(`Example app listening on port ${port}`)    //Logs a message to the console indicating that the server is running
})