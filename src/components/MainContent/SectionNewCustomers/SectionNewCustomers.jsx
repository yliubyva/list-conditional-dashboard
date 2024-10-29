import { BlockInfo } from "../../Shared/BlockInfo";
import { ListNewCustomers } from "./ListNewCustomers/ListNewCustomers";
import { newCustomers } from "../../../data/newCustomers";
import styles from "./SectionNewCustomers.module.css";


export const SectionNewCustomers = () => {
    const customersCount = newCustomers.length;

    return (
        <section className={styles.container}>
            <BlockInfo icon="add-account" title="New Customers" count={customersCount} backgroundColor="#40A846">
                <div className={styles.divider}></div>
                <ListNewCustomers />
            </BlockInfo>
        </section>
    )
}