var express = require("express");
var router = express.Router();
const key = process.env.MY_API_KEY

/* GET home page. */
router.get("/articles", function (req, res, next) {
  fetch(
    `https://newsapi.org/v2/everything?sources=the-verge&apiKey=${key}`
  )
  .then((response) => response.json())
  .then((data) => {
    if (data.status === 'ok') {
      res.json({ articles: data.articles });
    }
  });
});

module.exports = router;
