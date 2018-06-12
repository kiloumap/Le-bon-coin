const jwt               = require('jsonwebtoken');
const config            = require("../../config/config");

// TODO set user decode in global var
module.exports = function(req,res,next) {
    let token = req.session.value || req.headers['x-access-token'];
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err)
                return res.json({"error": true});
            req.decoded = decoded;
        });
    } else {
        // forbidden without token
        return res.status(403).send({
            "error": true,
            "MustBeLogged": true,
        });
    }
    next();
};