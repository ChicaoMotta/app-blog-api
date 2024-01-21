const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const createToken = (payload) => jwt.sign(payload, secret);

const decodeToken = (token) => {
  const formatToken = token.split(' ')[1];
  return jwt.verify(formatToken, secret);
};

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }
  try {
    const decoded = decodeToken(authorization);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  createToken,
  decodeToken,
  validateToken,
};