const jwt = require('jsonwebtoken')
const { User, Game } = require('../db/models')

async function verifyRefreshToken(req, res, next) {
    try {
      // проверяем куку на наличие токена
      const { refresh } = req.cookies;
      console.log(refresh);
      let { user } = jwt.verify(refresh, 'process.env.REFRESH_TOKEN');
      // опционально

      user = await User.findOne({
        where: { id: user.id },
        attributes: ['id', 'name', 'email'],
      });

      const game = await Game.findOne({where: {userId: user.id}})

      user.gameId = game.id
  
      res.locals.user = user;
  
      next();
    } catch (error) {
      console.log('Invalid refresh token');
      res.clearCookie('refreshToken').sendStatus(401);
    }
}

module.exports = verifyRefreshToken;