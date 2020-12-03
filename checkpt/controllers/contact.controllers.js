//@desc post a contact
exports.postContact =async(req,res)=>{
    try {
        const newContact = new Contact(req.body);
        if (!req.body.email) {
            res.status(400).send({message:"Email is required check again"});
            return;
        }
        const user =await Contact.findOne({email:req.body.email});
        if (user) {
            res.status(400).send({message:"User already exist"});
            return;
        }
        const response = await newContact.save();
        res.send({response:response,message:"user is saved"});
    } catch (error) {
        res.status(500).send({message:"can not save it"})
    }
}


//@desc get all contacts
exports.getContact=async(req,res)=>{
    try {
        const result = await Contact.find();
        res.send({response:result,message:"geting contacts successfuly"})
    } catch (error) {
        res.status(400).send({message:"can not get contacts"})
    }
}


//@desc get one contact
exports.getContactById=async(req,res)=>{
    try {
        const result = await Contact.findOne({_id:req.params.id});
        res.send({response:result,message:"geting contacts successfuly"})
    } catch (error) {
        res.status(400).send({message:"there is no contact with this id"})
    }
}


//@desc delete one contact by id
exports.deleteContact=async(req,res)=>{
    try {
        const result = await Contact.deleteOne({_id:req.params.id});
        result.n?res.send({message:"contact is deleted"})
        :res.send({message:"contact is already deleted"})
    } catch (error) {
        res.status(400).send({message:"there is no contact with this id"})
    }
}


//@desc update one contact by id
exports.updateContact=async(req,res)=>{
    try {
        const result = await Contact.updateOne(
            {_id:req.params.id},
            {$set:{...req.body}});

        result.nModified?res.send({message:"contact is updated"})
        :res.send({message:" contact is already updated"})
    } catch (error) {
        res.status(400).send({message:"there is no contact with this id"})
    }
}