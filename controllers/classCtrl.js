const db = require('../database')


function IsValidTime(timeString) {
    var pattern = /^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/
    if (!timeString.match(pattern))
        return false;
    else
        return true
}

function isOverlap(arr, interval) {
    for (let i = 0; i < arr.length; i++) {
        if ((interval.starts_at >= arr[i].starts_at && interval.starts_at < arr[i].ends_at) || (interval.ends_at < arr[i].starts_at && interval.ends_at >= arr[i].ends_at))
            return true
    }
    return false
}
const validation = async (newClass) => {
    if (!newClass.teacherName)
        return "Please provide teacher's name"

    if (!newClass.teacherId)
        return "Please select teacher's name"

    if (newClass.starts_at > newClass.ends_at)
        return "Invalid time"

    if (!IsValidTime(newClass.starts_at))
        return "Please use time format HH:MM:SS (24 hour) "

    if (!IsValidTime(newClass.ends_at))
        return "Please use time format HH:MM:SS (24 hour) "

    return ''
}
const classCtrl = {
        getClasses: async (req, res) => {

            try {
                const month = req.params.month

                db.query(`SELECT * FROM classes WHERE month ='${month}'`, (err, rows, field) => {
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
        createClass: async (req, res) => {
            try {
                let newClass = req.body
                console.log(newClass)
                const check = await validation(newClass)
                const intervel = {
                    starts_at: newClass.starts_at,
                    ends_at: newClass.ends_at
                }
                let arr;
                if (check) return res.status(400).json({
                    msg: check
                })
                const statement = `SELECT starts_at,ends_at from classes where month = '${newClass.month}' and day = ${newClass.day} and teacherId = ${newClass.teacherId} `
                db.query(statement, (err, rows, fields) => {
                    if (err)
                        return res.status(500).json({
                            msg: err.message
                        })
                    arr = rows
                    
                    if (isOverlap(arr, intervel))
                        return res.status(400).json({
                            msg: 'This teacher is already scheduled at this time slot ,please choose another.'
                        })
                    const statement1 = `INSERT INTO classes (topic,teacherName,teacherId,month,day,starts_at,ends_at) values('${newClass.topic}','${newClass.teacherName}','${newClass.teacherId}','${newClass.month}','${newClass.day}','${newClass.starts_at}','${newClass.ends_at}')`
                    db.query(statement1, (err, rows, field) => {
                        if (err)
                            return res.status(400).send({
                                msg: err
                            })
                        newClass.classId = rows.insertId
                        console.log(newClass)
                        return res.status(201).send({
                            class: newClass
                        })

                    })
                })

            } catch (err) {
                res.status(500).json({
                    msg: err.message
                })

            }
        },
        updateClass: async (req, res) => {
            try{
            let newClass = req.body
            console.log(newClass)
            const check = await validation(newClass)
            const intervel = {
                starts_at: newClass.starts_at,
                ends_at: newClass.ends_at
            }
            let arr;
            if (check) return res.status(400).json({
                msg: check
            })
            const statement = `SELECT starts_at,ends_at from classes where month = '${newClass.Month}' and day = ${newClass.day} and teacherId = ${newClass.teacherId} and classId != ${newClass.classId} `
            db.query(statement, (err, rows, fields) => {
                if (err)
                    return res.status(500).json({
                        msg: err.message
                    })
                arr = rows
                console.log(arr)
                if (isOverlap(arr, intervel))
                    return res.status(400).json({
                        msg: 'This teacher is already scheduled at this time slot ,please choose another.'
                    })
                const statement1 = `UPDATE classes SET topic = '${newClass.topic}', day = ${newClass.day},starts_at = '${newClass.starts_at}',ends_at ='${newClass.ends_at}',teacherName = '${newClass.teacherName}', teacherId = ${newClass.teacherId} where classId = ${newClass.classId}`
                db.query(statement1, (err, rows, field) => {
                    if (err)
                        return res.status(400).send({
                            msg: err
                        })
                    
                    console.log(rows)
                    return res.status(204).send({
                        msg:'updated Succesfully',
                        class : rows
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

                const id = req.params.classId
                db.query(`delete from classes where classId = ${id}`, (err, rows, field) => {
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

                const {
                    month,
                    teacherId
                } = req.params

                db.query(`SELECT * FROM classes WHERE month ='${month}' and teacherId = ${teacherId}`, (err, rows, field) => {
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