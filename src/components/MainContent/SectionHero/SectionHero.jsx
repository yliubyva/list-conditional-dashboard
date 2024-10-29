import styles from "./SectionHero.module.css";

export const SectionHero = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.imageContainer}>
                    <img src="/public/hero.webp" alt="image" className={styles.image} />
                </div>

                <div className={styles.content}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>Welcome to react-admin demo</h1>
                        <p className={styles.description}>This is the admin of an imaginary poster shop. Fell free to explore and modity the data - it's local to your computer, and will reset each time you reload.</p>
                    </div>
                    <div className={styles.btnContainer}>
                        <a href="" className={styles.link}>
                            <svg className={styles.icon}><use xlinkHref="#home"></use></svg>
                            <span>REACT-ADMIN SITE</span>
                        </a>
                        <a href="" className={styles.link}>
                            <svg className={styles.icon}><use xlinkHref="#arrow"></use></svg>
                            <span>SOURCE FOR THIS DEMO</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}