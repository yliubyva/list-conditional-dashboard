import styles from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <li>
                    <a href="" className={styles.link}>
                        <svg className={styles.icon}><use xlinkHref="#dataset"></use></svg>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="" className={styles.link}>
                        <svg className={styles.icon}><use xlinkHref="#dollar"></use></svg>
                        <span>Sales</span>
                    </a>
                </li>
                <li>
                    <a href="" className={styles.link}>
                        <svg className={styles.icon}><use xlinkHref="#library"></use></svg>
                        <span>Catalog</span>
                    </a>
                </li>
                <li>
                    <a href="" className={styles.link}>
                        <svg className={styles.icon}><use xlinkHref="#group-people"></use></svg>
                        <span>Customers</span>
                    </a>
                </li>
                <li>
                    <a href="" className={styles.link}>
                        <svg className={styles.icon}><use xlinkHref="#message"></use></svg>
                        <span>Reviews</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}