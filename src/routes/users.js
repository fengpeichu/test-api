var express = require('express');
var router = express.Router();
var query = require('../mysql/index.js');
var sql = require('../mysql/sql.js');
/* GET users listing. */
router.get('/api/read', function(req, res, next) {
    query(sql.READ_TILL, function(err, result) {
        if (err) {
            res.end({ code: 1, msg: '有问题' })
        } else {
            res.end({ code: 0, msg: result })
        }

    })
});

module.exports = router;