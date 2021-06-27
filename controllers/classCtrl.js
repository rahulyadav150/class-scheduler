const db = require('../database')
const utilFunctions = require('../utils/utilityFunctions')


const classCtrl = {
        getClasses: async (req, res) => {
            try {
                
                const {month} = req.query
                db.query(`SELECT *,DATE_FORMAT(Date,'%d/%m/%Y') as date FROM classes WHERE DATE_FORMAT(Date,'%M') = '${month}'`, (err, rows, field) => {
                    if (err)
                        return res.status(400).send({
                            msg: err
                        })
                    return res.status(200).send({
                        classes: rows
                    })

                })

            }catch (err) {
                res.status(500).json({
                    msg: err.message
                })

            }
        },
        createClass: (req, res) => {
            try {
                let newClass = req.body
               
                const check =  utilFunctions.validation(newClass)
                const intervel = {starts_at: newClass.starts_at,ends_at: newClass.ends_at}
                let arr;
                if (check) return res.status(400).json({msg: check})

                const statement = `SELECT starts_at,ends_at from classes where DATE_FORMAT(Date,'%d/%m/%Y') = '${newClass.date}' and teacherId = ${newClass.teacherId} `
                db.query(statement, (err, rows, fields) => {
                    if (err) return res.status(500).json({msg: err.message})
                    
                    arr = rows
                    if (utilFunctions.isOverlap(arr, intervel))
                        return res.status(400).json({
                            msg: 'This teacher is already scheduled at this time slot ,please choose another.'
                        })
                    const statement1 = `INSERT INTO classes (topic,teacherId,Date,starts_at,ends_at) values('${newClass.topic}','${newClass.teacherId}',STR_TO_DATE('${newClass.date}','%d/%m/%Y'),'${newClass.starts_at}','${newClass.ends_at}')`
                    db.query(statement1, (err, rows, field) => {
                        if (err)
                            return res.status(400).send({
                                msg: err
                            })

                        newClass.classId = rows.insertId
                        return res.status(201).send({
                            class: newClass
                        })

                    })
                })

            }catch (err) {
                res.status(500).json({
                    msg: err.message
                })

            }
        },
        updateClass: async (req, res) => {
            try{
                let newClass = req.body
                console.log("upadetclass",newClass)
                const check =  utilFunctions.validation(newClass)
                const intervel = {starts_at: newClass.starts_at,ends_at: newClass.ends_at}
                let arr;
                if (check){
                return res.status(400).json({msg: check})}
            
                const statement = `SELECT starts_at,ends_at from classes where DATE_FORMAT(Date,'%d/%m/%Y') = '${newClass.date}' and teacherId = ${newClass.teacherId}  and classId != ${newClass.classId} `
                db.query(statement, (err, rows, fields) => {
                if (err){
                    return res.status(500).json({msg: err.message})
                    }

                arr = rows
                if (utilFunctions.isOverlap(arr, intervel)){
                    return res.status(400).json({
                        msg: 'This teacher is already scheduled at this time slot ,please choose another.'
                    })
                }

                const statement1 = `UPDATE classes SET topic = '${newClass.topic}', Date = STR_TO_DATE('${newClass.date}','%d/%m/%Y'),starts_at = '${newClass.starts_at}',ends_at ='${newClass.ends_at}', teacherId = ${newClass.teacherId} where classId = ${newClass.classId}`
                db.query(statement1, (err, result, field) => {
                    if (err)
                        return res.status(400).json({
                            msg: err
                        })
                    
                   
                    return res.status(204).json({
                        msg:'updated Succesfully',
                        class : result
                    })

                })
            })

        } catch (err) {
            res.status(500).json({
                msg: err.message
            })

        }
    },
    deleteClass: async (req, res) => {
            try {

                const {classId} = req.query
                db.query(`delete from classes where classId = ${classId}`, (err, rows, field) => {
                    if (err)
                        return res.status(400).send({
                            msg: err
                        })
                    return res.status(202).send({
                        msg:'deleted succesfully'
                    })

                })
            } catch (err) {
                res.status(500).json({
                    msg: err.message
                })

            }
        },
        getClassesByTeacher: async (req, res) => {
            try {

                const {month, teacherId} = req.query
                
                db.query(`SELECT *,DATE_FORMAT(Date,'%d/%m/%Y') as date FROM classes  WHERE DATE_FORMAT(Date,'%M') = '${month}' and teacherId = ${teacherId}`, (err, rows, field) => {
                    if (err)
                        return res.status(400).send({
                            msg: err
                        })
                    return res.status(200).send({
                        classes: rows
                    })

                })

            } catch (err) {
                res.status(500).json({
                    msg: err.message
                })

            }
        },
}

module.exports = classCtrl