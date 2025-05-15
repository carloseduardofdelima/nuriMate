import './style.css'
import { LuTimer } from "react-icons/lu";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";

import { useState, useEffect } from 'react';

export default function RecipeCard({ id, image, title, time, tags = [] }) {
    const [isFavorited, setIsFavorited] = useState(false);

    // Verifica se já está salvo no localStorage
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorited(saved.includes(id));
    }, [id]);

    const toggleFavorite = () => {
        const saved = JSON.parse(localStorage.getItem('favorites')) || [];
        let updated;

        if (saved.includes(id)) {
            updated = saved.filter(favId => favId !== id);
            setIsFavorited(false);
        } else {
            updated = [...saved, id];
            setIsFavorited(true);
        }

        localStorage.setItem('favorites', JSON.stringify(updated));
    };


    return (
        <div className='recipeCard'>
            <img src={image} alt="" />
            <div className='time'><LuTimer /> {time}min</div>
            <div className="tags">
                {tags.map((tag, index) => (
                    <p key={index} className='recipeTag'>{tag}</p>
                )).slice(0,3)}
            </div>
            <p className='recipeTitle'>{title}</p>
            <button onClick={toggleFavorite} className="bookmark">
                {isFavorited ? <GoBookmarkFill size={20} /> : <GoBookmark size={20} />}
            </button>

        </div>
    )
}

