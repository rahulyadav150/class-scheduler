const router=require('express').Router();
const teacherCtrl=require('../controllers/teacherCtrl')

router.get('/teachers',teacherCtrl.getTeachers)


module.exports = router