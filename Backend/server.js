require('dotenv').config();
const express = require('express');


// express app
const app = express();

app.get('/', (req, res) => {
    res.json({ msg: "Welcome to app" });
})


// listen for requests
app.listen(process.env.PORT, () => {
    console.log("listen to port", process.env.PORT);
})