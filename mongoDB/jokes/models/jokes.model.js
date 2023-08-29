const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required : [true , "Joke Setup is required"],
        minlength : [10 , "Joke setup must be at least 10 chrc"]
    },
    punchline: {
        type: String,
        required : [true , "Joke punchline is required"],
        minlength : [5 , "Joke punchline must be at least 5 chrc"]
    },
    
},
{ timestamps: { createdAt: 'created_at' , updatedAt: 'updated_at'} }
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
