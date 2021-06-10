// add a course 
// tite , category, content 


const Cours = require("../models/Cours");
const cours=require("../models/Cours");
// const bcrypt = require("bcryptjs");
// const config = require("config");
// const secret = config.get("secret");
// const jwt = require("jsonwebtoken");

exports.addCourse = async (req, res) => {
 try {
     const newCourse = await new Cours
      newCourse.save();
     res.send(newCourse)
 } catch (error) {
     res.status(500).json({errors:error.message})
 }
}

exports.getCourse = async (req,res) => {
    try {
        const courses =await Cours.find()
        res.send(courses)
    } catch (error) {
        res.status(500).json({errors:error.message})

    }
}

// exports.editCourse = async (req, res) => {
//     try {
//         const EditCourse = await Cours.findByIdAndUpdate()
//          EditCourse.save();
//         res.send(EditCourse)
//     } catch (error) {
//         res.status(500).json({errors:error.message})
//     }
//    }


exports.editCourse = async (req, res) => {
    try {
      const {
        title,
        categorie,
        contenu
      } = req.body;
  
      const updatedCourse = await Cours.findByIdAndUpdate(req.params.id, {
        title,
        categorie,
        contenu
      });
      return res.status(201).json({
        msg: "course modified",
        cours: updatedCourse
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }


exports.deletecourse = async (req, res) => {
    const {id}=req.params
    try {
      await Cours.findByIdAndDelete(id);
      res.send({ message: "Course deleted" });
    } catch (error) {
      res.send(error);
    }
  
}