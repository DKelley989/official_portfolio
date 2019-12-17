var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');



/* GET home page. */
router.get('/', function (req, res, next) {

  fetch("https://itunesvolodimir-kudriachenkov1.p.rapidapi.com/search", {
      "method": "POST",
      "headers": {
        "x-rapidapi-host": "iTunesvolodimir-kudriachenkoV1.p.rapidapi.com",
        "x-rapidapi-key": "40d9c3a49amsha0fa32860377a52p12eac4jsn6759ef74a180",
        "content-type": "application/x-www-form-urlencoded"
      },
      "body": {}
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });

  res.redirect('/home');
});

router.get('/home', function (req, res, next) {
  res.render('index', {
    title: 'My Portfolio'
  });
});

module.exports = router;