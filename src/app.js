const express = require('express');
const { User, BlogPost } = require('./models');
const { loginRoute, userRoute, categoryRoute, postRoute } = require('./routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);
app.use('/post', postRoute);

app.get('/blog', async (_req, res) => {
  const getUsers = await BlogPost.findAll({
    include: {
      model: User,
    },
  });
  res.status(201).json(getUsers);
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
