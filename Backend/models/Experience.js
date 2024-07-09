const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExperienceSchema = new Schema({

    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    employer:{
        type: String,
        required:true
    },
    jobtitle:{
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
    location:{
        type: String,
        required:true,
    },
    locationtype:{
        type: String,
        required:true,
    },
  });


module.exports = mongoose.model('experience',ExperienceSchema);