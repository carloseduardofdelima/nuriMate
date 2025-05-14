const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com';

async function fetchFoodsRandom(number = 10) {
  try {
    const response = await axios.get(`${BASE_URL}/recipes/random`, {
      params: {
        apiKey: API_KEY,
        number
      }
    });

    return response.data.recipes;
  } catch (error) {
    console.error('Erro ao buscar receitas aleatórias:', error.message);
    throw error;
  }
}

module.exports = {
  fetchFoodsRandom
};
