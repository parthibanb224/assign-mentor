const mentorsRouter = require('express').Router();
const mentorModel = require('../models/mentors.model');
var mongoose = require("mongoose");

mentorsRouter.get('/',(req,res,next) => {
    mentorModel.find()
    .then(mentors => {
        return res.status(200).json({
            result : mentors,
            success : true,
            message : "mentors collection create successfully!!"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "mentors collection create failed",
            Error : err
        })
    })
})


mentorsRouter.post('/createMentors', (req,res,next) => {
    const data = req.body;
    const NewMentor = new mentorModel(data);
    NewMentor.save()
    .then(result => {
        return res.status(200).json({
            result : result,
        success : true,
        message : "NewMenor Added Successfully!!"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "NewMentor Added Failed",
            Error : err
        })
    })
})

mentorsRouter.patch('/:mentorId', (req,res,next) => {
    const updatedData = req.body;
    const {mentorId} = req.params;
    const Id = new mongoose.Types.ObjectId(mentorId);
    mentorModel.findOneAndUpdate({_id:Id}, updatedData, {new:true})
    .then((response) => {
        if(response && response._id){
            return res.status(200).json({
                result : response,
                success : true,
                message : "mentors update successfully"
        })
    }
})
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "mentor update failed",
            Error : err
        })
    })
})


mentorsRouter.get('/:mentorName', (req,res,next) => {
    const {mentorName} = req.params;
    mentorModel.find()
    .then(response => {
        const matchedData = response.filter(item => item.name === mentorName);
        return res.status(200).json({
            result : matchedData,
            success : true,
            message : "find mentor detail successfully"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "find mentor detail failed",
            Error : err
        })
    })
})


module.exports = mentorsRouter;