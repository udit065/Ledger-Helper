require('dotenv').config();
const express = require('express');
const TaxFilingRoutes = require('./routes/filings')


// express app
const app = express();

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/taxfiling', TaxFilingRoutes);


// listen for requests
app.listen(process.env.PORT, () => {
    console.log("listen to port", process.env.PORT);
})