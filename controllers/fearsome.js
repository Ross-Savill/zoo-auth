const express = require('express');
const router = express.Router();

const fearsome = (req, res, next) => {
    if (req.path !== '/george') {
      res.send('not george')
    }  
    next()
}

router.use(fearsome)

router.get('/george', (req, res) => {
  res.send("Hello")
})

router.get('/percy', (req, res) => {

})

router.get('/millicent', (req, res) => {

})

router.get('/elgebert', (req, res) => {

})

module.exports = router;