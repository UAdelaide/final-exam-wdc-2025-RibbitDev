var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

SELECT dog.dog_name, user.username
FROM Dog
JOIN dog ON dog.dog_id = user_dog.dog_id
GROUP BY U
router.get()

module.exports = router;


SELECT dog.dog_name, user.username.
FROM User
JOIN dog ON actor.actor_id = film_actor.actor_id
GROUP BY actor.actor_id;