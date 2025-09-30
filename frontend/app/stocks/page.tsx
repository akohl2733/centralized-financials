'use client';
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import StockForm from "../components/StockForm";


export default function StockPage() {

    return (
        <div className={styles.container}>
            <div>Enter Ticker and Amount</div>
            <div className={styles.InputFields}>
                <StockForm />
            </div>
        </div>
    );
}