import { ListPendingOrders } from "./ListPendingOrders/ListPendingOrders";
import styles from "./SectionPendingOrders.module.css";

export const SectionPendingOrders = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Pending Orders</h2>
                <ListPendingOrders />
            </div>
        </section>
    )
}