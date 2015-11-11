var express = require('express');
var router = express.Router();
var formidable = require('formidable'),
    util = require('util');

router.get('/', function(req, res){
    res.render('upload', {action:'/upload', method:'post', enctype:'multipart/form-data', value:'upload now!'});
});

router.post('/', function(req, res){
    console.log('upload post got !!!');
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.write('Received Upload: \n\n');
        res.end(util.inspect({fields: fields, files: files}));
    });
});

module.exports = router;
