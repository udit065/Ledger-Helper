const express = require('express');
const Filing = require('../models/FilingModel')
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
router.post('/', async (req, res) => {
    const { name, email, phone_number, address, client_type } = req.body

    try {
        const filingData = await Filing.create({ name, email, phone_number, address, client_type });
        res.status(200).json(filingData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    // res.json({ msg: "POST a New Filing" })
})
//NOTE - DELETE
router.delete('/:id', (req, res) => {
    res.json({ msg: "DELETE a Filings" })
})

//NOTE - PATCH
router.patch('/:id', (req, res) => {
    res.json({ msg: "PATCH All Filings" })
})


module.exports = router;