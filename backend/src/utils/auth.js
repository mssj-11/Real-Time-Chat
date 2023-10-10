const bcryptjs = require('bcryptjs');

function hashPassword(password){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

module.export = {
    hashPassword
};