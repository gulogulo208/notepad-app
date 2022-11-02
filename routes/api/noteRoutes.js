const router = require('express').Router();
const notes = require('../../db/notes.json');

router.get('/', (req, res) => {
    return res.json(notes)
});



module.exports = router;