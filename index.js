require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const achievementRouter = require("./routes/Achievement");
const PORT = process.env.PORT || 5000;
const DB = process.env.DATABASE 

const app = express()


//middleware
app.use(cors())
app.use(express.json())
app.use(achievementRouter)


mongoose.connect(DB).then(() => {
    console.log('connected')
}).catch(err => console.log(err));


app.get('/api/',(req,res) => {
    res.json({status:"success"})
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`live on http://localhost:${PORT}/api/`);
})