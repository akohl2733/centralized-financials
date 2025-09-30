'use client';
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function StockForm() {
    const [daily, setDaily] = useState<number | null>(null);
    const [result, setResult] = useState<string | null>(null);
     

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("This is from the form", e);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const ticker = (formData.get("ticker") as string).toUpperCase();
        const amount = Number(formData.get('amount'));;
        

        try {
            const res = await fetch(`http://localhost:5000/api/stock/${ticker}`)
            const data = await res.json();
            console.log(data);

            const entries = Object.entries(data["Time Series (Daily)"]);
            const [ date, values ] = entries[0];
            const close = Number((values as { [key: string]: string})["4. close"]);

            console.log("Close price", close);

            setDaily(close);

            const totalPrice = (close * amount).toFixed(2);
            const stringifiedTotalPrice = "$" + totalPrice.toString();
            setResult(stringifiedTotalPrice);
        } catch (err) {
            console.error("Fetch error: ", err);
        }
    }

    return (
        <div className={styles.FormFields}>
            <form method="post" onSubmit={handleSubmit}>
                <input 
                    className={styles.InputBox} 
                    name="ticker" 
                    placeholder='Stock/ETF Ticker'>
                </input>
                <input 
                    className={styles.InputBox} 
                    name="amount" 
                    placeholder='Please enter amount of shares'>
                </input>
                <button className={styles.SubmitButton} type="submit">
                    Submit Amount
                </button>
            </form>
            <div>{result}</div>
        </div>
        
    )
}