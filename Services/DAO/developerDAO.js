const mongoose = require("mongoose");
const Developer = require("../../Model/Schemas/developer.schema.js");

const getDevelopers = async (id)=>{
   const _developer = await Developer.findOne({_id : id}); 
   console.log(_developer);
   return _developer;
}

const addDeveloper = (info)=>{
}

const deleteDeveloper = (id)=>{

}

const updateInfoDeveloper = (id , newInfo)=>{

}



module.exports.addDeveloper = addDeveloper;
module.exports.getDeveloper = getDevelopers;
module.exports.deleteDeveloper =  deleteDeveloper;
module.exports.updateInfoDeveloper = updateInfoDeveloper;
