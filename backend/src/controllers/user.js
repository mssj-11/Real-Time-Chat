const User = require('../models/user');



module.exports = {
    index: (req, res) => {
        User.get(req.con, (error, rows) => {
            if(error){
                res.status(500).send({response:'Ha ocurrido un error en el listado de usuarios'});
            }else{
                res.status(500).send({response: rows});
            }
        });
    }
};