var express = require('express');
var router = express.Router();
var formidable = require('formidable'),
    util = require('util'),
    fs = require('fs');

router.get('/', function(req, res){
    res.render('upload', {action:'/upload', method:'post', enctype:'multipart/form-data', value:'upload now!'});
});

//upload method
router.post('/', function(req, res){
    if(true){
        //res.render('alert', {alert_msg:'Image must be JPEG or PNG'});
        //return;
    }
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        fs.renameSync(files.upload.path, "/tmp/test.png");
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.write('Received Upload: \n\n');
        //res.end(util.inspect({fields: fields, files: files}));
        res.end("Content-Type: " + files.upload.path.toString()); 
    });
});

//show image
router.get('/showImage', function(req, res){
    console.log(" show image got !!!");
    fs.readFile("/tmp/test.png", "binary", function(err, file){
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write(err + '\n');
            res.end();
        }else{
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.write(file, "binary");
            res.end();
        }    
    });
});

module.exports = router;
