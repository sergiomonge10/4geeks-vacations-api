'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  app.route('/users')
     .get(user.indexUsers)
     .post(user.createUser);

  app.route('/user/:userId')
     .get(user.showUser)
     .put(user.updateUser)
     .delete(user.deleteUser);
};
