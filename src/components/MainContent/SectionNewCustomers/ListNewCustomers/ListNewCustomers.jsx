import { newCustomers } from "../../../../data/newCustomers";
import { ItemNewCustomers } from "../ItemNewCustomers/ItemNewCustomers";
import styles from "./ListNewCustomers.module.css";

export const ListNewCustomers = () => {
    return (
        <ul className={styles.list}>
            {[...newCustomers]
                .map((customer) => (
                <ItemNewCustomers 
                    key={customer.id}
                    image={customer.image}
                    fullName={customer.fullName}
                />
            ))}
        </ul>
    )
}