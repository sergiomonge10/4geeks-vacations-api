'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');
  var vacation = require('../controllers/vacationController');

  app.route('/users')
     .get(user.indexUsers)
     .post(user.createUser);

  app.route('/user/:userId')
     .get(user.showUser)
     .put(user.updateUser)
     .delete(user.deleteUser);

  app.route('/user/:userId/vacations')
      .get(vacation.retreive)
      .post(vacation.add)

  app.route('/user/:userId/vacation/request')
      .post(vacation.request)
};
