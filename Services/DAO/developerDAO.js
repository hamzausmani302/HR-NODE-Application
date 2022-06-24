const mongoose = require("mongoose");
const Developer = require("../../Model/Schemas/developer.schema.js");

const getDevelopers = async (id)=>{
   try{
   const _developer = await Developer.findOne({_id : id}); 
   console.log(_developer);
   return _developer;
   }catch(err){
      return {"error" : "No such record exist"};
   }
}

const addDeveloper = async (info)=>{
   try{
   const  {name ,id , position ,contactNumber , experience  } = info 
   const _developer = new Developer({
      name : name ,
      id : id,
      position : position,
      contactNumber :contactNumber,
      experience : experience
    })
    return await _developer.save()
   }catch(err){
      return {"error" : err.message};
   }
}

const deleteDeveloper = async (id)=>{
   try{
      const _deleteResult = Developer.deleteOne({_id : id});
      return _deleteResult;
   }catch(err){
      return {"error" : err.message};
   }

}

const updateInfoDeveloper = async (id , newInfo)=>{
   try{
      const _updatedResult = await Developer.findOneAndUpdate({_id :id } , newInfo);
      return _updatedResult;

   }catch(err){
      return {"error" : err.message};
   }
}



module.exports.addDeveloper = addDeveloper;
module.exports.getDeveloper = getDevelopers;
module.exports.deleteDeveloper =  deleteDeveloper;
module.exports.updateInfoDeveloper = updateInfoDeveloper;
