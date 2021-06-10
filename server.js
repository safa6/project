const express = require('express');
const connectDB = require('./config/connectDB')
const user = require('./routes/user')
const course = require('./routes/cours')

const app = express();
app.use(express.json());
app.use('/user',user)
app.use('/course',course)
//app.use('/cours',cours)
connectDB()
const PORT = process.env.PORT || 5000;

app.listen(PORT, err=>err? console.error(err):console.log(`Server running on port ${PORT}`));