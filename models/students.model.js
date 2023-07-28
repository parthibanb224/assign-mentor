const mongoose = require('mongoose');
const {Schema} = mongoose;

const studentsSchema = new Schema({
    name : {type:String, required:true, trim:true},
    assignedMentor : {type:Schema.Types.ObjectId, ref:"mentors"},
    previousMentor : {type:Schema.Types.ObjectId, ref:"mentors"}
}) 

module.exports = mongoose.model('students',studentsSchema);