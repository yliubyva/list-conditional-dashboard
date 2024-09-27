import PropTypes from "prop-types";
import styles from "./ItemPendingReviews.module.css";
import { Avatar } from "../../../Shared/Avatar/Avatar";

export const ItemPendingReviews = ({ image, text }) => {
    const maxLength = 50; 
    const trimmedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

    return (
        <li className={styles.item}>
            <Avatar src={image} />

            <div className={styles.textContainer}>
                <svg className={styles.icon}><use xlinkHref="#star"></use></svg>
                <span className={styles.text}>{trimmedText}</span>
            </div>
        </li>
    )
}

ItemPendingReviews.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}