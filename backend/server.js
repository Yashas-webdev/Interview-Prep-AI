require("dotenv").config();
const express = require('express')
const cors = require('cors')
const path = require('path')
const connectDB = require('./config/db.js')
const authRoutes = require('./routes/authRoutes.js')

const app = express();

//Midleware to handle CORS
app.use(
    cors({
        origin:'*',
        methods:['GET','POST','PUT',"DELETE"],
        allowedHeader: ["Content-Type",'Authorization']
    })
);

connectDB();

//Midleware
app.use(express.json());

//Routes
app.use('/api/auth',authRoutes);
// app.use('/api/sessions',sessionRoutes);
// app.use('/api/questions',quesitionRoutes);

// app.use('/api/ai/generate-questions',protect, generateInterviewQuestions);
// app.use('/api/ai/generate-explanation',protect,generateConceptExplanation);


//Serve uploads folder
app.use("/uploads",express.static(path.join(__dirname,'uploads'),{}));

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))