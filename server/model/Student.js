const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const studentSchema = new Schema({
    id:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
});
mongoose.models = {};
const studentModel = mongoose.model.Student || mongoose.model('Student',studentSchema);

module.exports = studentModel;