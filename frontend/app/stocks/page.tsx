'use client';
import { useEffect, useState } from "react";
import axios from "axios";


export default function StockPage() {
    const [daily, setDaily] = useState('no data fetched');

    useEffect(() => {
    fetch(`http://localhost:5000/api/stock/VOO`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            const close = (data["Time Series (Daily)"]["2025-09-26"]["4. close"]);
            console.log(close);
            setDaily(close);
        })
        .catch((err) => console.error("Fetch error:", err));
    }, []);

    return (
        <>
            <div>This page is working properly</div>
            <div>{daily}</div>
        </>
    );
}