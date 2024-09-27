import styles from "./Header.module.css"

export const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <svg className={styles.icon}>
                    <use xlinkHref="#menu"></use>
                </svg>
                <a href="#">
                    <p>Posters Galore</p>
                </a>
                <div className={styles.iconContainer}>
                    <svg className={styles.icon}>
                        <use xlinkHref="#refresh"></use>
                    </svg>
                    <svg className={styles.icon}>
                        <use xlinkHref="#account"></use>
                    </svg>
                </div>
            </div>
        </header>
    )
}