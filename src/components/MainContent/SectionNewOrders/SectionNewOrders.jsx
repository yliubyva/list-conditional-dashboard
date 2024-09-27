import { BlockInfo } from "../../Shared/BlockInfo";
import styles from "./SectionNewOrders.module.css";


export const SectionNewOrders = () => {
    return (
        <section className={styles.container}>
            <BlockInfo
                icon="shopping-cart"
                title="New Orders"
                count={12}
                backgroundColor="#F58A32"
            />
        </section>
    )
}