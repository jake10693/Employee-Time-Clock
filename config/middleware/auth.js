const config = require('config');
const jwt = require('jsonwebtoken');

const Auth = (req, res, next) => {
   const token = req.header('x-auth-token')
   const secret = process.env.jwt_secret || config.get('jwtSecert')

   if(!token) res.status(401).json({ msg: "no token, authorization was denied!"});

   try{
      const decoded = jwt.verify(token, secret);
      req.user = decoded;
      next();
   } catch(exception){
      res.status(400).json({ msg: "token is not valid!"})
   }

}
//fuck
module.exports = Auth;