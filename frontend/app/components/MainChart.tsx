'use client';

import styles from "./styles.module.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ReferenceArea } from "recharts";

const data = [
    { week: "Week 1", balance: 165000},
    { week: "Week 2", balance: 167500},
    { week: "Week 3", balance: 170000},
    { week: "Week 4", balance: 172500},
];

function MyChart(){
    return (
        <div style={{ background: "#f3f4f625", padding: "1rem", borderRadius: "8px", marginTop: "35px", }}>
            <LineChart className={styles.MainChart} width={1500} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    tick={{ fill: "#ffffff", fontSize: 18, fontWeight: 600 }}
                    dataKey="week" 
                />
                <YAxis 
                    tick={{ fill: "#ffffff", fontSize: 18, fontWeight: 600 }} 
                    width={125} 
                    domain={['dataMin-5000', 'dataMax + 5000']}
                    tickFormatter={(value) => value.toLocaleString()} 
                />
                <Tooltip formatter={(value) => value.toLocaleString()} />                               
                <Line type='monotone' dataKey="balance" stroke="#18ce54ff" strokeWidth={2} />
                <Legend />
            </LineChart>
        </div>
    )
};

export default MyChart;