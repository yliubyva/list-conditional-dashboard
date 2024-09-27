import PropTypes from "prop-types";
import styles from "./ItemNewCustomers.module.css";
import { Avatar } from "../../../Shared/Avatar/Avatar";

export const ItemNewCustomers = ({ image, fullName }) => {
    return (
        <li className={styles.item}>
            <Avatar src={image} />

            <span className={styles.name}>{fullName}</span>
        </li>
    )
}

ItemNewCustomers.propTypes = {
    image: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
}