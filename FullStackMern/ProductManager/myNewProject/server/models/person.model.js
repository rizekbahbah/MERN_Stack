const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    bookTitle: { type: String,    required: [
        true,
        "Title is required"
    ] },
    bookPrice: { type: Number },
    bookDescription: { type: String,        required: [
        true,
        "discription is required"
    ]
}
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);

