const mongoose = require('mongoose');
const BASE_URL = "mongodb://0.0.0.0:27017/";
const DB_NAME = "Assign_Mentor";

mongoose.connect(`${BASE_URL}${DB_NAME}`)
    .then(response => {
        console.log("Database Create Successfully");
    })
    .catch(err => {
        console.log("DataBase Create Failure===>",err)
    })