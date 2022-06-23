const express = require('express')

const router = express.Router()

const Developer = require('../Model/Schemas/developer.schema');
const {addDeveloper  ,getDeveloper} = require('../Services/DAO/developerDAO.js')
router.get("/test/:id" , async (req,res)=>{
    const _id = req.params.id; 

    const result = await getDeveloper(_id);
    res.send(result);
})

module.exports = router