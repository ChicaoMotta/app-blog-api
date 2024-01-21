const router = require('express').Router();
const jwt = require('../auth/validateJWT');
const schema = require('../services/validations/schemas');
const { Category } = require('../models');

router.post('/', jwt.validateToken, async (req, res) => {
  const { error } = schema.categorySchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const { name } = req.body;
  try {
    const { id } = await Category.create({
      name,
    });
    return res.status(201).json({ id, name });
  } catch (err) { console.log(err); }
});

router.get('/', jwt.validateToken, async (_req, res) => {
  const getUsers = await Category.findAll();
  res.status(200).json(getUsers);
});

module.exports = router;