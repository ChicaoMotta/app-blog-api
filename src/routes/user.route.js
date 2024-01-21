const router = require('express').Router();
const jwt = require('../auth/validateJWT');
const { User } = require('../models');
const { newUserSchema } = require('../services/validations/schemas');

router.post('/', (req, res) => {
  const { error } = newUserSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const { displayName, email, password, image = null } = req.body;
  User.create({
    displayName,
    email,
    password,
    image,
  }).then((_user) => {
    const token = jwt.createToken({ email });
    return res.status(201).json({ token });
  }).catch((_err) => res.status(409).json({
    message: 'User already registered',
  }));
});

router.get('/', jwt.validateToken, async (_req, res) => {
  const getUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return res.status(200).json(getUsers);
});

router.get('/:id', jwt.validateToken, async (req, res) => {
  const { id } = req.params;
  const getUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!getUser) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(getUser);
});

module.exports = router;