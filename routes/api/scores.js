const express = require('express');
const router = express.Router();
const scoresCtrl = require('../../controllers/scores');

router.get('/', scoresCtrl.highScores);

// Protected server routes
router.post('/', checkAuth, scoresCtrl.create);

/*--- Helper Functions ---*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorization'});
}

module.exports = router;
