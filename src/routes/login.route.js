const router = require('express').Router();
const jwt = require('../auth/validateJWT');
const { User } = require('../models');

const validateUser = async (email, password) => {
  const validUser = await User.findOne(
    {
      where: {
        email,
        password,
      },
    },
  );
  return validUser;
};

router.post('/', async (req, res) => {
  const isBodyValid = req.body.email.length > 0 && req.body.password.length > 0;
  if (!isBodyValid) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const { email, password } = req.body;
  const userValidated = await validateUser(email, password);
  if (!userValidated) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const token = jwt.createToken({ email });
  return res.status(200).json({ token });
});

module.exports = router;