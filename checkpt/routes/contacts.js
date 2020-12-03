const express=require("express");
const { model } = require("mongoose");
const router=express.Router();
const Contact = require("../models/User");
const controllers = require("../controllers/contact.controllers");

//test
router.get("/hi",(req,res)=>{
    res.send("hi marwa");
})
//@POST method
//@desc post a contact
//@path:http://localhost:5000/api/contact
//@params Body
router.post("/",controllers.postContact)


//@GETmethod
//@desc get all contacts
//@path:http://localhost:5000/api/contact
router.get("/",controllers.getContact)


//@GET method
//@desc get one contact
//@path:http://localhost:5000/api/contact/:id
//@params Id
router.get("/:id",controllers.getContactById)


//@DELETE method
//@desc delete one contact by id
//@path:http://localhost:5000/api/contact/:id
//@params Id
router.delete("/:id",controllers.deleteContact)


//@PUT method
//@desc update one contact by id
//@path:http://localhost:5000/api/contact/:id
//@params Id Body
router.put("/:id",controllers.updateContact)


module.exports=router;