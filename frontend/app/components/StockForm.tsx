'use client';
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function StockForm() {
    function handleSubmit(e: any) {
        const [daily, setDaily] = useState(0);
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJSON = Object.fromEntries(formData.entries());
        console.log(formJSON);

        const amount = +formJSON.amount;

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

        const result = daily * amount;

        return (
            <div>
                {daily}
            </div>
        )
    }

    return (
        <div className={styles.FormFields}>
            <form method="post" onSubmit={handleSubmit}>
                <input className={styles.InputBox} name="ticker" defaultValue='Stock/ETF Ticker'></input>
                <input className={styles.InputBox} name="amount" defaultValue='Please enter amount of shares'></input>
                <button className={styles.SubmitButton} type="submit">Submit Amount</button>
            </form>
        </div>
        
    )
}