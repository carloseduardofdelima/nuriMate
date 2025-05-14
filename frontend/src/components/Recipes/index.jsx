import RecipeCard from '../RecipeCard'
import './style.css'
import { useState, useEffect } from 'react';

const mockRecipes = [
    { id: 1, title: "Spaghetti Carbonara", image: "https://spoonacular.com/recipeImages/716429-312x231.jpg" },
    { id: 2, title: "Grilled Chicken Salad", image: "https://spoonacular.com/recipeImages/715538-312x231.jpg" },
    { id: 3, title: "Avocado Toast", image: "https://spoonacular.com/recipeImages/715497-312x231.jpg" },
    { id: 4, title: "Pancakes with Syrup", image: "https://spoonacular.com/recipeImages/715421-312x231.jpg" },
    { id: 5, title: "Vegan Buddha Bowl", image: "https://spoonacular.com/recipeImages/716627-312x231.jpg" },
    { id: 6, title: "Beef Tacos", image: "https://spoonacular.com/recipeImages/715594-312x231.jpg" },
    { id: 7, title: "Tomato Basil Soup", image: "https://spoonacular.com/recipeImages/716406-312x231.jpg" },
    { id: 8, title: "Quinoa Salad", image: "https://spoonacular.com/recipeImages/715415-312x231.jpg" },
    { id: 9, title: "Chicken Stir Fry", image: "https://spoonacular.com/recipeImages/716408-312x231.jpg" },
    { id: 10, title: "French Omelette", image: "https://spoonacular.com/recipeImages/715446-312x231.jpg" },
    { id: 11, title: "Shrimp Scampi", image: "https://spoonacular.com/recipeImages/716426-312x231.jpg" },
    { id: 12, title: "Stuffed Peppers", image: "https://spoonacular.com/recipeImages/716328-312x231.jpg" },
    { id: 13, title: "Chocolate Chip Cookies", image: "https://spoonacular.com/recipeImages/716417-312x231.jpg" },
    { id: 14, title: "Caesar Salad", image: "https://spoonacular.com/recipeImages/715440-312x231.jpg" },
    { id: 15, title: "Mushroom Risotto", image: "https://spoonacular.com/recipeImages/716340-312x231.jpg" },
    { id: 16, title: "Teriyaki Chicken", image: "https://spoonacular.com/recipeImages/715543-312x231.jpg" },
    { id: 17, title: "Eggplant Parmesan", image: "https://spoonacular.com/recipeImages/715497-312x231.jpg" },
    { id: 18, title: "Greek Yogurt Parfait", image: "https://spoonacular.com/recipeImages/715424-312x231.jpg" },
    { id: 19, title: "Fish Tacos", image: "https://spoonacular.com/recipeImages/715528-312x231.jpg" },
    { id: 20, title: "BBQ Ribs", image: "https://spoonacular.com/recipeImages/716298-312x231.jpg" }
];

export default function Recipes({ favorites = false }) {
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        if (favorites) {
            const saved = JSON.parse(localStorage.getItem('favorites')) || [];
            const filtered = mockRecipes.filter(recipe => saved.includes(recipe.id));
            setFilteredRecipes(filtered);
        } else {
            setFilteredRecipes(mockRecipes);
        }
    }, [favorites]);

    return (
        <div className='recipes'>
            <h1>{favorites ? 'Favorites' : 'Recipes'}</h1>
            <main>
                {filteredRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} id={recipe.id} image={recipe.image} title={recipe.title} />
                ))}
            </main>
        </div>
    );
}