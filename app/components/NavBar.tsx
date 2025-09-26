import styles from './styles.module.css';

export default function NavBar(){
    return (
        <nav className={styles.navigator}>
            <div className={styles.title}>
                Central Financials
            </div>
                <ul className={styles.navList}>
                    <li>Financial</li>
                    <li>Stocks</li>
                    <li>Bank Accounts</li>
                </ul>
        </nav>
    )
}