import './style.css'
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export default function Macro() {
    return (
        <div className='macro'>
            <h1>Progress</h1>
            <h1>75%</h1>
            <p>Goal completion</p>

            <PieChart width={250} height={250}>
                <Pie
                    data={data}
                    cx={120}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>

            <div className='progress'>
                <p>Carbohydrates</p>
                <h1>300/500</h1>
            </div>
            <div className='progress'>
                <p>Proteins</p>
                <h1>300/500</h1>
            </div>
            <div className='progress'>
                <p>Fats</p>
                <h1>400/500</h1>
            </div>

        </div>
    )
}