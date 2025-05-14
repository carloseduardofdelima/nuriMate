const express = require('express');
const router = express.Router();
const { fetchFoodsRandom } = require('../services/spoonacularService');

router.get('/', async (req, res) => {
  try {
    const foods = await fetchFoodsRandom(10); // Retorna 10 receitas aleatórias
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar comidas aleatórias' });
  }
});

module.exports = router;
