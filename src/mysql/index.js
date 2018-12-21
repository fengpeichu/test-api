/*
 * @Author: 楚凤沛 
 * @Date: 2018-12-21 14:20:58 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-21 14:32:33
 */
var pool = require('mysql').createPool({
    port: '3306',
    user: 'root',
    password: 'root',
    database: '1221ts',
    connectionLimit: 111
});
module.exports = function(sql, arr, ck) {
    pool.getConnection(function(err, con) {
        if (err) {
            return ck && ck(err);
        }
        con.query(sql, arr, function(err, result, difel) {
            if (err) {
                return ck && ck(err);
            }
            ck && ck(null, result, difel);
            con.release();
        })
    })
}