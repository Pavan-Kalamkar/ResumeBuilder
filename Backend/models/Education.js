const mongoose = require('mongoose');
const { Schema } = mongoose;

const EducationSchema = new Schema({

    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    institute:{
        type: String,
        required:true
    },
    field:{
        type: String,
        required:true,
    },
    level:{
        type: String,
        required:true,
    },
    startdate:{
        type: String,
        required:true,
    },
    enddate:{
        type: String,
        required:true,
    },
    country:{
        type: String,
        required:true,
    },
  });


module.exports = mongoose.model('education',EducationSchema);