const bcrypt = require('bcryptjs');

function hashPassword(password){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

function getFilePath(file){
    const path = file.path.split('\\');
    const fileName = path.pop();
    const folderName = path.pop();

    return `${folderName}/${fileName}`;
}


module.exports = {
    hashPassword,
    getFilePath
}