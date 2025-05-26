const express=require('express');
const router=express.Router();
const verifyToken=require('../middleware/authMiddleware');
const { route } = require('../app');

//Example proted route
router.get('/dashbord',verifyToken,(req , res)=>{
    res.status(200).json({message:`Welcome user ${req.user.id}`});

});

module.exports=router;