const router = require('express').Router();
const { swaggerUi, swaggerDocs } = require('./swagger');
const passport = require('passport');

router
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
  .use('/user', require('./userRouter'))
  .use('/tickets', require('./ticketRouter'));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) { return next(err); }
    res.redirect('/');
  })
});

module.exports = router;