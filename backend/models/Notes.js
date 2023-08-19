const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desciption:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=User=mongoose.model('notes', NotesSchema);