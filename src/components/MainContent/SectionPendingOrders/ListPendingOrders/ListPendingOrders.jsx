import { pendingOrders } from "../../../../data/pendingOrders";
import { ItemPendingOrders } from "../ItemPendingOrders/ItemPendingOrders";
import styles from "./ListPendingOrders.module.css";

export const ListPendingOrders = () => {
    return (
        <ul className={styles.list}>
            {[...pendingOrders]
                .map((order) => (
                    <ItemPendingOrders
                        key={order.id}
                        image={order.image}
                        date={order.date}
                        name={order.customerName}
                        itemQuantity={order.itemQuantity}
                        totalCost={order.totalCost}
                    />
                ))
            }
        </ul>
    )
}