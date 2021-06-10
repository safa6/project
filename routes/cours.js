const express = require("express");
const{
    category,
    cours,
    addCourse,
    getCourse,
    editCourse,
    deletecourse,
}= 
require("../controllers/cours.controllers");
const isAuth = require("../middlewares/isAuth");
const roleCheck = require("../middlewares/role");

// add,delete,edit ==> admin: middleware that checks that the user had admin priviliges 
// get ==> global access 


const Router = express.Router();

// Router.post(`/Addcourse`,isAuth,
// rolevalidation['Admin']),
// admin ? next()

Router.post('/Addcourse',isAuth,roleCheck(["admin"]), addCourse)
Router.put('/Editcourse/:id',isAuth,roleCheck(["admin"]), editCourse)
Router.delete('/deletecourse/:id',isAuth,roleCheck(["admin"]), deletecourse)
Router.get('/Getcourse',getCourse)

// Router.put(`/EditCours`,isAuth,
// rolevalidation['Admin']),

// Router.delete(`/DeleteCourse`,deleteCourse)






module.exports = Router;
    
