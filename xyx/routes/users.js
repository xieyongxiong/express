var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getText', function(req, res, next){
    var respond = {status:1, data:"AA"};
    res.send(JSON.stringify(respond));
})
module.exports = router;
