import RecipeCard from '../RecipeCard'
import './style.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Recipes({ favorites = false }) {
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [recipes, setRecipes] = useState([0]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get("https://nurimate-production.up.railway.app/api/recipes/random")
                setRecipes(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Erro ao buscar receitas do back-end:', error)
            }
        }

        fetchRecipes()
    }, [])

    return (

        <div className='recipes'>
            <h1>{favorites ? 'Favorites' : 'Recipes'}</h1>
            <main>
                {recipes.map((r, index) => (
                    <RecipeCard key={index} id={r.id} image={r.image} title={r.title} time={r.readyInMinutes} tags={r.dishTypes} />
                ))}

            </main>

        </div>

    );
}