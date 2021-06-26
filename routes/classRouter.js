const router=require('express').Router();
const classCtrl=require('../controllers/classCtrl');

router.get('/classes',classCtrl.getClasses)

router.post('/classes',classCtrl.createClass)

router.patch('/classes',classCtrl.updateClass)


router.delete('/classes',classCtrl.deleteClass)

router.get('/classes/teacher',classCtrl.getClassesByTeacher)

// router.post('/login',authCtrl.login)


// router.post('/logout',authCtrl.logout)


// router.post('/refresh_token',authCtrl.generateAccessToken)


module.exports =  router;