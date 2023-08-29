const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
    
require('./configs/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new

require('./routes/author.routes')(app); // This is new
app.listen(port, () => console.log(`Listening on port: ${port}`) );






