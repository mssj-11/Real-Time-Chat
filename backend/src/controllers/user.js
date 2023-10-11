const User = require('../models/user');
const { getFilePath, unlinkFile } = require('../utils/auth');



module.exports = {
    index: (req, res) => {
        User.get(req.con, (error, rows) => {
            if(error){
                res.status(500).send({response: 'Ha ocurrido un error al listar los usuarios'});
            }else{
                res.status(200).send({response: rows});
            }
        });
    },
    store: (req, res) => {
        req.body.img = '';
        //  If the Image exists
        if(req.files.img){
            req.body.img = getFilePath(req.files.img);
        }
        //  GO ahead & execute
        User.create(req.con, req.body, (error, row) => {
            if(error){
                unlinkFile(req.body.img);//Delete image in case of user registration error
                res.status(500).send({response: 'Ha ocurrido un error creando a un usuario'});
            } else{
                res.status(200).send({response: row});
            }
        });
    }
};