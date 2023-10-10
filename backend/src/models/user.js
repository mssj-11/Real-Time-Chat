module.exports = {
    get: (con, callback) => {
        con.query('SELECT * FROM users', callback);
    }
};