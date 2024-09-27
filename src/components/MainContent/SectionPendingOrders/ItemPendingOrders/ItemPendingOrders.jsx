import PropTypes from "prop-types";
import { Avatar } from "../../../Shared/Avatar/Avatar";
import styles from "./ItemPendingOrders.module.css";

export const ItemPendingOrders = ({ image, date, name, itemQuantity, totalCost }) => {
    return (
        <li className={styles.item}>
            <Avatar src={image} />

            <div className={styles.orderSummary}>
                <div className={styles.orderDetails}>
                    <p className={styles.date}>{date}</p>
                    <div className={styles.customerInfo}>
                        <span className={styles.name}>by {name}</span>
                        <span className={styles.itemQuantity}>{itemQuantity}</span>
                    </div>
                </div>
                <span className={styles.totalCost}>{totalCost}$</span>
            </div>
        </li>
    )
}

ItemPendingOrders.propTypes = {
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    itemQuantity: PropTypes.string.isRequired,
    totalCost: PropTypes.number.isRequired,
}