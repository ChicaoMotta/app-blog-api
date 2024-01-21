const router = require('express').Router();
const jwt = require('../auth/validateJWT');
// const schema = require('../services/validations/schemas');
const { BlogPost, Category, User } = require('../models');

// router.post('/', jwt.validateToken, async (req, res) => {

// });

router.get('/', jwt.validateToken, async (_req, res) => {
  const getUsers = await BlogPost.findAll(
    {
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          // attributes: { exclude: ['postcategory'] },
          through: { attributes: [] },
        },
      ],
    },
  );
  res.status(200).json(getUsers);
});

router.get('/:id', jwt.validateToken, async (req, res) => {
  const { id } = req.params;
  const getUsers = await BlogPost.findByPk(
    id,
    {
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category, as: 'categories', through: { attributes: [] },
        },
      ],
    },
  );
  if (!getUsers) return res.status(404).json({ message: 'Post does not exist' });
  res.status(200).json(getUsers);
});

module.exports = router;