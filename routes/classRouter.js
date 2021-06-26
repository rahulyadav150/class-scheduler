const router=require('express').Router();
const classCtrl=require('../controllers/classCtrl');

router.get('/classes/:month',classCtrl.getClasses)

router.post('/classes/:month',classCtrl.createClass)

router.patch('/classes/:classId',classCtrl.updateClass)


router.delete('/classes/:classId',classCtrl.deleteClass)

router.get('/classes/:month/:teacherId',classCtrl.getClassesByTeacher)

// router.post('/login',authCtrl.login)


// router.post('/logout',authCtrl.logout)


// router.post('/refresh_token',authCtrl.generateAccessToken)


module.exports =  router;