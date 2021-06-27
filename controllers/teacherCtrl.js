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
            
           const newTeacher = req.body
           
           db.query(`INSERT INTO teachers (teacherName) values('${newTeacher.teacherName}')`,(err,rows) =>{
            if(err)
            return  res.status(400).send({error:err})
            newTeacher.teacherId = rows.insertId
            return res.status(201).send({newteacher:newTeacher})
           })
           
           }catch(err){
           
            res.status(500).json({msg:err.message})

       }
   }

    }

    module.exports = teacherCtrl