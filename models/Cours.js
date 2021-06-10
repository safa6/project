const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coursSchema = new Schema({
 

  title :{
      type: String,
      required: true,
    },
    categorie :{
      type: String,
      required:true,
    },

 contenu :{ 
      type: String,
      required :true,
},
creation_date:{
  type:Date,
  default:Date.now
}
})



module.exports = mongoose.model("Cours", coursSchema);