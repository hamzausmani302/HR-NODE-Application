const express = require('express')

const router = express.Router()

const Developer = require('../Model/Schemas/developer.schema');
const {addDeveloper  ,getDeveloper} = require('../Services/DAO/developerDAO.js')
router.get("/test" , async (req,res)=>{
    const result = getDeveloper("62b433edbb065521b846ae4c");
    console.log(result);
})

module.exports = router