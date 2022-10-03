require('dotenv').config()


const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const User = require('../models/User');
const asyncHandler = require('express-async-handler');




// @desc Login a user
// @route POST /api/user/login
// @access PUBLIC
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json(
            {
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            }
        )
    } else {
        res.status(400);
        throw new Error('Invalid credentials')
    }

});
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
};

module.exports = loginUser