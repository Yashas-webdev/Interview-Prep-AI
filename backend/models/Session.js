const mongoose = require("mongoose")

const sessionSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

    role:{
        type:String,
        require: true,
    },

    experience: {
        type: String,
        require: true,
    },

    topicsToFocus:{
        type: String,
        required: true,
    },

    description:String,

    questions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Questions",
    }]
},
{timestamps:true}
)

module.exports = monogoose.model("Session",sessionSchema);