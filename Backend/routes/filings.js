const express = require('express');
const router = express.Router();

//NOTE - GET
router.get('/', (req, res) => {
    res.json({ msg: "GET All Filings" })
})

//NOTE - GET a Single Filing
router.get('/:id', (req, res) => {
    res.json({ msg: "GET a Single  Filings" })
})

//NOTE - POST
router.post('/', (req, res) => {
    res.json({ msg: "POST All Filings" })
})
//NOTE - DELETE
router.delete('/:id', (req, res) => {
    res.json({ msg: "DELETE All Filings" })
})

//NOTE - PATCH
router.patch('/:id', (req, res) => {
    res.json({ msg: "PATCH All Filings" })
})


module.exports = router;