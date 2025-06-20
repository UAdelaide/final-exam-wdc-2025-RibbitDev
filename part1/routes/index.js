var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get()

module.exports = router;


SELECT dog.dog_name, dog.dog_name, COUNT(film_actor.film_id) AS number_films
FROM actor
JOIN film_actor ON actor.actor_id = film_actor.actor_id
GROUP BY actor.actor_id;