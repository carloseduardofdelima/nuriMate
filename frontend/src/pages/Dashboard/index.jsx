import Macro from '../../components/Macro'
import Sleep from '../../components/Sleep'
import './style.css'

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <Macro />
            <div className='middle'>
                <Sleep />
                <Sleep />
            </div>

            <Macro />
        </div>
    )
}