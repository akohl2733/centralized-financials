import styles from "./styles.module.css"
import MyChart from "../components/MainChart";

export default function Financials(){
    return (
        <div className={styles.container}>
            <div>Daily Financial Chart</div>
            <MyChart />
        </div>  
    )
}