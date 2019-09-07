var express = require('express');
var router = express.Router();
let service = require('../services/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sample Application Server' });
});

/* GET organization page. */
router.get('/organizations/:organizationId', function(req, res, next) {
  let options = {
    organization_id: req.body.organizationId
  };

  service.getOrganizations(options, async (err, data) => {
    if (err) {
      res.status(500).end(JSON.stringify(err));
    }
    res.status(200).end(JSON.stringify(data));
  });
});

module.exports = router;
