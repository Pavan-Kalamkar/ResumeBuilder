const mongoose = require('mongoose');
const { Schema } = mongoose;

const ObjectiveSchema = new Schema({

    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    objective:{
        type: String,
        required:true
    },
  });


module.exports = mongoose.model('objective',ObjectiveSchema);