import './style.css'
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export default function Sleep() {
    return (
        <div className='sleep'>
            <p>Sleep tracking</p>


            <BarChart width={300} height={100} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>


            <div className='profile'>
                <a href="/">Keep up the good work!</a>
            </div>

        </div>
    )
}