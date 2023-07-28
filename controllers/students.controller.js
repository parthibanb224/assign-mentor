const studentsRouter = require('express').Router();
const { default: mongoose } = require('mongoose');
const studentModel = require('../models/students.model');

studentsRouter.get('/',(req,res,next) => {
    studentModel.find()
    .then(students => {
        return res.status(200).json({
            result : students,
            success : true,
            message : "students collection create successfully!!"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "students collection create failed",
            Error : err
        })
    })
})


studentsRouter.post('/createStudents',(req,res,next) => {
    const data = req.body;
    const NewStudent = new studentModel(data);
    NewStudent.save()
    .then(result => {
        return res.status(200).json({
            result : result,
            success : true,
            message : "New Student Added SuccessFully"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "New Student Added Failed",
            Error : err
        })
    })

})


studentsRouter.patch('/:studentId', (req,res,next) => {
    const updatedData = req.body;
    const {studentId} = req.params;
    const updateStudent = new mongoose.Types.ObjectId(studentId);
    studentModel.findOneAndUpdate({_id:updateStudent},updatedData,{new:true})
    .then(response => {
        return res.status(200).json({
            result : response,
            success : true,
            message : "student data update successfully"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "student data update failed",
            Error : err
        })
    })
})


studentsRouter.get('/:studentName', (req,res,next) => {
    const {studentName} = req.params;
    studentModel.find()
    .then(response => {
        const matchedData = response.filter(item => item.name === studentName);
        return res.status(200).json({
            result : matchedData,
            success : true,
            message : "find student detail successfully"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "find student detail failed",
            Error : err
        })
    })
})

module.exports = studentsRouter;