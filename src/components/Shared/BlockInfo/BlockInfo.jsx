import PropTypes from "prop-types";
import styles from "./BlockInfo.module.css";

export const BlockInfo = ({ icon, title, count, backgroundColor, children, hasExtraElement }) => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <div className={styles.blockIcon} style={{ backgroundColor }}>
                    <svg className={styles.icon}><use xlinkHref={`#${icon}`}></use></svg>
                </div>
                <div className={styles.textContainer}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.count}>
                        {count}
                        {hasExtraElement && <span> $</span>}
                    </p>
                </div>
            </div>
            {children}
        </div>
    )
}

BlockInfo.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    hasExtraElement: PropTypes.bool,
    children: PropTypes.node,
}