import './style.css'
import { CgProfile } from "react-icons/cg";

export default function Header() {
    return (
        <header>
            <h1>NutriMate</h1>
            <div className='profile'>
                <a href="/">Welcome, Carlos!</a>
                <CgProfile size={30} />
            </div>

        </header>
    )
}