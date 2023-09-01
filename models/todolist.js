const mongoose = require ('mongoose');

const todolistSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

const Todolist = mongoose.model('todolist', todolistSchema);

module.exports = Todolist;
