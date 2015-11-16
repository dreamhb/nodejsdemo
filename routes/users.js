var express = require('express');
var router = express.Router();
var url = require("url");

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.send(JSON.parse('{"name":"hubing", "color":"blue", "lover":"maomao"}'));
});

//post test
router.post('/', function(req, res, next){
    console.log(" Received POST data name = " + req.body.name
        + " color = " + req.body.color);
    res.send("END");
});

module.exports = router;
