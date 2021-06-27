const router=require('express').Router();
const teacherCtrl=require('../controllers/teacherCtrl')

router.get('/teachers',teacherCtrl.getTeachers)

router.post('/teachers',teacherCtrl.addTeacher)


module.exports = router