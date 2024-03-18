require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const TaxFilingRoutes = require('./routes/filings.js')


// express app
const app = express();

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/taxfiling', TaxFilingRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("connected to db & listen to port", process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })
