const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: String,
  cours : String,
  roleType:{
    type:String,
    default:'student',
    roles:['student','admin']
  }
}
);

module.exports = mongoose.model("User", userSchema);

