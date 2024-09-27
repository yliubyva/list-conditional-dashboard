import PropTypes from "prop-types";
import styles from "./ItemPendingReviews.module.css";
import { Avatar } from "../../../Shared/Avatar/Avatar";

export const ItemPendingReviews = ({ image, text }) => {
    return (
        <li className={styles.item}>
            <Avatar src={image} />

            <div className={styles.textContainer}>
                <svg className={styles.icon}><use xlinkHref="#star"></use></svg>
                <span className={styles.text}>{text}</span>
            </div>
        </li>
    )
}

ItemPendingReviews.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}