import './style.css'
import { MdOutlineSpaceDashboard, MdBookmarkBorder, MdOutlineShoppingBasket, MdOutlineCalendarToday } from "react-icons/md";
import { PiBowlFood } from "react-icons/pi";
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <aside>
            <p>Menu</p>
            <ul>
                <Link to="dashboard"><li><MdOutlineSpaceDashboard /> Dashboard</li></Link>
                <Link to="recipes"><li><PiBowlFood /> Recipes</li></Link>
                <Link to="saved"><li><MdBookmarkBorder /> Saved recipes</li></Link>
                <Link to="calendar"><li><MdOutlineCalendarToday /> Weekly prep</li></Link>
            </ul>
        </aside >
    )
}