const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true,"Name is required"],
        minlength: [5,"Name should be at least 5 charchters"]
    }
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);

