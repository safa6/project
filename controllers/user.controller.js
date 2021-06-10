const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const secret = config.get("secret");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password, phoneNumber,cours,roleType } = req.body;
  try {
    const searchRes = await User.findOne({ email });
    if (searchRes)
      return res.status(401).json({ msg: "user already exists !!" });
    const newUser = new User({
      name,
      email,
      password,
      phoneNumber,
      cours,
      roleType
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;
    await newUser.save();
    // res.status(201).json(newUser);
    const payload = {
      id: newUser._id,
    };
    const token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
        cours:newUser.cours,
        roleType:newUser.roleType
      },
    });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ msg: "invalid email or password" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ msg: "invalid email or password" });
    const payload = {
      id: user._id,
    };
    const token = await jwt.sign(payload, secret);
    res.send({
      token,
      id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      cours: user.cours,
    });
    // return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};

exports.authorizedUser = (req, res) => {
  res.send(req.user);
};