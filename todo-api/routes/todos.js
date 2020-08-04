var express = require('express');
var router = express.Router();
var todos = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(todos);
});

router.post('/', function(req, res, next) {
  todos.push({id: req.body.id, task: req.body.task});
  res.json(todos);
});

router.delete('/:id', function(req, res, next) {
  todos = todos.filter(item => item.id != req.params.id)
  res.json(todos);
});

module.exports = router;
