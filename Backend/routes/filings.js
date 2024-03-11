const express = require('express');
const router = express.Router();

//NOTE - GET
router.get('/', (req, res) => {
    res.json({ msg: "GET All Filings" })
})


//NOTE - POST

//NOTE - DELETE

//NOTE - PATCH


module.exports = router;