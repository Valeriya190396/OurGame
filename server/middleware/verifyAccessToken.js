const { User, Game } = require('../db/models')
const jwt = require('jsonwebtoken')

async function verifyAccessToken(req, res, next) {
  try {
    // проверяем заголовок на наличие токена
    const accessToken = req.headers.authorization.split(' ')[1];
    const { user } = jwt.verify(accessToken, 'process.env.ACCESS_TOKEN');


    user = await User.findOne({
        where: { id: user.id },
        attributes: ['id', 'name', 'email'],
      });
  
    const game = await Game.findOne({where: {userId: user.id}})

    user.gameId = game.id
    
    res.locals.user = user;

    next();
  } catch (error) {
    console.log('Invalid access token');
    res.status(403).send('Invalid access token');
  }
}

module.exports = verifyAccessToken;