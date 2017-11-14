'use strict';
var mongoose = require('mongoose'),
User = mongoose.model('User');

exports.retreive = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json({'vacations': user.vacations});
  });
}

exports.request = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (!user)
      return next(new Error('User Not Found'));
    else {
      user.vacations = parseInt(user.vacations) - parseInt(req.body.vacations);

      user.save(function(err) {
        if (err)
          res.send(err);
        res.json(
          {
            'Current vacations': user.vacations,
            'Requested vacations': parseInt(req.body.vacations),
            'message': 'Vacations sucesfully requested, enjoy your vacations'
          });
      });
    }
  });
};

exports.add = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (!user)
      return next(new Error('User Not Found'));
    else {
      user.vacations = parseInt(user.vacations) + parseInt(req.body.vacations);

      user.save(function(err) {
        if (err)
          res.send(err);
        res.json({'vacations': user.vacations, 'message': 'Vacations sucesfully updated'});
      });
    }
  });
};
