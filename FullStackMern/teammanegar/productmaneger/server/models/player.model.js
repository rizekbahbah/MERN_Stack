const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [
            true,
            "Player Name is required"
        ],
        minlength:[2,"Thelength should be at least 2 charecters"]
    },
    preferredPosition: { type: String },
    status: {
        type:[]
    },
},
 { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);