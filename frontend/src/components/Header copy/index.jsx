import './style.css'
import { MdOutlineSpaceDashboard, MdBookmarkBorder, MdOutlineShoppingBasket, MdOutlineCalendarToday } from "react-icons/md";
import { PiBowlFood } from "react-icons/pi";
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <aside>
            <p>Menu</p>
            <ul>
                <li><MdOutlineSpaceDashboard /> Dashboard</li>
                <Link to="recipes"><li><PiBowlFood /> Recipes</li></Link>
                <Link to="saved"><li><MdBookmarkBorder /> Saved recipes</li></Link>
                <li><MdOutlineCalendarToday /> Weekly prep</li>
                <li><MdOutlineShoppingBasket /> Grocery list</li>
            </ul>
        </aside>
    )
}