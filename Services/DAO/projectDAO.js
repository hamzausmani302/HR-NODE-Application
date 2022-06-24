const mongoose = require("mongoose");
const Project = require("../../Model/Schemas/project.schema.js");

const getProjects = async (id)=>{
   try{
   const _developer = await Project.findOne({_id : id}); 
    console.log(_developer);
    return _developer;
   }catch(err){
      return {"error" : "No such record exist"};
   }
}

const addProject = async (info)=>{
    try{
        const  {name , description , developers_working  , functionalities , projectStatus } = info 
        const _project = new Project({
        name,
        description,
        developers_working ,
        functionalities,
        projectStatus
    })

         return await _project.save()
    }catch(err){
           return {"error" : err.message};
    }
}

const deleteProject = async (id)=>{
   try{
   }catch(err){
   }

}

const updateInfoProject = async (id , newInfo)=>{
   try{  
   }catch(err){
   }
}



module.exports.addDeveloper = addDeveloper;
module.exports.getDeveloper = getDevelopers;
module.exports.deleteDeveloper =  deleteDeveloper;
module.exports.updateInfoDeveloper = updateInfoDeveloper;
