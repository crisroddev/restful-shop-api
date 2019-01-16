const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require('../models/user');
const bcrypt = require('bcrypt');


router.post('/signup', (req, resp, next) =>{
    const user = new User ({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: bcrypt.hash(req.body.password)

    });
});



module.exports = router;