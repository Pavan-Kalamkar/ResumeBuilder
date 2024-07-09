const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonalSchema = new Schema({

    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name:{
        type: String,
        required:true
    },
    dob:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    number:{
        type: String,
        required:true,
    },
    gender:{
        type: String,
        required:true,
    },
    occupation:{
        type: String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
  });


module.exports = mongoose.model('personal',PersonalSchema);