const TestController = require('../controllers/test_controller');

module.exports = (app) => {
  // ##########################################################################
  //Test routes
  // ##########################################################################

  // when this HTTP request comes in, under this route, run this function
  app.get('/api/test/', TestController.test);
  app.post('/api/test/', TestController.reflect);
}
