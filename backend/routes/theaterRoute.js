const express = require('express');
const app = express();
const theaterRoute = express.Router();

// theater model
let Theater = require('../models/Theater');

// Add theater
theaterRoute.route('/create').post((req, res, next) => {
  Theater.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All theaters
theaterRoute.route('/').get((req, res) => {
  Theater.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single theater
theaterRoute.route('/read/:id').get((req, res) => {
  Theater.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update theater
theaterRoute.route('/update/:id').put((req, res, next) => {
  Theater.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete theater
theaterRoute.route('/delete/:id').delete((req, res, next) => {
  Theater.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = theaterRoute;
