const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Personal = require('../models/Personal');
const { body, validationResult } = require('express-validator');



//Route 2 : Add a new note Using : POST "/api/notes/addnote".Login required 
router.post('/addpersonal', fetchuser,
    [
        body('email', " title must be valid ").isLength({ min: 3 }),
        body('number', "number must be at least 10 digit").isLength({ min: 10 }),
    ],
    async (req, res) => {
        try {
            const { name, dob, email, number, gender, occupation } = req.body;
            //If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const personal = new Personal({
                name, dob, email, number, gender, occupation, user: req.user.id
            })

            const savedNote = await personal.save()

            res.json(savedNote)

        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error occurs")
        }
    })


module.exports = router;