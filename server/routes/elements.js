const express = require('express');
const router  = express.Router();
const Comment = require("../models/Comment");
const Game = require("../models/Game");

router.post('/game', (req, res) => {
  Game
    .create({
      description: req.body.description,
      timestamp: new Date()
    })
    .then(createdGame => [
      res.json(createdGame)
    ])
})

router.put('/game/:gameId', (req, res, next) => {
  Game
    .findByIdAndUpdate(req.params.gameId, req.body)
    .then(x => {
      res.json({"updated": true, _id: req.params.gameId})
    })
});

router.get('/comments', (req, res, next) => {
  Comment
    .find()
    .sort({timestamp: -1})
    .then(allComments => res.json(allComments))
    .catch(e => console.log(e))
});

router.put('/comment/:commentId', (req, res, next) => {
  Comment
    .findByIdAndUpdate(req.params.commentId, req.body)
    .then(x => {
      res.json({"updated": true, _id: req.params.commentId})
    })
});

router.post('/comment', (req, res) => {
  Comment
    .create({
      description: req.body.description,
      timestamp: new Date()
    })
    .then(createdComment => [
      res.json(createdComment)
    ])
})

module.exports = router;
