const db = require('../database')

const teacherCtrl = {
    getTeachers : async (req,res) => {
        
        try{
            db.query(`SELECT * FROM teachers`,(err,rows,field) => {
                 if(err)
                 return  res.status(400).send({error:err})
                 return res.status(200).send({teachers:rows})
                  
             })
            
            }catch(err){
            res.status(500).json({msg:err.message})

        }
    },
    addTeacher : async (req,res) => {
        try{
            
            db.query(`SELECT * FROM classes WHERE month ='${month}'`,(err,rows,field) => {
                if(err)
                return  res.status(400).send({error:err})
                return res.status(200).send({classes :rows})
                 
            })
           
           }catch(err){
           
            res.status(500).json({msg:err.message})

       }
   }

    }

    module.exports = teacherCtrl