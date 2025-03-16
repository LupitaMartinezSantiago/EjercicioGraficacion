
const mongoose = require("mongoose");
const{Tasks} = require("./models/models");

class TaskService{
    static  async getAll(){
        try{
            return await T.find();
        }catch(err){
            return {status:500,message: err.message}
        }

    }
    static async getComplete(){
            try{
                return await Tasks.find({status:false});
            }catch(err){
                return {status:500,message: err.message}
            }
    
    }


    static async create(task, descripcion){
        const newTask = new Users({task,descripcion,status:false});
        try{
            const task = await newTask.save();
            return task
        }catch(error){
            return {status:500, message: err.message}
        }

    }

    static getUnifinished(){

    }
    static async update (id){
        try{
            const task = await Tasks.findOne({id});
            if(!task)return{status:404,message:"Tarea no encontrado"}
            return await Tasks.findOneAndUpdate(id,{status:true});
        }catch(error){
            return {status:500, message: err.message}
        }

    }
    static async delete (id){
        try{
            const task = Tasks.findByIdAndDelete(id);
            if(!task) return {status:404, message:message}
        }catch(err){

        }
    }
}
