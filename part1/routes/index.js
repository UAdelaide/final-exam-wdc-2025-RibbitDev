var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

SELECT dog.dog_name, user.username
FROM User ON actor.actor_id = 
router.get()

module.exports = router;


SELECT dog.dog_name, user.username.
FROM User
JOIN dog ON actor.actor_id = film_actor.actor_id
GROUP BY actor.actor_id;