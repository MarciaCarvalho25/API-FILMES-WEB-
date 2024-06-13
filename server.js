const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/config');
const musicaRoutes = require('./routes/musica');
const artistaRoutes = require('./routes/artista');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/musicas', musicaRoutes);
app.use('/api/artistas', artistaRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
